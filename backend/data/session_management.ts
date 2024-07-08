import { trainingSessions } from "./data1.ts";
import { TrainingSession, Workout } from "../userManagement1.ts";


//export function createTrainingSession(date: Date, start: Date, end: Date, training: string, difficulty: number): void {
export function createTrainingSession(date: Date, start: Date, end: Date, training: Workout, difficulty: number): void {

    const duration = (end.getTime() - start.getTime()) / 60000; // Dauer in Minuten

    const newSession: TrainingSession = {
        date,
        start,
        end,
        duration,
        //training,
        training,
        difficulty
    };

    trainingSessions.push(newSession);
}