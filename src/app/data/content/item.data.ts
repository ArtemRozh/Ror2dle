export enum ItemSource {
    Base = 'Base Game',
    SotV = 'Survivors of the Void',
    AllC = 'AlloyedCollective',
    SotS = 'Seekers of the Storm',
    HllC = 'Hallowed Concepts'
}

export enum ItemRarity {
    White = 'Common',
    Green = 'Uncommon',
    Red = 'Legendary',
    Yellow = 'Boss',
    Blue = 'Lunar',
    Purple = 'Void',
    Orange = 'Equipment',
    MealOrange = 'Meal',
    HalloweenPurple = 'Hallowed',
    GreenHex = 'Hex',
}

export enum ItemCategory {
    Damage = 'Damage',
    Utility = 'Utility',
    Healing = 'Healing',
    Mobility = 'Mobility',
    Protective = 'Protective',
    Scrap = 'Scrap',
    Money = 'Money',

    // Temporary untill I decide better option
    Equipment = 'Equipment',

    // Potentially to be removed
    OnStageBeginEffect = 'OnStageBeginEffect',
    OnKillEffect = 'OnKillEffect',
}

export enum ItemStack {
    Linear = 'Linear',
    Exponential = 'Exponential',
    Hyperbolic = 'Hyperbolic',
    Special = 'Special',
    None = 'None'
}
const imageUrlOverrides: Record<string, string> = {
    "Armor Piercing Rounds": "https://riskofrain2.wiki.gg/images/thumb/Armor-Piercing_Rounds.png/128px-Armor-Piercing_Rounds.png",
};

export function getItemImageUrl(itemName: string): string {
    if (imageUrlOverrides[itemName]) {
        return imageUrlOverrides[itemName];
    }
    const formattedName = encodeURIComponent(itemName.replace(/ /g, '_'));
    return `https://riskofrain2.wiki.gg/images/${formattedName}.png`;
}

// { name: "ReplaceMe", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },

export const ror2ItemData = [
    // Whites
    { name: "Soldier's Syringe", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Bustling Fungus", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Crowbar", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Lens-Maker's Glasses", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Paul's Goat Hoof", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Energy Drink", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Cautious Slug", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Repulsion Armor Plate", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Protective], stack: [ItemStack.Linear] },
    { name: "Tougher Times", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Protective], stack: [ItemStack.Hyperbolic] },
    { name: "Backup Magazine", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Personal Shield Generator", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Protective], stack: [ItemStack.Linear] },
    { name: "Sticky Bomb", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Stun Grenade", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Hyperbolic] },
    { name: "Gasoline", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Medkit", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Mocha", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Monster Tooth", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Healing, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Topaz Brooch", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Protective, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Bison Steak", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Bundle of Fireworks", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Rusted Key", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Armor Piercing Rounds", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Focus Crystal", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Tri-Tip Dagger", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Warbanner", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Item Scrap, White", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Scrap], stack: [ItemStack.None] },

    // SotV Whites
    { name: "Delicate Watch", rarity: ItemRarity.White, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Power Elixir", rarity: ItemRarity.White, source: ItemSource.SotV, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Oddly-shaped Opal", rarity: ItemRarity.White, source: ItemSource.SotV, categories: [ItemCategory.Utility, ItemCategory.Protective], stack: [ItemStack.Linear] },
    { name: "Roll of Pennies", rarity: ItemRarity.White, source: ItemSource.SotV, categories: [ItemCategory.Money], stack: [ItemStack.Linear] },

    // Greens
    { name: "AtG Missile Mk. 1", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Ukulele", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Will-o'-the-wisp", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Hopoo Feather", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Kjaro's Band", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Runald's Band", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Chronobauble", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Lepton Daisy", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Razorwire", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Old Guillotine", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Hyperbolic] },
    { name: "War Horn", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Berzerker's Pauldron", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.OnKillEffect, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Predatory Instincts", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Red Whip", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Harvester's Scythe", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Bandolier", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.OnKillEffect], stack: [ItemStack.Special] },
    { name: "Fuel Cell", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear, ItemStack.Exponential] },
    { name: "Item Scrap, Green", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Scrap], stack: [ItemStack.None] },
    { name: "Infusion", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Healing, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Rose Buckler", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Protective], stack: [ItemStack.Linear] },
    { name: "Wax Quail", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Ghor's Tome", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Money, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Squid Polyp", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Death Mark", rarity: ItemRarity.Green, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },

    // SotV Greens
    { name: "Hunter's Harpoon", rarity: ItemRarity.Green, source: ItemSource.SotV, categories: [ItemCategory.Utility, ItemCategory.OnKillEffect, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Ignition Tank", rarity: ItemRarity.Green, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Shuriken", rarity: ItemRarity.Green, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Regenerating Scrap", rarity: ItemRarity.Green, source: ItemSource.SotV, categories: [ItemCategory.Utility, ItemCategory.Scrap], stack: [ItemStack.Linear] },
    { name: "Shipping Request Form", rarity: ItemRarity.Green, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Special] },

    // Reds
    { name: "Brilliant Behemoth", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Hardlight Afterburner", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Alien Head", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Exponential] },
    { name: "Brainstalks", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Sentient Meat Hook", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Hyperbolic] },
    { name: "N'kuhana's Opinion", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Soulbound Catalyst", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Hyperbolic] },
    { name: "57 Leaf Clover", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Aegis", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Protective, ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Ceremonial Dagger", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Defensive Microbots", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Protective], stack: [ItemStack.Linear] },
    { name: "Dio's Best Friend", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Frost Relic", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.Utility, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "H3AD-5T v2", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Happiest Mask", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Interstellar Desk Plant", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Healing, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Rejuvenation Rack", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Resonance Disc", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.OnKillEffect], stack: [ItemStack.Linear] },
    { name: "Shattering Justice", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Unstable Tesla Coil", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Wake of Vultures", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Item Scrap, Red", rarity: ItemRarity.Red, source: ItemSource.Base, categories: [ItemCategory.Scrap], stack: [ItemStack.None] },

    // SotV reds
    { name: "Ben's Raincoat", rarity: ItemRarity.Red, source: ItemSource.SotV, categories: [ItemCategory.Utility, ItemCategory.Protective], stack: [ItemStack.Linear] },
    { name: "Bottled Chaos", rarity: ItemRarity.Red, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Laser Scope", rarity: ItemRarity.Red, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Pocket I.C.B.M.", rarity: ItemRarity.Red, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Spare Drone Parts", rarity: ItemRarity.Red, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Symbiotic Scorpion", rarity: ItemRarity.Red, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },

    // Yellows
    { name: "Titanic Knurl", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Queen's Gland", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Mired Urn", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Molten Perforator", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Planula", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Halcyon Seed", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Little Disciple", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage, ItemCategory.Mobility], stack: [ItemStack.Linear] },
    { name: "Pearl", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Irradiant Pearl", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Genesis Loop", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Artifact Key", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.None] },
    { name: "Shatterspleen", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Charged Perforator", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Empathy Cores", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Item Scrap, Yellow", rarity: ItemRarity.Yellow, source: ItemSource.Base, categories: [ItemCategory.Scrap], stack: [ItemStack.None] },

    // SotV Yellows
    { name: "Defense Nucleus", rarity: ItemRarity.Yellow, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },

    // Voids
    { name: "Encrusted Key", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Utility, ItemCategory.OnStageBeginEffect], stack: [ItemStack.None] },
    { name: "Polylute", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Voidsent Flame", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Needletick", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Tentabauble", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Lysate Cell", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Singularity Band", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.None] },
    { name: "Lost Seer's Lenses", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Safer Spaces", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Protective], stack: [ItemStack.Exponential] },
    { name: "Weeping Fungus", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Healing], stack: [ItemStack.Linear] },
    { name: "Plasma Shrimp", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Benthic Bloom", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Pluripotent Larva", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Newly Hatched Zoea", rarity: ItemRarity.Purple, source: ItemSource.SotV, categories: [ItemCategory.Damage, ItemCategory.Utility], stack: [ItemStack.Linear] },

    // Lunars
    { name: "Shaped Glass", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Exponential] },
    { name: "Brittle Crown", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Corpsebloom", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Healing], stack: [ItemStack.Exponential] },
    { name: "Gesture of the Drowned", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.None] },
    { name: "Strides of Heresy", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Beads of Fealty", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.None] },
    { name: "Transcendence", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility, ItemCategory.Healing], stack: [ItemStack.Exponential] },
    { name: "Spinel Tonic", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Effigy of Grief", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Glowing Meteorite", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Helfire Tincture", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Visions of Heresy", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.None] },
    { name: "Hooks of Heresy", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.None] },
    { name: "Essence of Heresy", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.None] },
    { name: "Focused Convergence", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Defiant Gouge", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.None] },
    { name: "Mercurial Rachis", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Purity", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Egocentrism", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },
    { name: "Eulogy Zero", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Special] },
    { name: "Stone Flux Pauldron", rarity: ItemRarity.Blue, source: ItemSource.Base, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },
    { name: "Light Flux Pauldron", rarity: ItemRarity.Blue, source: ItemSource.SotV, categories: [ItemCategory.Utility], stack: [ItemStack.Linear] },

    // Equipments
    { name: "Disposable Missile Launcher", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Royal Capacitor", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "The Crowdfunder", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Gnarled Woodsprite", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Preon Accumulator", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Foreign Fruit", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Radar Scanner", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Blast Shower", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Primordial Cube", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Ocular HUD", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "The Back-up", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Milky Chrysalis", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Eccentric Vase", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Volcanic Egg", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Jade Elephant", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Sawmerang", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Recycler", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Super Massive Leech", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Gorag's Opus", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Forgive Me Please", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Fuel Array", rarity: ItemRarity.Orange, source: ItemSource.Base, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },

    // Sotv Equipments
    { name: "Trophy Hunter's Tricorn", rarity: ItemRarity.Orange, source: ItemSource.SotV, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Molotov (6-Pack)", rarity: ItemRarity.Orange, source: ItemSource.SotV, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Executive Card", rarity: ItemRarity.Orange, source: ItemSource.SotV, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Goobo Jr.", rarity: ItemRarity.Orange, source: ItemSource.SotV, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },
    { name: "Remote Caffeinator", rarity: ItemRarity.Orange, source: ItemSource.SotV, categories: [ItemCategory.Equipment], stack: [ItemStack.None] },

    // Whatever else
].map(item => ({
    ...item,
    image: getItemImageUrl(item.name)
}));

// { name: "ReplaceMe", rarity: ItemRarity.White, source: ItemSource.Base, categories: [ItemCategory.Damage], stack: [ItemStack.Linear] },