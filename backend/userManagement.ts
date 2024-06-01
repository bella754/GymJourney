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
    gender: string;
    age: number;
    height: number;
    weight: number;
    expierence: 'Beginner'|'Intermediate'|'Expert';
    gymName: string;
    avatarUrl: string;
    progress: Progress;
    level: number; 
    levelbar: number; 
    trainings: Training[];
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
    training: Workout;
    difficulty: number;
}

type Workout = {
    name: string
    exercises: Exercise[];
}

// Übung Daten
type Exercise = {
    name: string;
    type: string;
    synonyms: string[];
    imageUrl: string;
    videoUrl: string;
    description: string;
    sets: number;
    repetitions: number;
    weight: number;
    muscleGroup: string;
}

// Achievement Daten
type Achievement = {
    name: string;
    description: string;
    dateAchieved: Date;
}