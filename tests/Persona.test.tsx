import { Arcanas } from "../src/components/character/Arcanas";
import { Mag, MagType } from "../src/components/mag/Mag";
import { Persona } from "../src/components/persona/Persona";

test('should create on persona with the right values', () => {
    var conviccao:String = "Armonia eterna"
    var habNatural:String = "musicas dão efeitos de buff";
    var mags:Mag[] = [];
    var orpheus:Persona = new Persona("Orpheus",Arcanas.FOOL, conviccao, habNatural,6, mags ,MagType.FIRE, MagType.WIND, MagType.BUFF);

    var stringExpected = "name: Orpheus, Arcana: Fool, convicção: Armonia eterna, Natural Skill: musicas dão efeitos de buff, Mag types: { Fire,Wind,Buff }";
    expect(stringExpected).toEqual(orpheus.toString());
});

test('should add an magic to the persona magic deck', () => {
    var bufu:Mag = new Mag(MagType.ICE, 1, "", "", "", "", "");
    var agi:Mag = new Mag( MagType.FIRE ,1 ,"Agi" ,"", "", "", "");
    var mags:Mag[] = [];var agi2:Mag = new Mag( MagType.FIRE ,5 ,"Agi" ,"", "", "", "");
    mags.push(bufu);
    mags.push(agi);
    var orpheus:Persona = new Persona("Orpheus",Arcanas.FOOL, "", "",6, mags ,MagType.FIRE, MagType.WIND, MagType.BUFF);
    
    expect([bufu, agi]).toEqual(orpheus.getMags());
});

test('shouldn\'t buy more magic if they not have more magic points ', () => {
    /*var agi:Mag = new Mag( MagType.FIRE ,1 ,"Agi" ,"", "", "", "");
    var agi2:Mag = new Mag( MagType.FIRE ,5 ,"Agi" ,"", "", "", "");
    var agi3:Mag = new Mag( MagType.FIRE ,3 ,"Agi" ,"", "", "", "");
    var mags:Mag[] = [];

    mags.push(agi);
    mags.push(agi2);
    mags.push(agi3);

    var orpheus:Persona = new Persona("Orpheus",Arcanas.FOOL, "", "",6, mags ,MagType.FIRE, MagType.WIND, MagType.BUFF);
    expect([agi, agi2, agi3]).toEqual(orpheus.getMags());

    */
});