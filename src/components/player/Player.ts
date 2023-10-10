import { Character } from "components/character/Character";
import { InvalidEmailException } from "./InvalidEmailException";

export class Player {
    email:string;
    password:string;

    constructor(email:string, password:string){
        this.emailIsValid(email);
        this.email = email;
        this.password = password;
    }

    getEmail(){
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    emailIsValid(validEmail:string) {
        var postFix = validEmail.substring(validEmail.lastIndexOf("@"));

        if(postFix.at(0)!= "@") {
            throw new InvalidEmailException("Email invalido");
        }
    }

    passwordIsValid(password:string) {
        if(password.length >= 9) {
            return true;
        }
        return !password.length;
    }


    toString(): string {
        return `email: ${this.email}, senha: ${this.password}`
    }
}