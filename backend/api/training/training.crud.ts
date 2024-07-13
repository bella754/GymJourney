import { addTrainingDuration, addTrainingVolume, addXp } from 'backend/api/lvl/lvl.crud.ts'
import { IExercise, ITrainingSession, IWorkout } from './training.interface.ts'
import { exercises, workouts } from 'backend/api/training/training.data.ts'

const trainings = eternalVar('trainings') ?? $$({} as Record<string, ITrainingSession[]>)

export function getExercises() {
  return exercises
}

export function getWorkouts() {
  return workouts
}

export function getWorkoutById(id: string) {
  return workouts.find((workout) => workout.id === id)
}

// create
export function createWorkout() {
  const newWorkoutId = crypto.randomUUID()

  workouts.push({
    id: newWorkoutId,
    name: '',
    category: '',
    exercises: [],
  })

  return newWorkoutId
}

export function updateWorkout(id: string, name: string, category: string) {
  const index = workouts.findIndex((workout) => workout.id === id)
  if (index === -1) {
    throw new Error('Workout not found')
  }

  workouts[index].name = name
  workouts[index].category = category

  return workouts[index]
}

export function addExercisesToWorkout(workoutId: string, newExercises: IExercise[]) {
  const workout = workouts.find((workout) => workout.id === workoutId)
  if (!workout) {
    throw new Error('Workout not found')
  }

  workout.exercises.push(...newExercises)
}

export function deleteWorkout(id: string) {
  const index = workouts.findIndex((workout) => workout.id === id)
  if (index === -1) {
    throw new Error('Workout nicht gefunden')
  }
  
  workouts.splice(index, 1)
}

export function deleteExerciseFromWorkout(workoutId: string, exerciseName: string) {
  const workout = workouts.find((workout) => workout.id === workoutId)
  if (!workout) {
    throw new Error('Workout nicht gefunden')
  }
  
  const exerciseIndex = workout.exercises.findIndex((exercise) => exercise.name === exerciseName)
  if (exerciseIndex === -1) {
    throw new Error('Übung nicht gefunden')
  }
  
  workout.exercises.splice(exerciseIndex, 1)
}

export function createSession(workout: IWorkout) {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating workout databse entry for ${user}.`)

  if (!trainings[user]) {
    trainings[user] = []
  }

  const sessionId = crypto.randomUUID()

  trainings[user].push({
    id: sessionId,
    start: new Date(),
    end: undefined,
    training: workout,
    difficulty: undefined,
  })

  return sessionId
}

// edit
export function updateSession(id: string, data: Partial<ITrainingSession>) {
  const user = datex.meta.caller.main.toString()
  console.log(`Updating databse entry for ${user}.`)

  const session = trainings[user].find((training) => training.id === id)

  if (!session) {
    throw new Error(`Session with id ${id} not found.`)
  }

  Object.assign(session, data)

  // when passing in end, update lvl stats
  if (data.end) {
    const trainingVolume = session.training.exercises.reduce((acc, exercise) => {
      return acc + exercise.sets.reduce((acc, set) => acc + set.repetitions * set.weight, 0)
    }, 0)

    const trainingDuration = Math.round((data.end.getTime() - session.start.getTime()) / 1000)

    addTrainingVolume(trainingVolume)
    addTrainingDuration(trainingDuration)
    addXp(trainingVolume)
  }

  return session
}

export function updateSet(workoutId: string, exerciseName: string, setNumber: number, field: 'repetitions' | 'weight', value: number) {
  const workout = workouts.find((workout) => workout.id === workoutId)
  if (!workout) {
    throw new Error('Workout not found')
  }

  const exercise = workout.exercises.find((exercise) => exercise.name === exerciseName)
  if (!exercise) {
    throw new Error('Exercise not found')
  }

  exercise.sets[setNumber][field] = value
}

export function updateSetOfSession(sessionId: string, exerciseName: string, setIndex: number, field: 'repetitions' | 'weight', value: number) {
  const user = datex.meta.caller.main.toString()
  console.log(`Updating databse entry for ${user}.`)

  const session = trainings[user].find((training) => training.id === sessionId)

  if (!session) {
    throw new Error(`Session with id ${sessionId} not found.`)
  }

  const exercise = session.training.exercises.find((exercise) => exercise.name === exerciseName)
  if (!exercise) {
    throw new Error('Exercise not found')
  }

  exercise.sets[setIndex][field] = value
}

// read
export function getTrainings() {
  const user = datex.meta.caller.main.toString()

  if (!trainings[user]) {
    trainings[user] = []
  }

  return trainings[user]
}

export function getTrainingById(id: string) {
  const user = datex.meta.caller.main.toString()

  if (!trainings[user]) {
    trainings[user] = []
  }

  return trainings[user].find((training) => training.id === id)
}
