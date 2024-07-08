import { Exercise } from 'backend/userManagement1.ts'
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
export function createExampleTraining() {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating workout databse entry for ${user}.`)

  if (!trainings[user]) {
    trainings[user] = []
  }

  trainings[user].push({
    id: crypto.randomUUID(),
    start: new Date(),
    end: new Date(),
    training: {
      id: crypto.randomUUID(),
      name: 'Push',
      category: 'My Category',
      exercises: [
        {
          name: 'My Exercise',
          muscleGroup: 'My Muscle Group',
          synonyms: ['My Synonym'],
          imageUrl: 'My Image URL',
          videoUrl: 'My Video URL',
          description: 'My Description',
          sets: 3,
          repetitions: 10,
          weight: 100,
        },
      ],
    },
    difficulty: 20,
  })
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

  return session
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

/* export function getUsers() {
  return users
} */

// update
/* export function updateUser(data: Partial<IUser>) {
  const user = datex.meta.caller.main.toString()
  console.log(`Updating databse entry for ${user}.`)

  Object.assign(users[user], data)

  return users[user]
}
 */
