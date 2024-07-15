import { getTrainings } from 'backend/api/training/training.crud.ts'
import { getUser } from '../user/user.crud.ts'

export function hasProfileCreated() {
  const user = getUser()

  if (
    user.name === 'Anonymous' ||
    user.gender === 'not specified' ||
    user.age === 0 ||
    user.height === 0 ||
    user.weight === 0 ||
    user.ethnicity === 'not specified' ||
    user.experience === 'not specified' ||
    user.gym === 'not specified'
  ) {
    return false
  }

  return true
}

export function hasFirstWorkout() {
  // get trainings of user
  const trainings = getTrainings()

  if (trainings.length === 0) {
    return false
  }

  return true
}
