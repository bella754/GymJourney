import { IUser } from 'backend/api/user/user.interface.ts'

const users = eternalVar('users') ?? $$({} as Record<string, IUser>)

/**
 * Creates a new user entry.
 *
 * @returns {IUser} The newly created user entry.
 */
export function createUser() {
  const user = datex.meta.caller.main.toString()
  console.log(`Creating database entry for ${user}.`)
  users[user] = {
    name: 'Anonymous',
    gender: 'not specified',
    age: 0,
    height: 0,
    weight: 0,
    experience: 'not specified',
    gym: 'not specified',
    avatar: 'diverseLightAverage',
  }

  return users[user]
}

/**
 * Retrieves the current user's information.
 *
 * @returns {IUser} The current user's information.
 */
export function getUser() {
  const user = datex.meta.caller.main.toString()

  if (!(user in users)) {
    return createUser()
  }

  return users[user]
}

/**
 * Retrieves all users.
 *
 * @returns {Record<string, IUser>} A record of all users.
 */
export function getUsers() {
  return users
}

/**
 * Updates the current user's information.
 *
 * @param data - The data to update in the user's entry.
 * @returns {IUser} The updated user entry.
 */
export function updateUser(data: Partial<IUser>) {
  const user = datex.meta.caller.main.toString()
  console.log(`Updating database entry for ${user}.`)

  Object.assign(users[user], data)

  return users[user]
}
