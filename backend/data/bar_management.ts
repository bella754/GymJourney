import { userData } from "./data.ts";

/*
    Funktion, um insg. Trainingsdauer zu berechnen 
    (Zeit, die insg schon mit Training verbracht wurde)
*/

// TODO: Meilensteine müssen auch beachtet werden 
export function calcEndurance(id, milestone) {
    let user = userData.find(user => user.id === id);
    let endurance = 0;

    user.trainingsHistory.forEach(element => {
        endurance += element.duration 
    });
    if ((endurance / milestone) >= 1) {
        console.log("new bar reset");
    } else {
        console.log("milestone not reached");
    }
    return endurance;
}

/*
    Funktion, um Konsistenz zu berechnen (tatsächlcihe Trainings pro Woche / Ziel) 
*/

// TODO: Meilensteine müssen beachtet werden.
export function calcConsistency(id, milestone) {
    let user = userData.find(user => user.id === id);
    
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