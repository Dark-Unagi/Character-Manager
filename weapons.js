 // Primary Weapon database
        const primaryWeaponDatabase = [
            {
                name: "Battleaxe",
                trait: "STR",
                range: "Melee",
                damage: "d6/d12",
                feature: "1H/2H, B/S, -1 DEX",
                bonuses: { dex: -1}
            },
            {
                name: "Broad Sword",
                trait: "STR/DEX",
                range: "Melee",
                damage: "d8",
                feature: "1H, B/S",
                bonuses: {}
            },
            {
                name: "Crossbow",
                trait: "DEX",
                range: "Far",
                damage: "d6",
                feature: "1H/2H, P",
                bonuses: {}
            },
            {
                name: "Cutlass",
                trait: "DEX",
                range: "Melee",
                damage: "d8",
                feature: "1H, S",
                bonuses: {}
            },
            {
                name: "Dagger",
                trait: "DEX/INT",
                range: "Melee",
                damage: "d4",
                feature: "1H, P",
                bonuses: {}
            },
            {
                name: "Guantlets",
                trait: "STR/DEX/INT",
                range: "Melee",
                damage: "d4",
                feature: "2H, B, +1 Evasion",
                bonuses: { evasion: 1 }
            },
            {
                name: "Great Staff",
                trait: "STR/INT",
                range: "Melee",
                damage: "d10",
                feature: "2H, B, -1 DEX",
                bonuses: { dex: -1 }
            },
            {
                name: "Greatsword",
                trait: "STR",
                range: "Melee",
                damage: "d10",
                feature: "2H, B/S, -1 DEX",
                bonuses: { dex: -1 }
            },
            {
                name: "Halberd",
                trait: "STR",
                range: "Close",
                damage: "d10",
                feature: "2H, -1 DEX",
                bonuses: { dex: -1 }
            },
            {
                name: "Hallowed Axe",
                trait: "DEX/WIS",
                range: "Melee",
                damage: "d8/d10",
                feature: "1H/2H, B/S",
                bonuses: {}
            },
            {
                name: "Hand Axe",
                trait: "STR/DEX",
                range: "Melee",
                damage: "d6",
                feature: "1H, B/S",
                bonuses: {}
            },
            {
                name: "Long Bow",
                trait: "DEX",
                range: "Very Far",
                damage: "d6",
                feature: "2H, P, -1 Evasion",
                bonuses: { evasion: -1 }
            },
            {
                name: "Long Sword",
                trait: "DEX",
                range: "Melee",
                damage: "d8",
                feature: "2H, S",
                bonuses: {}
            },
            {
                name: "Mace",
                trait: "STR/WIS",
                range: "Melee",
                damage: "d8",
                feature: "1H, B",
                bonuses: {}
            },
            {
                name: "Rapier",
                trait: "DEX/CHA",
                range: "Melee",
                damage: "d6",
                feature: "1H, P",
                bonuses: {}
            },
            {
                name: "Returning Blade",
                trait: "INT/CHA",
                range: "Close",
                damage: "d6",
                feature: "1H, S",
                bonuses: {}
            },
            {
                name: "Ritual Blade",
                trait: "STR/WIS",
                range: "Melee",
                damage: "d6/d8",
                feature: "1H/2H, S",
                bonuses: {}
            },
                {
                name: "Ritual Hammer",
                trait: "STR/WIS",
                range: "Melee",
                damage: "d6/d8",
                feature: "1H/2H, S",
                bonuses: {}
            },
                {
                name: "Rune Stones",
                trait: "DEX/INT",
                range: "Close",
                damage: "d6",
                feature: "1H, F, +1 Evasion",
                bonuses: { evasion: 1 }
            },
                {
                name: "Runic Blade",
                trait: "DEX",
                range: "Melee",
                damage: "d6/d8",
                feature: "1H/2H, S",
                bonuses: {}
            },
                {
                name: "Scepter",
                trait: "INT/WIS/CHA",
                range: "Far",
                damage: "d6",
                feature: "1H, B",
                bonuses: {}
            },
                {
                name: "Shortbow",
                trait: "DEX",
                range: "FAR",
                damage: "d6",
                feature: "2H, P",
                bonuses: {}
            },
                {
                name: "Short Sword",
                trait: "DEX",
                range: "Melee",
                damage: "d6",
                feature: "1H, P",
                bonuses: {}
            },
                {
                name: "Sling",
                trait: "DEX",
                range: "Close",
                damage: "d6",
                feature: "1H, B",
                bonuses: {}
            },
                {
                name: "Spear",
                trait: "STR/WIS",
                range: "Close/Far",
                damage: "d6",
                feature: "2H, P",
                bonuses: {}
            },
                {
                name: "Quarterstaff",
                trait: "STR/DEX",
                range: "Close",
                damage: "d6",
                feature: "2H, B",
                bonuses: {}
            },
                {
                name: "Warhammer",
                trait: "STR/WIS",
                range: "Melee",
                damage: "d12",
                feature: "2H, B, -1 DEX",
                bonuses: { dex: -1 }
            },
        ];

        // Secondary Weapon database (different from primary)
        const secondaryWeaponDatabase = [
            {
                name: "Dagger",
                trait: "DEX/INT",
                range: "Melee",
                damage: "d4",
                feature: "1H, P",
                bonuses: { thresholdLower: 1 }
            },
            {
                name: "Hand Axe",
                trait: "STR/DEX",
                range: "Melee",
                damage: "d6",
                feature: "1H, B/S",
                bonuses: {}
            },
            {
                name: "Hand Crossbow",
                trait: "DEX",
                range: "Far",
                damage: "d6",
                feature: "1H, P",
                bonuses: {}
            },
            {
                name: "Mace",
                trait: "STR/WIS",
                range: "Melee",
                damage: "d8",
                feature: "1H, B",
                bonuses: {}
            },
            {
                name: "Short Sword",
                trait: "DEX",
                range: "Melee",
                damage: "d6",
                feature: "1H, P",
                bonuses: {}
            },
            {
                name: "Shield",
                trait: "STR",
                range: "Melee",
                damage: "d4",
                feature: "1H, +1 Armor, Threshold 2|2",
                bonuses: { armor: 1, thresholdLower: 2, thresholdUpper: 2 }
            },
            {
                name: "Tower Shield",
                trait: "STR",
                range: "Melee",
                damage: "d4",
                feature: "1H, +3 Armor, Threshold 5|5, -2 Evasion",
                bonuses: { armor: 3, thresholdLower: 5, thresholdUpper: 5, evasion: -2 }
            },
        ];

        // Armor database - Tier 1
        const armorDatabaseTier1 = [
            {
                name: "No Armor",
                thresholdLower: 3,
                thresholdUpper: 5,
                armor: 0,
                feature: "+2 Evasion",
                bonuses: { thresholdLower: 3, thresholdUpper: 5, evasion: 2 }
            },
            {
                name: "Padded",
                thresholdLower: 5,
                thresholdUpper: 11,
                armor: 2,
                feature: "+1 Evasion",
                bonuses: { thresholdLower: 5, thresholdUpper: 11, armor: 2, evasion: 1 }
            },
            {
                name: "Leather",
                thresholdLower: 6,
                thresholdUpper: 13,
                armor: 3,
                feature: "",
                bonuses: { thresholdLower: 6, thresholdUpper: 13, armor: 3 }
            },
            {
                name: "Chain",
                thresholdLower: 7,
                thresholdUpper: 15,
                armor: 4,
                feature: "-1 Evasion",
                bonuses: { thresholdLower: 7, thresholdUpper: 15, armor: 4, evasion: -1 }
            },
            {
                name: "Plate",
                thresholdLower: 8,
                thresholdUpper: 17,
                armor: 5,
                feature: "-2 Evasion, -1 DEX",
                bonuses: { thresholdLower: 8, thresholdUpper: 17, armor: 5, evasion: -2, dex: -1 }
            },
        ];

        // Armor database - Tier 2 (+10 to both thresholds)
        const armorDatabaseTier2 = [
            {
                name: "No Armor",
                thresholdLower: 13,
                thresholdUpper: 15,
                armor: 0,
                feature: "+2 Evasion",
                bonuses: { thresholdLower: 13, thresholdUpper: 15, evasion: 2 }
            },
            {
                name: "Padded",
                thresholdLower: 15,
                thresholdUpper: 21,
                armor: 2,
                feature: "+1 Evasion",
                bonuses: { thresholdLower: 15, thresholdUpper: 21, armor: 2, evasion: 1 }
            },
            {
                name: "Leather",
                thresholdLower: 16,
                thresholdUpper: 23,
                armor: 3,
                feature: "",
                bonuses: { thresholdLower: 16, thresholdUpper: 23, armor: 3 }
            },
            {
                name: "Chain",
                thresholdLower: 17,
                thresholdUpper: 25,
                armor: 4,
                feature: "-1 Evasion",
                bonuses: { thresholdLower: 17, thresholdUpper: 25, armor: 4, evasion: -1 }
            },
            {
                name: "Plate",
                thresholdLower: 18,
                thresholdUpper: 27,
                armor: 5,
                feature: "-2 Evasion, -1 DEX",
                bonuses: { thresholdLower: 18, thresholdUpper: 27, armor: 5, evasion: -2, dex: -1 }
            },
        ];

        // Armor database - Tier 3 (+20 to both thresholds from Tier 1)
        const armorDatabaseTier3 = [
            {
                name: "No Armor",
                thresholdLower: 23,
                thresholdUpper: 25,
                armor: 0,
                feature: "+2 Evasion",
                bonuses: { thresholdLower: 23, thresholdUpper: 25, evasion: 2 }
            },
            {
                name: "Padded",
                thresholdLower: 25,
                thresholdUpper: 31,
                armor: 2,
                feature: "+1 Evasion",
                bonuses: { thresholdLower: 25, thresholdUpper: 31, armor: 2, evasion: 1 }
            },
            {
                name: "Leather",
                thresholdLower: 26,
                thresholdUpper: 33,
                armor: 3,
                feature: "",
                bonuses: { thresholdLower: 26, thresholdUpper: 33, armor: 3 }
            },
            {
                name: "Chain",
                thresholdLower: 27,
                thresholdUpper: 35,
                armor: 4,
                feature: "-1 Evasion",
                bonuses: { thresholdLower: 27, thresholdUpper: 35, armor: 4, evasion: -1 }
            },
            {
                name: "Plate",
                thresholdLower: 28,
                thresholdUpper: 37,
                armor: 5,
                feature: "-2 Evasion, -1 DEX",
                bonuses: { thresholdLower: 28, thresholdUpper: 37, armor: 5, evasion: -2, dex: -1 }
            },
        ];