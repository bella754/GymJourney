import { IWorkout } from '../training/training.interface.ts'

export interface IUser {
  name: string
  gender: 'm' | 'f' | 'd' | 'not specified'
  age: number
  height: number
  weight: number
  ethnicity: 'Asian' | 'Black' | 'Hispanic' | 'White' | 'Native American' | 'Other' | 'not specified'
  experience: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'not specified'
  gym: string
  workouts: IWorkout[]
  avatar: string
}

export enum Gender {
  male = 'male',
  female = 'female',
  diverse = 'diverse',
}

export enum SkinColor {
  light = 'light',
  dark = 'dark',
}

export type Avatar = {
  name: string
  url: string
}

export type IAvatar = {
  [key in Gender]: {
    [key in SkinColor]: Avatar[]
  }
}
