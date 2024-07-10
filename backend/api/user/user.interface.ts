import { ITrainingSession, IWorkout } from '../training/training.interface.ts'

export interface IUser {
  name: string
  gender: 'm' | 'f' | 'd' | 'not specified'
  age: number
  height: number
  weight: number
  ethnicity: 'Asian' | 'Black' | 'Hispanic' | 'White' | 'Native American' | 'Other' | 'not specified'
  experience: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'not specified'
  gym: string
  progress: {
    endurance: number
    enduranceMilestone: number
    consistency: number
    consistencyMilestone: number
    strength: number
    strengthMilestone: number
  }
  level: number
  xp: number
  xpMilestone: number
  workouts: IWorkout[]
  //avatarUrl: string
}
