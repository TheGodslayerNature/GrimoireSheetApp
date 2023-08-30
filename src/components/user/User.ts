const MAX_POINTS:number = 18;

export class User {
    userName: String;
    userClass: String;
    userLevel: number;
    statusPoints: number[];

    constructor(userName: String, userClass: String, userLevel:number) {
        this.userName = userName;
        this.userClass = userClass;
        this.userLevel = userLevel;
        this.statusPoints = [0, 0, 0, 0, 0, 0];
    };

    availablePoints(): number {
        return MAX_POINTS - this.totalPoints();
    }

    totalPoints() { 
        return this.statusPoints.reduce((acc, elem) => acc + elem, 0);
    }

    setUserName(name:String) {
        this.userName = name;
    }

    setUserClass(userClass: String) {
        this.userClass = userClass;
    }

    setUserLevel(level:number) {
        this.userLevel = level;
    }

    
    //Adicionar pontos nos respectivos status

    setPointsFor(status:Status, points:number) {
        let oldPoints = this.getStatusPointsFor(status);

        this.statusPoints[status] = points;

        if (this.totalPoints() > MAX_POINTS) {
            this.statusPoints[status] = oldPoints;
            throw new Error("Total points exceeded the maximum");
        }
    }

    getStatusPointsFor(status: Status) {
        return this.statusPoints[status];
    }

    printStatusValues() {
        let statuses = [
            Status.FOR,
            Status.TEC,
            Status.VIT,
            Status.MAG,
            Status.AGI,
            Status.SOR,
        ].map((status) => Status[status] + ": " + this.statusPoints[status])
        console.log(statuses);
    }

}

export enum Status {
    FOR,
    TEC,
    VIT,
    MAG,
    AGI,
    SOR,
}