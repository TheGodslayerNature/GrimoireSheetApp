export class InvalidEmailException extends Error{ 

    constructor(errorMsg:string){
        super(errorMsg);
    }
    
}