import { userdata } from "../backend/data.ts";

/*
    Funktion zur Erstellung eines neuen Workouts. 
    Anschließend werden Daten an data.ts gepusht.
*/

export function createWorkout(id, exerciseArray) {
    
}

/*
    Funktionen zur Bearbeitung eines Workouts 
    aka Übungen hinzufügen/löschen
*/

export function addExercise(id, inputExercise) {
    let user = userdata.find(user => user.id === id);
}

export function deleteExercise(id, inputExercise) {
    
}