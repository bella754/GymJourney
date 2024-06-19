// Login Daten
type LoginData = {
    username: string;
    password: string;
    profile: User;
};

// User Daten
type User = {
    id: number;
    name: string;
    gender: 'male'|'female'|'other';
    age: number;
    height: number;
    weight: number;
    expierence: 'Beginner'|'Intermediate'|'Expert';
    gymName: string;
    avatarUrl: string;
    progress: Progress;
    level: number; 
    levelbar: number; 
    workouts: Workout[]; 
    trainingsHistory: TrainingSession[];       // trainings history
    achievements: Achievement[];
    friends: User[];
    ethnicity: Ethnicity; 
}

enum Ethnicity {
    Asian = "Asian",
    Black = "Black",
    Hispanic = "Hispanic",
    White = "White",
    NativeAmerican = "Native American",
    Other = "Other"
}

type Progress = {
    endurance: number;
    consistency: number;
    strength: number;
    flexibility: number;
}

// Training Daten
type TrainingSession = {
    date: Date;
    start: Date;
    end: Date;
    duration: number;
    training: Workout;          // wollen nur den Namen von der Übung speichern  
    difficulty: number;
}

type Workout = {
    name: string
    exercises: Exercise[];
}

// Übung Daten
type Exercise = {
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
type Achievement = {
    name: string;
    description: string;
    dateAchieved: Date;
}