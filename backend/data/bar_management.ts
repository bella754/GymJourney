import { userData } from "./data1.ts";

/*
    Funktion, um Endurance nach training zu updaten 
    (Zeit, die insg schon mit Training verbracht wurde)
*/

export function updateEndurance(id) {
    let user = userData.find(user => user.id === id);
    let milestone = user.progress.enduranceMilestone
    let lastTrainingDuration = user.trainingsHistory[user.trainingsHistory.length - 1].duration;
    //console.log("duration of last training: ", lastTrainingDuration);

    user.progress.endurance += lastTrainingDuration;
    //console.log("endurance after update: ", user.progress.endurance);

    if (user.progress.endurance > milestone) {
        user.progress.enduranceMilestone *= 2;
        console.log("new milestone started", user.progress.enduranceMilestone);
    } else {
        console.log("milestone not reached");
    }

    return user.progress.endurance;
}

/*
    Funktion, um Konsistenz zu berechnen 
    wird nach jedem training aufgerufen, um consistency zu inkrementieren
*/

export function updateConsistency(id) {
    let user = userData.find(user => user.id === id);
    let milestone = user.progress.consistencyMilestone
    // console.log("consistency before: ", user.progress.consistency);
    user.progress.consistency += 1;
    // console.log("user consistency after: ", user.progress.consistency);


    if (user.progress.consistancy > milestone) {
        user.progress.consistencyMilestone *= 2;
        console.log("new milestone started", user.progress.consistencyMilestone);
    } else {
        console.log("milestone not reached");
    }

    return user.progress.consistancy;
}

/*
    Funktion, um Konsistenz zu berechnen (tatsächlcihe Trainings pro Woche / Ziel) 
*/

export function updateStrength(id) {
    let user = userData.find(user => user.id === id);
    let milestone = user.progress.strengthMilestone;
    let lastTrainingName = user.trainingsHistory[user.trainingsHistory.length - 1].training;
    // console.log("name of last training: ", lastTrainingName);

    let lastTraining = user.workouts.find(w => w.name === lastTrainingName);
    // console.log("workout with right name: ", lastTraining);

    let lastTrainingStrength = 0; // TODO: for each für jedes set, damit gesamt gewicht ermittelt wird

    lastTraining.exercises.forEach(element => {
        // (reps*weight) + (reps*weight) + (reps*weight)
        for(let i = 0; i < element.sets; i++) {
            lastTrainingStrength += (element.repetitions[i] * element.weight[i]);
        }
        // console.log("strength after exercise: ", lastTrainingStrength);
    });
    // console.log("after loop: ", lastTrainingStrength);


    user.progress.strength += (lastTrainingStrength / 1000);        // damit das gewicht dann in tonnen gehandhabt wird
    // console.log("strength after update: ", user.progress.strength);

    if (user.progress.strength > milestone) {
        user.progress.strengthMilestone *= 2;
        console.log("new milestone started", user.progress.strengthMilestone);
    } else {
        console.log("milestone not reached");
    }

    updateLevel(id, (lastTrainingStrength / 1000));

    return user.progress.strength;
}

/*
    Funktion, um Level zu berechnen / updaten
*/
export function updateLevel(id, weight) {
    let user = userData.find(user => user.id === id);
    let milestone = user.levelMilestone;

    user.xp += weight * 10; // weight ist in tonnen angegeben
    // console.log("user xp: ", user.xp);

    if (user.xp > milestone) {
        user.levelMilestone *= 2;
        user.level += 1;
        // console.log("level: ", user.level);
        console.log("new milestone started", user.levelMilestone);
    } else {
        console.log("milestone not reached");
    }

    return user.level;

}

/*
    Getter Funktionen für Levelbars
*/

export function getEndurance(id) {
    let user = userData.find(user => user.id === id);
    return user.progress.endurance;
}

export function getConsistency(id) {
    let user = userData.find(user => user.id === id);
    return user.progress.consistancy;
}

export function getStrength(id) {
    let user = userData.find(user => user.id === id);
    return user.progress.strength;
}