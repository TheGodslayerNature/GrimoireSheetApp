import { ArcanaSkills } from "./util/ArcanaSkills";

export class Arcanas {
    public static FOOL = new Arcanas("Fool",ArcanaSkills.FOOL_COMBAT_SKILL, ArcanaSkills.FOOL_OUT_OF_COMBAT_SKILL);

    public static MAGE = new Arcanas("Mage",ArcanaSkills.MAGE_COMBAT_SKILL,ArcanaSkills.MAGE_OUT_OF_COMBAT_SKILL);
    
    public static PRIESTESS = new Arcanas("Priestess",ArcanaSkills.PRIESTESS_COMBAT_SKILL,ArcanaSkills.PRIESTESS_OUT_OF_COMBAT_SKILL);
    
    public static EMPRESS = new Arcanas("Empress",ArcanaSkills.EMPRESS_COMBAT_SKILL,ArcanaSkills.EMPRESS_OUT_OF_COMBAT_SKILL);
    
    public static EMPEROR = new Arcanas("Emperor", ArcanaSkills.EMPEROR_COMBAT_SKILL,ArcanaSkills.EMPEROR_OUT_OF_COMBAT_SKILL);    
    
    public static HIEROPHANT = new Arcanas("Hierophant",ArcanaSkills.HIEROPHANT_COMBAT_SKILL,ArcanaSkills.HIEROPHANT_OUT_OF_COMBAT_SKILL)
    
    public static LOVERS = new Arcanas("Lovers",ArcanaSkills.LOVERS_COMBAT_SKILL,ArcanaSkills.LOVERS_OUT_OF_COMBAT)
    
    public static CHARIOT = new Arcanas("Chariot",ArcanaSkills.CHARIOT_COMBAT_SKILL,ArcanaSkills.CHARIOT_OUT_OF_COMBAT_SKILL)
    
    public static JUSTICE = new Arcanas("Justice",ArcanaSkills.JUSTICE_COMBAT_SKILL,ArcanaSkills.JUSTICE_COMBAT_SKILL)
    
    public static HERMIT = new Arcanas("Hermit",ArcanaSkills.HERMIT_COMBAT_SKILL,ArcanaSkills.HERMIT_OUT_OF_COMBAT_SKILL)
    
    public static FORTUNE = new Arcanas("Fortune",ArcanaSkills.FORTUNE_COMBAT_SKILL,ArcanaSkills.FORTUNE_OUT_OF_COMBAT_SKILL)
    
    public static STRENGTH = new Arcanas("Strength",ArcanaSkills.STRENGTH_COMBAT_SKILL,ArcanaSkills.STRENGTH_OUT_OF_COMBAT_SKILL)
    
    public static HANGED = new Arcanas("Hanged",ArcanaSkills.HANGED_COMBAT_SKILL,ArcanaSkills.HANGED_OUT_OF_COMBAT_SKILL)
    
    public static DEATH = new Arcanas("Death",ArcanaSkills.DEATH_COMBAT_SKILL,ArcanaSkills.DEATH_OUT_OF_COMBAT_SKILL)
    
    public static TEMPERANCE = new Arcanas("Temperance",ArcanaSkills.TEMPERANCE_COMBAT_SKILL,ArcanaSkills.TEMPERANCE_OUT_OF_COMBAT_SKILL)
    
    public static DEVIL = new Arcanas("Devil",ArcanaSkills.DEVIL_COMBAT_SKILL,ArcanaSkills.DEVIL_OUT_COMBAT_SKILL)
    
    public static TOWER = new Arcanas("Tower",ArcanaSkills.TOWER_COMBAT_SKILL,ArcanaSkills.TOWER_OUT_OF_COMBAT_SKILL)
    
    public static STAR = new Arcanas("Star",ArcanaSkills.STAR_COMBAT_SKILL,ArcanaSkills.STAR_OUT_OF_COMBAT_SKILL)
    
    public static MOON = new Arcanas("Moon",ArcanaSkills.MOON_COMBAT_SKILL,ArcanaSkills.MOON_OUT_OF_COMBAT_SKILL)
    
    public static SUN = new Arcanas("Sun",ArcanaSkills.SUN_COMBAT_SKILL,ArcanaSkills.SUN_OUT_OF_COMBAT_SKILL)
    
    public static JUDGMENT = new Arcanas("Judment",ArcanaSkills.JUDGMENT_COMBAT_SKILL,ArcanaSkills.JUDGMENT_OUT_COMBAT_SKILL)
    
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