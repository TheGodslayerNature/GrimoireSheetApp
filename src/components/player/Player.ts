import { InvalidEmailException } from "./InvalidEmailException";

export class Player {
    email:String;
    password:String;

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
}