import {Player } from '../src/components/player/Player';
test('should create an player object with the email and his password', () => {
    var player: Player = new Player("jj@gmail.com", "zetaman12");

    expect("jj@gmail.com").toEqual(player.getEmail())
    expect("zetaman12").toEqual(player.getPassword())
});

test('should crate an player if the email is valid', () => {
    var player: Player = new Player("","");

    var isValid = player.emailIsValid("JJ$gmail.com");
    expect(isValid).toBeFalsy(); 

    isValid = player.emailIsValid("jj@gmail.com")
    expect(isValid).toBeTruthy();
});