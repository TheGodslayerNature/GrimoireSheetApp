import { CharacterClass, Klass } from "../src/components/character/CharacterClass";

test('CharacterClass should have skills for the joker class', () => {
    var klass: CharacterClass = new CharacterClass(Klass.JOKER);

    var skills:String = "❖ Versatilidade Inigualável:, ❖ Borboleta Social:, ❖ Convidado Especial:";
    expect(skills).toEqual(klass.skills());
});