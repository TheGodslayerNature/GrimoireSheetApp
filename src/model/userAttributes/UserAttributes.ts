const INITIAL_MAX_POINTS:number = 18;

export class UserAttributes {

    userName: string;
    userLevel: number;
    statusPoints: number[];

    constructor(userName: string,userLevel:number, statusPoints: Array<number> = [0,0,0,0,0,0]) {
        this.userName = userName;
        this.userLevel = userLevel;
        this.statusPoints = statusPoints;
    };

    availablePoints(): number {
        return INITIAL_MAX_POINTS - this.totalPoints();
    }

    totalPoints() {
        return this.statusPoints.reduce((acc, elem) => acc + elem, 0);
    }

    setUserName(name:string) {
        this.userName = name;
    }

    setUserLevel(level:number) {
        this.userLevel = level;
    }

    getName() {
        return this.userName;
    }

    getLevel() {
        return this.userLevel;
    }

    setPointsFor(status:Status, points:number) {
        let oldPoints = this.getStatusPointsFor(status);

        this.statusPoints[status] = points;

        if (this.totalPoints() > INITIAL_MAX_POINTS) {
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

export enum SocialPoints {
    knowledge,
    discipline,
    empathy,
    charm,
    expression,
    Courage
}