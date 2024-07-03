// Login Daten
export type LoginData = {
    id: number;
    username: string;
    password: string;
};

// User Daten
export type User = {
    id: number;
    name: string;
    gender: 'male'|'female'|'other';
    age: number;
    height: number;
    weight: number;
    ethnicity: Ethnicity; 
    expierence: 'Beginner'|'Intermediate'|'Expert';
    gymName: string;
    goal: number;
    avatarUrl: string;
    progress: Progress;
    level: number; 
    levelbar: number; 
    workouts: Workout[]; 
    trainingsHistory: TrainingSession[];       // trainings history
    achievements: Achievement[];
    friends: User[];
}

export enum Ethnicity {
    Asian = "Asian",
    Black = "Black",
    Hispanic = "Hispanic",
    White = "White",
    NativeAmerican = "Native American",
    Other = "Other"
}

export type Progress = {
    endurance: number;
    consistency: number;
    strength: number;
}

// Training Daten
export type TrainingSession = {
    date: Date;
    start: Date;
    end: Date;
    duration: number;
    //training: Workout["name"];
    training: Workout;         
    difficulty: number;
}

export function getSessionsByDifficulty(sessions: TrainingSession[], difficulty: number): TrainingSession[] {
    return sessions.filter(session => session.difficulty === difficulty);
}

export type Workout = {
    id: number;
    name: string;
    category: string;
    exercises: Exercise[];
}

export function getName(workout: Workout): string {
    return workout.name;
}

export function getId(workout: Workout): number {
    return workout.id;
}

// Übung Daten
export type Exercise = {
    name: string;
    muscleGroup: string;
    synonyms: string[];
    imageUrl: string;
    videoUrl: string;
    description: string;
    sets: number;
    repetitions: number;
    weight: number;
}

export function getExerciseName(exercise: Exercise): string {
    return exercise.name;
}

// Übung in Datenbank
type ExerciseDatabase = {
    name: string;
    muscleGroup: string;
    synonyms: string[];
    imageUrl: string;
    videoUrl: string;
    description: string;
}

// Achievement Daten
export type Achievement = {
    name: string;
    description: string;
    dateAchieved: Date;
}