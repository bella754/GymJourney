import { workoutData } from "./data1.ts";
import { Exercise } from "../userManagement1.ts";

// ─────────────────────────────────────────────────────────────────────
// ─── WORKOUT FUNKTIONEN ──────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────

/**
 * Funktion zur Erstellung eines neuen Workouts mit Bedingungen
 * 
 * @param inputName - Der eingegebene Name des Workouts
 * @param category - Die eingegebene Kategorie des Workouts
 */
export function createWorkout(inputName: string, category: string) {
  if (inputName.length < 3 || inputName.length > 50) {
    alert("Workout Name muss zwischen 3 und 50 Zeichen lang sein.");
    return;
  }
  if (!/^[a-zA-Z0-9\s]+$/.test(inputName)) {
    alert("Workout Name darf nur Buchstaben, Zahlen und Leerzeichen enthalten.");
    return;
  }
  if (category.length < 3 || category.length > 50) {
    alert("Kategorie muss zwischen 3 und 50 Zeichen lang sein.");
    return;
  }

  const newId = workoutData.length > 0 ? workoutData[workoutData.length - 1].id + 1 : 1;
  alert("Workout erfolgreich erstellt");
  workoutData.push({
    id: newId,
    name: inputName,
    category: category,
    exercises: []
  });
}

/**
 * Gibt den Namen eines Workouts zurück.
 * 
 * @param workoutId - Die ID des Workouts.
 * @returns {string | undefined} Der Name des Workouts oder undefined, wenn das Workout nicht gefunden wird.
 */
export function getWorkoutName(workoutId: number): string | undefined {
  const workout = workoutData.find(w => w.id === workoutId);
  return workout?.name;
}

/**
 * Gibt die ID eines Workouts zurück.
 * 
 * @param workoutName - Der Name des Workouts.
 * @returns {number | undefined} Die ID des Workouts oder undefined, wenn das Workout nicht gefunden wird.
 */
export function getWorkoutId(workoutName: string): number | undefined {
  const workout = workoutData.find(w => w.name === workoutName);
  return workout?.id;
}

/**
 * Funktion zum Löschen eines Workouts.
 * 
 * @param workoutId - Die ID des Workouts, das gelöscht werden soll.
 */
export function deleteWorkout(workoutId: number) {
  const index = workoutData.findIndex(w => w.id === workoutId);
  if (index === -1) {
    alert("Workout nicht gefunden!");
    return;
  }

  workoutData.splice(index, 1);
  alert("Workout erfolgreich gelöscht");
}

// ─────────────────────────────────────────────────────────────────────
// ─── EXERCISE FUNKTIONEN ─────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────

/**
 * Funktion zum Hinzufügen einer Übung zu einem bestehenden Workout
 * 
 * @param workoutId - Die ID des Workouts, zu dem die Übung hinzugefügt werden soll
 * @param exercise - Das Übungsobjekt, das hinzugefügt werden soll
 */
export function addExercise(workoutId: number, exercise: Exercise) {
  const workout = workoutData.find(w => w.id === workoutId);
  if (!workout) {
    alert("Workout nicht gefunden!");
    return;
  }
  workout.exercises.push(exercise);
  alert("Übung erfolgreich hinzugefügt");
}

/**
 * Funktion zum Bearbeiten einer Übung in einem bestehenden Workout
 * 
 * @param workoutId - Die ID des Workouts, in dem die Übung bearbeitet werden soll
 * @param exerciseName - Der Name der zu bearbeitenden Übung
 * @param sets - Die Anzahl der Sätze
 * @param repetitions - Die Anzahl der Wiederholungen pro Satz
 * @param weight - Das Gewicht, das verwendet wird
 */
export function editExercise(workoutId: number, exerciseName: string, sets: number, repetitions: number, weight: number) {
  const workout = workoutData.find(w => w.id === workoutId);
  if (!workout) {
    alert("Workout nicht gefunden!");
    return;
  }
  const exercise = workout.exercises.find(ex => ex.name === exerciseName);
  if (!exercise) {
    alert("Übung nicht gefunden!");
    return;
  }
  exercise.sets = sets;
  exercise.repetitions = repetitions;
  exercise.weight = weight;
  alert("Übung erfolgreich bearbeitet");
}

/**
 * Gibt den Namen einer Übung zurück.
 * 
 * @param exercise - Die Übung.
 * @returns {string} Der Name der Übung.
 */
export function getExerciseName(exercise: Exercise): string {
  return exercise.name;
}

/**
 * Gibt die Anzahl der Sätze für eine bestimmte Übung zurück.
 * 
 * @param exerciseName - Der Name der Übung.
 * @returns {number | undefined} Die Anzahl der Sätze oder undefined, wenn die Übung nicht gefunden wird.
 */
export function getSets(exerciseName: string): number | undefined {
  const exercise = workoutData.flatMap(w => w.exercises).find(ex => ex.name === exerciseName);
  return exercise?.sets;
}

/**
 * Gibt die Anzahl der Wiederholungen für eine bestimmte Übung zurück.
 * 
 * @param exerciseName - Der Name der Übung.
 * @returns {number | undefined} Die Anzahl der Wiederholungen oder undefined, wenn die Übung nicht gefunden wird.
 */
export function getRepetitions(exerciseName: string): number | undefined {
  const exercise = workoutData.flatMap(w => w.exercises).find(ex => ex.name === exerciseName);
  return exercise?.repetitions;
}

/**
 * Gibt das Gewicht für eine bestimmte Übung zurück.
 * 
 * @param exerciseName - Der Name der Übung.
 * @returns {number | undefined} Das Gewicht oder undefined, wenn die Übung nicht gefunden wird.
 */
export function getWeight(exerciseName: string): number | undefined {
  const exercise = workoutData.flatMap(w => w.exercises).find(ex => ex.name === exerciseName);
  return exercise?.weight;
}