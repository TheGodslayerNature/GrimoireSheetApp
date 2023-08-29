import {Status} from "../statusPoints/status";

export class User {

    userName: String;
    statusPoints: number;
    userClass: String;
    userLevel: number;
    status:Status;

    constructor(userName: String, userClass: String, userLevel:number, status:Status) {
        this.userName = userName;
        this.userClass = userClass;
        this.statusPoints = 18;
        this.userLevel = userLevel;
        this.status = status;
    };

    setUserName(name:String) {
        this.userName = name;
    }

    setUserClass(userClass: String) {
        this.userClass = userClass;
    }

    setPoints(point:number) {
        this.statusPoints += point;
    }

    setUserLevel(level:number) {
        this.userLevel = level;
    }

    getPoints(){
        if(this.statusPoints < 1) {
            return "There is no more points avaliable"
        }
        return this.statusPoints;
    }

    //Adicionar pontos nos respectivos status

    setPointsFor(value:number) {
        if(this.statusPoints < 1) {
            return "There is no more points avaliable"
        }
        this.status.forca = value;
        this.statusPoints -= value;
    }

    setPointsTec(value:number) {
        if(this.statusPoints < 1) {
            return "There is no more points avaliable"
        }
        this.status.tec = value;
        this.statusPoints -= value;
    }

    setPointsVit(value:number) {
        if(this.statusPoints < 1) {
            return "There is no more points avaliable"
        }
        this.status.vit = value;
        this.statusPoints -= value;
    }

    setPointsMag(value: number) {
        if(this.statusPoints < 1) {
            return "There is no more points avaliable"
        }
        this.status.mag = value;
        this.statusPoints -= value;
    }

    setPointsAgi(value: number) {
        if(this.statusPoints < 1) {
            return "There is no more points avaliable"
        }
        this.status.agi = value;
        this.statusPoints -= value;
    }

    setPointsSor(value:number) {
        if(this.statusPoints < 1) {
            return "There is no more points avaliable"
        }
        this.status.sor = value;
        this.statusPoints -= value;
    }

    printValues() {
        console.log(
            "FOR: " + this.status.forca,
            "TEC: " + this.status.tec,
            "VIT: " + this.status.vit,
            "MAG: " + this.status.mag,
            "AGI: " + this.status.agi,
            "SOR: " + this.status.sor
        );
    }

}
