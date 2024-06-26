export class LevelSystem {
    //Basispunkte fuer das erste Level
    private basepoints: number;

    constructor(basepoints: number){
        this.basepoints = basepoints;
    }

    //Diese Funktion fuegt Punkte zu den vorhandenen Punkten zu
    addPoints(user: UserActivation, points: number): void{
        user.points += points;
        this.checkLevelUp(user);
    }

    //Berechnet Punkte fuer das naechste Level
    private calculateRequiredPoints(level: number): number {
        return this.basepoints * Math.pow(2,level);
    }

    //Hier ist eine Funktion die dann abgespielt wird sobald der User ein neues Level erreicht hat
    private onLevelUp(user: User): void {
        console.log(`User ${user.name} has reached level ${user.level}!`);
    }

    //Ueberpruefung ob die LevelBar aktualisiert werden muss
    private checkLevelUp(user: User): void {
        let requiredPoints = this.calculateRequiredPoints(user.level);
        while (user.points >= requiredPoints){
            user.level++;
            this.onLevelUp(user);
            requiredPoints = this.calculateRequiredPoints(user.level);
        }
    }
}
