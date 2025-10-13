// Spell Groups/Blocks for Each Class
const spellLists = {
    'Bard': [
        {
            groupName: "Bard 1",
            spells: [
                {
                    name: "Alarm <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Be alerted of the presence of danger.</li><li>- For 1 addition stress the spell can instead target the caster and the Alarm moves with them detecting danger within Close range.</li></ul>",
                    range: "Close",
                    duration: "8 Hours <i class='text-sm text-orange-500'>(Static)</i> / 10 Minutes <i class='text-sm text-orange-500'>(Moving)</i>",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Bard 2",
            spells: [
                {
                    name: "Bless <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 and add to the target's Attack, Save or Skill rolls by the result.</li><li>- Until combat ends.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Bard 3",
            spells: [
                {
                    name: "Disguise Self <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Can alter your basic appearance and any items you are wearing.</li><li>- You can't change the body type (extra limbs etc).</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Alter Self <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can change the properties of your body and its basic appearance.</li><li>- Examples: Aquatic Adaptation (gills and webbing), Natural Claw Weapons (magical), Change Appearance(Height, Facial)</li><li>- You will still remain humanoid in appearance.</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Enlarge/Reduce <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Enlarge or Shrink the target.</li><li>- Enlarge: Size increases by one (medium to large). Weight times 8, Advantage on STR checks.</li><li>- Reduce: Size decreases by one (medium to small). Weight shrinks times 8, Disadvantage on STR checks. </li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "CON",
                    damage: "<ul><li><b>Enlarge</b> - Add 2 extra die to damage rolls.</li><li><b>Reduce</b> - Remove 2 die from damage rolls.</li></ul>"
                }
            ]
        },
                {
            groupName: "Bard 4",
            spells: [
                {
                    name: "Feather Fall <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- Their falling slows to a safe speed. </li><li>- There is no control over direction other than gravity and down. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Levitate <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- The caster has the ability to raise or lower the target relative to the ground by 20ft per action. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Fly <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- They can move 2 distances per action.</li><li>- It gains the ability to fly and control their actions in the air.</li><li>- The target can move 2 distances per action.</li><li>- Add 2 Stress to increase the number of target creatures.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Bard 5",
            spells: [
                {
                    name: "Friends <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You gain Advantage on Charisma Rolls.</li><li>- Reduces hostility towards you from NPCs. </li><li>- It does not work if the creature is already hostile to you.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Command <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Speak a simple command word that the target must do to the best of their ability.</li><li>- The target will not stop until the command has be fulfilled or they take damage.</li><li>- The target will not self harm.</li></ul>",
                    range: "Far",
                    duration: "Instant <i class='text-sm text-orange-500'>Special</i>",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Charm Person <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 Target. </li><li>- They become your best friend, willing to defend you at all costs. </li><li>- They will listen to your advice and heed your words. To the best of their ability.</li><li>- They will not self harm. (They are aware they have been charmed after the spell has ended.)</li></ul>",
                    range: "Close",
                    duration: "1 Hour",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Bard 6",
            spells: [
                {
                    name: "Light <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Creates an area of Light up to 2 distances.</li></ul>",
                    range: "Touch",
                    duration: "1 Hour",
                    save: "DEX",
                    damage: ""
                },
                {
                    name: "Darkness <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Creates an area of Darkness up to 2 distances. </li><li>- The spell also ends any Light Spell cast on the area.</li><li>- Nothing can see in or out unless the creature has other means to do so such as Blind Sight, True Sight.</li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Daylight <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Creates illumination equal to that of noon.</li><li>- The spell will remove any aspect of the Darkness spell, or natural darkness.</li><li>- Any creature that is Vulnerable to Daylight Rolls at Disadvantage.</li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Bard 7",
            spells: [
                {
                    name: "Mage Hand <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create a magical hand of force. The hand can be transparent or visible.</li><li>- The hand has a STR mod equal to your own and is able to take simple actions like opening door, pulling levels, retrieving objects, push or pull an object.</li><li>- It can not do damage.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Bard 8",
            spells: [
                {
                    name: "Magic Missile <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Send a dart of energy, the dart will always hit its target and no Attack roll is made.</li><li>- For 1 Spell Point you may create an additional dart.</li><li>- Each dart can be individually controlled.</li><li>Cannot use Weapon Proficiency to increase damage.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d4 + Modifier"
                },
            ]
        },
                {
            groupName: "Bard 9",
            spells: [
                {
                    name: "Mending <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The spell repairs any small object. </li><li>- The object can be no bigger than 1m².</li><li>- It does not return any magical effect the item might have had.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Bard 10",
            spells: [
                {
                    name: "Minor Illusion <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create an image <u>or</u> sound at a location within range, but not both.</li><li>- Creatures that do not rely on sight or sound are unaffected by the spell.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "INT",
                    damage: ""
                },
                {
                    name: "Major Image <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Create an image <u>with</u> sound at a location within range.</li><li>- Creatures that do not rely on sight or sound are unaffected by the spell.</li></ul>",
                    range: "Far",
                    duration: "10 Minutes",
                    save: "INT",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Bard 11",
            spells: [
                {
                    name: "Shatter <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- All creatures in a Melee must make a Save or take full damage (Half on a Success).</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "CON",
                    damage: "1d8"
                },
            ]
        },
                {
            groupName: "Bard 12",
            spells: [
                {
                    name: "Haste <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Gains Evasion equal to +2.</li><li>- Advantage on DEX Saves.</li><li>- Can action twice a turn.</li><li>- The creature takes 1 Stress when the spell ends.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Slow <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- A selected target has -2 to Evasion.</li><li>- Disadvantage on DEX Saves.</li><li>- Cannot react, or use skills that require Stress or GM tokens.</li><li>- Creature takes 1 Stress when spell ends.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Bard 13",
            spells: [
                {
                    name: "Silence <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select an area and remove the sound that comes from it.</li><li>- Within the area verbal communication is impossible.</li><li>- Spell casting requires an Arcane DC15. <i class='text-sm text-orange-500'>(Including for the caster of this spell.)</i> </li></ul>",
                    range: "Close",
                    duration: "Instant/2 Rounds",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Bard 14",
            spells: [
                {
                    name: "Legend Lore <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Name or describe a famous person, place, or object.</li><li>- The spell brings to your mind a brief summary of the significant lore about that selection, as described by the GM.</li><li>- If the thing you named isn't of 'legendary' importance, you gain no information.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        // Add more Bard spell groups here
    ],
    'Cleric': [
        {
            groupName: "Cleric 1",
            spells: [
                {
                    name: "Bane <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 and reduce the target\'s Attack, Save or Skill rolls by the result.</li><li>- Until combat ends.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "CHA",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Cleric 2",
            spells: [
                {
                    name: "Bless <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 and add to the target's Attack, Save or Skill rolls by the result.</li><li>- Until combat ends.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 3",
            spells: [
                {
                    name: "Cure Wounds <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- Roll 1d4 and add the result to the target's Hit Points.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mass Cure Wounds <i class='text-sm text-orange-500'>2 Spell / 1 Class</i>",
                    description: "<ul><li>- Roll 2d4.</li><li>- Allocate the results to Hit Points of 1 ally or multiple within range. </li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Prayer of Healing <i class='text-sm text-orange-500'>2 Spell / 2 Class</i>",
                    description: "<ul><li>- Roll 2d4.</li><li>- Allocate the results to Hit Points or Stress to an ally or multiple in range. </li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Regenerate <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 the results is returned to the creatures Hit Points at the start of each of their turns.<li>- Targets gain <b>+5 | +5 Threshold</b> during the spell's duration (to offset incoming damage).</li><li>- Extend duration by spending <b>1 Stress</b> per additional round.</li><li>- Until the end of combat.</li></ul>",
                    range: "Touch",
                    duration: "Instant / 4 Rounds",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Cleric 4",
            spells: [
                {
                    name: "Detect Poison <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You can locate any poison within range.</li><li>- You can also learn the type.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Detect Good/Evil <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Choose Good or Evil.</li><li>- Within range you can decern the alignment of a creature, object or area.</li></ul>",
                    range: "Close",
                    duration: "Concentration, up to 1 hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Detect Magic <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Within range you can decern the direction of magic.</li></ul>",
                    range: "Far",
                    duration: "Concentration, up to 1 hour",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Cleric 5",
            spells: [
                {
                    name: "Inflict Wounds <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target</li><li>- High Damage add an extra die to damage beyond your proficiency. </li><li>- And 1 more for each additional Stress.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "2d6"
                },
            ]
        },
                {
            groupName: "Cleric 6",
            spells: [
               {
                    name: "Mending <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The spell repairs any small object. </li><li>- The object can be no bigger than 1m².</li><li>- It does not return any magical effect the item might have had.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 7",
            spells: [
                {
                    name: "Protection from Poison <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- The target has Advantage on Poison Saves.</li><li>- Can also remove 1 poison if the target is currently poisoned.</li></ul>",
                    range: "Touch",
                    duration: "Instant/1 Round",
                    save: "",
                    damage: ""
                },
                {
                    name: "Protection from Good/Evil <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Fey, Fiends and Undead have Disadvantage against those with Protection.</li><li>- The target can't be Charmed or Frightened by either of the three creature types.</li></ul>",
                    range: "Touch",
                    duration: "Instant/2 Rounds",
                    save: "",
                    damage: ""
                },
                {
                    name: "Protection from Energy <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target it gains the following:</li><li>- Give the target Resistance against a certain type of damage.</li><li>- The Caster can choose: acid, cold, fire, lightning, or thunder.</li></ul>",
                    range: "Touch",
                    duration: "Instant/3 Rounds",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Cleric 8",
            spells: [
                {
                    name: "Resistance <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target can roll 1d6 and add it to any Saving Throw before or after the roll.</li><li>- But not after knowing the result.</li></ul>",
                    range: "Touch",
                    duration: "Instant/1 Round",
                    save: "",
                    damage: ""
                },
                {
                    name: "Barkskin <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target gains 3 Armor Slots.</li></ul>",
                    range: "Touch",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: "1d6 piercing damage"
                },
            ]
        },
                {
            groupName: "Cleric 9",
            spells: [
                {
                    name: "Sanctuary <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- When the target is attacked, first make a WIS Save. On a fail the attacker must choose another target.</li><li>- The spell does not work against Area of affect spells and attacks.</li><li>- The Sanctuary is broken if the target attacks.</li><li>- They can return if they use a Stress to do so.</li></ul>",
                    range: "Touch",
                    duration: "Instant/3 Rounds",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 10",
            spells: [
                {
                    name: "Shillelagh <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Your weapon becomes magical and gains +1 to Attack Rolls.</li><li>- Add +1 to all Damage dice rolled.</li></ul>",
                    range: "Self",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: ""
                },
                {
                    name: "Spiritual Weapon <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create a weapon image of your choice and place it in Close range.</li><li>- The Weapon has +1 Attack.</li><li>- The weapon can attack and move on your turn.</li></ul>",
                    range: "Close",
                    duration: "Until end of combat.",
                    save: "",
                    damage: "1d6 per Spell Point used."
                }
            ]
        },
                {
            groupName: "Cleric 11",
            spells: [
                {
                    name: "Spare the Dying <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target that is unconscious and dying.</li><li>- The target becomes stable.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Raise the Dead <i class='text-sm text-orange-500'>9 Spell</i>",
                    description: "<ul><li>- Select 1 target that is dead. </li><li>- The target returns to life with 1d4 Hit Points and Stress.</li><li>- Being Raised is an ordeal and until a Short Rest, the target has Disadvantage on all rolls.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Cleric 12",
            spells: [
                {
                    name: "Speak with Animals <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li.- For the duration the target can speak with and understand animals of the wild.</li><li>- If the creature is not intelligent enough, they may experience emotions, instinct or some other form of communication.</li></ul>",
                    range: "Close",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                {
                    name: "Speak with Plants <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- For the duration the target can speak with plants.</li><li>- In reply the the target gains a sense of feeling and insight from the plant.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 13",
            spells: [
                {
                    name: "Beacon of Hope <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- Add (Divine)1d12 to Divine Rolls.</li><li>- Recover 1 Stress.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 14",
            spells: [
                {
                    name: "Bestow Curse <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target,</li><li>- Choose an ability score and give all rolls Disadvantage with the ability.</li><li>- Remove a Stress and it cannot be returned until the spell's duration ends.</li><li>- Add 1d12(Fate) to Divine Rolls.</li></ul>",
                    range: "Close",
                    duration: "1 Day",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Remove Curse <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Removes the effects from a curse spell.</li><li>- If the curse is bestowed on an item the curse remains, but the hold on the creature is broken.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Cleric 15",
            spells: [
                {
                    name: "Blindness/Deafness <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Force them to become either blind or deaf, caster's choice.</li></ul>",
                    range: "Touch",
                    duration: "Instant/2 Rounds",
                    save: "CON",
                    damage: ""
                },
                {
                    name: "Silence <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select an area and remove the sound that comes from it.</li><li>- Within the area verbal communication is impossible.</li><li>- Spell casting requires an Arcane DC15. (Including for the caster of this spell.) </li></ul>",
                    range: "Close",
                    duration: "Instant/2 Rounds",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Cleric 16",
            spells: [
                {
                    name: "Calm Emotions <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target <li><li>- Roll 1d4 and recover the results in Stress.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 17",
            spells: [
                {
                    name: "Clairvoyance <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Simple 'Yes' or 'No' questions.</li><li>- Related to anything within close range.</li><li>- Example: Is the door Trapped? Is there Danger on the other side of this door?</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Divination <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Ask your deity a simple question and expect a reply in the form of a feeling.</li><li>- Strong, Moderate, Weak, Unsure.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Scrying <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Send a sensor to a location, or to a target.</li><li>- If the location or the target are unknown or unfamiliar to the caster, make a Divine roll.</li><li>- If the target is specifically a creature, the target can roll a Save to prevent it.</li></ul>",
                    range: "Special",
                    duration: "10 Minute",
                    save: "WIS",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 18",
            spells: [
                {
                    name: "Enhance Ability <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target and an Ability Score.</li><li>- Roll 1d4 and add the result to the target's ability of choice.</li></ul>",
                    range: "Touch",
                    duration: "Instant/Until after a long rest.",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 19",
            spells: [
                {
                    name: "Shield of Faith <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Gain a +3 bonus to Evasion for the duration.</li><li>- Increase Threshold by 5 | 10</li><li>- Any target of this spell that takes damage can transfer 1 Hit to the caster.</li><li>- The caster can increase the duration in rounds for each Stress used.</li></ul>",
                    range: "Close",
                    duration: "Instant/1 Rounds",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 20",
            spells: [
                {
                    name: "Zone of Truth <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select an area of effect. No bigger than 20ft.</li><li>- Any creature within the area must make the Save.</li><li>- On a fail the creature can not tell a lie for the duration or as long as they remain in the zone.</li><li>- The creature is not compelled to answer.</li></ul>",
                    range: "Close",
                    duration: "10 Minutes",
                    save: "CHA",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 21",
            spells: [
                {
                    name: "Heal <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- This spell ends one of blindness, deafness, and any diseases affecting the target.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mass Heal <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1d4 targets</li><li>- This spell also ends blindness, deafness, and any diseases.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 22",
            spells: [
                {
                    name: "Lesser Restoration <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed or Poisoned.</li><li>- Also recover 1d4 Stress.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Greater Restoration <i class='text-sm text-orange-500'>4 Spell / 1 Class</i>",
                    description: "<ul><li>- You touch 1 creature and end one of the below:</li><li>- One effect that charmed or petrified the target.</li><li>- Any reduction to a target's level.</li><li>- Any reduction to one of the target's ability scores.</li><li>- Any effect reducing the target's hit point maximum.</li><li>- Also recover 1d6 Stress.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 23",
            spells: [
                {
                    name: "Locate Creature <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- You sense the direction of the creature you think of.</li><li>- If the creature is not unique, the caster will sense the closest option.</li><li>- The caster can sense the direction of movement if the creature is not stationary.</li></ul>",
                    range: "Very Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 24",
            spells: [
                {
                    name: "Warding Bond <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target that is in the same distance range as the caster.</li><li>- The target gains the following:</li><li>- +1 to Attack and Save rolls.</li><li>- Resistance to all damage.</li><li>- The spell ends if the target or caster moves to another range distance.</li></ul>",
                    range: "Very Close",
                    duration: "Instant/3 Rounds",
                    save: "",
                    damage: ""
                },
                {
                    name: "Death Ward <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- If it drops to 0HP it instead drops to 1HP.</li><li>- If the target drops to <b>1 HP</b>, they also recover <b>1 Stress</b> as a morale boost.</li><li>- The spell is spent once the effect has occurred.</li></ul>",
                    range: "Touch",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Cleric 25",
            spells: [
                {
                    name: "Holy Aura <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Any ally within Melee range can add +2 to an Attack or Save Roll.</li><li>- If the target should use Stress but does not have the Resource to give, they may roll Divine Dice to determine the result. </li><li>- <b>A success:</b> The action happens as desired. </li><li>- <b>A failure:>/b> The action does not happen and their turn ends.</li></ul>",
                    range: "Self",
                    duration: "Until end of combat.",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 26",
            spells: [
                {
                    name: "Flame Strike <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select a point out to Close range.</li><li>- From the your pointing finger a stream of hot Fire and Radiant energy burns forth.</li><li>- Hit all targets in the line.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d8"
                },
                {
                    name: "Fire Storm <i class='text-sm text-orange-500'>5 Spell / 1 Class</i>",
                    description: "<ul><li>- Select a 20ft area and fire spins in a typhoon.</li><li>- A creature moving into or is already within the area at the start of their turn takes Fire damage.</li><li>- It also removes the oxygen from within the area.</li><li>- Anyone within the area must make a Save to hold their breath or remove a Stress.</li><li>- Can use a Class Point to move the storm to a new area. </li></ul>",
                    range: "Far",
                    duration: "Instant/5 Rounds",
                    save: "CON",
                    damage: "1d10"
                }
            ]
        },
                {
            groupName: "Cleric 27",
            spells: [
                {
                    name: "Legend Lore <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Name or describe a famous person, place, or object.</li><li>- The spell brings to your mind a brief summary of the significant lore about that selection, as described by the GM.</li><li>- If the thing you named isn't of 'legendary' importance, you gain no information.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 28",
            spells: [
                {
                    name: "Find the Path <i class='text-sm text-orange-500'>5 Spell</i>",
                    description: "<ul><li>- Must be in the Wilderness.</li></li><li>- You automatically know the fastest and most direct path to a location.</li><li>- Rolls for survival are with Advantage.</li><li>- You can not become lost.</li></ul>",
                    range: "Self",
                    duration: "Instant/Until after a long rest.",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Cleric 29",
            spells: [
                {
                    name: "True Seeing <i class='text-sm text-orange-500'>9 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target can see beyond the spectrum of normal vision.</li><li>- <b>Darkness.</b> You can see in normal and magical Darkness with no penalty.</li><li>- <b>Invisibility.</b> You see creatures and objects that have the Invisible condition.</li><li>- <b>Visual Illusions.</b> Visual illusions appear transparent to you, and you automatically succeed on saving throws against them.</li><li>- <b>Transformations.</b> You discern the true form of any creature or object you see that has been transformed by magic.</li><li>- <b>Ethereal Plane.</b> You see into the Ethereal Plane.</li><li>- The target cannot interact with anything on the Ethereal Plane unless you are also on the Ethereal Plane.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
            ]
        },
        // Add more Cleric spell groups here
    ],
    'Druid': [
        {
            groupName: "Druid 1",
            spells: [
                {
                    name: "Resistance <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target can roll 1d6 and add it to any Saving Throw before or after the roll.</li><li>- But not after knowing the result.</li></ul>",
                    range: "Touch",
                    duration: "Instant/1 Round",
                    save: "",
                    damage: ""
                },
                {
                    name: "Barkskin <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target gains 3 Armor Slots.</li></ul>",
                    range: "Touch",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: "1d6 piercing damage"
                },
            ]
        },
        {
            groupName: "Druid 2",
            spells: [
                {
                    name: "Cure Wounds <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- Roll 1d4 and add the result to the target's Hit Points.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mass Cure Wounds <i class='text-sm text-orange-500'>2 Spell / 1 Class</i>",
                    description: "<ul><li>- Roll 2d4.</li><li>- Allocate the results to Hit Points of 1 ally or multiple within range. </li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Prayer of Healing <i class='text-sm text-orange-500'>2 Spell / 2 Class</i>",
                    description: "<ul><li>- Roll 2d4.</li><li>- Allocate the results to Hit Points or Stress to an ally or multiple in range. </li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Regenerate <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 the results is returned to the creatures Hit Points at the start of each of their turns.<li>- Targets gain <b>+5 | +5 Threshold</b> during the spell's duration (to offset incoming damage).</li><li>- Extend duration by spending <b>1 Stress</b> per additional round.</li><li>- Until the end of combat.</li></ul>",
                    range: "Touch",
                    duration: "Instant / 4 Rounds",
                    save: "",
                    damage: ""
                }
            ]
        },
        {
            groupName: "Druid 3",
            spells: [
                {
                    name: "Speak with Animals <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li.- For the duration the target can speak with and understand animals of the wild.</li><li>- If the creature is not intelligent enough, they may experience emotions, instinct or some other form of communication.</li></ul>",
                    range: "Close",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                {
                    name: "Speak with Plants <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- For the duration the target can speak with plants.</li><li>- In reply the the target gains a sense of feeling and insight from the plant.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Druid 4",
            spells: [
                {
                    name: "Calm Emotions <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target <li><li>- Roll 1d4 and recover the results in Stress.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Druid 5",
            spells: [
                {
                    name: "Heal <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- This spell ends one of blindness, deafness, and any diseases affecting the target.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mass Heal <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1d4 targets</li><li>- This spell also ends blindness, deafness, and any diseases.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Druid 6",
            spells: [
                {
                    name: "Lesser Restoration <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed or Poisoned.</li><li>- Also recover 1d4 Stress.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Greater Restoration <i class='text-sm text-orange-500'>4 Spell / 1 Class</i>",
                    description: "<ul><li>- You touch 1 creature and end one of the below:</li><li>- One effect that charmed or petrified the target.</li><li>- Any reduction to a target's level.</li><li>- Any reduction to one of the target's ability scores.</li><li>- Any effect reducing the target's hit point maximum.</li><li>- Also recover 1d6 Stress.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Druid 7",
            spells: [
                {
                    name: "Locate Creature <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- You sense the direction of the creature you think of.</li><li>- If the creature is not unique, the caster will sense the closest option.</li><li>- The caster can sense the direction of movement if the creature is not stationary.</li></ul>",
                    range: "Very Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Druid 8",
            spells: [
                {
                    name: "Find the Path <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Must be in the Wilderness.</li></li><li>- You automatically know the fastest and most direct path to a location.</li><li>- Rolls for survival are with Advantage.</li><li>- You can not become lost.</li></ul>",
                    range: "Self",
                    duration: "Instant/Until after a long rest.",
                    save: "",
                    damage: ""
                },
            ]
        }
        // Add more Druid spell groups here
    ],
    'Paladin': [
        {
            groupName: "Paladin 1",
            spells: [
                {
                    name: "Bane <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 and reduce the target\'s Attack, Save or Skill rolls by the result.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "CHA",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Paladin 2",
            spells: [
                {
                    name: "Bless <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 and add to the target's Attack, Save or Skill rolls by the result.</li><li>- Until combat ends.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Paladin 3",
            spells: [
                {
                    name: "Cure Wounds <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- Roll 1d4 and add the result to the target's Hit Points.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mass Cure Wounds <i class='text-sm text-orange-500'>2 Spell / 1 Class</i>",
                    description: "<ul><li>- Roll 2d4.</li><li>- Allocate the results to Hit Points of 1 ally or multiple within range. </li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Prayer of Healing <i class='text-sm text-orange-500'>2 Spell / 2 Class</i>",
                    description: "<ul><li>- Roll 2d4.</li><li>- Allocate the results to Hit Points or Stress to an ally or multiple in range. </li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Regenerate <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 the results is returned to the creatures Hit Points at the start of each of their turns.<li>- Targets gain <b>+5 | +5 Threshold</b> during the spell's duration (to offset incoming damage).</li><li>- Extend duration by spending <b>1 Stress</b> per additional round.</li><li>- Until the end of combat.</li></ul>",
                    range: "Touch",
                    duration: "Instant / 4 Rounds",
                    save: "",
                    damage: ""
                }
            ]
        },
        {
            groupName: "Paladin 4",
            spells: [
                {
                    name: "Detect Poison <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You can locate any poison within range.</li><li>- You can also learn the type.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Detect Good/Evil <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Choose Good or Evil.</li><li>- Within range you can decern the alignment of a creature, object or area.</li></ul>",
                    range: "Close",
                    duration: "Concentration, up to 1 hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Detect Magic <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Within range you can decern the direction of magic.</li></ul>",
                    range: "Far",
                    duration: "Concentration, up to 1 hour",
                    save: "",
                    damage: ""
                }
            ]
        },
                        {
            groupName: "Paladin 5",
            spells: [
                {
                    name: "Protection from Poison <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- The target has Advantage on Poison Saves.</li><li>- Can also remove 1 poison if the target is currently poisoned.</li></ul>",
                    range: "Touch",
                    duration: "Instant/1 Round",
                    save: "",
                    damage: ""
                },
                {
                    name: "Protection from Good/Evil <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Fey, Fiends and Undead have Disadvantage against those with Protection.</li><li>- The target can't be Charmed or Frightened by either of the three creature types.</li></ul>",
                    range: "Touch",
                    duration: "Instant/2 Rounds",
                    save: "",
                    damage: ""
                },
                {
                    name: "Protection from Energy <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target it gains the following:</li><li>- Give the target Resistance against a certain type of damage.</li><li>- The Caster can choose: acid, cold, fire, lightning, or thunder.</li></ul>",
                    range: "Touch",
                    duration: "Instant/3 Rounds",
                    save: "",
                    damage: ""
                }
            ]
        },
        {
            groupName: "Paladin 6",
            spells: [
                {
                    name: "Beacon of Hope <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- Add (Divine)1d12 to Divine Rolls.</li><li>- Recover 1 Stress.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Paladin 7",
            spells: [
                {
                    name: "Shield of Faith <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Gain a +3 bonus to Evasion for the duration.</li><li>- Increase Threshold by 5 | 10</li><li>- Any target of this spell that takes damage can transfer 1 Hit to the caster.</li><li>- The caster can increase the duration in rounds for each Stress used.</li></ul>",
                    range: "Close",
                    duration: "Instant/1 Rounds",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Paladin 8",
            spells: [
                {
                    name: "Zone of Truth <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select an area of effect. No bigger than 20ft.</li><li>- Any creature within the area must make the Save.</li><li>- On a fail the creature can not tell a lie for the duration or as long as they remain in the zone.</li><li>- The creature is not compelled to answer.</li></ul>",
                    range: "Close",
                    duration: "10 Minutes",
                    save: "CHA",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Paladin 9",
            spells: [
                {
                    name: "Heal <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- This spell ends one of blindness, deafness, and any diseases affecting the target.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mass Heal <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1d4 targets</li><li>- This spell also ends blindness, deafness, and any diseases.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                }
            ]
        },
        {
            groupName: "Paladin 10",
            spells: [
                {
                    name: "Holy Aura <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Any ally within Melee range can add +2 to an Attack or Save Roll.</li><li>- If the target should use Stress but does not have the Resource to give, they may roll Divine Dice to determine the result. </li><li>- <b>A success:</b> The action happens as desired. </li><li>- <b>A failure:>/b> The action does not happen and their turn ends.</li></ul>",
                    range: "Self",
                    duration: "Until end of combat.",
                    save: "",
                    damage: ""
                },
            ]
        },
        // Add more Paladin spell groups here
    ],
    'Ranger': [
        {
            groupName: "Ranger 1",
            spells: [
                {
                    name: "Alarm <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Be alerted of the presence of danger.</li><li>- For 1 addition stress the spell can instead target the caster and the Alarm moves with them detecting danger within Close range.</li></ul>",
                    range: "Close",
                    duration: "8 Hours (Static) / 10 Minutes (Moving)",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Ranger 2",
            spells: [
                {
                    name: "Disguise Self <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Can alter your basic appearance and any items you are wearing.</li><li>- You can't change the body type (extra limbs etc).</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Alter Self <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can change the properties of your body and its basic appearance.</li><li>- Examples: Aquatic Adaptation (gills and webbing), Natural Claw Weapons (magical), Change Appearance(Height, Facial)</li><li>- You will still remain humanoid in appearance.</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Enlarge/Reduce <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Enlarge or Shrink the target.</li><li>- Enlarge: Size increases by one (medium to large). Weight times 8, Advantage on STR checks.</li><li>- Reduce: Size decreases by one (medium to small). Weight shrinks times 8, Disadvantage on STR checks. </li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "CON",
                    damage: "<ul><li><b>Enlarge</b> - Add 2 extra die to damage rolls.</li><li><b>Reduce</b> - Remove 2 die from damage rolls.</li></ul>"
                }
            ]
        },
        {
            groupName: "Ranger 3",
            spells: [
                {
                    name: "Jump <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Your jump distance is tripled until the spell ends.</li></ul>",
                    range: "Touch",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Ranger 4",
            spells: [
                {
                    name: "Enhance Ability <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target and an Ability Score.</li><li>- Roll 1d4 and add the result to the target's ability of choice.</li></ul>",
                    range: "Touch",
                    duration: "Instant/Until after a long rest.",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Ranger 5",
            spells: [
                {
                    name: "Heal <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 target</li><li>- This spell ends one of blindness, deafness, and any diseases affecting the target.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mass Heal <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1d4 targets</li><li>- This spell also ends blindness, deafness, and any diseases.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                }
            ]
        },
        {
            groupName: "Ranger 6",
            spells: [
                {
                    name: "Locate Creature <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- You sense the direction of the creature you think of.</li><li>- If the creature is not unique, the caster will sense the closest option.</li><li>- The caster can sense the direction of movement if the creature is not stationary.</li></ul>",
                    range: "Very Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
            ]
        },
        {
            groupName: "Ranger 7",
            spells: [
                {
                    name: "Flame Strike <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select a point out to Close range.</li><li>- From the your pointing finger a stream of hot Fire and Radiant energy burns forth.</li><li>- Hit all targets in the line.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d8"
                },
            ]
        },
        {
            groupName: "Ranger 8",
            spells: [
                {
                    name: "Find the Path <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Must be in the Wilderness.</i></li><li>- You automatically know the fastest and most direct path to a location.</li><li.>- Rolls for survival are with Advantage.</li><li>- You can not become lost.</li></ul>",
                    range: "Self",
                    duration: "Instant/Until after a long rest.",
                    save: "",
                    damage: ""
                },
            ]
        }
        // Add more Ranger spell groups here
    ],
    'Sorcerer': [
        {
            groupName: "Sorcerer 1",
            spells: [
                {
                    name: "Bane <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 and reduce the target\'s Attack, Save or Skill rolls by the result.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "CHA",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Sorcerer 2",
            spells: [
                {
                    name: "Chill Touch <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The target has -1 on Attack Rolls.</li></ul>",
                    range: "Melee",
                    duration: "Instant/Until end of target's next turn.",
                    save: "",
                    damage: "1d4"
                },
                {
                    name: "Shocking Grasp <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can select up to 2 targets in melee range.</li><li>- Can make two attacks rolls (one for each hand).</li><li>- Any creature that takes damage will have Disadvantage on next roll.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "1d8"
                },
                {
                    name: "Burning Hands <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Target takes Continuous Damage at the start of your next turn.</li><li>- Add another round of damage for each additional Stress used.</li></ul>",
                    range: "Melee",
                    duration: "Instant / 2 Rounds",
                    save: "",
                    damage: "1d8"
                },
                {
                    name: "Inflict Wounds <i class='text-sm text-orange-500'>1 Spell / 3 Stress</i>",
                    description: "<ul><li>- Select 1 target</li><li>- High Damage add an extra die to damage beyond your proficiency. </li><li>- And 1 more for each additional Stress.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "2d6"
                },
                {
                    name: "Vampiric Touch <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The Hit damage is returned to the casters Hit Point total.</li><li>- But not beyond their current max.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "1d8"
                }
            ]
        },
        {
            groupName: "Sorcerer 3",
            spells: [
                {
                    name: "Chromatic Orb <i class='text-sm text-orange-500'>X Spell</i>",
                    description: "<ul><li>- An Orb that finds its target, even hidden behind cover.</li><li>- On a failed Save.</li><li>2 SP = Target takes Damage only.</li><li>3 SP = Target takes Damage and is Blinded.</li><li>4 SP = Target takes Damage and is forced 3 Stress.</li><li>5 SP = Causes death on a failed save, but only against creatures with HP ≤ 3. Otherwise takes Damage.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "CON",
                    damage: "1d6"
                },
            ]
        },
                {
            groupName: "Sorcerer 4",
            spells: [
                {
                    name: "Disguise Self <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Can alter your basic appearance and any items you are wearing.</li><li>- You can't change the body type (extra limbs etc).</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Alter Self <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can change the properties of your body and its basic appearance.</li><li>- Examples: Aquatic Adaptation (gills and webbing), Natural Claw Weapons (magical), Change Appearance(Height, Facial)</li><li>- You will still remain humanoid in appearance.</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Enlarge/Reduce <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Enlarge or Shrink the target.</li><li>- Enlarge: Size increases by one (medium to large). Weight times 8, Advantage on STR checks.</li><li>- Reduce: Size decreases by one (medium to small). Weight shrinks times 8, Disadvantage on STR checks. </li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "CON",
                    damage: "<ul><li><b>Enlarge</b> - Add 2 extra die to damage rolls.</li><li><b>Reduce</b> - Remove 2 die from damage rolls.</li></ul>"
                }
            ]
        },
                {
            groupName: "Sorcerer 5",
            spells: [
                {
                    name: "Feather Fall <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- Their falling slows to a safe speed. </li><li>- There is no control over direction other than gravity and down. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Levitate <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- The caster has the ability to raise or lower the target relative to the ground by 20ft per action. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Fly <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- They can move 2 distances per action.</li><li>- It gains the ability to fly and control their actions in the air.</li><li>- The target can move 2 distances per action.</li><li>- Add 2 Stress to increase the number of target creatures.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                        {
            groupName: "Sorcerer 6",
            spells: [
                {
                    name: "Friends <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You gain Advantage on Charisma Rolls.</li><li>- Reduces hostility towards you from NPCs.</li><li>- It does not work if the creature is already hostile to you.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Command <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Speak a simple command word that the target must do to the best of their ability.</li><li>- The target will not stop until the command has be fulfilled or they take damage.</li><li>- The target will not self harm.</li></ul>",
                    range: "Far",
                    duration: "Instant <i class='text-sm text-orange-500'>Special</i>",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Charm Person <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 Target. </li><li>- They become your best friend, willing to defend you at all costs. </li><li>- They will listen to your advice and heed your words. To the best of their ability.</li><li>- They will not self harm. (They are aware they have been charmed after the spell has ended.)</li></ul>",
                    range: "Close",
                    duration: "1 Hour",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                        {
            groupName: "Sorcerer 7",
            spells: [
                {
                    name: "Identify <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Any magic item you touch, you learn its abilities.</li><li>- You <u>do not</u> learn if it is cursed.</li><li>- You can learn some of it's history.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 8",
            spells: [
                {
                    name: "Mage Armor <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You can add your DEX Modifier to your Evasion.</li><li>- Increase your Threshold by +Half Level | +Level (Round Up)</li></ul>",
                    range: "Self",
                    duration: "Until a Long Rest.",
                    save: "",
                    damage: ""
                },
                {
                    name: "Blur <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- All attacks on you are at Disadvantage.</li><li>- You gain +1 to your Evasion.</li><li>- This does not affect creatures that utilize method other than sight to location their target, such as Blind Sight.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mirror Image <i class='text-sm text-orange-500'>2 Spell / 2 Stress</i>",
                    description: "<ul><li>- You create Duplicates of you equal to your Casting Modifier.</li><li>- When attacked you can choose the attack to instead remove a duplicate equal to the number of hits you take.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                                {
                    name: "Globe of Invulnerability <i class='text-sm text-orange-500'>2 Spell / 3 Stress</i>",
                    description: "<ul><li>- Create a magical hand of force. The hand can be transparent or visible.</li><li>- The hand has a STR mod equal to your own and is able to take simple actions like opening door, pulling levels, retrieving objects, push or pull an object.</li><li>- It can not do damage.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                }
            ]
        },
                        {
            groupName: "Sorcerer 9",
            spells: [
                {
                    name: "Magic Missile <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Send a dart of energy, the dart will always hit its target and no Attack roll is made.</li><li>- For 1 Spell Point you may create an additional dart.</li><li>- Each dart can be individually controlled.</li><li>Cannot use Weapon Proficiency to increase damage.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d4 + Modifier"
                },
            ]
        },
                        {
            groupName: "Sorcerer 10",
            spells: [
                {
                    name: "Minor Illusion <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create an image <u>or</u> sound at a location within range, but not both.</li><li>- Creatures that do not rely on sight or sound are unaffected by the spell.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "INT",
                    damage: ""
                },
                {
                    name: "Major Image <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Create an image <u>with</u> sound at a location within range.</li><li>- Creatures that do not rely on sight or sound are unaffected by the spell.</li></ul>",
                    range: "Far",
                    duration: "10 Minutes",
                    save: "INT",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 11",
            spells: [
                {
                    name: "Retreat <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You have the ability to move up to 3 distances without using Stress.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 12",
            spells: [
                {
                    name: "Sleep <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Roll 2d4 and the total is the HP affected, starting with the creatures with the lowest HP fall unconscious.</li><li>- Undead and creatures immune to being charmed are unaffected.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 13",
            spells: [
                {
                    name: "Shield <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- As a Reaction you can add +3 to your Evasion.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 14",
            spells: [
                {
                    name: "True Strike <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The next attack on that creature is with Advantage.</li><li>- The spells ends on a successful hit.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 15",
            spells: [
                {
                    name: "Bolt <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create a mote of energy, selecting the damage type:</li><li>- Fire, Cold, Force.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d10"
                },
                {
                    name: "Acid/Poison Spray <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- Spray a gaseous mist of poison or acid.</li><li>- The mist dissipates past Melee Range.</li><li>- For 1 Stress you may push the distance out to Close.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d6"
                },
            ]
        },
                        {
            groupName: "Sorcerer 16",
            spells: [
                {
                    name: "Invisibility <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- A creature gains the invisible condition. </li><li>- The spell is ended when the creature is hit, attacks, the spell duration ends or is dispelled. </li><li>- The creature is not silenced.</li><li>- For 1 Stress you may select an additional target.</li></ul>",
                    range: "Touch",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 17",
            spells: [
                {
                    name: "Lock/Knock <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Any locked box or door you touch becomes unlocked. </li><li>- Alternatively you can lock a box or door. </li><li>- You can also use this skill to force open a stuck, or barred access. </li><li>- If the lock has been closed via a Lock Spell, you can only suppress the effect for 10 Minutes.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 18",
            spells: [
                {
                    name: "Spider Climb <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target is able to move up and down, vertical, upside down, with hands free and with the character's normal speed.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                {
                    name: "Water Walk <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- The target can walk across any liquid surface such as water, mud, snow as if it were solid ground without restrictions. </li><li>- A creature will still take damage from a surface such as lava or acid.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                {
                    name: "Freedom of Movement <i class='text-sm text-orange-500'>2 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target becomes unaffected by difficult terrain, and can not be paralyzed or restrained. </li><li>- Being underwater also imposes no penalties to movement or attacks.</li><li>- For 1 Stress you may select an additional target.</li></ul>",
                    range: "Touch",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                }
            ]
        },
                        {
            groupName: "Sorcerer 19",
            spells: [
                {
                    name: "Call Lightning <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Lightning streaks from the sky directly hitting the target.</li><li>- This spell does NOT work inside.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d10"
                },
                {
                    name: "Lightning Bolt <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- Lightning streaks from your hand. </li><li>On a successful hit the target's Evasion incurs -1 until start of caster's next turn.</li><li>The Bolt will bounce off walls equal to the numbers of Distance factors.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d6"
                },
                {
                    name: "Chain Lightning <i class='text-sm text-orange-500'>3 Spell / 2 Stress</i>",
                    description: "<ul><li>- Within Melee range to the caster. (Minimum 3 targets)</li><li>- Lightning travels between the number of creatures equal to the spell points used. </li><li>- Those marked by the lightning damage incur Advantage on attacks made against them.</li><li>- For 1 Stress you may select an additional target.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d6"
                }
            ]
        },
                        {
            groupName: "Sorcerer 20",
            spells: [
                {
                    name: "Dispel Magic <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 spell effect lower than 3 Spell Points and end it. </li><li>- For any spell above 3 Spell Points add 1 Stress for each Spell Point.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 21",
            spells: [
                {
                    name: "Fireball <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- A massive ball of fire energy is released at a point you choose.</li><li>- It can reach 1 distance area.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d6"
                },
            ]
        },
                        {
            groupName: "Sorcerer 22",
            spells: [
                {
                    name: "Haste <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Gains Evasion equal to +2.</li><li>- Advantage on DEX Saves.</li><li>- Can action twice a turn.</li><li>- The creature takes 1 Stress when the spell ends.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Slow <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- A selected target has -2 to Evasion.</li><li>- Disadvantage on DEX Saves.</li><li>- Cannot react, or use skills that require Stress or GM tokens.</li><li>- Creature takes 1 Stress when spell ends.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                },
            ]
        },
                        {
            groupName: "Sorcerer 23",
            spells: [
                {
                    name: "Banishment <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Remove a creature to another plane.</li></ul>",
                    range: "Close",
                    duration: "Instant/Until the end of your next turn.",
                    save: "CHA",
                    damage: ""
                },
                {
                    name: "Imprisonment <i class='text-sm text-orange-500'>4 Spell / 1 Stress</i>",
                    description: "<ul><li>- Remove a creature until it makes a successful Save.</li><li>- -1 from the roll for each extra Stress used.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                        {
            groupName: "Sorcerer 24",
            spells: [
                {
                    name: "Confusion <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- On a failed Save, at the start of their turn roll 1d10 and the target must.</li><li>1 - Move away from the caster (as best they can).</li><li>2~6 - Target doesn't move or take actions.</li><li>7~8 - Target must make an attack on the nearest creature (Ally or Enemy).</li><li>9~10 - Act normally, but gains 1 Stress.</li><li>- The target can roll a Save at the end of their turn.</li></ul>",
                    range: "Far",
                    duration: "Until a successful save.",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Feeblemind <i class='text-sm text-orange-500'>4 Spell / 4 Stress</i>",
                    description: "<ul><li>- Regardless of the Save result the target takes Psychic damage.</li><li>- On a failed Save the target is reduced to -5 on Intelligence and Charisma.</li></ul>",
                    range: "Far",
                    duration: "Until after a long rest.",
                    save: "WIS",
                    damage: "1d6 (Regardless of Save)"
                }
            ]
        },
                        {
            groupName: "Sorcerer 25",
            spells: [
                {
                    name: "Polymorph <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- A creature you can see is forced to make a Save or be polymorphed in to a another creature. </li><li>- When the creature is reduced to 0HP it can make another CON Save and on a success revert back to its original form. </li><li>- The creature is limited in its actions to simple and non-magical and take 1 Stress.</li><li>- Shapeshifters are unaffected by this spell. </li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "CON",
                    damage: ""
                },
                {
                    name: "Shapechange <i class='text-sm text-orange-500'>4 Spell / 2 Stress</i>",
                    description: "<ul><li>- When the new creature is reduced to 0HP it is dead. </li><li>- The caster is limited in their actions but may also gain new actions.</li><li>- Check list of changes.</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "True Polymorph <i class='text-sm text-orange-500'>5 Spell / 2 Stress</i>",
                    description: "<ul><li>- A creature is forced to to make a Save or be polymorphed in to another creature. </li><li>- When the creature is reduced to 0HP it is dead. </li><li>- Shapeshifters are unaffected by this spell. </li><li>- The creature is limited in its actions to simple and non-magical and takes 1 Stress.</li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "CON",
                    damage: ""
                }
            ]
        },
                        {
            groupName: "Sorcerer 26",
            spells: [
                {
                    name: "Time Stop <i class='text-sm text-orange-500'>9 Spell (Class Points cannot be substituted)</i>",
                    description: "<ul><li>- You stop time 1d4+1 rounds and can act as normal. </li><li>- If your actions damage another creature the spell ends after the action.</li><li>- The spell also ends if you move Out of Range.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                                {
            groupName: "Sorcerer 27",
            spells: [
                {
                    name: "Wish <i class='text-sm text-orange-500'>9 Spell / X Stress (Class Points cannot be substituted)</i>",
                    description: "<ul><li><b>Important Note: The caster will use all available Stress, and will lose 1 Stress from their total permanently.</b></li><li>- Create a wish that is fulfilled to the best intention of the wish. But beware of the unfortunate outcomes that follow.</li><li>- A wish will require as payment an equal resource from the universe.</li><li>- Bringing back a fallen comrade, might require the life of another to take their place.</li><li>- Remove you (and any allies) from any immediate danger, might replace some other unfortunate soul in your place.</li><li>- Rewind time by a day, perhaps it will skip another day future or past.</li><li>- Feel free to come up with other ideas, at the discretion to the DM</li><li>- <b>This spell can not be used again for 1d4 sessions.</b></li></ul>",
                    range: "N/A",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        // Add more Sorcerer spell groups here
    ],
    'Warlock': [
        {
            groupName: "Warlock 1",
            spells: [
                {
                    name: "Bane <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Roll 1d4 and reduce the target\'s Attack, Save or Skill rolls by the result.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "CHA",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Warlock 2",
            spells: [
                {
                    name: "Chill Touch <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The target has -1 on Attack Rolls.</li></ul>",
                    range: "Melee",
                    duration: "Instant/Until end of target's next turn.",
                    save: "",
                    damage: "1d4"
                },
                {
                    name: "Shocking Grasp <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can select up to 2 targets in melee range.</li><li>- Can make two attacks rolls (one for each hand).</li><li>- Any creature that takes damage will have Disadvantage on next roll.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "1d8"
                },
                {
                    name: "Burning Hands <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Target takes Continuous Damage at the start of your next turn.</li><li>- Add another round of damage for each additional Stress used.</li></ul>",
                    range: "Melee",
                    duration: "Instant / 2 Rounds",
                    save: "",
                    damage: "1d8"
                },
                {
                    name: "Inflict Wounds <i class='text-sm text-orange-500'>1 Spell / 3 Stress</i>",
                    description: "<ul><li>- Select 1 target</li><li>- High Damage add an extra die to damage beyond your proficiency. </li><li>- And 1 more for each additional Stress.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "2d6"
                },
                {
                    name: "Vampiric Touch <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The Hit damage is returned to the casters Hit Point total.</li><li>- But not beyond their current max.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "1d8"
                }
            ]
        },
                {
            groupName: "Warlock 3",
            spells: [
                {
                    name: "Comprehend Languages <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Can read and understand any written language known and used commonly in the realm.</li><li>- Can not understand secret codes, or cyphers and such.</li></ul>",
                    range: "Self",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: ""
                },
                {
                    name: "Tongues <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can Speak and Understand any commonly used language in the realm.</li><li>- Have Advantage on Skill Checks for Codes and Cyphers.</li></ul>",
                    range: "Self",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Warlock 4",
            spells: [
                {
                    name: "Detect Poison <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You can locate any poison within range.</li><li>- You can also learn the type.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Detect Good/Evil <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Choose Good or Evil.</li><li>- Within range you can decern the alignment of a creature, object or area.</li></ul>",
                    range: "Close",
                    duration: "Concentration, up to 1 hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Detect Magic <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Within range you can decern the direction of magic.</li></ul>",
                    range: "Far",
                    duration: "Concentration, up to 1 hour",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Warlock 5",
            spells: [
                {
                    name: "Eldritch Blast <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Send 2 bolts of energy to a target. </li><li>- Roll each a attack separately. </li><li>- Add an extra bolt for each stress used (Max 4 Stress).</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d6 per bolt."
                },
            ]
        },
                {
            groupName: "Warlock 6",
            spells: [
                {
                    name: "Feather Fall <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- Their falling slows to a safe speed. </li><li>- There is no control over direction other than gravity and down. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Levitate <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- The caster has the ability to raise or lower the target relative to the ground by 20ft per action. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Fly <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- They can move 2 distances per action.</li><li>- It gains the ability to fly and control their actions in the air.</li><li>- The target can move 2 distances per action.</li><li>- Add 2 Stress to increase the number of target creatures.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Warlock 7",
            spells: [
                {
                    name: "Friends <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You gain Advantage on Charisma Rolls.</li><li>- Reduces hostility towards you from NPCs.</li><li>- It does not work if the creature is already hostile to you.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Command <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Speak a simple command word that the target must do to the best of their ability.</li><li>- The target will not stop until the command has be fulfilled or they take damage.</li><li>- The target will not self harm.</li></ul>",
                    range: "Far",
                    duration: "Instant Special",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Charm Person <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 Target. </li><li>- They become your best friend, willing to defend you at all costs. </li><li>- They will listen to your advice and heed your words. To the best of their ability.</li><li>- They will not self harm. (They are aware they have been charmed after the spell has ended.)</li></ul>",
                    range: "Close",
                    duration: "1 Hour",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Warlock 8",
            spells: [
                {
                    name: "Misty Step <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- As an Action or Reaction you can move out to 1 distance without any action taken against you.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Teleport <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- As an Action you can send yourself anywhere within view.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Teleportation Circle <i class='text-sm text-orange-500'>4 Spell / 2 Stress</i>",
                    description: "<ul><li>- As an Action you can create a circle that will allow you and anyone you choose to travel to anywhere know and are familiar with.</li></ul>",
                    range: "Self/No Restriction",
                    duration: "Instant",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Warlock 9",
            spells: [
                {
                    name: "Blindness/Deafness <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Force them to become either blind or deaf, caster's choice.</li></ul>",
                    range: "Touch",
                    duration: "Instant/2 Rounds",
                    save: "CON",
                    damage: ""
                },
                {
                    name: "Silence <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select an area and remove the sound that comes from it.</li><li>- Within the area verbal communication is impossible.</li><li>- Spell casting requires an Arcane DC15. (Including for the caster of this spell.) </li></ul>",
                    range: "Close",
                    duration: "Instant/2 Rounds",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Warlock 10",
            spells: [
                {
                    name: "Find Familiar <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Find a Fey creature that is bound to you.</li><li>- Select the animal type they appear to you as.</li><li><b>HP:</b> 1, <b>Stress:</b> 2, <b>Evasion:</b> 10, <b>Mod:</b> +2, <b>Threshold:</b> 3 | 6</li></ul>",
                    range: "Close",
                    duration: "Until dismissed or reduced to 0HP",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Warlock 11",
            spells: [
                {
                    name: "Invisibility <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- A creature gains the invisible condition.</li><li>- The spell is ended when the creature is hit, attacks, the spell duration ends or is dispelled.</li><li>- The creature is not silenced.</li><li>- For 1 Stress you may select an additional target.</li></ul>",
                    range: "Touch",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Warlock 12",
            spells: [
                {
                    name: "Animate Dead <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- A pile of bones or decaying corpse you can see, stitch together to create a skeleton or zombie.</li><li>Roll Divine Dice to decide the option that returns. <i>Divine: Skeleton / Fate: Zombie</i></li><li>- For 1 Stress you may animate an additional target.</li><li><b>Skeleton</b> <b>HP:</b> 2, <b>Stress:</b> 1, <b>Class:</b> 2, <b>Evasion:</b> 11, <b>Mod:</b> +2, <b>Damage:</b> 2d6, <b>Threshold:</b> 5 | 11</li><li><b>Zombie</b> <b>HP:</b> 2, <b>Stress:</b> 2, <b>Class:</b> 1, <b>Evasion:</b> 10, <b>Mod:</b> +2, <b>Damage:</b> 2d8, <b>Threshold:</b> 6 | 12</li><li>- At Level 5 you can increase their HP +1 and Mod to +5.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Warlock 13",
            spells: [
                {
                    name: "Banishment <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Remove a creature to another plane.</li></ul>",
                    range: "Close",
                    duration: "Instant/Until the end of your next turn.",
                    save: "CHA",
                    damage: ""
                },
                {
                    name: "Imprisonment <i class='text-sm text-orange-500'>4 Spell / 1 Stress</i>",
                    description: "<ul><li>- Remove a creature until it makes a successful Save.</li><li>- -1 from the roll for each extra Stress used.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Warlock 14",
            spells: [
                {
                    name: "Confusion <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- On a failed Save, at the start of their turn roll 1d10 and the target must.</li><li>1 - Move away from the caster (as best they can).</li><li>2~6 - Target doesn't move or take actions.</li><li>7~8 - Target must make an attack on the nearest creature (Ally or Enemy).</li><li>9~10 - Act normally, but gains 1 Stress.</li><li>- The target can roll a Save at the end of their turn.</li></ul>",
                    range: "Far",
                    duration: "Until a successful save.",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Feeblemind <i class='text-sm text-orange-500'>4 Spell / 4 Stress</i>",
                    description: "<ul><li>- Regardless of the Save result the target takes Psychic damage.</li><li>- On a failed Save the target is reduced to -5 on Intelligence and Charisma.</li></ul>",
                    range: "Far",
                    duration: "Until after a long rest.",
                    save: "WIS",
                    damage: "1d6 (Regardless of Save)"
                }
            ]
        },
                {
            groupName: "Warlock 15",
            spells: [
                {
                    name: "Flame Strike <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select a point out to Close range.</li><li>- From the your pointing finger a stream of hot Fire and Radiant energy burns forth.</li><li>- Hit all targets in the line.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d8"
                },
                {
                    name: "Fire Storm <i class='text-sm text-orange-500'>5 Spell / 1 Class</i>",
                    description: "<ul><li>- Select a 20ft area and fire spins in a typhoon.</li><li>- A creature moving into or is already within the area at the start of their turn takes Fire damage.</li><li>- It also removes the oxygen from within the area.</li><li>- Anyone within the area must make a Save to hold their breath or remove a Stress.</li><li>- Can use a Class Point to move the storm to a new area. </li></ul>",
                    range: "Far",
                    duration: "Instant/5 Rounds",
                    save: "CON",
                    damage: "1d10"
                }
            ]
        },
                {
            groupName: "Warlock 16",
            spells: [
                {
                    name: "True Seeing <i class='text-sm text-orange-500'>9 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target can see beyond the spectrum of normal vision.</li><li>- <b>Darkness.</b> You can see in normal and magical Darkness with no penalty.</li><li>- <b>Invisibility.</b> You see creatures and objects that have the Invisible condition.</li><li>- <b>Visual Illusions.</b> Visual illusions appear transparent to you, and you automatically succeed on saving throws against them.</li><li>- <b>Transformations.</b> You discern the true form of any creature or object you see that has been transformed by magic.</li><li>- <b>Ethereal Plane.</b> You see into the Ethereal Plane.</li><li>- The target cannot interact with anything on the Ethereal Plane unless you are also on the Ethereal Plane.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
            ]
        }
        // Add more Warlock spell groups here
    ],
    'Wizard': [
        {
            groupName: "Wizard 1",
            spells: [
                {
                    name: "Alarm <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Be alerted of the presence of danger.</li><li>- For 1 additional Stress the spell can instead target the caster and the Alarm moves with them detecting danger within Close range.</li></ul>",
                    range: "Close",
                    duration: "8 Hours <i class='text-sm text-orange-500'>(Static)</i> / 10 Minutes <i class='text-sm text-orange-500'>(Moving)</i>",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 2",
            spells: [
                {
                    name: "Chill Touch <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The target has -1 on Attack Rolls.</li></ul>",
                    range: "Melee",
                    duration: "Instant/Until end of target's next turn.",
                    save: "",
                    damage: "1d4"
                },
                {
                    name: "Shocking Grasp <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can select up to 2 targets in melee range.</li><li>- Can make two attacks rolls (one for each hand).</li><li>- Any creature that takes damage will have Disadvantage on next roll.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "1d8"
                },
                {
                    name: "Burning Hands <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Target takes Continuous Damage at the start of your next turn.</li><li>- Add another round of damage for each additional Stress used.</li></ul>",
                    range: "Melee",
                    duration: "Instant / 2 Rounds",
                    save: "",
                    damage: "1d8"
                },
                {
                    name: "Inflict Wounds <i class='text-sm text-orange-500'>1 Spell / 3 Stress</i>",
                    description: "<ul><li>- Select 1 target</li><li>- High Damage add an extra die to damage beyond your proficiency. </li><li>- And 1 more for each additional Stress.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "2d6"
                },
                {
                    name: "Vampiric Touch <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- The Hit damage is returned to the casters Hit Point total.</li><li>- But not beyond their current max.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "",
                    damage: "1d8"
                }
            ]
        },
                {
            groupName: "Wizard 3",
            spells: [
                {
                    name: "Chromatic Orb <i class='text-sm text-orange-500'>X Spell</i>",
                    description: "<ul><li>- An Orb that finds its target, even hidden behind cover.</li><li>- On a failed Save.</li><li>2 SP = Target takes Damage only.</li><li>3 SP = Target takes Damage and is Blinded.</li><li>4 SP = Target takes Damage and is forced 3 Stress.</li><li>5 SP = Causes death on a failed save, but only against creatures with HP ≤ 3. Otherwise takes Damage.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "CON",
                    damage: "1d6"
                },
            ]
        },
                {
            groupName: "Wizard 4",
            spells: [
                {
                    name: "Comprehend Languages <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Can read and understand any written language known and used commonly in the realm.</li><li>- Can not understand secret codes, or cyphers and such.</li></ul>",
                    range: "Self",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: ""
                },
                {
                    name: "Tongues <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can Speak and Understand any commonly used language in the realm.</li><li>- Have Advantage on Skill Checks for Codes and Cyphers.</li></ul>",
                    range: "Self",
                    duration: "Until after a long rest.",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 5",
            spells: [
                {
                    name: "Disguise Self <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Can alter your basic appearance and any items you are wearing.</li><li>- You can't change the body type (extra limbs etc).</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Alter Self <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Can change the properties of your body and its basic appearance.</li><li>- Examples: Aquatic Adaptation (gills and webbing), Natural Claw Weapons (magical), Change Appearance(Height, Facial)</li><li>- You will still remain humanoid in appearance.</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Enlarge/Reduce <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Enlarge or Shrink the target.</li><li>- Enlarge: Size increases by one (medium to large). Weight times 8, Advantage on STR checks.</li><li>- Reduce: Size decreases by one (medium to small). Weight shrinks times 8, Disadvantage on STR checks. </li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "CON",
                    damage: "<ul><li><b>Enlarge</b> - Add 2 extra die to damage rolls.</li><li><b>Reduce</b> - Remove 2 die from damage rolls.</li></ul>"
                }
            ]
        },
                {
            groupName: "Wizard 6",
            spells: [
                {
                    name: "Eldritch Blast <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Send 2 bolts of energy to a target. </li><li>- Roll each a attack separately. </li><li>- Add an extra bolt for each stress used (Max 4 Stress).</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d6 per bolt."
                },
            ]
        },
                {
            groupName: "Wizard 7",
            spells: [
                {
                    name: "Feather Fall <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- Their falling slows to a safe speed. </li><li>- There is no control over direction other than gravity and down. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Levitate <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- The caster has the ability to raise or lower the target relative to the ground by 20ft per action. </li><li>- Add 1 Stress to increase number of targets.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Fly <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- They can move 2 distances per action.</li><li>- It gains the ability to fly and control their actions in the air.</li><li>- The target can move 2 distances per action.</li><li>- Add 2 Stress to increase the number of target creatures.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 8",
            spells: [
                {
                    name: "Fog Cloud <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create a dense foggy mist equal to 1 distance that no creature can see in or out of unless they have other means to do so. Blind Sense for example.</li><li>- Attacks in or out of the Mist (if the target can not seen) are with Disadvantage.</li></ul>",
                    range: "Very Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Stinking Cloud <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- Create a dense foggy mist equal to one distance.</li><li>- Attacks in or out of the Mist are with -2 to the roll.</li><li>- A creature within the cloud (or entering.) and fails their Save becomes incapacitated with a sickness that leaves them reeling, target takes 1 Stress. </li><li>- On a success nothing happens.</li></ul>",
                    range: "Very Far",
                    duration: "1 Minute",
                    save: "CON",
                    damage: ""
                },
                {
                    name: "Cloud Kill <i class='text-sm text-orange-500'>3 Spell / 2 Stress</i>",
                    description: "<ul><li>- Create an Poison dense cloud equal to one distance. </li><li>- A creature within the cloud (or entering.) and fails their Save will take damage every turn they remain in the cloud at the start of their turn. </li><li>- Half damage on a success.</li><li>- Attacks in or out of the Mist are with -2 to the roll.</li></ul>",
                    range: "Very Far",
                    duration: "1 Minute",
                    save: "CON",
                    damage: "1d8 Poison Damage"
                }
            ]
        },
                {
            groupName: "Wizard 9",
            spells: [
                {
                    name: "Friends <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You gain Advantage on Charisma Rolls.</li><li>- Reduces hostility towards you from NPCs.</li><li>- It does not work if the creature is already hostile to you.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Command <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Speak a simple command word that the target must do to the best of their ability.</li><li>- The target will not stop until the command has be fulfilled or they take damage.</li><li>- The target will not self harm.</li></ul>",
                    range: "Far",
                    duration: "Instant <i class='text-sm text-orange-500'>Special</i>",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Charm Person <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 Target. </li><li>- They become your best friend, willing to defend you at all costs. </li><li>- They will listen to your advice and heed your words. To the best of their ability.</li><li>- They will not self harm. (They are aware they have been charmed after the spell has ended.)</li></ul>",
                    range: "Close",
                    duration: "1 Hour",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 10",
            spells: [
                {
                    name: "Grease <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Cover the floor in slick Grease equal to one distance.</li><li>- Centered on a point.</li><li>- Start of creatures turn within the area or entering.</li><li>- If a creature starts their turn within the area or enters. Make a save or fall prone..</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "DEX",
                    damage: ""
                },
                {
                    name: "Entangle <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- At a point you choose, vines spring forth and entangle any creature that fails their save and they are restrained. (But can action.)</li><li>- If a creature starts their turn within the area or enters. Make a save or become restrained.</li><li>A restrained creature must make a Save to break free.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "STR",
                    damage: ""
                },
                {
                    name: "Web <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- At a point you choose, cover the area with a sticky web substance that can covers both the floor, walls and ceiling. </li><li>- Any creature within the space and fails their STR Save is restrained unable to action (use hands).</li><li>- Start of each turn within the area or entering. </li><li>- On a success the creature must then succeed a DEX save to be able to move locations.</li><li>- On a successful DEX target can take Actions, otherwise they remain in the same spot.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "STR/DEX (STR start of turn or entering, DEX start of movement or entering)",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 11",
            spells: [
                {
                    name: "Identify <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Any magic item you touch, you learn its abilities.</li><li>- You <u>do not</u> learn if it is cursed.</li><li>- You can learn some of it's history.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 12",
            spells: [
                {
                    name: "Jump <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Your jump distance is tripled until the spell ends.</li></ul>",
                    range: "Touch",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 13",
            spells: [
                {
                    name: "Light <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Creates an area of Light up to 2 distances.</li></ul>",
                    range: "Touch",
                    duration: "1 Hour",
                    save: "DEX",
                    damage: ""
                },
                {
                    name: "Darkness <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Creates an area of Darkness up to 2 distances. </li><li>- The spell also ends any Light Spell cast on the area.</li><li>- Nothing can see in or out unless the creature has other means to do so such as Blind Sight, True Sight.</li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "Daylight <i class='text-sm text-orange-500'>1 Spell / 2 Stress</i>",
                    description: "<ul><li>- Creates illumination equal to that of noon.</li><li>- The spell will remove any aspect of the Darkness spell, or natural darkness.</li><li>- Any creature that is Vulnerable to Daylight Rolls at Disadvantage.</li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 14",
            spells: [
                {
                    name: "Mage Armor <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You can add your DEX Modifier to your Evasion.</li><li>- Increase your Threshold by +Half Level | +Level (Round Up)</li></ul>",
                    range: "Self",
                    duration: "Until a Long Rest.",
                    save: "",
                    damage: ""
                },
                {
                    name: "Blur <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- All attacks on you are at Disadvantage.</li><li>- You gain +1 to your Evasion.</li><li>- This does not affect creatures that utilize method other than sight to location their target, such as Blind Sight.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Mirror Image <i class='text-sm text-orange-500'>2 Spell / 2 Stress</i>",
                    description: "<ul><li>- You create Duplicates of you equal to your Casting Modifier.</li><li>- When attacked you can choose the attack to instead remove a duplicate equal to the number of hits you take.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                                {
                    name: "Globe of Invulnerability <i class='text-sm text-orange-500'>2 Spell / 3 Stress</i>",
                    description: "<ul><li>- Create a magical hand of force. The hand can be transparent or visible.</li><li>- The hand has a STR mod equal to your own and is able to take simple actions like opening door, pulling levels, retrieving objects, push or pull an object.</li><li>- It can not do damage.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 15",
            spells: [
                {
                    name: "Mage Hand <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create a magical hand of force. The hand can be transparent or visible.</li><li>- The hand has a STR mod equal to your own and is able to take simple actions like opening door, pulling levels, retrieving objects, push or pull an object.</li><li>- It can not do damage.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 16",
            spells: [
                {
                    name: "Misty Step <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- As an Action or Reaction you can move out to 1 distance without any action taken against you.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Teleport <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- As an Action you can send yourself anywhere within view.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Teleportation Circle <i class='text-sm text-orange-500'>4 Spell / 2 Stress</i>",
                    description: "<ul><li>- As an Action you can create a circle that will allow you and anyone you choose to travel to anywhere know and are familiar with.</li></ul>",
                    range: "Self/No Restriction",
                    duration: "Instant",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 17",
            spells: [
                {
                    name: "Magic Missile <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Send a dart of energy, the dart will always hit its target and no Attack roll is made.</li><li>- For 1 Spell Point you may create an additional dart.</li><li>- Each dart can be individually controlled.</li><li>Cannot use Weapon Proficiency to increase damage.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d4 + Modifier"
                },
            ]
        },
                {
            groupName: "Wizard 18",
            spells: [
                {
                    name: "Message <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Send a short message to anyone you can see. </li><li>- The message is a whisper that only the target can hear and they are able to respond in kind.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
                {
                    name: "Sending <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Can send a message to anyone you know and are familiar with. </li><li>- Limited to 30 words. They can reply in kind.</li></ul>",
                    range: "N/A",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 19",
            spells: [
                {
                    name: "Minor Illusion <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create an image <u>or</u> sound at a location within range, but not both.</li><li>- Creatures that do not rely on sight or sound are unaffected by the spell.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "INT",
                    damage: ""
                },
                {
                    name: "Major Image <i class='text-sm text-orange-500'>1 Spell / 1 Stress</i>",
                    description: "<ul><li>- Create an image <u>with</u> sound at a location within range.</li><li>- Creatures that do not rely on sight or sound are unaffected by the spell.</li></ul>",
                    range: "Far",
                    duration: "10 Minutes",
                    save: "INT",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 20",
            spells: [
                {
                    name: "Retreat <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- You have the ability to move up to 3 distances without using Stress.</li></ul>",
                    range: "Self",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 21",
            spells: [
                {
                    name: "Sleep <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Roll 2d4 and the total is the HP affected, starting with the creatures with the lowest HP fall unconscious.</li><li>- Undead and creatures immune to being charmed are unaffected.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 22",
            spells: [
                {
                    name: "Shield <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- As a Reaction you can add +3 to your Evasion.</li></ul>",
                    range: "Self",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 23",
            spells: [
                {
                    name: "True Strike <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The next attack on that creature is with Advantage.</li><li>- The spells ends on a successful hit.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 24",
            spells: [
                {
                    name: "Bolt <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Create a mote of energy, selecting the damage type:</li><li>- Fire, Cold, Force.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d10"
                },
                {
                    name: "Acid/Poison Spray <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- Spray a gaseous mist of poison or acid.</li><li>- The mist dissipates past Melee Range.</li><li>- For 1 Stress you may push the distance out to Close.</li></ul>",
                    range: "Melee",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d6"
                },
            ]
        },
                {
            groupName: "Wizard 25",
            spells: [
                {
                    name: "Find Familiar <i class='text-sm text-orange-500'>1 Spell</i>",
                    description: "<ul><li>- Find a Fey creature that is bound to you.</li><li>- Select the animal type they appear to you as.</li><li><b>HP:</b> 1, <b>Stress:</b> 2, <b>Evasion:</b> 10, <b>Mod:</b> +2, <b>Threshold:</b> 3 | 6</li></ul>",
                    range: "Close",
                    duration: "Until dismissed or reduced to 0HP",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 26",
            spells: [
                {
                    name: "Hold Person <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- They become Paralyzed until they succeed their Save.</li><li>- Target must be Humanoid (but not Undead).</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS (End of every turn)",
                    damage: ""
                },
                {
                    name: "Hold Monster <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Selected target becomes Paralyzed until they succeed their Save. </li><li>- Target must be Monstrous or Beast.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS (End of every turn)",
                    damage: ""
                },
                {
                    name: "Hold Undead <i class='text-sm text-orange-500'>2 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- Selected target becomes Paralyzed until they succeed their Save.</li><li>- Must be Undead.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS (End of every turn)",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 27",
            spells: [
                {
                    name: "Invisibility <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- A creature gains the invisible condition. </li><li>- The spell is ended when the creature is hit, attacks, the spell duration ends or is dispelled. </li><li>- The creature is not silenced.</li><li>- For 1 Stress you may select an additional target.</li></ul>",
                    range: "Touch",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 28",
            spells: [
                {
                    name: "Lock/Knock <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Any locked box or door you touch becomes unlocked. </li><li>- Alternatively you can lock a box or door. </li><li>- You can also use this skill to force open a stuck, or barred access. </li><li>- If the lock has been closed via a Lock Spell, you can only suppress the effect for 10 Minutes.</li></ul>",
                    range: "Touch",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 29",
            spells: [
                {
                    name: "Moonbeam <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- A silvery beam shines down on a target. </li><li>- Any shapeshifter that fails its Save (at disadvantage) will revert to it original form. </li><li>- A creature takes half damage on a Successful Save. </li><li>- You can move the beam on your turn up to 1 distance.</li></ul>",
                    range: "Very Far",
                    duration: "1 Minute",
                    save: "CON",
                    damage: "1d10"
                },
                {
                    name: "Scorching Ray <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- Create 3 rays that target one or multiple targets (each ray requires an Attack roll). </li><li>- If the target is Undead increase the Hit Point by +1.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: "1d8"
                },
                {
                    name: "Sunbeam <i class='text-sm text-orange-500'>3 Spell / 2 Stress</i>",
                    description: "<ul><li>- A creature struck by this Attack takes damage and is forced to make a Save or become blinded until the end of your next turn. </li><li>- Undead and Oozes roll Saves with Disadvantage.  </li><li>- Undead is also forced to take +1 Hit and +1 Stress.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "CON",
                    damage: "1d8"
                }
            ]
        },
                {
            groupName: "Wizard 30",
            spells: [
                {
                    name: "Shatter <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- All creatures in a Melee must make a Save or take full damage (Half on a Success).</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "CON",
                    damage: "1d8"
                },
            ]
        },
                {
            groupName: "Wizard 31",
            spells: [
                {
                    name: "Spider Climb <i class='text-sm text-orange-500'>2 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target is able to move up and down, vertical, upside down, with hands free and with the character's normal speed.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                {
                    name: "Water Walk <i class='text-sm text-orange-500'>2 Spell / 1 Stress</i>",
                    description: "<ul><li>- Select 1 target. </li><li>- The target can walk across any liquid surface such as water, mud, snow as if it were solid ground without restrictions. </li><li>- A creature will still take damage from a surface such as lava or acid.</li></ul>",
                    range: "Touch",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                {
                    name: "Freedom of Movement <i class='text-sm text-orange-500'>2 Spell / 2 Stress</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- The target becomes unaffected by difficult terrain, and can not be paralyzed or restrained. </li><li>- Being underwater also imposes no penalties to movement or attacks.</li><li>- For 1 Stress you may select an additional target.</li></ul>",
                    range: "Touch",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 32",
            spells: [
                {
                    name: "Animate Dead <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- A pile of bones or decaying corpse you can see, stitch together to create a skeleton (bones) or zombie (corpse).</li><li>- For 1 Stress you may animate an additional target.</li><li><b>Skeleton</b> <b>HP:</b> 2, <b>Stress:</b> 1, <b>Class:</b> 2, <b>Evasion:</b> 11, <b>Mod:</b> +2, <b>Damage:</b> 2d6, <b>Threshold:</b> 5 | 11</li><li><b>Zombie</b> <b>HP:</b> 2, <b>Stress:</b> 2, <b>Class:</b> 1, <b>Evasion:</b> 10, <b>Mod:</b> +2, <b>Damage:</b> 2d8, <b>Threshold:</b> 6 | 12</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 33",
            spells: [
                {
                    name: "Call Lightning <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Lightning streaks from the sky directly hitting the target.</li><li>- This spell does NOT work inside.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d10"
                },
                {
                    name: "Lightning Bolt <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- Lightning streaks from your hand. </li><li>On a successful hit the target's Evasion incurs -1 until start of caster's next turn.</li><li>The Bolt will bounce off walls equal to the numbers of Distance factors.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d10"
                },
                {
                    name: "Chain Lightning <i class='text-sm text-orange-500'>3 Spell / 2 Stress</i>",
                    description: "<ul><li>- Within Melee range to the caster. (Minimum 3 targets)</li><li>- Lightning travels between the number of creatures equal to the spell points used. </li><li>- Those marked by the lightning damage incur Advantage on attacks made against them.</li><li>- For 1 Stress you may select an additional target.</li></ul>",
                    range: "Close",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d8"
                }
            ]
        },
                {
            groupName: "Wizard 34",
            spells: [
                {
                    name: "Dispel Magic <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Select 1 spell effect lower than 3 Spell Points and end it. </li><li>- For any spell above 3 Spell Points add 1 Stress for each Spell Point.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 35",
            spells: [
                {
                    name: "Fireball <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- A massive ball of fire energy is released at a point you choose.</li><li>- It can reach 1 distance area.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "DEX",
                    damage: "1d6"
                },
            ]
        },
                {
            groupName: "Wizard 36",
            spells: [
                {
                    name: "Haste <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Gains Evasion equal to +2.</li><li>- Advantage on DEX Saves.</li><li>- Can action twice a turn.</li><li>- The creature takes 1 Stress when the spell ends.</li></ul>",
                    range: "Close",
                    duration: "1 Minute",
                    save: "",
                    damage: ""
                },
                {
                    name: "Slow <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- A selected target has -2 to Evasion.</li><li>- Disadvantage on DEX Saves.</li><li>- Cannot react, or use skills that require Stress or GM tokens.</li><li>- Creature takes 1 Stress when spell ends.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "WIS",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 37",
            spells: [
                {
                    name: "Wall of Wind <i class='text-sm text-orange-500'>3 Spell</i>",
                    description: "<ul><li>- Create a wall of strong wind up to 15ft high, 50ft long, 1ft thick. You can decide which side the Wind is prevalent.</li><li>- A creature that wishes to move towards the wall must Succeed on a STR Check. </li><li>- The Save has Disadvantage if starting their turn within the wall.</li><li>- On a failed save the creature is pushed back from the wall (unable to move forward). The caster may select the side.</li><li>- Projectiles fired towards the windy side of the wall are rolled with Disadvantage.</li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "STR",
                    damage: ""
                },
                {
                    name: "Wall of Stone <i class='text-sm text-orange-500'>3 Spell / 1 Stress</i>",
                    description: "<ul><li>- Create a wall of solid earth, 15ft high, 50ft long, 6in thick.</li><li>- A creature wishing to move through the wall must Succeed on a STR Check. (The space is filled in after the creature has moved through).</li><li>- If a creature Starts or Ends their turn in the Wall space they are pushed back in the direction of the caster's choice.</li><li>- Creatures that can burrow or move though earth are unaffected by the spell.</li><li>- Projectiles fired towards the side chosen by the caster are are cannot penetrate the wall.</li></ul>",
                    range: "Far",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                {
                    name: "Wall of Force <i class='text-sm text-orange-500'>3 Spell / 2 Stress</i>",
                    description: "<ul><li>- Create a wall of solid energy, 15ft high, 50ft long, 6in thick.</li><li>- Creatures or objects cannot move through the wall. Except at the option of the caster.</li><li>- If a creature Starts or Ends their turn in the Wall space they are pushed back in the direction of the caster's choice.</li></ul>",
                    range: "Far",
                    duration: "10 Minutes",
                    save: "",
                    damage: ""
                },
                                {
                    name: "Wall of Ice <i class='text-sm text-orange-500'>3 Spell / 3 Stress</i>",
                    description: "<ul><li>- Create a wall of solid ice up to 15ft high, 50ft long, 1ft thick.</li><li>- If a creature Starts or Ends their turn in the Wall space they are pushed back in the direction of the caster's choice.</li><li>- The caster can designate a side that emanates cold energy, any creature within close range. Must make a CON Save or take cold damage.</li><li>- The wall is 10HP, Threshold 15 | 25.</li></ul>",
                    range: "Far",
                    duration: "10 Minutes",
                    save: "CON",
                    damage: "1d6"
                },
                {
                    name: "Wall of Fire <i class='text-sm text-orange-500'>4 Spell / 3 Stress</i>",
                    description: "<ul><li>- Create a wall of hot flame up to 15ft high, 50ft long, 1ft thick.</li><li>- The Caster can designate a side that emanates hot energy.</li><li>- Creatures within <b>Close range</b> of the wall take <b>1 Stress</b> at the start of their turn.</li><li>- Roll a Save or take full damage on a fail, half damage on a success. </li></ul>",
                    range: "Far",
                    duration: "1 Minute",
                    save: "DEX",
                    damage: "1d10"
                }
            ]
        },
                {
            groupName: "Wizard 38",
            spells: [
                {
                    name: "Banishment <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Remove a creature to another plane.</li></ul>",
                    range: "Close",
                    duration: "Instant/Until the end of your next turn.",
                    save: "CHA",
                    damage: ""
                },
                {
                    name: "Imprisonment <i class='text-sm text-orange-500'>4 Spell / 1 Stress</i>",
                    description: "<ul><li>- Remove a creature until it makes a successful Save.</li><li>- -1 from the roll for each extra Stress used.</li></ul>",
                    range: "Far",
                    duration: "Instant",
                    save: "WIS",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 39",
            spells: [
                {
                    name: "Confusion <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- Select 1 target.</li><li>- On a failed Save, at the start of their turn roll 1d10 and the target must.</li><li>1 - Move away from the caster (as best they can).</li><li>2~6 - Target doesn't move or take actions.</li><li>7~8 - Target must make an attack on the nearest creature (Ally or Enemy).</li><li>9~10 - Act normally, but gains 1 Stress.</li><li>- The target can roll a Save at the end of their turn.</li></ul>",
                    range: "Far",
                    duration: "Until a successful save.",
                    save: "WIS",
                    damage: ""
                },
                {
                    name: "Feeblemind <i class='text-sm text-orange-500'>4 Spell / 4 Stress</i>",
                    description: "<ul><li>- Regardless of the Save result the target takes Psychic damage.</li><li>- On a failed Save the target is reduced to -5 on Intelligence and Charisma.</li></ul>",
                    range: "Far",
                    duration: "Until after a long rest.",
                    save: "WIS",
                    damage: "1d6 (Regardless of Save)"
                }
            ]
        },
                {
            groupName: "Wizard 40",
            spells: [
                {
                    name: "Polymorph <i class='text-sm text-orange-500'>4 Spell</i>",
                    description: "<ul><li>- A creature you can see is forced to make a Save or be polymorphed in to a another creature. </li><li>- When the creature is reduced to 0HP it can make another CON Save and on a success revert back to its original form. </li><li>- The creature is limited in its actions to simple and non-magical and take 1 Stress.</li><li>- Shapeshifters are unaffected by this spell. </li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "CON",
                    damage: ""
                },
                {
                    name: "Shapechange <i class='text-sm text-orange-500'>4 Spell / 2 Stress</i>",
                    description: "<ul><li>- When the new creature is reduced to 0HP it is dead. </li><li>- The caster is limited in their actions but may also gain new actions.</li><li>- Check list of changes.</li></ul>",
                    range: "Self",
                    duration: "1 Hour",
                    save: "",
                    damage: ""
                },
                {
                    name: "True Polymorph <i class='text-sm text-orange-500'>5 Spell / 2 Stress</i>",
                    description: "<ul><li>- A creature is forced to to make a Save or be polymorphed in to another creature. </li><li>- When the creature is reduced to 0HP it is dead. </li><li>- Shapeshifters are unaffected by this spell. </li><li>- The creature is limited in its actions to simple and non-magical and takes 1 Stress.</li></ul>",
                    range: "Far",
                    duration: "1 Hour",
                    save: "CON",
                    damage: ""
                }
            ]
        },
                {
            groupName: "Wizard 41",
            spells: [
                {
                    name: "Time Stop <i class='text-sm text-orange-500'>9 Spell (Class Points cannot be substituted)</i>",
                    description: "<ul><li>- You stop time 1d4+1 rounds and can act as normal. </li><li>- If your actions damage another creature the spell ends after the action.</li><li>- The spell also ends if you move Out of Range.</li></ul>",
                    range: "Very Far",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
                {
            groupName: "Wizard 42",
            spells: [
                {
                    name: "Wish <i class='text-sm text-orange-500'>9 Spell / X Stress (Class Points cannot be substituted)</i>",
                    description: "<ul><li><b>Important Note: The caster will use all available Stress, and will lose 1 Stress from their total permanently.</b></li><li>- Create a wish that is fulfilled to the best intention of the wish. But beware of the unfortunate outcomes that follow.</li><li>- A wish will require as payment an equal resource from the universe.</li><li>- Bringing back a fallen comrade, might require the life of another to take their place.</li><li>- Remove you (and any allies) from any immediate danger, might replace some other unfortunate soul in your place.</li><li>- Rewind time by a day, perhaps it will skip another day future or past.</li><li>- Feel free to come up with other ideas, at the discretion to the DM</li><li>- <b>This spell can not be used again for 1d4 sessions.</b></li></ul>",
                    range: "N/A",
                    duration: "Instant",
                    save: "",
                    damage: ""
                },
            ]
        },
        // Add more Wizard spell groups here
    ]
};