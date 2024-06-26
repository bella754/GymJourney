function calculateTotalStrength(workout: Workout): number {
    return workout.exercises.reduce((totalStrength, exercise) => {
        const exerciseStrength = exercise.weight * exercise.repetitions * exercise.sets;
        return totalStrength + exerciseStrength;
    }, 0);
}

const totalStrength = calculateTotalStrength(workout);
console.log(`Total strength for the workout "${workout.name}" is: ${totalStrength}`);