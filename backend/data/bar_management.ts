import { getUser } from "../api/user/user.crud.ts"

/*
    Funktion, um Endurance nach training zu updaten 
    (Zeit, die insg schon mit Training verbracht wurde)
*/

export function updateEndurance() {
  // let user = userData.find((user) => user.id === id)
  let user = getUser();
  let milestone = user.progress.enduranceMilestone;
  let lastTrainingDuration = user.trainingsHistory[user.trainingsHistory.length - 1].duration
  //console.log("duration of last training: ", lastTrainingDuration);

  user.progress.endurance += lastTrainingDuration
  //console.log("endurance after update: ", user.progress.endurance);

  if (user.progress.endurance > milestone) {
    user.progress.enduranceMilestone *= 2
    console.log('new milestone started', user.progress.enduranceMilestone)
  } else {
    console.log('milestone not reached')
  }

  return user.progress.endurance
}

/*
    Funktion, um Konsistenz zu berechnen 
    wird nach jedem training aufgerufen, um consistency zu inkrementieren
*/

export function updateConsistency() {
  // let user = userData.find((user) => user.id === id)
  let user = getUser();
  let milestone = user.progress.consistencyMilestone
  // console.log("consistency before: ", user.progress.consistency);
  user.progress.consistency += 1
  // console.log("user consistency after: ", user.progress.consistency);

  if (user.progress.consistency > milestone) {
    user.progress.consistencyMilestone *= 2
    console.log('new milestone started', user.progress.consistencyMilestone)
  } else {
    console.log('milestone not reached')
  }

  return user.progress.consistency
}

/*
    Funktion, um Konsistenz zu berechnen (tatsächlcihe Trainings pro Woche / Ziel) 
*/

export function updateStrength() {
  // let user = userData.find((user) => user.id === id)
  let user = getUser();
  let milestone = user.progress.strengthMilestone
  let lastTrainingName = user.trainingsHistory[user.trainingsHistory.length - 1].training.name
  // console.log("name of last training: ", lastTrainingName);

  let lastTraining = user.workouts.find((w) => w.name === lastTrainingName)
  // console.log("workout with right name: ", lastTraining);

  let lastTrainingStrength = 0 // TODO: for each für jedes set, damit gesamt gewicht ermittelt wird

  lastTraining?.exercises.forEach((element) => {
    // (reps*weight) + (reps*weight) + (reps*weight)
    element.sets.forEach(e => {
      lastTrainingStrength += e.repetitions * e.weight
    });
    // for (let i = 0; i < element.sets.length; i++) {
    //   lastTrainingStrength += element.sets[i] * element.weight[i]
    // }
    // console.log("strength after exercise: ", lastTrainingStrength);
  })
  // console.log("after loop: ", lastTrainingStrength);

  user.progress.strength += lastTrainingStrength / 1000 // damit das gewicht dann in tonnen gehandhabt wird
  // console.log("strength after update: ", user.progress.strength);

  if (user.progress.strength > milestone) {
    user.progress.strengthMilestone *= 2
    console.log('new milestone started', user.progress.strengthMilestone)
  } else {
    console.log('milestone not reached')
  }

  updateLevel(lastTrainingStrength / 1000)

  return user.progress.strength
}

/*
    Funktion, um Level zu berechnen / updaten
*/
export function updateLevel(weight: number) {
  // let user = userData.find((user) => user.id === id)
  let user = getUser();
  let milestone = user.xpMilestone

  user.xp += weight * 10 // weight ist in tonnen angegeben
  // console.log("user xp: ", user.xp);

  if (user.xp > milestone) {
    user.xpMilestone *= 2
    user.level += 1
    // console.log("level: ", user.level);
    console.log('new milestone started', user.xpMilestone)
  } else {
    console.log('milestone not reached')
  }

  return user.level
}

/*
    Getter Funktionen für Levelbars
*/

export function getEndurance() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user: ", user);
  // console.log("user endurance: ", user.progress.endurance);
  let user = getUser();
  // console.log("in bar management endurance: ", user.progress.endurance);
  
  return user.progress.endurance
}

export function getConsistency() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user endurance: ", user.progress.consistency);
  let user = getUser();
  return user.progress.consistency
}

export function getStrength() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user endurance: ", user.progress.strength);
  let user = getUser();
  return user.progress.strength;
}

export function getLevel() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user endurance: ", user.level);
  let user = getUser();
  return user.level
}

export function getUserXp() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user endurance: ", user.level);
  let user = getUser();
  return user.xp;
}

export function getEnduranceMilestone() {
  // let user = userData.find((user) => user.id === id)
  let user = getUser();
  return user.progress.enduranceMilestone;
}

export function getConsistencyMilestone() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user endurance: ", user.progress.consistency);
  let user = getUser();
  return user.progress.consistencyMilestone;
}

export function getStrengthMilestone() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user endurance: ", user.progress.strength);
  let user = getUser();
  return user.progress.strengthMilestone
}

export function getLevelMilestone() {
  // let user = userData.find((user) => user.id === id)
  // console.log("user endurance: ", user.level);
  let user = getUser();
  return user.xpMilestone
}
