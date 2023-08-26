export default class User {

    userName: String;
    statusPoints: Number;
    userClass: String;
    userLevel: Number;

    constructor(userName: String, userClass: String, statusPoints:Number, userLevel:Number) {
        this.userName = userName;
        this.userClass = userClass;
        this.statusPoints = statusPoints;
        this.userLevel = userLevel;
    }
}