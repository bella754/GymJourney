import { ITrainingSession } from './training.interface.ts'

const trainings = eternalVar('trainings') ?? $$({} as Record<string, ITrainingSession[]>)

// create
export function createExampleTraining() {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating workout databse entry for ${user}.`)

  if (!trainings[user]) {
    trainings[user] = []
  }

  trainings[user].push({
    id: crypto.randomUUID(),
    date: new Date(),
    start: new Date(),
    end: new Date(),
    duration: 20,
    training: {
      name: 'My Name',
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
          weight: 10,
        },
      ],
    },
    difficulty: 20,
  })
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
