import { Character } from "components/character/Character";
import { InvalidEmailException } from "./InvalidEmailException";

export class Player {
    email:String;
    password:String;
    characters:Character[] = [];

    constructor(email:String, password:String){
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

    emailIsValid(validEmail:String) {
        var postFix = validEmail.substring(validEmail.lastIndexOf("@"));

        if(postFix.at(0)!= "@") {
            throw new InvalidEmailException("Email invalido");
        }
    }

    passwordIsValid(password:String) {
        if(password.length >= 9) {
            return true;
        }
        return !password.length;
    }

    addCharacter(character: Character) {
        this.characters.push(character)
    }


    getCharactersList(){
        return this.characters;
    }

    toString(): String {
        return `email: ${this.email}, senha: ${this.password}`
    }
}