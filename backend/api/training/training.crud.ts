import { addTrainingDuration, addTrainingVolume, addXp } from 'backend/api/lvl/lvl.crud.ts'
import { IExercise, ITrainingSession, IWorkout } from './training.interface.ts'
import { exercises, workouts } from 'backend/api/training/training.data.ts'

const trainings = eternalVar('trainings') ?? $$({} as Record<string, ITrainingSession[]>)

/**
 * Retrieves all exercises.
 *
 * @returns {IExercise[]} A list of all exercises.
 */
export function getExercises() {
  return exercises
}

/**
 * Retrieves all workouts.
 *
 * @returns {IWorkout[]} A list of all workouts.
 */
export function getWorkouts() {
  return workouts
}

/**
 * Retrieves a workout by its ID.
 *
 * @param id - The ID of the workout.
 * @returns {IWorkout | undefined} The workout with the given ID or undefined if not found.
 */
export function getWorkoutById(id: string) {
  return workouts.find((workout) => workout.id === id)
}

/**
 * Creates a new workout by pushing in workouts.
 *
 * @returns {string} The ID of the newly created workout.
 */
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

/**
 * Updates an existing workout.
 *
 * @param workoutId - The ID of the workout to update.
 * @param name - The new name of the workout.
 * @param category - The new category of the workout.
 * @returns {IWorkout} The updated workout.
 * @throws {Error} If the workout is not found.
 */
export function updateWorkout(workoutId: string, name: string, category: string) {
  const workout = workouts.find((workout) => workout.id === workoutId)
  if (!workout) {
    throw new Error('Workout not found')
  }

  workout.name = name
  workout.category = category

  return workout
}

/**
 * Adds exercises to a workout.
 *
 * @param workoutId - The ID of the workout.
 * @param newExercises - The exercises to add.
 * @throws {Error} If the workout is not found.
 */
export function addExercisesToWorkout(workoutId: string, newExercises: IExercise[]) {
  const workout = workouts.find((workout) => workout.id === workoutId)
  if (!workout) {
    throw new Error('Workout not found')
  }

  workout.exercises.push(...newExercises)
}

/**
 * Deletes a workout by its ID.
 *
 * @param id - The ID of the workout to delete.
 * @throws {Error} If the workout is not found.
 */
export function deleteWorkout(id: string) {
  const index = workouts.findIndex((workout) => workout.id === id)
  if (index === -1) {
    throw new Error('Workout not found')
  }

  workouts.splice(index, 1)
}

/**
 * Deletes an exercise from a workout.
 *
 * @param workoutId - The ID of the workout.
 * @param exerciseName - The name of the exercise to delete.
 * @throws {Error} If the workout or exercise is not found.
 */
export function deleteExerciseFromWorkout(workoutId: string, exerciseName: string) {
  const workout = workouts.find((workout) => workout.id === workoutId)
  if (!workout) {
    throw new Error('Workout not found')
  }

  const exerciseIndex = workout.exercises.findIndex((exercise) => exercise.name === exerciseName)
  if (exerciseIndex === -1) {
    throw new Error('Exercise not found')
  }

  workout.exercises.splice(exerciseIndex, 1)
}

/**
 * Creates a new training session for a workout.
 *
 * @param workout - The workout for the session.
 * @returns {string} The ID of the newly created session.
 */
export function createSession(workout: IWorkout) {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating workout database entry for ${user}.`)

  if (!trainings[user]) {
    trainings[user] = []
  }

  const sessionId = crypto.randomUUID()

  trainings[user].push({
    id: sessionId,
    start: new Date(),
    end: undefined,
    duration: undefined,
    training: workout,
    difficulty: undefined,
  })

  return sessionId
}

/**
 * Updates an existing training session.
 *
 * @param id - The ID of the session to update.
 * @param data - The data to update in the session.
 * @returns {ITrainingSession} The updated session.
 * @throws {Error} If the session is not found.
 */
export function updateSession(id: string, data: Partial<ITrainingSession>) {
  const user = datex.meta.caller.main.toString()
  console.log(`Updating database entry for ${user}.`)

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

/**
 * Updates a specific set in a workout.
 *
 * @param workoutId - The ID of the workout.
 * @param exerciseName - The name of the exercise.
 * @param setNumber - The index of the set to update.
 * @param field - The field to update ('repetitions' or 'weight').
 * @param value - The new value for the field.
 * @throws {Error} If the workout or exercise is not found.
 */
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

/**
 * Updates reps and weight in specific set in a training session.
 *
 * @param sessionId - The ID of the session.
 * @param exerciseName - The name of the exercise.
 * @param setIndex - The index of the set to update.
 * @param field - The field to update ('repetitions' or 'weight').
 * @param value - The new value for the field.
 * @throws {Error} If the session or exercise is not found.
 */
export function updateSetOfSession(sessionId: string, exerciseName: string, setIndex: number, field: 'repetitions' | 'weight', value: number) {
  const user = datex.meta.caller.main.toString()
  console.log(`Updating database entry for ${user}.`)

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

/**
 * Retrieves all training sessions for the current user.
 *
 * @returns {ITrainingSession[]} A list of all training sessions for the current user.
 */
export function getTrainings() {
  const user = datex.meta.caller.main.toString()

  if (!trainings[user]) {
    trainings[user] = []
  }

  return trainings[user]
}

/**
 * Retrieves a training session by its ID.
 *
 * @param id - The ID of the training session.
 * @returns {ITrainingSession | undefined} The training session with the given ID or undefined if not found.
 */
export function getTrainingById(id: string) {
  const user = datex.meta.caller.main.toString()

  if (!trainings[user]) {
    trainings[user] = []
  }

  return trainings[user].find((training) => training.id === id)
}
