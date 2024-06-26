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
    training: Workout;          // wollen nur den Namen von der Übung speichern  
    difficulty: number;
}

export type Workout = {
    id: number;
    name: string;
    category: string;
    exercises: Exercise[];
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