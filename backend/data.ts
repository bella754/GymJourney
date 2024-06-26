import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";
import { LoginData } from "../backend/userManagement.ts";

/**
 * Version information on the backend
 */
export const denoVersion = Deno.version.deno;
export const datexVersion = Datex.Runtime.VERSION;
export const uixVersion = UIX.version;

/*
	Vordefinierte Objekte für Test- und Demonstrationszwecke
*/


//////////////////////////////////
// Alle Daten in ein Objekt?
//////////////////////////////////
export const loginData: LoginData[] = eternal ?? $$([
    {
      id: 1,
      user: "Alice123",
      password: "Password123",
    },
    {
      id: 2,
      user: "Bob456",
      password: "SecurePwd123",
    },
    {
      id: 3,
      user: "Charlie789",
      password: "PwdSecure123",
    },
]);

export const userData = eternal ?? $$([    // type user
  {
    id: 1,
    name: "Alice Mustermann",
    gender: "female",
    age: 20,
    height: 173,
    weight: 60,
    ethnicity: "Asian",
    experience: "Beginner",
    gymName: "FitX",
    avatarUrl: "",
    progress: "",
    level: 1,
    levelbar: 0,
    workouts: [{
                name: "PPL",
                exercises: [
                  {
                    name: "bench press",
                    muscleGroup: "chest",
                    synonyms: "",
                    imageUrl: "",
                    videoUrl: "",
                    description: "...",
                    sets: 3,
                    repetitions: 10,
                    weight: 25,
                  },
                  {
                    name: "Lat pull down",
                    muscleGroup: "back",
                    synonyms: "",
                    imageUrl: "",
                    videoUrl: "",
                    description: "...",
                    sets: 3,
                    repetitions: 10,
                    weight: 50,
                  },
                  {
                    name: "glute bridges",
                    muscleGroup: "legs",
                    synonyms: "",
                    imageUrl: "",
                    videoUrl: "",
                    description: "...",
                    sets: 3,
                    repetitions: 10,
                    weight: 80,
                  }
                ]
    }],
    trainingsHistory: [{
                        date: "2011-10-10",
                        start: "14:48:00",   // nochmal prüfen
                        end: "16:00:00",
                        duration: "01:12",
                        training: "PPL",
                        difficulty: "easy"
    }],
    achievements: [],
    friends: []

  }
]);

export const exerciseData = eternal ?? $$([     //type exercise
    {
      name: "bench press",
      muscleGroup: "chest",
      synonyms: "",
      imageUrl: "",
      videoUrl: "",
      description: "..."
    },
    {
      name: "Lat pull down",
      muscleGroup: "back",
      synonyms: "",
      imageUrl: "",
      videoUrl: "",
      description: "..."
    },
    {
      name: "glute bridges",
      muscleGroup: "legs",
      synonyms: "",
      imageUrl: "",
      videoUrl: "",
      description: "..."
    }
]);