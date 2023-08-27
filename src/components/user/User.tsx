export default class User {

    userName: String;
    statusPoints: number;
    userClass: String;
    userLevel: number;

    constructor(userName: String, userClass: String, statusPoints:number, userLevel:number) {
        this.userName = userName;
        this.userClass = userClass;
        this.statusPoints = statusPoints;
        this.userLevel = userLevel;
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
        return this.statusPoints;
    }

}
