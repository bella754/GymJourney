import { IUser } from 'backend/api/user/user.interface.ts'

const users = eternalVar('users') ?? $$({} as Record<string, IUser>)

// create
export function createUser() {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating databse entry for ${user}.`)
  users[user] = {
    name: 'Anonymous',
    gender: 'not specified',
    age: 0,
    height: 0,
    weight: 0,
    ethnicity: 'not specified',
    experience: 'not specified',
    gym: 'not specified',
    progress: {
      endurance: 0,
      enduranceMilestone: 100,
      consistency: 0,
      consistencyMilestone: 1, // mind. 1x die woche muss man ja gehen
      strength: 0,
      strengthMilestone: 4,
    },
    level: 1,
    xp: 0,
    xpMilestone: 100,
    workouts: [],
  }

  return users[user]
}

// read
export function getUser() {
  const user = datex.meta.caller.main.toString()

  if (!(user in users)) {
    return createUser()
  }

  return users[user]
}

export function getUsers() {
  return users
}

// update
export function updateUser(data: Partial<IUser>) {
  const user = datex.meta.caller.main.toString()
  console.log(`Updating databse entry for ${user}.`)

  Object.assign(users[user], data)

  return users[user]
}
