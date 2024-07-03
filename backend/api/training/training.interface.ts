export interface ITrainingSession {
  id: string
  date: Date
  start: Date
  end: Date
  duration: number
  training: IWorkout
  difficulty: number
}

export interface IWorkout {
  name: string
  category: string
  exercises: IExercise[]
}

export interface IExercise {
  name: string
  muscleGroup: string
  synonyms: string[]
  imageUrl: string
  videoUrl: string
  description: string
  sets: number
  repetitions: number
  weight: number
}
