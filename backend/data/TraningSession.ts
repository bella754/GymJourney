class TrainingSession {
    private timerId: NodeJS.Timeout | null = null;
    private readonly maxDuration = 2.5 * 60 * 60 * 1000; // 2.5 Stunden in Millisekunden
    private startTime: number | null = null;
    private endTime: number | null = null;

    constructor(private workout: Workout) {}

    start() {
        console.log(`Starting workout: ${this.workout.name}`);
        this.startTime = Date.now();
        this.timerId = setTimeout(() => {
            this.end();
            console.log("Workout automatically ended after 2.5 hours.");
        }, this.maxDuration);
    }

    end() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        this.endTime = Date.now();
        const duration = this.endTime - this.startTime;
        console.log(`Workout ended manually. Total duration: ${duration / (1000 * 60)} minutes`);
    }
}

function createTrainingSession(workouts: Workout[], workoutName: string): TrainingSession | null {
    const workout = workouts.find(w => w.name === workoutName);
    if (workout) {
        const session = new TrainingSession(workout);
        session.start();
        return session;
    } else {
        console.log(`Workout with name "${workoutName}" not found.`);
        return null;
    }
}
