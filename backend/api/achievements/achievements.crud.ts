import { getTrainings } from 'backend/api/training/training.crud.ts'
import { getUser } from '../user/user.crud.ts'

/**
 * Checks if the user has created a complete profile.
 * 
 * @returns {boolean} True if the profile is complete, false otherwise.
 */
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

/**
 * Checks if the user has completed their first workout.
 * 
 * @returns {boolean} True if the user has at least one training session, false otherwise.
 */
export function hasFirstWorkout() {
  // get trainings of user
  const trainings = getTrainings()

  if (trainings.length === 0) {
    return false
  }

  return true
}