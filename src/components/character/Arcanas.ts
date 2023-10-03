import { ArcanaSkills } from "./util/ArcanaSkills";
export class Arcanas {
    public static JOKER = new Arcanas("Joker",ArcanaSkills.JOKER_COMBAT_SKILL, ArcanaSkills.JOKER_OUT_OF_COMBAT_SKILL);
    public static MAGE = new Arcanas("","","");
    public static PRIESTESS = new Arcanas("","","");
    public static EMPRESS = new Arcanas("","","");
    public static EMPEROR = new Arcanas("Emperor", ArcanaSkills.EMPEROR_COMBAT_SKILL,ArcanaSkills.EMPEROR_OUT_OF_COMBAT_SKILL);    
    public static HIEROPHANT = new Arcanas("","","")
    public static LOVERS = new Arcanas("","","")
    public static CHARIOT = new Arcanas("","","")
    public static JUSTICE = new Arcanas("","","")
    public static HERMIT = new Arcanas("","","")
    public static FORTUNE = new Arcanas("","","")
    public static STRENGTH = new Arcanas("","","")
    public static HANGED = new Arcanas("","","")
    public static DEATH = new Arcanas("","","")
    public static TEMPERANCE = new Arcanas("","","")
    public static DEVIL = new Arcanas("","","")
    public static TOWER = new Arcanas("","","")
    public static STAR = new Arcanas("","","")
    public static MOON = new Arcanas("","","")
    public static SUN = new Arcanas("","","")
    public static JUDGMENT = new Arcanas("","","")
    public static WORLD = new Arcanas("","","")
    
    constructor(arcanaName:String ,combatEffect:String, outOfCombat: String){
        this.arcanaName = arcanaName;
        this.combatArcana = combatEffect;
        this.outOfCombat = outOfCombat;
    }

    readonly arcanaName:String;
    readonly combatArcana:String;
    readonly outOfCombat:String;

}