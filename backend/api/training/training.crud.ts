import { Exercise } from "backend/userManagement1.ts";
import { ITrainingSession } from './training.interface.ts'

const trainings = eternalVar('trainings') ?? $$({} as Record<string, ITrainingSession[]>)

const exercises = [
  {
    name: 'Bench Press',
    muscleGroup: 'Chest',
    synonyms: ['Chest Press'],
    imageUrl: 'https://example.com/bench-press.jpg',
    videoUrl: 'https://example.com/bench-press.mp4',
    description: 'Lie on a flat bench with your feet flat on the floor.',
    sets: 3,
    repetitions: 10,
    weight: 10,
  },
  {
    name: 'Squats',
    muscleGroup: 'Legs',
    synonyms: ['Leg Squats'],
    imageUrl: 'https://example.com/squats.jpg',
    videoUrl: 'https://example.com/squats.mp4',
    description: 'Stand with your feet shoulder-width apart.',
    sets: 4,
    repetitions: 8,
    weight: 20,
  },
];

export function getExercises() {
  return exercises;
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
    date: new Date(),
    start: new Date(),
    end: new Date(),
    duration: 20,
    training: {
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
