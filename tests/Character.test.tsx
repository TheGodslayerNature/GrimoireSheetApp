import { Arcana, Character} from "../src/model/character/Character";
import { Player} from '../src/components/player/Player';
import { CharacterClass, Klass } from "../src/model/character/CharacterClass";
import { Status, User } from "../src/model/userAttributes/UserAttributes";
import { Arcanas } from "../src/model/character/Arcanas";

const player: Player = new Player("jj@gmail.com", "zetaman12");
const klass:CharacterClass = new CharacterClass(Klass.JOKER); 
var newUser: User = new User("Joker", 1);
var kaleesi:User = new User("Kaleesi", 1);

test('should create and character with the right values', () => {
    var character:Character = new Character(newUser,player,Arcanas.EMPEROR,klass);
    
    var trueCharacter:String = "name: Joker, level: 1, player: {email: jj@gmail.com, senha: zetaman12}, Arcana: EMPEROR, classe: JOKER, aspectPoints: 4, energy: 0, damageReduction: 1";
    expect(trueCharacter).toEqual(character.toString());
});

test('given an character with 2 points in VIT and his level is 2, then his energy must be 3 ', () => {
    var user:User = new User("Kaleesi", 2);
    user.setPointsFor(Status.VIT, 2);
    var character:Character = new Character(user,player, Arcanas.CHARIOT, klass);

    expect(3).toEqual(character.energy)
});

test('given an character with 2 points in VIT and his level is 1, then his energy must be 2 ', () => {
    var user:User = new User("Kaleesi", 1);
    user.setPointsFor(Status.VIT, 2);
    var character:Character = new Character(user, player, Arcanas.CHARIOT, klass);

    expect(2).toEqual(character.energy);
});
test('the characters must have 30 life points for base, but he receives a minor buff for each point of VIT', () => {
    var character:Character = new Character(kaleesi,player, Arcanas.CHARIOT, klass);

    expect(30).toEqual(character.lifePoints());

    kaleesi.setPointsFor(Status.VIT, 3);
    expect(33).toEqual(character.lifePoints());
});
test('character must change life points everytime that the level increse', () => {
    var lima:User = new User("Lima", 1);
    var character:Character = new Character(lima,player, Arcanas.CHARIOT, klass);
    expect(30).toEqual(character.lifePoints());

    lima.setUserLevel(2);
    expect(35).toEqual(character.lifePoints());

    lima.setPointsFor(Status.VIT, 2);
    expect(39).toEqual(character.lifePoints());
});

test('character must change energy everytime that the level increse', () => {
    var user:User = new User("Kaleesi", 2);
    var character:Character = new Character(user, player, Arcanas.CHARIOT, klass);

    expect(1).toEqual(character.getEnergy());

    user.setUserLevel(4);

    expect(2).toEqual(character.getEnergy());
});

