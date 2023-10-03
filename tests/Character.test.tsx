import { Arcana, Character} from "../src/components/character/Character";
import { Player} from '../src/components/player/Player';
import { CharacterClass, Klass } from "../src/components/character/CharacterClass";

const player: Player = new Player("jj@gmail.com", "zetaman12");
const klass:CharacterClass = new CharacterClass(Klass.JOKER); 
test('should create and character with the right values', () => {
    var character:Character = new Character("Jose", 1,player,Arcana.EMPEROR,klass,4,4,1);
    
    var trueCharacter:String = "name: Jose, level: 1, player: {email: jj@gmail.com, senha: zetaman12}, Arcana: EMPEROR, classe: JOKER, aspectPoints: 4, energy: 4, damageReduction: 1";
    expect(trueCharacter).toEqual(character.toString());
});

test('should ', () => {

});