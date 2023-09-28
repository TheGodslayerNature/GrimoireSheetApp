import {Player} from '../src/components/player/Player';
import { InvalidEmailException } from '../src/components/player/InvalidEmailException';
test('should create an player object with the email and his password', () => {
    var player: Player = new Player("jj@gmail.com", "zetaman12");

    expect("jj@gmail.com").toEqual(player.getEmail())
    expect("zetaman12").toEqual(player.getPassword())
});

test('shouldn\'t create an player if the email is invalid', () => {
    var player: Player = new Player("JJ@gmail.com","");

    try {
        player.emailIsValid("JJ$gmail.com")
    } catch(e:unknown) {
        var knowError = e as InvalidEmailException;
        expect(knowError.message).toEqual("Email invalido");
    }
});

test('the password should have at least 9 digits', () => {
    var player: Player = new Player("JJ@gmail.com","");

    var password = player.passwordIsValid("1345");
    expect(password).toBeFalsy();

    password = player.passwordIsValid("zetaman12");
    expect(password).toBeTruthy();
});

test('the player should add an character', () => {
    var player: Player = new Player("jj@gmail.com", "zetaman12");
    player.addCharacter("Hanzo");

    expect(["Hanzo"]).toStrictEqual(player.getCharactersList())
});

test('the player should more than one character', () => {
    var player: Player = new Player("jj@gmail.com", "zetaman12");
    player.addCharacter("Hanzo");

    expect(["Hanzo"]).toStrictEqual(player.getCharactersList())
    player.addCharacter("Liliam")

    expect(player.getCharactersList()).toStrictEqual(["Hanzo", "Liliam"]);
});