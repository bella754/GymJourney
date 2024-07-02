import { Datex } from "unyt_core/mod.ts";
//Datex.Runtime.OPTIONS.PROTECT_POINTERS = true; // Privatize pointers to their users

interface IUser {
    name: string,
    gender: 'm' | 'f' | 'd' | 'not specified',
    age: number,
    height: number,
    weight: number,
    ethnicity: "Asian" | "Black" | "Hispanic" | "White" | "Native American" | "Other" |'not specified',
    experience: "beginner" | "intermediate" | "advanced" | "expert" | "not specified",
    gym: string,
    //avatarUrl: string
};

const users = $$({} as Record<string, IUser[]>);

// create
export function createUser() {
    const user = datex.meta.caller.main.toString();
    console.log(`Creating databse entry for ${user}.`);
    users[user] = [{
        name: "Anonymous",
        gender: "not specified",
        age: 0,
        height: 0,
        weight: 0,
        ethnicity: 'not specified', 
        experience: "not specified",
        gym: "not specified"
    }];

    return users[user]
}

// read
export function getUser() {
	const user = datex.meta.caller.main.toString();

	if (!(user in users)) {
		return createUser(); 
	}

    return users[user]
}

// update
export function updateUser(data: Partial<IUser>) {
    const user = datex.meta.caller.main.toString();
    console.log(`Updating databse entry for ${user}.`);
    users[user] = users[user].map(u => ({...u, ...data}));
    return users[user];
}