import { userData } from "./data.ts";


/*
hier muss exercise input bereits vom typ exercise sein
    bsp: {
            "name": "glute bridges",
            "muscleGroup": "legs",
            "synonyms": "",
            "imageUrl": "",
            "videoUrl": "",
            "description": "...",
            "sets": 3,
            "repetitions": 10,
            "weight": 80,
         }
*/

/* 
    Funktion, um Workout zu erstellen
*/

export function createWorkout(id, workoutName, exerciseArray) {
    let user = userData.find(user => user.id === id);
    user.workouts.push(
        {
            "name": workoutName,
            "exercises": exerciseArray
        }
    )
}

/* 
    Funktion, um WorkoutData zu bekommen
*/

export function getWorkouts(id) {
    return userData.find(user => user.id === id).workouts;
}

/* 
    Funktionen, um Workout zu bearbeiten
*/

export function updateWorkoutName(id, oldName, newName) {
    let user = userData.find(user => user.id === id);
    user.workouts.find(w => w.name === oldName).name = newName;
}

export function addExercises(id, workoutName, exercise) {
    let workouts = userData.find(user => user.id === id).workouts;
    workouts.find(w => w.name === workoutName).exercises.push(exercise);
}

export function deleteExercise(id, exerciseName) {
    let user = userData.find(user => user.id === id);
    let index = user.workouts.exercises.findIndex(e => e.name === exerciseName);
    user.workouts.exercises.splice(index, 1);
}


/* 
    Funktion, um Workout zu löschen
*/

export function deleteWorkout(id, workoutName) {
    let user = userData.find(user => user.id === id);
    let index = user.workouts.findIndex(w => workoutName.name === workoutName)
    user.workouts.splice(index, 1);
}

