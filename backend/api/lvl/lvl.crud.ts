import { ILvl } from './lvl.interface.ts'

const lvls = eternalVar('lvls') ?? $$({} as Record<string, ILvl>)

/**
 * Creates a new level entry for the current user.
 * 
 * @returns {ILvl} The newly created level entry.
 */
export function createLvl() {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating database entry for ${user}.`)
  lvls[user] = {
    trainingVolume: 0,
    trainingDuration: 0,
    xp: 0,
  }

  return lvls[user]
}

/**
 * Adds training volume to the current user's level entry.
 * 
 * @param trainingVolume - The amount of training volume to add.
 */
export function addTrainingVolume(trainingVolume: number) {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  console.log(`Adding ${trainingVolume} training volume to ${user}.`)

  lvls[user].trainingVolume += trainingVolume
}

/**
 * Adds training duration to the current user's level entry.
 * 
 * @param trainingDuration - The amount of training duration to add.
 */
export function addTrainingDuration(trainingDuration: number) {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  console.log(`Adding ${trainingDuration} training duration to ${user}.`)

  lvls[user].trainingDuration += trainingDuration
}

/**
 * Adds experience points (XP) to the current user's level entry.
 * 
 * @param xp - The amount of XP to add.
 */
export function addXp(xp: number) {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  console.log(`Adding ${xp} xp to ${user}.`)

  lvls[user].xp += xp
}

/**
 * Retrieves the training volume of the current user.
 * 
 * @returns {number} The training volume of the current user.
 */
export function getTrainingVolume() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  return lvls[user].trainingVolume
}

/**
 * Retrieves the training duration of the current user.
 * 
 * @returns {number} The training duration of the current user.
 */
export function getTrainingDuration() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  return lvls[user].trainingDuration
}

/**
 * Retrieves the training consistency.
 * 
 * @returns {number} A fixed value representing training consistency.
 */
export function getTrainingConsistency() {
  return 10
}

/**
 * Retrieves the XP of the current user.
 * 
 * @returns {number} The XP of the current user.
 */
export function getXp() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  return lvls[user].xp
}

/**
 * Retrieves the XP statistics of the current user.
 * 
 * @returns {Object} An object containing the XP level, progress, next level XP, current XP, and used XP of the user.
 */
export function getXpStats() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  let level = 1
  let requiredXp = 4000
  let currentXp = lvls[user].xp
  let usedXp = 0

  while (currentXp >= requiredXp) {
    currentXp -= requiredXp
    usedXp += requiredXp
    level++
    requiredXp = Math.round(requiredXp * 1.2)
  }

  const progress = Math.floor((currentXp / requiredXp) * 100)
  const remainingXp = requiredXp - currentXp

  return {
    level, // The current XP level of the user
    progress, // The progress towards the next XP level in percentage
    nextLevelXp: remainingXp, // The XP needed to reach the next XP level
    currentXp: lvls[user].xp, // The total XP the user currently has
    usedXp, // The XP already used to achieve the current level
  }
}

/**
 * Retrieves the strength statistics of the current user.
 * 
 * @returns {Object} An object containing the strength level, progress, next level volume, current volume, and used volume of the user.
 */
export function getStrengthStats() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  let level = 1
  let requiredVolume = 4000
  let currentVolume = lvls[user].trainingVolume
  let usedVolume = 0

  while (currentVolume >= requiredVolume) {
    currentVolume -= requiredVolume
    usedVolume += requiredVolume
    level++
    requiredVolume = Math.round(requiredVolume * 1.2)
  }

  const progress = Math.floor((currentVolume / requiredVolume) * 100)
  const remainingVolume = requiredVolume - currentVolume

  return {
    level,
    progress,
    nextLevelVolume: remainingVolume,
    currentVolume: lvls[user].trainingVolume,
    usedVolume,
  }
}

/**
 * Retrieves the endurance statistics of the current user.
 * 
 * @returns {Object} An object containing the endurance level, progress, next level duration, current duration, and used duration of the user.
 */
export function getEnduranceStats() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  let level = 1
  let requiredDuration = 6000
  let currentDuration = lvls[user].trainingDuration
  let usedDuration = 0

  while (currentDuration >= requiredDuration) {
    currentDuration -= requiredDuration
    usedDuration += requiredDuration
    level++
    requiredDuration = Math.round(requiredDuration * 1.2)
  }

  const progress = Math.floor((currentDuration / requiredDuration) * 100)
  const remainingDuration = requiredDuration - currentDuration

  return {
    level, // The current endurance level of the user
    progress, // The progress towards the next endurance level in percentage
    nextLevelDuration: remainingDuration, // The duration needed to reach the next endurance level
    currentDuration: lvls[user].trainingDuration, // The total training duration the user currently has
    usedDuration, // The duration already used to achieve the current level
  }
}