import { ILvl } from './lvl.interface.ts'

const lvls = eternalVar('lvls') ?? $$({} as Record<string, ILvl>)

export function createLvl() {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating databse entry for ${user}.`)
  lvls[user] = {
    trainingVolume: 0,
    trainingDuration: 0,
    xp: 0,
  }

  return lvls[user]
}

export function addTrainingVolume(trainingVolume: number) {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  console.log(`Adding ${trainingVolume} training volume to ${user}.`)

  lvls[user].trainingVolume += trainingVolume
}

export function addTrainingDuration(trainingDuration: number) {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  console.log(`Adding ${trainingDuration} training duration to ${user}.`)

  lvls[user].trainingDuration += trainingDuration
}

export function addXp(xp: number) {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  console.log(`Adding ${xp} xp to ${user}.`)

  lvls[user].xp += xp
}

export function getTrainingVolume() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  return lvls[user].trainingVolume
}

export function getTrainingDuration() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  return lvls[user].trainingDuration
}

export function getTrainingConsistency() {
  return 10
}

export function getXp() {
  const user = datex.meta.caller.main.toString()

  if (!(user in lvls)) {
    createLvl()
  }

  return lvls[user].xp
}

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
