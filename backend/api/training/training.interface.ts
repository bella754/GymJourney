export interface ITrainingSession {
  id: string
  start: Date
  end: Date | undefined
  training: IWorkout
  difficulty: number | undefined
}

export interface IWorkout {
  id: string
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
