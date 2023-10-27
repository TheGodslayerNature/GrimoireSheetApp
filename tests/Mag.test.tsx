import { Mag, MagType } from "../src/model/mag/Mag";

test('should create an type of magic with her effect', () => {
    var tier:number = 1;
    var categoria:String = "Fogo(A)"
    var alcance:String = "1 alvo dentro de 8 metros"
    var efeito:String  = "Acerto: MAGd6 dano de Fogo."
    var descricao:String = "Uma pequena bola de fogo atinge o inimigo.";
    var agi:Mag = new Mag( MagType.FIRE ,tier ,"Agi" ,categoria, alcance, efeito, descricao);

    var stringExpected:String = `tier 1; name: Agi; categoria: ${categoria}; alcance: ${alcance}; efeito: ${efeito}; descrição: ${descricao}`;
    expect(stringExpected).toEqual(agi.toString());
});

test('should create an ice magic type', () => {
    var bufu:Mag = new Mag(MagType.ICE, 1, "", "", "", "", "");

    var falseExpected = bufu.magType == MagType.DARKNESS;

    expect(falseExpected).toBeFalsy();

    var trueExpected = bufu.magType == MagType.ICE;

    expect(trueExpected).toBeTruthy();
});
test('a magic should have an damage', () => {
    var bufu:Mag = new Mag(MagType.ICE, 1, "", "", "", "", "");

    expect(0).toEqual(bufu.getDamage());

    bufu.setDamage(8);

    expect(8).toEqual(bufu.getDamage());
});