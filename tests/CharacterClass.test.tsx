import { CharacterClass } from "../src/components/character/CharacterClass";

test('CharacterClass should have skills for the joker class', () => {
    var klass: CharacterClass = new CharacterClass();

    var skills:String = "❖ Versatilidade Inigualável:, ❖ Borboleta Social:, ❖ Convidado Especial:";
    expect(skills).toEqual(klass.getSkills());
});

test('CharacterClass should have how to choose between classes', () => {
    var emergente:CharacterClass = new CharacterClass();

    var expectedAbilites = "❖ Vínculo Emergente:;\n ❖ Poder Focado:;\n ❖ Cognição Receptiva:";

    emergente.setClass("emergente");

    expect(emergente.getSkills()).toEqual(expectedAbilites);
});