        // Dark mode detection
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });

        // Tooltip definitions for character creation terms
const tooltipDefinitions = {
    'Character Name': {
        title: 'Character Name',
        content: 'The unique name for your character. This will be displayed throughout the game on character sheet.'
    },
    'Level': {
        title: 'Character Level',
        content: 'Represents your character\'s experience and power. Higher levels unlock new abilities and increase your capabilities. Characters start at Level 1.'
    },
    'Race': {
        title: 'Character Race',
        content: 'Your character\'s species or heritage. Each race provides unique bonuses, and proficiencies that shape your character\'s strengths.'
    },
    'Class': {
        title: 'Character Class',
        content: 'Your character\'s profession or calling. Each class has unique abilities, spell-casting capabilities, and combat styles that define how you play.'
    },
    'Familiar': {
        title: 'Familiar',
        content: 'A magical companion bound to certain spellcasters. Familiars can assist in combat (but not attack), scouting, and provide various utility functions. Available to <b>Wizards and Warlocks</b> with the "Find Familiar" spell.'
    },
    'Ranger Companion': {
        title: 'Ranger Companion',
        content: 'A loyal animal companion that fights alongside Rangers. These creatures can be trained and provide tactical advantages in combat and exploration.'
    },
    'Jack of all Trades': {
        title: 'Jack of all Trades',
        content: 'A Bard ability that provides bonus to skills you\'re not proficient in. Represents the Bard\'s versatility and wide range of knowledge.'
    },
    'Ability Scores': {
        title: 'Ability Scores',
        content: 'Six core statistics that define your character\'s natural talents: Strength (physical power), Dexterity (agility), Constitution (endurance), Intelligence (reasoning), Wisdom (awareness), and Charisma (personality).'
    },
    'Strength': {
        title: 'Strength (STR)',
        content: 'Measures physical power and muscle. Used for melee attacks, jumping, and carrying capacity and standing your ground.'
    },
    'Dexterity': {
        title: 'Dexterity (DEX)',
        content: 'Measures agility, reflexes, and balance. Used for ranged attacks, stealth, acrobatics, and determining initiative in combat.'
    },
    'Constitution': {
        title: 'Constitution (CON)',
        content: 'Measures health, stamina, and vital force. Resistance to disease and poison, and overall endurance.'
    },
    'Intelligence': {
        title: 'Intelligence (INT)',
        content: 'Measures reasoning ability, memory, and analytical thinking. Used for investigation, arcane knowledge, history, and is the spellcasting ability for Wizards and Warlocks.'
    },
    'Wisdom': {
        title: 'Wisdom (WIS)',
        content: 'Measures awareness, intuition, and insight. Used for perception, survival, and medicine. Spellcasting ability for Clerics, Druids, and Rangers.'
    },
    'Charisma': {
        title: 'Charisma (CHA)',
        content: 'Measures personality, leadership, and confidence. Used for persuasion, deception, and intimidation. Spellcasting ability for Bards, Paladins and Sorcerers.'
    },
    'HP': {
        title: 'Hit Points (HP)',
        content: 'Represents your character\'s health and vitality. When HP reaches 0, your character is unconscious and may be dying. HP can be restored through rest, healing, and magic. Hit Points are directly affected by your Threshold.'
    },
    'STRESS': {
        title: 'Stress',
        content: 'Represents mental, emotional and physical strain. High stress can affect Hit Points, Exhaution. Managed through rest and specific abilities.'
    },
    'CLASS': {
        title: 'Class Resources',
        content: 'Required for actioning special abilities, features, or resources unique to your character\'s class.'
    },
    'SPELL': {
        title: 'Spell Slots',
        content: 'The magical energy used to cast spells. Each spell consumes one or more spell slots. Spell slots are restored after a long rest, and higher-level spells require higher-level slots. Beaware certain spells also use Stress to boost their power.'
    },
    'Evasion': {
        title: 'Evasion',
        content: 'Your ability to avoid attacks. Higher evasion makes you harder to hit.'
    },
    'Armor': {
        title: 'Armor Slots',
        content: 'Armor Slots are used to reduce incoming damage. For Example: 1 Armor can reduce 1 Hit Point of damage. Most classes can only use 1 slot at a time.'
    },
    'Threshold': {
        title: 'Threshold',
        content: 'Represents breaking points or limits for incoming damage. Threshold is directly attached to how much damage a character will take from a successful and therefore how many Hit Points they lose.'
    }
};

// Tooltip functionality
function showTooltip(term) {
    const definition = tooltipDefinitions[term];
    if (!definition) return;

    // Create tooltip modal
    const modal = document.createElement('div');
    modal.className = 'tooltip-modal';
    modal.innerHTML = `
        <div class="tooltip-content">
            <button class="tooltip-close" onclick="hideTooltip()">&times;</button>
            <div class="tooltip-title">${definition.title}</div>
            <div class="tooltip-text">${definition.content}</div>
        </div>
    `;

    // Add to page
    document.body.appendChild(modal);

    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideTooltip();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            hideTooltip();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function hideTooltip() {
    const modal = document.querySelector('.tooltip-modal');
    if (modal) {
        modal.remove();
    }
}

// Make elements clickable for tooltips
function initializeTooltips() {
    // Only target elements within character creation section
    const characterCreation = document.getElementById('characterCreation');
    if (!characterCreation) return;

    // Find all labels and headings within character creation
    const tooltipElements = characterCreation.querySelectorAll('label, h3, .text-sm.font-medium');

    tooltipElements.forEach(element => {
        const text = element.textContent.trim();
        
        // Check if this text has a tooltip definition
        if (tooltipDefinitions[text]) {
            element.classList.add('tooltip-trigger');
            element.addEventListener('click', function(e) {
                e.preventDefault();
                showTooltip(text);
            });
        }
    });
}

// DC Save ability mapping for each class
const classDCAbilities = {
    'Barbarian': null,      // No DC saves
    'Bard': 'cha',
    'Cleric': 'wis',
    'Druid': 'wis',
    'Fighter': null,        // No DC saves
    'Monk': null,           // No DC saves  
    'Paladin': 'cha',
    'Ranger': 'wis',
    'Rogue': null,          // No DC saves
    'Sorcerer': 'cha',
    'Warlock': 'int',
    'Wizard': 'int'
};

        // Class-specific abilities data
const classAbilities = {
    'Barbarian': [
        { name: 'Rage <i class="skill1">Stress</i>', description: '<ul><b class="text-green-600">Rage: </b><i class="skill1">1 Stress</i><br><li>- Reduce any damage by 1 Hit.</li> <li>- Increase STR +1</li><br><li><i>If one of the below Rage types are selected add the effects to the Rage bonuses plus the other bonuses.</i></li><li><b class="text-green-600">Totem Rage:</b> <i class="skill1">1 Stress</i></li><li><b>Bear:</b> +1 HP, +1 Stress, Reduce damage by 1 Hit.</li><li><b>Eagle:</b> +1 Evasion, +1 DEX, Perception Advantage</li><li><b>Tiger:</b> +1 DEX, Jump distance doubles, Jump check with Advantage.</li><li><b>Wolf:</b> +2 When combining Attacks, Advantage on  Tracking.</li><br><li><b class="text-green-600">Blood Rage:</b> <i class="skill1">1 Stress</i><li>- Add 1d4 Temp HP. If you are at max this skill will increase it beyond the max.</li><li>- Add 1d6 Temp Stress. If you are at max this skill will increase it beyond the max.</li><li>- Add 1d4 to your Attack Roll. Level 5: 1d6, Level 10: 1d8</li><li>- Add 1 die to your Damage Roll. Level 5: 1 dice, Level 10: 3 Dice</li><li>- Resist any Stress effects incurred by an Enemy.</li><li>- Roll attacks on any creature within melee range. Any successful attacks cause +1 Hit of damage.</li><li>- <b><u>Cannot</u></b> receive any Healing while raging.</li><li>- Remove any temporary effects (HP, Stress) when the Blood Rage ends.</li></ul>' },
        { name: 'Reckless Attack <i class="skill2">1 Class</i>', description: 'Attack with Advantage, but enemies have Advantage against you until your next turn.' },
        { name: 'Danger Sense', description: '<ul><li>- Can make your next <b>DEX Save</b> with Advantage.</li></ul>' },
        { name: 'Unarmored Defense <i class="skill3">Special</i>', description: '<ul><li>- Add your initial <b>DEX</b> to Evasion (min +2).</li> <li>- Add <b class="dark:text-red">DEX</b> to Lower Threshold and <b>DEX & CON</b> Mod to Upper Threshold.</li><li>- Add +3|+3 per level to Threshold.</li></ul>' },
        { name: 'Feral Instinct <i class="skill2">1 Class</i>', description: 'Gain Advantage on initiative rolls and cannot be surprised while conscious.' },
        { name: 'Brutal Critical <i class="skill1">Stress</i>', description: '<ul><li> Add 1 die per Stress Point used to your next damage roll.</li></ul>' },
        { name: 'Relentless Rage <i class="skill1">1 Stress</i>', description: '<ul><li>- If you drop to 0HP, you can instead drop to 1HP.</li><li>- Can only use this ability once/combat, but before you lose your last HP.</li></ul>' },
        { name: 'Fanatical Focus <i class="skill2">1 Class</i>', description: '<ul><li>- While raging, if you fail a Saving Throw you can choose to roll it again.</li><li?- You must use the new roll.</li></ul>' },
        { name: 'Echo Howl <i class="skill1">1 Stress</i>', description: '<ul><li>- Cause <b>1 Stress</b> to all your enemies in close range.</li><li>- Each enemy can roll a <b>WIS Save</b>.</li><li></li>- For each failed Save, you can select an ally to recover <b>1 Stress</b>.</ul>' },
        { name: 'Cleaver <i class="skill1">1 Stress</i>', description: '<ul><li>- If you do more Hits than the Enemy\'s remaining HP, you can send any remaining Hits to another Creature that is close to the original target.</li></ul>' }
    ],
    'Bard': [
        { name: 'Bardic Inspiration <i class="skill2">1 Class</i>', description: '<ul><li>- Give an ally an Inspiration Die. (held until the next Long Rest)</li><li>- <b>Level 1:</b> 1d4, <b>Level 5:</b> 1d6, <b>Level 8:</b> 1d8.</li><li><i>The die can be used to...</i></li><li>- Recover Hit Points.</li><li>- Recover Stress.</li><li>- Recover Class.</li><li>- Add the result to a Skill, Save, Attack or Damage Roll.</li></ul>' },
        { name: 'Jack of All Trades', description: '<ul><li>- You gain one more Ability Score Proficiency.</li><li>- All your skill checks gain +1 to rolls. (+2 at Level 5, +3 at Level 8)</li></ul>' },
        { name: 'Song of Rest <i class="skill2">1 Class</i>', description: '<ul><li>- You can increase by +1 any Hit Points or Stress recovered from a Short Rest.</li><li>- Or on a Long Rest select another Resource to recover 1 point.</li</ul>' },
        { name: 'Counter Charm <i class="skill1">1 Stress</i>', description: '<ul><li>- You can remove the Charmed condition from an ally.</li><li>At Level 5</li><li>- You can now also remove a Frightened condition.</li><li>- <i>Note:</i> It is one or the other, but not both.</li></ul>' },
        { name: 'Blade Flourish <i class="skill1">Stress</i>', description: '<ul><li><i class="skill1">1 Stress</i></li><li>- Increase Attack +1</li><li>- On a successful Attack cause 1 Stress.</li><li><i class="skill1">2 Stress</i></li><li>- Add 2d4 Psychic damage dice on top of all other damage.</li><li>- A successful Attack now cause 2 Stress.</li><li><i class="skill1">3 Stress</i></li><li>- Increase the Attack +2</li><li>- Add 3d4 Psychic Damage.</li><li>- Cause 3 Stress.</li></ul>' },
        { name: 'Unsettling Words <i class="skill2">1 Class</i>', description: '<ul><li>- You can force a creature\'s next roll to be with Disadvantage.</li><li>- They will also take 1 Stress.</li></ul>' },
        { name: 'Song of Valor <i class="skill2">1 Class</i>', description: '<ul><li>- You can increase by +1 an Attack for you or an ally, and the damage by +1 die.</li></ul>' },
        { name: 'Silver Tongue <i class="skill2">1 Class</i>', description: '<ul><li>- Enemies within Close range must make a Save or be entranced in distraction.</li><li>- On their next turn they will act out their distraction.</li><li>- They will not attack their own allies or self harm, however they may perform other simple tasks like opening a door.</li></ul>' },
        { name: 'Performer\'s Boon', description: '<ul><li><i>Select 1</i></li><li>- Add +1 to a Stat Ability</li><li>- Add +1 to Evasion</li><li>- Add +1 to Armor Slot</li><li>- Add +1 to Attack/Damage Rolls</li><li>- Add +1 Hit Point (above max)</li><li>- Add +1 Stress (above max)</li><li>- Gain +1 Spell.</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is CHA.</i>', description: '<ul><li>- Choose from the selected spell-list.</li><li>- Number of spells is equal to 1 + Level.</li><li>- Spell Save DC is 8+Mod.</li></ul>' }
    ],
    'Cleric': [
        { name: 'Death\'s Door <i class="skill1">1 Stress</i>', description: '<ul><li>- When you or an ally has a Critical attack against you within Close Range, instead make it a normal Attack.</li></ul>' },
        { name: 'Channel Divinity <i class="skill2">Class</i>', description: '<ul><li>Create a barrier of Godly energy around you at Close Range that Undead cannot cross.</li><li>- All Undead creatures within Close Range will be considered turned from you.</li><li>- A creature caught in the area on creation must make a Con Save, on a failure they will also take 1 Hit and 1 Stress.</li><li>- A creature that is forced into the area through your movement. Will make a CON Save at Advantage and take the penalties for a failure. If they succeed they are no longer restricted by the barrier.</li><li>- A creature that is successfully turned will, not approach or attack you or any ally within close range of you.</li><br><li>Use 1 Class point equal to the monster Tier.</li></ul>' },
        { name: 'Read Thoughts <i class="skill1">1 Stress</i>', description: '<ul><li>- Surface thoughts and emotions only.</li></ul>' },
        { name: 'War Attack <i class="skill1">1 Stress</i>', description: '<ul><li>- If you have made an attack already this turn (hit or miss), make a another Melee attack. (<i>It must be on the same target</i>).</li><li>- The Damage is also considered Radiant for this attack only.</li></ul>' },
        { name: 'Warding Flare <i class="skill1">1 Stress</i>', description: '<ul><li>- Cause a flash of Divine light to momentarily blind the enemy.</li><li>- When a Creature is attacking an Ally, force them to roll at Disadvantage until the start of your next turn.</li></ul>' },
        { name: 'Blessing <i class="skill2">1 Class</i>', description: '<ul><li>- If you make a Save or Skill check, you can choose to succeed.</li></ul>' },
        { name: 'Divine Strike <i class="skill2">1 Class</i>', description: '<ul><li>- Increase Damage by +2 for each die.</li></ul>' },
        { name: 'Guided Strike<i class="skill2">1 Class</i>', description: '<ul><li>Level 1-5</li><li>- Add +5 to your Attack and Damage Rolls.</li><li>Level 6-10</li><li>- Add +8 to your Attack and Damage Rolls.</li></ul>' },
        { name: 'Disciple of Life <i class="skill1">1 Stress</i>', description: '<ul><li>- All your Healing skills this action double the return of Hit Points.</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is WIS.</i>', description: '<ul><li>- Access to all available Spells within the Cleric domain.</li><li>- Number of spells is equal to 1 + Level + Modifier.</li><li>- Spell Save DC is 8 + Mod.</li></ul>' }
    ],
    'Druid': [
        { name: 'Wild Beast <i class="skill1">Stress</i>', description: '<ul><li>- Using Stress transform your body into a creature of your choice.</li><li><i class="skill1">1 Stress:</i> Basic</li>  <li><i class="skill1">2 Stress:</i> Can Swim</li>  <li><i class="skill1">3 Stress:</i> Can Fly</li><li><i class="skill1">4 Stress:</i> Elemental Shape</li><li>- When in Wild Shape form, you cannot cast spells, or use skills that the creature otherwise couldn\'t do.</li></ul>' },
        { name: 'Fungal Infestation <i class="skill2">1 Class</i>', description: '<ul><li>- Use fungal spores to infect a creature.</li><li>- The creature must succeed a CON Save</li><li>- On a fail the creature will Attack, Move or do nothing on it\'s turn (Player\'s Choice.)</li></ul>' },
        { name: 'Radiant Soul <i class="skill2">1 Class</i>', description: '<ul><li>- Roll 1d4 and add the result to all damage dice.</li><li>- The damage is also considered Radiant.</li></ul>' },
        { name: 'Mighty Summoner <i class="skill1">1 Stress</i>', description: '<ul><li>- All summoned creatures gain an extra 1HP.</li><li>- All creatures Attacks are considered Magical.</li></ul>' },
        { name: 'Natural Recovery <i class="skill2">1 Class</i>', description: '<ul><li>- Select yourself or an Ally.</li><li>- Roll 1d4 and remove that amount of Stress or Hit Points, but not both.</li></ul>' },
        { name: 'Healing Hands <i class="skill1">1 Stress</i>', description: '<ul><li><b>Option 1:</b> <i class="skill2">1 Class</i><li>- Recover 1 Hit Point or 1 Stress Point  or a Poison/Disease.</li> <li><b>Option 2:</b> <i class="skill2">2 Class</i></li><li>- You can roll an attack (this is not your attack action) and on a success, you touch an enemy, roll 1d4 and remove that amount of HP from the target and then touch an ally and they recover the result in HP.</li></ul>' },
        { name: 'Spirit Totem <i class="skill1">Stress</i>', description: '<ul><li>- <b>Bear:</b> <i class="skill1">1 Stress</i><li>- Add 1 Temp HP to all allies.</li><li>- You gain +1|+2 to your threshold per level.</li><li>- <b>Hawk:</b> <i class="skill2">1 Stress</i></li><li>- Can make a combined attack, adding damage together.</li><li>- Perception checks have Advantage.</li><li>- <b>Unicorn:</b> <i class="skill1">1 Stress</i></li><li>- Heal spells add 1 extra HP to all affected.</li><li>- Advantage on checks to detect creatures.</li></ul>' },
        { name: 'Nature\'s Boon', description: '<ul><li>- Add +1 to a Stat Ability</li><li>- Add +1 to Evasion</li><li>- Add +1 to Armor Slot</li><li>- Add +1 Hit Point (above max)</li><li>- Add +1 Stress (above max)</li><li>- Gain +1 Spell</li></ul>' },
        { name: 'Speech of the Woods', description: '<ul><li>- You learn to speak, read, and write Sylvan.</li><li>- Beasts can understand your speech, and you gain the ability to decipher their noises and motions.</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is WIS.</i>', description: '<ul><li>- Choose from the selected spell-list.</li><li>- Number of spells is equal to 1 + Level.</li><li>- Spell Save DC is 8 + Mod.</li></ul>' }
    ],
    'Fighter': [
        { name: 'Action Surge <i class="skill1">1 Stress</i>', description: '<ul><li>- Take an extra action.</li><li>- Attack - Make another Attack.</li><li>- Defend - The next Attack against you is at Disadvantage.</li><li>- Move - Move extra distance.</li></ul>' },
        { name: 'Rune Carver <i class="skill1">1 Stress</i>', description: '<ul><li>- When you make a successful Attack you can apply one of the below.</li><li>- Fire: Inflict 1d6 Fire damage on this attack and at the start of your next turn.</li><li>- Stone: Can force the Enemy to stand in a stupor for their next turn until the start of your next turn.</li><li>- The target can make a CON Save to resist.</li></ul>' },
        { name: 'Second Wind <i class="skill1">1 Stress</i>', description: '<ul><li>- Roll 1d4 and recover that many Hit Points and half as much to Class.</li></ul>' },
        { name: 'Armor Master <i class="skill2">1 Class</i>', description: '<ul><li>- You can use as much armor that you have available to reduce Damage.</li></ul>' },
        { name: 'Giant\'s Might <i class="skill2">1 Class</i>', description: '<ul><li>- Your STR modifier doubles for 1 Turn or Action.</li></ul>' },
        { name: 'Indomitable <i class="skill2">1 Class</i>', description: '<ul><li>- You can Re-Roll a failed save, but you must use the new result.</li></ul>' },
        { name: 'Know Thy Enemy <i class="skill2">1 Class</i>', description: '<ul><li>- Spend some time examining an opponent and judge 2 of the following:</li><li>- Strength score</li><li>- Dexterity score</li><li>- Constitution score</li><li>- Evasion</li><li>- Current Hit Points</li><li>- Current Stress Points</li></ul>' },
        { name: 'Relentless <i class="skill2">1 Class</i>', description: '<ul><li>- If you have no Stress available.</li><li>- Roll 1d4 and return that much Stress.</li></ul>' },
        { name: 'Battle Master <i class="skill1">1 Stress</i>', description: '<ul><li>- <b>Commander\'s Strike</b> <i class="skill1">1 Stress</i></li><li>- Allow an ally to retaliate when they are hit.</li><li>- <b>Feinting Attack</b> <i class="skill2">1 Class</i></li><li>- Force the Enemy\'s next Attack to be Disadvantage.</li><li>- <b>Goading Attack</b> <i class="skill2">1 Class</i></li><li>- The target must Attack (only) you on their next round.</li><li>- <b>Maneuvering Attack</b> <i class="skill1">1 Stress</i></li><li>- Give an Ally Advantage on their next Attack.</li><li>- <b>Parry</b> <i class="skill2">1 Class</i></li><li>- Reduce an Attack against you by 1 Hit.</li><li>- <b>Pushing Attack</b> <i class="skill1">1 Stress</i></li><li>- Push the target back out of your range.</li><li>- <b>Rally</b> <i class="skill2">1 Class</i></li><li>- Roll 1d4 and remove the result from enemy Stress.</li><li>- Either 1 target or multiple.</li><li>- Return the result to your allies.</li><li>- <b>Sweeping Attack</b> <i class="skill1">1 Stress</i></li><li>- On a successful Attack, select up to 2 more targets in Melee Range and give them 1 Hit.</li><li>- <b>Menacing Attack</b> <i class="skill1">1 Stress</i></li><li>- Force a WIS Save or they become Frightened of you until the end of your next turn.</li></ul>' },
        { name: 'Fighting Style', description: '<ul><li>- Defender: Add +1 to Evasion.</li><li>- Two-Handed: With 2-Handed weapons your Critical hit is a 19 or 20.</li><li>Dual-Wield: Can use an Off-Hand Weapon and gain it\'s other bonuses.</li><li>- Archer: Add +1 to Ranged Attacks.</li></ul><select id="charStyle" class="w-full mt-4 px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"><option>--</option><option>Archer +1 Ranged</option><option>Defender +1 Evasion</option><option>2-Handed Crits 19-20</option></select>' }
    ],
    'Monk': [
        { name: 'Unarmored Defense', description: '<ul><li>- Add your initial DEX to Evasion (min +2).</li><li>- Add your current DEX to your (Lower & Upper) Threshold.</li><li>- Add +2|+2 per level to Threshold.</li></ul>' },
        { name: 'Perfect Self <i class="skill2">1 Class</i>', description: '<ul><li>- Must use fists.</li><li>Level 1-3</li><li>- +1 Attack Roll</li><li>Level 4-6</li><li>- +2 Attack Roll</li><li>Level 7-10</li><li>- +3 Attack Roll</li></ul>' },
        { name: 'Flurry of Blows <i class="skill1">2 Stress</i>', description: '<ul><li>- Must use fists.</li><li>- Make a series of Attacks equal to your DEX modifier.</li><li>- For each successful roll add that number of dice to the damage roll.</li></ul>' },
        { name: 'Purity of Body <i class="skill1">Stress</i>', description: '<ul><li>- Using Stress you can remove any Poisons and Disease from your body.</li><li>- The tier of the poison will dictate the amount of Stress to use.</li></ul>' },
        { name: 'Stress for Stress <i class="skill1">Stress</i>', description: '<ul><li>- You can give yourself Stress, and when you do also give the same amount to an Enemy (or enemies).</li></ul>' },
        { name: 'Stunning Strike <i class="skill2">1 Class</i>', description: '<ul><li>- Must use fists.</li><li>- Make an attempt to stun your enemy.</li><li>- Target rolls a CON Save. </li><li>- On a Fail target is stunned for 1d4 rounds. (Rolled by the GM)</li></ul>' },
        { name: 'Deflect Missiles <i class="skill2">1 Class</i>', description: '<ul><li>- If a missile attack is directed at you.</li><li>- Roll a DEX Save:</li><li>- On a Fail reduce the damage by 1 Hit.</li><li>- On a Success reduce the damage by 2 Hits.</li></ul>' },
        { name: 'Danger Sense', description: '<ul><li>- Can make your DEX Saves with advantage.</li></ul>' },
        { name: 'Stillness of Mind <i class="skill2">1 Class</i>', description: '<ul><li>- Remove 1d4 Stress from either you or an ally.</li></ul>' },
        { name: 'Quivering Palm <i class="skill2">1 Class</i>', description: '<ul><li>- Must use fists.</li><li>- Make 1 Attack to a creature within range.</li><li>- At the start of your next turn (before you take any actions) you Force the target to Roll Divine Die and on a fail you can repeat the damage.</li></ul>' }
    ],
    'Paladin': [
        { name: 'Divine Sense <i class="skill1">1 Stress</i>', description: '<ul><li>- You sense evil and unnatural creatures within Close range.</li></ul>' },
        { name: 'Lay on Hands <i class="skill2">1 Class</i>', description: '<ul><li>- Target an ally (in touch range) and initiate one of the below options.</li><li><i>Select one Option</i></li><li>- Recover 1d4 Health</li><li>- Recover 1d4 Stress</li><li>- Remove 1 Poison or Disease</li><li>- Cannot use on self</li></ul>' },
        { name: 'Smite <i class="skill2">1 Class</i>', description: '<ul><li>- Add 1 damage die to your Damage roll.</li><li>- Roll 1d4 and cause that much Stress</li><li>- If the creature is a demon or undead - Add 2 damage dice and cause maximum Stress.</li></ul>' },
        { name: 'Armor Master <i class="skill2">1 Class</i>', description: '<ul><li>- Utilize your Armor Slots better.</li><li>- Use up to 2 Slots at a time to reduce damage.</li></ul>' },
        { name: 'Protective Spirit <i class="skill2">1 Class</i>', description: '<ul><li>- You can place yourself in harms way to protect your allies.</li><li>- Use as many of your Armor Slots necessary to reduce an ally\'s damage by an equal amount.</li></ul>' },
        { name: 'Aura of Guardian <i class="skill1">1 Stress</i>', description: '<ul><li>- You can decide to take the damage of an ally.</li><li>- The damage cannot be reduced.</li></ul>' },
        { name: 'Aura of Protection <i class="skill1">1 Stress</i>', description: '<ul><li>- Select an ally in Close range and they gain +2 to Evasion.</li></ul>' },
        { name: 'Channel Divinity <i class="skill2">Class</i>', description: '<ul><li>- Create a barrier of Godly energy around you at Very Close Range that Undead cannot cross.</li><li>- All Undead creatures within Close Range will be considered turned from you.</li><li>- A creature caught in the area on creation must make a Con Save, on a failure they will also take 1 Hit and 1 Stress.</li><li>- A creature that is forced into the area through your movement. Will make a CON Save at Advantage and take the penalties for a failure. If they succeed they are no longer restricted by the barrier.</li><li>- A creature that is successfully turned will, not approach or attack you or any ally within close range of you.</li><br><li>Tier 1: <i>2 Class</i></li><li>Tier 2: <i>3 Class</i></li><li>Tier 3: <i>4 Class</i></li><li>Tier 4: <i>5 Class</i></li><li>Tier 5: <i>6 Class</i></li></ul>' },
        { name: 'Champion\'s Boon', description: '<ul><li>- Add +1 to a Stat Ability</li><li>- Add +1 to Evasion</li><li>- Add +1 to Armor Slot</li><li>- Add +1 to Attack/Damage Rolls</li><li>- Add +1 Hit Point (above max)</li><li>- Add +1 Stress (above max)</li><li>- Gain +1 Spell</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is CHA.</i>', description: '<ul><li>- Choose from the selected spell-list.</li><li>- Number of spells is equal to 1 + Level.</li><li>- Spell Save DC is 8 + Mod.</li></ul>' }
    ],
    'Ranger': [
        { name: 'Favored Enemy', description: '<ul><li>- Select a creature that you gain Advantage with on any Attacks, or Skills that deal with that Creature.</li><li>- Select another creature at level 4 and level 8.</li><li>- The creature cannot be of the Race options. (The GM may allow an exception).</li><li><select id="charEnemy1" class="w-full mt-4 px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"><option>Level 1</option><option>Ankhegs/Owlbears</option><option>Bugbears/Ogres</option><option>Carrion Crawlers/Ettercaps</option><option>Dragons</option><option>Giants</option><option>Goblins/Hobgoblins</option><option>Kobolds/Bullywugs</option><option>Lizardfolk/Displacer Beasts</option><option>Lycanthropes</option><option>Oozes/Blights</option><option>Orcs/Gnolls</option><option>Shapechangers/Dryads</option><option>Skeletons/Zombies</option><option>Spiders</option><option>Wolves</option></select></li><li><select id="charEnemy2" class="w-full mt-4 px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"><option>Level 4</option><option>Ankhegs/Owlbears</option><option>Bugbears/Ogres</option><option>Carrion Crawlers/Ettercaps</option><option>Dragons</option><option>Giants</option><option>Goblins/Hobgoblins</option><option>Kobolds/Bullywugs</option><option>Lizardfolk/Displacer Beasts</option><option>Lycanthropes</option><option>Oozes/Blights</option><option>Orcs/Gnolls</option><option>Shapechangers/Dryads</option><option>Skeletons/Zombies</option><option>Spiders</option><option>Wolves</option></select></li><li><select id="charEnemy3" class="w-full mt-4 px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"><option>Level 8</option><option>Ankhegs/Owlbears</option><option>Bugbears/Ogres</option><option>Carrion Crawlers/Ettercaps</option><option>Dragons</option><option>Giants</option><option>Goblins/Hobgoblins</option><option>Kobolds/Bullywugs</option><option>Lizardfolk/Displacer Beasts</option><option>Lycanthropes</option><option>Oozes/Blights</option><option>Orcs/Gnolls</option><option>Shapechangers/Dryads</option><option>Skeletons/Zombies</option><option>Spiders</option><option>Wolves</option></select></li></ul>' },
        { name: 'Deft Explorer', description: '<ul><li>- You do not need to use Stress on difficult terrain to move.</li><li>- Stealth, Survival Skills are with Advantage.</li></ul>' },
        { name: 'Supernatural Defense <i class="skill1">1 Stress</i>', description: '<ul><li>- You gain temporary bonus to Evasion for this combat equal to the number of your Armor. </li></ul>' },
        { name: 'Hunter\'s Mark <i class="skill2">1 Class</i>', description: '<ul><li>- Mark a Creature within range for the duration of combat. (Or until the creature is removed.)</li><li>- The Ranger can choose to prevent any Stress skill the creature may use (but not GM Tokens).</li><li>- The Creature cannot hide in combat.</li></ul>' },
        { name: 'Ranger Companion', description: '<ul><li>- Select an Animal that can assist the Ranger. This creature can attack on its own. (<i>Using the Ranger\'s Initiative</i>)</li><li>- Use 1 Class Point to make a combined attack and add the damage together.</li></ul>' },
        { name: 'Tireless <i class="skill1">1 Stress</i>', description: '<ul><li>_When you drop to 1 Hit Point or Stress._</li><li>- You roll 1d4 and can add it to your Hit Points.</li></ul>' },
        { name: 'Nature\'s Veil <i class="skill2">1 Class</i>', description: '<ul><li>- When in the wilderness, you can become hidden and do not need to roll to do so.</li></ul>' },
        { name: 'Feral Senses <i class="skill1">1 Stress</i>', description: '<ul><li>- When Attacking creatures you cannot see you do not have Disadvantage.</li></ul>' },
        { name: 'Ranger\'s Boon', description: '<ul><li>- Add +1 to a Stat Ability</li><li>- Add +1 to Evasion</li><li>- Add +1 to Armor Slot</li><li>- Add +1 to Attack/Damage Rolls</li><li>- Add +1 Hit Point (above max)</li><li>- Add +1 Stress (above max)</li><li>- Gain +1 Spell</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is WIS.</i>', description: '<ul><li>- Choose from the selected spell-list.</li><li>- Number of spells is equal to 1 + Level.</li><li>- Spell Save DC is 8 + Mod.</li></ul>' }
    ],
    'Rogue': [
        { name: 'Sneak Attack <i class="skill2">1 Class</i>', description: '<ul><li>- Level 1~3 Add 1d6 to your damage roll.</li><li>- Level 4-6 Add 2d6 to your damage roll.</li><li>- Level 7-10 Add 3d6 to your damage roll..</li></ul>' },
        { name: 'Assassinate <i class="skill1">Stress</i>', description: '<ul><li>- 1 Stress: <i>Level 1~5</i> Add one hit to the total of damage. Ex. If the damage is 3 Hits, increase it to 4Hits.</li><li>- 2 Stress: Level <i>6~10</i> Add two hits to the total of damage. Ex. If the damage is 3 Hits, increase it to 5Hits.</li></ul>' },
        { name: 'Cunning Action <i class="skill3">Special</i>', description: '<ul><li>- Gain the ability to</li><li>- Hide <i class="skill1">1 Stress</i>: Auto hide in right conditions.</li><li>- Dodge <i class="skill2">1 Class</i>: Lower a Hit by 1.</li><li>- Move <i class="skill1">1 Stress</i>: Travel one extra distance of combat.</li></ul>' },
        { name: 'Steady Aim <i class="skill2">1 Class</i>', description: '<ul><li>- On any successful Attack. Roll 1d4. Success Target is 4.</li><li>- Add 1 Hit to your damage.</li><li>- Hit the target you were aiming for, sword hand, vial on a table.</li></ul>' },
        { name: 'Uncanny Dodge <i class="skill1">1 Stress</i>', description: '<ul><li>- When you are hit with (any) Damage, lower the damage by 1 Hit.</li></ul>' },
        { name: 'Misdirection <i class="skill2">1 Class</i>', description: '<ul><li>- Force a creature to roll 1d6 and subtract it from the result of an Attack Roll.</li></ul>' },
        { name: 'Poison <i class="skill3">Special</i>', description: '<ul><li>- Tier 1 <i>(Level 1~5)</li><li>- Use 1 Stress Point to make a poison this can be held indefinitely.</li><li>- Use 1 Class Point to roll 1d4 extra damage.</li><li>- Tier 2 <i>(Level 6~7)</i></li>  <li>- Use 2 Stress Points to make a stronger poison.</li>  <li>- Use 2 Class Points to roll 2d4 extra damage</li><li>- The damage will reoccur at the start of the creature\'s turn unless it succeeds a CON Save.</li><li>- Tier 3 <i>(Level 8-9)</i></li><li>- Use 3 Stress Points to create poison.</li><li>- Use 2 Class Points to roll 1d4 on an Attack and add that number to reduce a creatures HP by the result.</li><li>- Tier 4 <i>(Level 10)</i></li><li>- Use 4 Stress Points to create poison.</li><li>- Use 3 Class Points to roll 1d4 on an Attack and add that number to reduce a creatures HP by the result.</li><li>- The damage will reoccur at the start of the creature\'s turn unless it succeeds a CON Save.</li><li>- Creating poison Tier 2 an up will require time to produce decided by the DM. </li></ul>' },
        { name: 'Maker of Fate', description: '<ul><li>- When rolling Divine Dice add an Extra Divine die to the roll.</li></ul>' },
        { name: 'Thief Reflexes', description: '<ul><li>- Roll DEX rolls with Advantage.</li></ul>' },
        { name: 'Stroke of Luck <i class="skill2">1 Class</i>', description: '<ul><li>- Re-roll any die roll and you must use the new roll.</li></ul>' }
    ],
    'Sorcerer': [
        { name: 'Favored by the Gods <i class="skill2">1 Class</i>', description: '<ul><li>- If you make an attack and miss, you can roll dice and add it to the Attack Roll.</li><br><li>Level 1-3: 1d4</li><li>Level 4-6: 2d4</li><li>Level 7-10: 3d4</li></ul>' },
        { name: 'Font of Magic <i class="skill1">1 Stress</i>', description: '<ul><li>- Can use one Stress and replace it for a Spell Slot or vice versa.</li></ul>' },
        { name: 'Meta-Magic <i class="skill1">1 Stress</i> <i>(All meta-magic must be decided before the spell is cast.)</i>', description: '<ul><li>- <b>Careful Spell</b><i>1 Stress/Person</i></li><li>- Remove an ally from the area or a spells effect.<li>- <b>Empowered Spell</b> <i>1 Stress</i></li><li>- Add 1 damage die, or an extra target.<li>- <b>Seeking Spell</b> <i>1 Stress</i></li><li>- If you miss when making an Attack, you can instead cause 1 Hit.<li>- <b>Twinned Spell</b> <i>1 Stress</i></li><li>- If the spell projectile targets a single target you can add on more projectile.</li></ul>' },
        { name: 'Innate Sorcery <i class="skill2">1 Class</i>', description: '<ul><li>- You tap into the magic of the dragons.</li><li>- Add 1d10 to your damage roll.</li><li>- The extra damage extends out to Close Range and targets all within range (Allies included).</li><br><li>Type: Black/Acid</li><li>Type: Blue/Lightning</li><li>Type: Green/Poison</li><li>Type: Red/Fire</li><li>Type: White/Cold</li></ul>' },
        { name: 'Storm\'s  Fury <i class="skill1">1 Stress</i>', description: '<ul><li>- When you are hit by an Attack.</li><li>- Return half the damage back to the Attacker with Lightning Damage.</li></ul>' },
        { name: 'Tides of Chaos <i class="skill2">1 Class</i>', description: '<ul><li>- You can roll your next Spell Attack with Advantage.</li> <li>- Regardless of the result, your next spell must be with Disadvantage or the Save with Advantage.</li><li>- There is no limit of time on this ability and will only reset after a spell is cast.</li><li>- When reaching Level 10 you can choose to eliminate this with another Stress Point.</li></ul>' },
        { name: 'Divine Soul <i class="skill2">1 Class</i>', description: '<ul><li>- Temporarily gain +1 Hit Point, +1 Spell Point.<li><li>- Remove after a Long Rest.</li></ul>' },
        { name: 'Unearthly Recovery <i class="skill2">2 Class</i>', description: '<ul><li>- You and only you recover +2 HP and +2 Stress and +2 Spell.</li></ul>' },
        { name: 'Telepathic Speech', description: '<ul><li>- Can sense a living mind within Close range.</li><li>- If you are familiar with the creature you can communicate with it Psychically.</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is CHA.</i>', description: '<ul><li>- Choose from the selected spell-list.</li><li>- Number of spells is equal to 1 + Level.<li>- Spell Save DC is 8 + Mod.</li></ul>' }
    ],
    'Warlock': [
        { name: 'Defy Death <i class="skill2">1 Class</i>', description: '<ul><li>- You can add 1 Divine Die to your next Divine Roll.</li><li>- For the Warlock this can also be done when they reach 0HP or anytime until next Long Rest.</li></ul>' },
        { name: 'Spirit Protection <i class="skill2">2 Class</i>', description: '<ul><li>- Create a physical projection of yourself.</li><li>- The projection can not be targeted and enhanced with any kind of ability.</li><li>- It has half your HP and no Stress, Class or Spell points.</li><li>Level 1-5</li><li>- It can do rudimentary actions, open doors, pull levers.</li><li>- It cannot be more than 1 Distance from you.</li><li>Level 6-10</li><li>- All the above.</li><li>- It can also Attack once on your turn but at half your normal damage.</li></ul>' },
        { name: 'Spirit Shield <i class="skill1">1 Stress</i>', description: '<ul><li>- You can reduce the damage against you or an ally by 2d6 for each Stress Point used.</li></ul>' },
        { name: 'Pact Boon', description: '<ul><li>- Add +1 to a Stat Ability</li><li>- Add +1 to Evasion</li><li>- Add +1 to Armor Slot</li><li>- Add +1 to Attack/Damage Rolls</li><li>- Add +1 Hit Point (above max)</li><li>- Add +1 Stress (above max)</li><li>- Gain +1 Spell</li></ul>' },
        { name: 'Necromancer <i class="skill2">1 Class</i>', description: '<ul><li>- You gain the Animate Dead spell (if you do not already have it.)</li><li>- You gain greater control and power of the undead you create.</li> <li>- Roll Divine Dice to decide the Undead that returns.</li><li>- You may also choose to increase the Resource by 2 Class and gain a Divine die to add for either option you wish.</li><br><li>Skeleton: Divine, HP:3, Class:2, Stress:2, Mod:+5, Atk:2d6</li><li><b>1 Stress:</b> Reduce a hit by 1.</li><li><b>1 Class:</b> Add an extra damage die to the damage roll.</li><li><b>Feature:</b> Resistant to peircing damage. (Half Damage).</li><br></li><br><li>Zombie: Fate, HP:4, Class:2, Stress:1, Mod:+5, Atk:2d8</li><li><b>1 Stress:</b> Cause any creature they are currently attacking to roll a CON Save or take 1 Stress caused by their grotesque nature.</li><li><b>1 Class:</b> Add an extra damage die to the damage roll.</li><li><b>Feature:</b> Roll Divine Dice on a success they return with 1HP/O Stress</li></ul>' },
        { name: 'Stress for Stress <i class="skill2">1 Class</i>', description: '<ul><li>- When you take Stress, you can also cause 1 Stress to an Enemy.</li><li>- Or you can return the same amount to an Ally within Close Range.</li></ul>' },
        { name: 'Tokens of the Departed <i class="skill2">1 Class</i> <i>(To use the item)</i>', description: '<ul><li>- You can take items from your kills.<li>- Roll Divine Die and if the roll favors the Divine.</li><li>- The items can be uses to enhance your own abilities.</li><li>- Discuss with the GM on what can be enhanced.</li><li>- The items lose their power and mystic after 1 use.</li></ul>' },
        { name: 'Blood for Blood <i class="skill1">1 Stress</i>', description: '<ul><li>- When you take Damage, you can also cause 1 Hit to an Enemy.</li><li>- Or you can return the same amount of HP to an Ally within Close Range.</li></ul>' },
        { name: 'Patron\'s Blessing', description: '<ul><li>- For your devotion, your patron has decided to gift you a piece of Equipment to help further it\'s Godly Presence to the masses and protect its flock. (Discuss with the GM).</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is INT.</i>', description: '<ul><li>- Choose from the selected spell-list.</li><li>- Number of spells is equal to 1 + Level.</li><li>- Spell Save DC is 8 + Modifier.</li></ul>' }
    ],
    'Wizard': [
        { name: 'Arcane Recovery <i class="skill2">1 Class</i>', description: '<ul><li>- Recover Spell Points equal to half your SP total rounded up.</li></ul>' },
        { name: 'Signature Spell <i class="skill1">Stress</i>', description: '<ul><li>- Select 1 spell and give it a bonus equal to the resource used.</li><li><i class="skill1">1 Stress:</i> +1</li><li><i class="skill1">2 Stress:</i> +2</li><li><i class="skill1">3 Stress:</i> +3</li><li>to the Save, Attack and Damage rolls.</li><li>Until a Long Rest.</li></ul>' },
        { name: 'Spell Mastery <i class="skill1">1 Stress</i>', description: '<ul><li>- Selected spells will require 1 less element to cast.</li><li><select id="charSpell" class="w-full mt-4 px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"><option>--</option><option>Gnoll</option><option>Goblin</option><option>Hobgoblin</option><option>Elf</option><option>Gnome</option><option>Halfling</option><option>Human</option><option>Orc</option><option>Tiefling</option></select></li><li>Until a Long Rest.</li></ul>' },
        { name: 'Spell Sequencer <i class="skill3">Special</i>', description: '<ul><li>Combine certain spells for greater effect, you decide when they trigger. Until a Long Rest.</li><li>- Comprehend Languages + Tongues</li><li>- Mage Armor + Find Familiar</li><li>- Shield + Magic Missile</li> <li>- True Strike + Bolt</li></ul>' },
        { name: 'Awakened Mind <i class="skill2">1 Class</i>', description: '<ul><li>- Your next spell can be cast at lower Spell and Stress Point.</li></ul>' },
        { name: 'Clairvoyant <i class="skill2">2 Class</i>', description: '<ul><li>- You can place yourself at the top or bottom of the Initiative order.</li></ul>' },
        { name: 'Knowledge is Power <i class="skill2">1 Class</i>', description: '<ul><li>- Gain the ability to automatically know the results of an Arcane check.</li></ul>' },
        { name: 'Mystic Glyphs <i class="skill2">Class</i>', description: '<ul><li>Can scribe glyphs on items to temporarily imbue magical effects on them. Until next Long Rest.</li><li>- Level 1~3 / <i class="skill2">1 Class</i> = +1</li> <li>- Level 4~6 / <i class="skill2">2 Class</i> = +2</li><li>- Level 7~10 / <i class="skill2">3 class</i> = +3</li></ul>' },
        { name: 'Arcane Echo <i class="skill3">Special</i>', description: '<ul><li><i>Stress Points equal to half the spell. Minimum 1 Point.</i></li><li>- Reshape the magic of a spell where you are the target of a successful spell and echo out a new spell as a Reaction.</li> <li>- The spell you choose must be of level equal to half the spell. If the spell is not used immediately the energy is lost.</li></ul>' },
        { name: 'Spell-Casting <i class="skill3 text-xs">Spell Mod is INT.</i>', description: '<ul><li>A wizard has all spells available to them. However they can only select the number of spells equal to their Level + Casting Modifier.</li><li>- They do not need to memorize spells. Though they can not change their selection.</li><li>- The Spell Save DC is 8 + Casting Modifier.</li><li>- A Wizard can use Class Points as substitute for Spell Points, but not vice versa.</li><li>- A Wizard will gain +1 Spell Point each time they level up. </li></ul>' }
    ]
};

// Universal abilities available to all classes
const universalAbilities = [
    { name: 'Blind Sense', description: '<ul>- When fighting in the dark or when your vision is obstructed you are <u>NOT</u> penalized with Disadvantage.</ul>' },
    { name: 'Crimson Rite <i class="skill3">Special</i>', description: '<ul> <li>- Use your HP to enhance yourself. <i>(Select 1 from below.)</i></li><li>- Add a bonus "to Hit" equal to the HP you used.</li><li>- Add extra damage dice equal to the HP you used.</li><li>- Gain Advantage to Divine Rolls</li></ul>' },
    { name: 'Expertise', description: '<ul><li>- You can pick another Ability stat to be proficient with.</li><li>- Add +1 to the other Ability Scores of you are already proficient in.</li></ul>' },
    { name: 'Extra Attack <i class="skill1">1 Stress</i>', description: '<ul><li>- <strong>Option 1</strong>: Can attack twice against a single creature in a turn. Roll damage for each attack and total the damage.</li><li>- <strong>Option 2</strong>: Can attack twice in a turn. Roll damage for each attack separately and apply to separate creatures.</li></ul>' },
    { name: 'Fast Movement <i class="skill1">1 Stress</i>', description: '<ul><li>- Can move extra quick, moving one more distance tier than normal.</li></ul>' },
    { name: 'Grappler <i class="skill2">1 Class</i>', description: '<ul><li>- Double your <b>STR/DEX</b> modifier to you Grapple roll.</li><li>- When grappling you can use this skill to restrain and immobilize an enemy.</li><li>- The creature cannot move or make an attack.</li><li>- An attack you make will require <i class="skill1">1 Stress</i> on a successful hit, you can only deal <b>1 Hit<b/>.</li></ul>' },
    { name: 'Off-Hand', description: '<ul><li>- Gain the use of fighting with your off-hand and the features of the off-hand weapon.</li><li>- Add the damage dice to your total damage on any successful Attack roll.</li></ul>' },
    { name: 'Retaliation <i class="skill1">1 Stress</i>', description: '<ul><li>After an Enemy attack "Success or Failure", you can return an attack.</li><li>- If a creature moves out of your range reach you can choose to make an attack. <i>(_Cannot use other abilities with this action._)</i></li></ul>' },
    { name: 'Tactician <i class="skill3">Special</i>', description: '<ul><li>- When an ally attacks you can use Stress to also attack and if successful add your damage together.</li><li>- Use Stress equal to the numbers of times the skill has been used this combat.</li></ul>' },
    { name: 'Valiant Aid <i class="skill2">1 Class</i>', description: '<ul><li>- You can give an ally in close range Advantage on their next roll.</li><li>- Alternatively, if the target has Disadvantage they now make a straight normal roll.</li></ul>' }
];

// Gallery functionality
let galleryImages = [];
let currentImageIndex = 0;

// Open gallery modal
function openGallery() {
    if (!currentCharacter) {
        showCustomDialog('No Character Selected', 'Please select a character first.');
        return;
    }
    
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('hidden');
    loadCharacterImages();
}

// Close gallery modal
function closeGallery() {
    document.getElementById('galleryModal').classList.add('hidden');
}

// Load character's images
function loadCharacterImages() {
    if (currentCharacter.images && currentCharacter.images.length > 0) {
        galleryImages = currentCharacter.images;
        currentImageIndex = 0;
        displayGalleryImages();
    } else {
        showGalleryEmpty();
    }
}

// Display gallery images
function displayGalleryImages() {
    if (galleryImages.length === 0) {
        showGalleryEmpty();
        return;
    }
    
    // Show image container and thumbnails
    document.getElementById('galleryEmpty').classList.add('hidden');
    document.getElementById('galleryImageContainer').classList.remove('hidden');
    document.getElementById('galleryThumbnails').classList.remove('hidden');
    
    // Display current image
    showImageAtIndex(currentImageIndex);
    generateThumbnails();
}

// Show image at specific index
function showImageAtIndex(index) {
    if (index < 0 || index >= galleryImages.length) return;
    
    currentImageIndex = index;
    const image = galleryImages[index];
    
    // Update main image
    const mainImage = document.getElementById('galleryCurrentImage');
    mainImage.src = image.url;
    mainImage.alt = image.name || 'Character Image';
    mainImage.classList.add('gallery-fade-in');
    
    // Update counter
    document.getElementById('galleryCounter').textContent = `${index + 1} of ${galleryImages.length}`;
    
    // Update active thumbnail
    updateActiveThumbnail();
    
    // Always show navigation buttons if there are multiple images
    const showButtons = galleryImages.length > 1;
    document.getElementById('galleryPrev').style.display = showButtons ? 'block' : 'none';
    document.getElementById('galleryNext').style.display = showButtons ? 'block' : 'none';
}

// Generate thumbnails
function generateThumbnails() {
    const container = document.getElementById('thumbnailContainer');
    container.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.thumbnail || image.url;
        thumbnail.alt = image.name || 'Character Image';
        thumbnail.className = 'gallery-thumbnail';
        thumbnail.dataset.index = index;
        
        thumbnail.addEventListener('click', () => {
            showImageAtIndex(index);
        });
        
        container.appendChild(thumbnail);
    });
}

// Update active thumbnail
function updateActiveThumbnail() {
    document.querySelectorAll('.gallery-thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Navigation functions with infinite loop
function showPreviousImage() {
    if (galleryImages.length === 0) return;
    
    if (currentImageIndex > 0) {
        showImageAtIndex(currentImageIndex - 1);
    } else {
        // Loop to last image when at first image
        showImageAtIndex(galleryImages.length - 1);
    }
}

function showNextImage() {
    if (galleryImages.length === 0) return;
    
    if (currentImageIndex < galleryImages.length - 1) {
        showImageAtIndex(currentImageIndex + 1);
    } else {
        // Loop to first image when at last image
        showImageAtIndex(0);
    }
}

// Show empty state
function showGalleryEmpty() {
    document.getElementById('galleryEmpty').classList.remove('hidden');
    document.getElementById('galleryImageContainer').classList.add('hidden');
    document.getElementById('galleryThumbnails').classList.add('hidden');
}

// Show loading state
function showGalleryLoading() {
    document.getElementById('galleryLoading').classList.remove('hidden');
    document.getElementById('galleryEmpty').classList.add('hidden');
    document.getElementById('galleryImageContainer').classList.add('hidden');
}

// Hide loading state
function hideGalleryLoading() {
    document.getElementById('galleryLoading').classList.add('hidden');
}

// Compress image to reduce storage size
function compressImage(file, maxWidth = 600, quality = 0.7) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = function() {
            // Calculate new dimensions
            const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            
            // Draw and compress
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
            resolve(compressedDataUrl);
        };
        
        img.src = URL.createObjectURL(file);
    });
}

// Handle image upload
function handleImageUpload(event) {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    
    showGalleryLoading();
    
    // Initialize images array if needed
    if (!currentCharacter.images) {
        currentCharacter.images = [];
    }
    
    let processedCount = 0;
    const totalFiles = files.length;
    
    files.forEach((file, index) => {
        if (file.type.startsWith('image/')) {
            compressImage(file, 600, 0.7).then(compressedDataUrl => {
                currentCharacter.images.push({
                    id: `upload_${Date.now()}_${index}`,
                    name: file.name,
                    url: compressedDataUrl,
                    thumbnail: compressedDataUrl,
                    type: 'upload'
                });
                
                processedCount++;
                if (processedCount === totalFiles) {
                    // All files processed
                    saveCharacters();
                    loadCharacterImages();
                    hideGalleryLoading();
                }
            });
        } else {
            processedCount++;
            if (processedCount === totalFiles) {
                saveCharacters();
                loadCharacterImages();
                hideGalleryLoading();
            }
        }
    });
    
    // Clear the input
    event.target.value = '';
}

// Handle image URL addition
function handleImageUrl() {
    const urlInput = document.getElementById('imageUrl');
    const url = urlInput.value.trim();
    
    if (!url) return;
    
    // Basic URL validation
    if (!isValidImageUrl(url)) {
        showCustomDialog('Invalid URL', 'Please enter a valid image URL ending in .jpg, .jpeg, .png, .gif, or .webp');
        return;
    }
    
    // Initialize images array if needed
    if (!currentCharacter.images) {
        currentCharacter.images = [];
    }
    
    // Add image
    currentCharacter.images.push({
        id: `url_${Date.now()}`,
        name: 'External Image',
        url: url,
        thumbnail: url,
        type: 'url'
    });
    
    saveCharacters();
    loadCharacterImages();
    urlInput.value = '';
}

// Validate image URL
function isValidImageUrl(url) {
    try {
        new URL(url);
        return /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url) || 
               url.includes('imgur.com') || 
               url.includes('unsplash.com') ||
               url.includes('picsum.photos');
    } catch {
        return false;
    }
}

// Delete current image
function deleteCurrentImage() {
    if (galleryImages.length === 0) return;
    
    const imageToDelete = galleryImages[currentImageIndex];
    const confirmMessage = `Are you sure you want to delete this image?\n\n${imageToDelete.name || 'Character Image'}`;
    
    showConfirmDialog(confirmMessage, () => {
        // Remove from character images
        currentCharacter.images = currentCharacter.images.filter(img => img.id !== imageToDelete.id);
        saveCharacters();
        
        // Update gallery display
        galleryImages.splice(currentImageIndex, 1);
        
        if (galleryImages.length === 0) {
            showGalleryEmpty();
        } else {
            // Adjust current index if needed
            if (currentImageIndex >= galleryImages.length) {
                currentImageIndex = galleryImages.length - 1;
            }
            showImageAtIndex(currentImageIndex);
            generateThumbnails();
        }
    });
}

// Show confirm dialog (reuse your existing function or create a simple one)
function showConfirmDialog(message, onConfirm) {
    if (window.confirm(message)) {
        onConfirm();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Gallery event listeners
    document.getElementById('openGallery').addEventListener('click', openGallery);
    document.getElementById('closeGallery').addEventListener('click', closeGallery);
    document.getElementById('galleryPrev').addEventListener('click', showPreviousImage);
    document.getElementById('galleryNext').addEventListener('click', showNextImage);
    document.getElementById('uploadImages').addEventListener('change', handleImageUpload);
    document.getElementById('addImageUrl').addEventListener('click', handleImageUrl);
    document.getElementById('deleteCurrentImage').addEventListener('click', deleteCurrentImage);
    
    // Enter key for URL input
    document.getElementById('imageUrl').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleImageUrl();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('galleryModal');
        if (!modal.classList.contains('hidden')) {
            switch(e.key) {
                case 'Escape':
                    closeGallery();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
                case 'Delete':
                    deleteCurrentImage();
                    break;
            }
        }
    });
    
    // Close modal on outside click
    document.getElementById('galleryModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeGallery();
        }
    });
});

// Class abilities modal functions
function openClassAbilitiesModal() {
    if (!currentCharacter) {
        showCustomDialog('No Character Selected', 'Please select a character first.');
        return;
    }
    
    // Initialize classAbilities if it doesn't exist (similar to familiar/companion pattern)
    if (!currentCharacter.classAbilities) {
        currentCharacter.classAbilities = {
            selectedClass: [],
            selectedUniversal: [],
            abilitySelectValues: {}
        };
    }
    
    const modal = document.getElementById('classAbilitiesModal');
    const title = document.getElementById('classAbilitiesTitle');
    const classSpecificTitle = document.getElementById('classSpecificTitle');
    
    // Show count in title
const maxAbilities = getMaxAbilities(currentCharacter.level || 1);
const currentSelected = getTotalSelectedAbilities();
title.textContent = `${currentCharacter.class} Abilities Reference (${currentSelected}/${maxAbilities})`;
    classSpecificTitle.textContent = `${currentCharacter.class} Specific Abilities`;
    
    // Clear display first
    clearSelectedAbilities();
    
    populateClassAbilities();
    populateUniversalAbilities();
    
    // Restore selections after BOTH class and universal abilities are populated
    restoreClassAbilitiesSelection();
    
    // Update checkbox states after populating and restoring
    updateAbilityCheckboxStates();
    modal.classList.remove('hidden');
}

function closeClassAbilitiesModal() {
    document.getElementById('classAbilitiesModal').classList.add('hidden');
}

function populateClassAbilities() {
    const container = document.getElementById('classSpecificAbilities');
    const characterClass = currentCharacter.class;
    const abilities = classAbilities[characterClass] || [];
    
    container.innerHTML = abilities.map((ability, index) => `
        <label class="flex items-start space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
            <input type="checkbox" class="class-ability-checkbox mt-1" data-type="class" data-index="${index}">
            <span class="text-sm font-medium">${ability.name}</span>
        </label>
    `).join('');
    

}

function populateUniversalAbilities() {
    const container = document.getElementById('universalAbilities');
    
    container.innerHTML = universalAbilities.map((ability, index) => `
        <label class="flex items-start space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
            <input type="checkbox" class="universal-ability-checkbox mt-1" data-type="universal" data-index="${index}">
            <span class="text-sm font-medium">${ability.name}</span>
        </label>
    `).join('');
    

}

function handleAbilityCheckboxChange(checkbox) {
    const type = checkbox.dataset.type;
    const index = parseInt(checkbox.dataset.index);
    
// Check if trying to select when at limit
if (checkbox.checked) {
    const maxAbilities = getMaxAbilities(currentCharacter.level || 1);
    const currentSelected = getTotalSelectedAbilities();
    
    if (currentSelected > maxAbilities) {
        // Prevent selection if over limit
        checkbox.checked = false;
        showCustomDialog('Ability Limit Reached', `You can only select ${maxAbilities} abilities at level ${currentCharacter.level || 1}.`);
        return;
    }
    
    addAbilityToDisplay(type, index);
} else {
    removeAbilityFromDisplay(type, index);
}

    // Save selections
    saveClassAbilitiesSelection();
    // Update checkbox states after any change
    updateAbilityCheckboxStates();
    
        // ADD THIS LINE: Update DC Save display when abilities change
    if (currentCharacter) {
        updateDCSaveDisplay(currentCharacter);
        // ADD THIS LINE: Update Spell Casting section visibility
        updateSpellCastingDisplay(currentCharacter);
    }
}

// ADD THESE 3 FUNCTIONS RIGHT AFTER your existing handleAbilityCheckboxChange function:

// Calculate maximum abilities allowed based on character level
function getMaxAbilities(level) {
    if (!level || level < 1) return 2;
    return 1 + level; // Level 1 = 2, Level 2 = 3, Level 3 = 4, etc.
}

// Get total count of selected abilities (class + universal combined)
function getTotalSelectedAbilities() {
    if (!currentCharacter || !currentCharacter.classAbilities) return 0;
    
    const classSelected = currentCharacter.classAbilities.selectedClass.length;
    const universalSelected = currentCharacter.classAbilities.selectedUniversal.length;
    
    return classSelected + universalSelected;
}

// Update checkbox states based on selection limit
function updateAbilityCheckboxStates() {
    if (!currentCharacter) return;
    
    const maxAbilities = getMaxAbilities(currentCharacter.level || 1);
    const currentSelected = getTotalSelectedAbilities();
    const hasReachedLimit = currentSelected >= maxAbilities;
    
    // Get all unchecked checkboxes (both class and universal)
    const uncheckedBoxes = document.querySelectorAll('.class-ability-checkbox:not(:checked), .universal-ability-checkbox:not(:checked)');
    
    // Enable/disable unchecked boxes based on limit
    uncheckedBoxes.forEach(checkbox => {
        checkbox.disabled = hasReachedLimit;
        
        // Add visual indication
        const label = checkbox.closest('label');
        if (hasReachedLimit) {
            label.classList.add('opacity-50', 'cursor-not-allowed');
            label.classList.remove('cursor-pointer');
        } else {
            label.classList.remove('opacity-50', 'cursor-not-allowed');
            label.classList.add('cursor-pointer');
        }
    });
    
    // Update modal title to show current count
    const title = document.getElementById('classAbilitiesTitle');
    if (title) {
        title.textContent = `${currentCharacter.class} Abilities Reference (${currentSelected}/${maxAbilities})`;
    }
}

// Spell Management Functions
function openSpellSelectionModal() {
    if (!currentCharacter) {
        showCustomDialog('No Character Selected', 'Please select a character first.');
        return;
    }
    
    const modal = document.getElementById('spellSelectionModal');
    const classNameElement = document.getElementById('spellModalClassName');
    const searchInput = document.getElementById('spellSearchInput');
    
    // Set the class name in modal title
  const maxSpells = getMaxSpells(currentCharacter);
const currentSpells = currentCharacter.knownSpellGroups ? currentCharacter.knownSpellGroups.length : 0;
classNameElement.textContent = `${currentCharacter.class} (${currentSpells}/${maxSpells})`;
    
    // Clear search and populate spells
    searchInput.value = '';
    populateSpellsList(currentCharacter.class);
    
    modal.classList.remove('hidden');
    searchInput.focus();
}

function closeSpellSelectionModal() {
    document.getElementById('spellSelectionModal').classList.add('hidden');
}

function populateSpellsList(characterClass, searchTerm = '') {
    const spellsList = document.getElementById('spellsList');
    const classSpellGroups = spellLists[characterClass] || [];
    
    // Filter spell groups based on search term
    const filteredGroups = classSpellGroups.filter(group => 
        group.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.spells.some(spell => 
            spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            spell.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    
    if (filteredGroups.length === 0) {
        spellsList.innerHTML = '<div class="text-center text-gray-500 dark:text-gray-400 py-4">No spell groups found</div>';
        return;
    }
    
    spellsList.innerHTML = filteredGroups.map((group, groupIndex) => {
        // Check if character already knows this spell group
        const alreadyKnown = currentCharacter.knownSpellGroups && 
                            currentCharacter.knownSpellGroups.some(knownGroup => knownGroup.groupName === group.groupName);
        // Check spell limits
const maxSpells = getMaxSpells(currentCharacter);
const currentSpells = currentCharacter.knownSpellGroups ? currentCharacter.knownSpellGroups.length : 0;
const atMaxSpells = currentSpells >= maxSpells;
        
        // Create the spells display with separation lines
        const spellsDisplay = group.spells.map((spell, spellIndex) => `
            <div class="spell-in-group ${spellIndex > 0 ? 'border-t border-gray-300 dark:border-gray-600 pt-3 mt-3' : ''}">
                <h5 class="font-semibold text-xl mb-1">${spell.name}</h5>
                <div class="static text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <p>${spell.description}</p>
                    ${spell.range ? `<p><strong>Range:</strong> ${spell.range}</p>` : ''}
                    ${spell.duration ? `<p><strong>Duration:</strong> ${spell.duration}</p>` : ''}
                    ${spell.save ? `<p><strong>Save:</strong> ${spell.save}</p>` : ''}
                    ${spell.damage ? `<p><strong>Damage:</strong> ${spell.damage}</p>` : ''}
                </div>
            </div>
        `).join('');
        
        return `
            <div class="border-2 border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800">
                <div class="relative items-start mb-4">

                    <button 
                    class=" absolute top-0 right-0 add-spell-group-btn px-4 py-2 ${(alreadyKnown || atMaxSpells) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white text-sm rounded transition-colors font-medium"
                                            data-group-index="${groupIndex}"
                        ${(alreadyKnown || atMaxSpells) ? 'disabled' : ''}
                    >
                        ${alreadyKnown ? 'Known' : atMaxSpells ? 'Max Spells' : 'Add'}
                    </button>
                </div>
                <div class="spells-in-group">
                    ${spellsDisplay}
                </div>
            </div>
        `;
    }).join('');
    
    // Add event listeners to Add Group buttons
    spellsList.querySelectorAll('.add-spell-group-btn').forEach(btn => {
        if (!btn.disabled) {
            btn.addEventListener('click', function() {
                const groupIndex = parseInt(this.dataset.groupIndex);
                addSpellGroupToCharacter(filteredGroups[groupIndex]);
            });
        }
    });
}

function addSpellGroupToCharacter(spellGroup) {
    if (!currentCharacter) return;
    
// Check spell limits
const maxSpells = getMaxSpells(currentCharacter);
const currentSpells = currentCharacter.knownSpellGroups ? currentCharacter.knownSpellGroups.length : 0;

if (currentSpells >= maxSpells) {
    showCustomDialog('Maximum Spells Reached', `${currentCharacter.name} already knows the maximum number of spell groups (${maxSpells}) for their class and level.`);
    return;
}

    // Initialize known spell groups array if not present
    if (!currentCharacter.knownSpellGroups) {
        currentCharacter.knownSpellGroups = [];
    }
    
    // Check if spell group is already known
    const alreadyKnown = currentCharacter.knownSpellGroups.some(knownGroup => knownGroup.groupName === spellGroup.groupName);
    if (alreadyKnown) {
        showCustomDialog('Spell Group Already Known', `${currentCharacter.name} already knows the "${spellGroup.groupName}" spell group.`);
        return;
    }
    
    // Add spell group to character
    currentCharacter.knownSpellGroups.push({ ...spellGroup });
    
    // Update displays
    updateKnownSpellsDisplay();
    populateSpellsList(currentCharacter.class, document.getElementById('spellSearchInput').value);
    
    // Save changes
    saveCharacters();
    
    showCustomDialog('Spell Group Added', `"${spellGroup.groupName}" spell group has been added to ${currentCharacter.name}'s known spells.`);
}

function removeSpellGroupFromCharacter(groupIndex) {
    if (!currentCharacter || !currentCharacter.knownSpellGroups) return;
    
    const groupName = currentCharacter.knownSpellGroups[groupIndex].groupName;
    
    // Remove spell group from character
    currentCharacter.knownSpellGroups.splice(groupIndex, 1);
    
    // Update display
    updateKnownSpellsDisplay();
    
    // Save changes
    saveCharacters();
    
    showCustomDialog('Spell Group Removed', `"${groupName}" spell group has been removed from ${currentCharacter.name}'s known spells.`);
}

function updateKnownSpellsDisplay() {
    const knownSpellsList = document.getElementById('knownSpellsList');
    
    if (!currentCharacter || !currentCharacter.knownSpellGroups || currentCharacter.knownSpellGroups.length === 0) {
        knownSpellsList.innerHTML = '<div class="text-sm text-gray-600 dark:text-gray-400 text-center py-4">No spell groups known. Click "Add Spells" to learn new spell groups.</div>';
        return;
    }
    
    knownSpellsList.innerHTML = currentCharacter.knownSpellGroups.map((group, groupIndex) => {
        // Create the spells display with separation lines
        const spellsDisplay = group.spells.map((spell, spellIndex) => `
            <div class="spell-in-known-group ${spellIndex > 0 ? 'border-t border-gray-300 dark:border-gray-500 pt-2 mt-2' : ''}">
                <h6 class="font-semibold text-sm mb-1">${spell.name}</h6>
                <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <p>${spell.description}</p>
                    ${spell.range ? `<p><strong>Range:</strong> ${spell.range}</p>` : ''}
                    ${spell.duration ? `<p><strong>Duration:</strong> ${spell.duration}</p>` : ''}
                    ${spell.save ? `<p><strong>Save:</strong> ${spell.save}</p>` : ''}
                    ${spell.damage ? `<p><strong>Damage:</strong> ${spell.damage}</p>` : ''}
                </div>
            </div>
        `).join('');
        
        return `
            <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700">
                <div class="flex justify-end items-start mb-3">

                    <button 
                        class="remove-spell-group-btn text-red-500 hover:text-red-600 text-sm"
                        data-group-index="${groupIndex}"
                        title="Remove spell group"
                    >
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="known-spells-in-group">
                    ${spellsDisplay}
                </div>
            </div>
        `;
    }).join('');
    
    // Add event listeners to remove buttons
    knownSpellsList.querySelectorAll('.remove-spell-group-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const groupIndex = parseInt(this.dataset.groupIndex);
            removeSpellGroupFromCharacter(groupIndex);
        });
    });
}
    

function addAbilityToDisplay(type, index) {
    const displayContainer = document.getElementById('selectedAbilitiesDisplay');
    const ability = type === 'class' ? classAbilities[currentCharacter.class][index] : universalAbilities[index];
    
    // Remove the placeholder text if it exists
    const placeholder = displayContainer.querySelector('.italic');
    if (placeholder) {
        placeholder.remove();
    }
    
    const abilityElement = document.createElement('div');
    abilityElement.className = 'ability-detail p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600';
    abilityElement.dataset.type = type;
    abilityElement.dataset.index = index;
    
    // Insert the original description without changing IDs
    abilityElement.innerHTML = `
        <h5 class="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">${ability.name}</h5>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${ability.description}</p>
    `;
    
    displayContainer.appendChild(abilityElement);
    
    // Add data attributes to select elements for saving/restoring
    const selectElements = abilityElement.querySelectorAll('select');
    selectElements.forEach((select, selectIndex) => {
        // Create a unique key for saving
        const saveKey = `${type}_${index}_${selectIndex}`;
        select.dataset.saveKey = saveKey;
        
        // Restore value if it exists
        if (currentCharacter.classAbilities && currentCharacter.classAbilities.abilitySelectValues) {
            if (currentCharacter.classAbilities.abilitySelectValues[saveKey]) {
                select.value = currentCharacter.classAbilities.abilitySelectValues[saveKey];
            }
        }
        
        // Add event listener to save when changed
        select.addEventListener('change', () => {
            saveClassAbilitiesSelection();
        });
    });
}

function clearSelectedAbilities() {
    // Only clear the display, don't affect saved data
    const displayContainer = document.getElementById('selectedAbilitiesDisplay');
    displayContainer.innerHTML = '<p class="text-gray-500 dark:text-gray-400 italic">Select abilities to view their details here.</p>';
}

function saveClassAbilitiesSelection() {
    if (!currentCharacter) return;
    
    // Initialize if needed
    if (!currentCharacter.classAbilities) {
        currentCharacter.classAbilities = {
            selectedClass: [],
            selectedUniversal: [],
            abilitySelectValues: {}
        };
    }
    
    // Collect currently checked class abilities
    const classCheckboxes = document.querySelectorAll('.class-ability-checkbox:checked');
    currentCharacter.classAbilities.selectedClass = Array.from(classCheckboxes).map(cb => parseInt(cb.dataset.index));
    
    // Collect currently checked universal abilities
    const universalCheckboxes = document.querySelectorAll('.universal-ability-checkbox:checked');
    currentCharacter.classAbilities.selectedUniversal = Array.from(universalCheckboxes).map(cb => parseInt(cb.dataset.index));
    
    // Save select element values using data-save-key attributes
    currentCharacter.classAbilities.abilitySelectValues = {};
    const selectedAbilitiesDisplay = document.getElementById('selectedAbilitiesDisplay');
    const selectElements = selectedAbilitiesDisplay.querySelectorAll('select[data-save-key]');
    selectElements.forEach(select => {
        currentCharacter.classAbilities.abilitySelectValues[select.dataset.saveKey] = select.value;
    });
    
    // Save using your existing save system
    saveCharacters();
}

function restoreClassAbilitiesSelection() {
    if (!currentCharacter || !currentCharacter.classAbilities) return;
    
    // Restore class abilities
    currentCharacter.classAbilities.selectedClass.forEach(index => {
        const checkbox = document.querySelector(`.class-ability-checkbox[data-index="${index}"]`);
        if (checkbox) {
            checkbox.checked = true;
            addAbilityToDisplay('class', index);
        }
    });
    
    // Restore universal abilities
    currentCharacter.classAbilities.selectedUniversal.forEach(index => {
        const checkbox = document.querySelector(`.universal-ability-checkbox[data-index="${index}"]`);
        if (checkbox) {
            checkbox.checked = true;
            addAbilityToDisplay('universal', index);
        }
    });
}

// Function to calculate DC Save for a character
function calculateDCSave(character) {
    if (!character) return null;
    
    const dcAbility = classDCAbilities[character.class];
    if (!dcAbility) return null; // Class doesn't have DC saves
    
    // Calculate current ability modifier (including all bonuses)
    const raceAbilityBonuses = character.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    const primaryWeaponAbilityBonuses = character.primaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    const secondaryWeaponAbilityBonuses = character.secondaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    const armorAbilityBonuses = character.armorAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    const wildBeastAbilityBonuses = character.wildBeastAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
    
    const totalModifier = (character[dcAbility] || 0) + 
                         raceAbilityBonuses[dcAbility] + 
                         primaryWeaponAbilityBonuses[dcAbility] + 
                         secondaryWeaponAbilityBonuses[dcAbility] + 
                         armorAbilityBonuses[dcAbility] + 
                         wildBeastAbilityBonuses[dcAbility];
    
    // DC Save = 8 + modifier
    return 8 + totalModifier;
}

// Function to update the DC Save display
function updateDCSaveDisplay(character) {
    const dcSaveElement = document.getElementById('dcSave');
    if (!dcSaveElement) return;
    
    const dcSave = calculateDCSave(character);
    const hasSpellCastingSelected = checkSpellCastingSelected(character);
    
    // Only show DC Save if class supports it AND Spell-Casting is selected
    if (dcSave === null || !hasSpellCastingSelected) {
        // Hide the element for classes without DC saves or when Spell-Casting is not selected
        dcSaveElement.style.display = 'none';
    } else {
        // Show and update the DC save value
        dcSaveElement.style.display = 'inline-block';
        dcSaveElement.textContent = `DC Save ${dcSave}`;
        
        // Optional: Add different background colors based on class
        dcSaveElement.className = getDCSaveStyleClass(character.class);
    }
}
/*
// Optional: Function to get different styling based on class
function getDCSaveStyleClass(characterClass) {
    const baseClasses = 'ms-24 h-8 px-4 py-1 font-semibold mb-3 text-white text-sm text-center font-medium rounded-lg';
    
    switch(characterClass) {
        case 'Bard':
        case 'Paladin':
        case 'Sorcerer':
            return `${baseClasses} border-2 border-solid border-pink-900`; // Charisma classes
        case 'Cleric':
        case 'Druid':
        case 'Ranger':
            return `${baseClasses} border-2 border-solid border-yellow-900`; // Wisdom classes
        case 'Warlock':
        case 'Wizard':
            return `${baseClasses} border-2 border-solid border-purple-900`; // Intelligence classes
        default:
            return `${baseClasses} bg-gray-500`; // Default
    }
}*/
function getDCSaveStyleClass(characterClass) {
    const baseClasses = 'ms-2 sm:ms-12 md:ms-24 min-h-[2.5rem] px-3 py-2 sm:px-4 sm:py-2 font-semibold mb-3 text-white text-base sm:text-sm text-center rounded-lg whitespace-nowrap max-w-full';
    
    switch(characterClass) {
        case 'Bard':
        case 'Paladin':
        case 'Sorcerer':
            return `${baseClasses} border-2 border-solid border-pink-900`; // Charisma classes
        case 'Cleric':
        case 'Druid':
        case 'Ranger':
            return `${baseClasses} border-2 border-solid border-yellow-900`; // Wisdom classes
        case 'Warlock':
        case 'Wizard':
            return `${baseClasses} border-2 border-solid border-purple-900`; // Intelligence classes
        default:
            return `${baseClasses} bg-gray-500`; // Default
    }
}

// Function to check if Spell-Casting ability is selected
function checkSpellCastingSelected(character) {
    if (!character || !character.classAbilities || !character.classAbilities.selectedClass) {
        return false;
    }
    
    // Get the class-specific abilities for the character's class
    const characterClassAbilities = classAbilities[character.class];
    if (!characterClassAbilities) {
        return false;
    }
    
    // Check if any selected class ability is "Spell-Casting"
    return character.classAbilities.selectedClass.some(index => {
        const ability = characterClassAbilities[index];
        return ability && ability.name && ability.name.toLowerCase().includes('spell-casting');
    });
}

function updateSpellCastingDisplay(character) {
    if (!character) return;
    
    const spellCastingSection = document.getElementById('spellCastingSheetSection');
    const hasSpellCastingSelected = checkSpellCastingSelected(character);
    
    // Show section only if Spell-Casting ability is selected
    if (hasSpellCastingSelected) {
        spellCastingSection.style.display = 'block';
        
        // Update spell attack bonus if applicable
        updateSpellAttackBonus(character);
        
        // Update known spell groups display
        updateKnownSpellsDisplay();
    } else {
        spellCastingSection.style.display = 'none';
    }
}

function updateSpellAttackBonus(character) {
    const spellAttackElement = document.getElementById('spellAttackBonus');
    if (!spellAttackElement) return;
    
    const dcSave = calculateDCSave(character);
    if (dcSave !== null) {
        // Spell attack bonus = DC Save - 8
        const attackBonus = dcSave - 8;
        spellAttackElement.textContent = attackBonus >= 0 ? `+${attackBonus}` : `${attackBonus}`;
    } else {
        spellAttackElement.textContent = '+0';
    }
}

// Calculate maximum spells allowed based on class and level
function getMaxSpells(character) {
    if (!character.class || !character.level) return 0;
    
    const level = character.level;
    const characterClass = character.class.toLowerCase();
    
    // Classes that get 1 + level spells
    const simpleSpellClasses = ['bard', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock'];
    
    if (simpleSpellClasses.includes(characterClass)) {
        return 1 + level;
    }
    
    // Cleric and Wizard get spell modifier + level
    if (characterClass === 'cleric') {
        const wisModifier = character.currentAbilityScores ? character.currentAbilityScores.wis : (character.wis || 0);
        return Math.max(0, wisModifier) + level;
    }
    
    if (characterClass === 'wizard') {
        const intModifier = character.currentAbilityScores ? character.currentAbilityScores.int : (character.int || 0);
        return Math.max(0, intModifier) + level;
    }
    
    // Default for other classes (no spells)
    return 0;
}

       

        // Combined armor database getter
        function getArmorDatabase(tier = 1) {
            if (tier === 1) return armorDatabaseTier1;
            if (tier === 2) return armorDatabaseTier2;
            if (tier === 3) return armorDatabaseTier3;
            return armorDatabaseTier1; // fallback
        }

        // Custom items storage
let customWeapons = [];
let customSecondaryWeapons = [];
let customArmors = [];

// ====== CUSTOM WEAPON CREATION (PRIMARY & SECONDARY) ======

// Enhanced Custom Weapon Creation Function (handles both primary and secondary)
function createCustomWeaponEnhanced() {
    const weaponName = document.getElementById('customWeaponName').value.trim();
    
    if (!weaponName) {
        showCustomDialog('Missing Name', 'Please enter a weapon name.');
        return;
    }
    
    // Collect selected traits
    const selectedTraits = [];
    document.querySelectorAll('.trait-checkbox:checked').forEach(checkbox => {
        selectedTraits.push(checkbox.dataset.trait);
    });
    
    // Collect bonuses
    const bonuses = {};
    const features = [];
    
    // Evasion bonus
    if (document.getElementById('evasionBonus').checked) {
        const value = parseInt(document.getElementById('evasionBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.evasion = value;
            features.push(`${value > 0 ? '+' : ''}${value} Evasion`);
        }
    }
    
    // Armor bonus
    if (document.getElementById('armorBonus').checked) {
        const value = parseInt(document.getElementById('armorBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.armor = value;
            features.push(`${value > 0 ? '+' : ''}${value} Armor`);
        }
    }
    
    // Ability Score bonuses
    if (document.getElementById('abilityScoresBonus').checked) {
        const strValue = parseInt(document.getElementById('strBonusValue').value) || 0;
        const dexValue = parseInt(document.getElementById('dexBonusValue').value) || 0;
        const conValue = parseInt(document.getElementById('conBonusValue').value) || 0;
        const intValue = parseInt(document.getElementById('intBonusValue').value) || 0;
        const wisValue = parseInt(document.getElementById('wisBonusValue').value) || 0;
        const chaValue = parseInt(document.getElementById('chaBonusValue').value) || 0;
        
        const abilityBonuses = [];
        if (strValue !== 0) { bonuses.str = strValue; abilityBonuses.push(`STR ${strValue > 0 ? '+' : ''}${strValue}`); }
        if (dexValue !== 0) { bonuses.dex = dexValue; abilityBonuses.push(`DEX ${dexValue > 0 ? '+' : ''}${dexValue}`); }
        if (conValue !== 0) { bonuses.con = conValue; abilityBonuses.push(`CON ${conValue > 0 ? '+' : ''}${conValue}`); }
        if (intValue !== 0) { bonuses.int = intValue; abilityBonuses.push(`INT ${intValue > 0 ? '+' : ''}${intValue}`); }
        if (wisValue !== 0) { bonuses.wis = wisValue; abilityBonuses.push(`WIS ${wisValue > 0 ? '+' : ''}${wisValue}`); }
        if (chaValue !== 0) { bonuses.cha = chaValue; abilityBonuses.push(`CHA ${chaValue > 0 ? '+' : ''}${chaValue}`); }
        
        if (abilityBonuses.length > 0) {
            features.push(abilityBonuses.join(', '));
        }
    }
    
    // Threshold bonuses
    if (document.getElementById('thresholdLowerBonus').checked) {
        const value = parseInt(document.getElementById('thresholdLowerBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.thresholdLower = value;
            features.push(`Threshold Lower ${value > 0 ? '+' : ''}${value}`);
        }
    }
    
    if (document.getElementById('thresholdUpperBonus').checked) {
        const value = parseInt(document.getElementById('thresholdUpperBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.thresholdUpper = value;
            features.push(`Threshold Upper ${value > 0 ? '+' : ''}${value}`);
        }
    }
    
    // Notes
    if (document.getElementById('notesBonus').checked) {
        const note = document.getElementById('notesBonusValue').value.trim();
        if (note) {
            features.push(note);
        }
    }
    
    // Create the custom weapon
    const customWeapon = {
        name: weaponName,
        trait: selectedTraits.filter(t => ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].includes(t)).join('/') || 'Custom',
        range: selectedTraits.filter(t => ['Melee', 'Far', 'Very Far'].includes(t)).join('/') || 'Custom',
        damage: selectedTraits.filter(t => ['d4', 'd6', 'd8', 'd10', 'd12'].includes(t)).join('/') || 'Custom',
        feature: features.length > 0 ? features.join(', ') : 'Custom Weapon',
        bonuses: bonuses,
        isCustom: true
    };
    
    // Determine if this is for primary or secondary weapon
    const isPrimary = currentWeaponType === 'primary';
    const isSecondary = currentWeaponType === 'secondary';
    
    if (isPrimary) {
        // Add to custom primary weapons array
        customWeapons.push({ ...customWeapon });
        
        // Check if character already has a primary weapon
        if (currentCharacter.primaryWeapon) {
            showCustomDialog('Weapon Limit', 'Character already has a primary weapon. Remove the current weapon first.');
            clearCustomWeaponModal();
            document.getElementById('customWeaponModal').classList.add('hidden');
            return;
        }
        
        // Equip the custom weapon as primary
        currentCharacter.primaryWeapon = customWeapon;
        applyWeaponBonuses(customWeapon.bonuses, 'primary');
        
    } else if (isSecondary) {
        // Add to custom secondary weapons array
        customSecondaryWeapons.push({ ...customWeapon });
        
        // Check if character already has a secondary weapon
        if (currentCharacter.secondaryWeapon) {
            showCustomDialog('Weapon Limit', 'Character already has a secondary weapon. Remove the current weapon first.');
            clearCustomWeaponModal();
            document.getElementById('customWeaponModal').classList.add('hidden');
            return;
        }
        
        // Equip the custom weapon as secondary
        currentCharacter.secondaryWeapon = customWeapon;
        applyWeaponBonuses(customWeapon.bonuses, 'secondary');
    }

    
    // Update display
    updateWeaponDisplay();
    populateCharacterSheet(currentCharacter);
    
    // Save changes
    saveCharacters();
    
    // Clear the modal
    clearCustomWeaponModal();
    
    // Close modal
    document.getElementById('customWeaponModal').classList.add('hidden');
    
    const weaponTypeText = isPrimary ? 'Primary Weapon' : 'Secondary Weapon';
    showCustomDialog('Weapon Created', `Successfully created and equipped "${weaponName}" as ${weaponTypeText}!`);
}

// ====== CUSTOM ARMOR CREATION ======

function createCustomArmor() {
    const armorName = document.getElementById('customArmorName').value.trim();
    
    if (!armorName) {
        showCustomDialog('Missing Name', 'Please enter an armor name.');
        return;
    }
    
    // Collect bonuses
    const bonuses = {};
    const features = [];
    
    // Evasion bonus
    if (document.getElementById('armorEvasionBonus').checked) {
        const value = parseInt(document.getElementById('armorEvasionBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.evasion = value;
            features.push(`${value > 0 ? '+' : ''}${value} Evasion`);
        }
    }
    
    // Armor bonus
    if (document.getElementById('armorArmorBonus').checked) {
        const value = parseInt(document.getElementById('armorArmorBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.armor = value;
            features.push(`${value > 0 ? '+' : ''}${value} Armor`);
        }
    }
    
    // Ability Score bonuses
    if (document.getElementById('armorAbilityScoresBonus').checked) {
        const strValue = parseInt(document.getElementById('armorStrBonusValue').value) || 0;
        const dexValue = parseInt(document.getElementById('armorDexBonusValue').value) || 0;
        const conValue = parseInt(document.getElementById('armorConBonusValue').value) || 0;
        const intValue = parseInt(document.getElementById('armorIntBonusValue').value) || 0;
        const wisValue = parseInt(document.getElementById('armorWisBonusValue').value) || 0;
        const chaValue = parseInt(document.getElementById('armorChaBonusValue').value) || 0;
        
        const abilityBonuses = [];
        if (strValue !== 0) { bonuses.str = strValue; abilityBonuses.push(`STR ${strValue > 0 ? '+' : ''}${strValue}`); }
        if (dexValue !== 0) { bonuses.dex = dexValue; abilityBonuses.push(`DEX ${dexValue > 0 ? '+' : ''}${dexValue}`); }
        if (conValue !== 0) { bonuses.con = conValue; abilityBonuses.push(`CON ${conValue > 0 ? '+' : ''}${conValue}`); }
        if (intValue !== 0) { bonuses.int = intValue; abilityBonuses.push(`INT ${intValue > 0 ? '+' : ''}${intValue}`); }
        if (wisValue !== 0) { bonuses.wis = wisValue; abilityBonuses.push(`WIS ${wisValue > 0 ? '+' : ''}${wisValue}`); }
        if (chaValue !== 0) { bonuses.cha = chaValue; abilityBonuses.push(`CHA ${chaValue > 0 ? '+' : ''}${chaValue}`); }
        
        if (abilityBonuses.length > 0) {
            features.push(abilityBonuses.join(', '));
        }
    }
    
    // Threshold bonuses
    if (document.getElementById('armorThresholdLowerBonus').checked) {
        const value = parseInt(document.getElementById('armorThresholdLowerBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.thresholdLower = value;
            features.push(`Threshold Lower ${value > 0 ? '+' : ''}${value}`);
        }
    }
    
    if (document.getElementById('armorThresholdUpperBonus').checked) {
        const value = parseInt(document.getElementById('armorThresholdUpperBonusValue').value) || 0;
        if (value !== 0) {
            bonuses.thresholdUpper = value;
            features.push(`Threshold Upper ${value > 0 ? '+' : ''}${value}`);
        }
    }
    
    // Notes
    if (document.getElementById('armorNotesBonus').checked) {
        const note = document.getElementById('armorNotesBonusValue').value.trim();
        if (note) {
            features.push(note);
        }
    }
    
    // Create the custom armor DEFAULTS
    const customArmor = {
        name: armorName,
        thresholdLower: 10, // Default values for custom armor
        thresholdUpper: 15,
        armor: bonuses.armor || 3, // Default armor value
        feature: features.length > 0 ? features.join(', ') : 'Custom Armor',
        bonuses: bonuses,
        isCustom: true
    };
    
    // Add to custom armors array for future use
    customArmors.push({ ...customArmor });
    
    // Add to Tier 3 armor database
    armorDatabaseTier3.push({ ...customArmor });
    
    // Check if character already has armor
    if (currentCharacter.armorItem) {
        showCustomDialog('Armor Limit', 'Character already has armor. Remove the current armor first.');
        clearCustomArmorModal();
        document.getElementById('customArmorModal').classList.add('hidden');
        return;
    }
    
    // Equip the custom armor
    currentCharacter.armorItem = customArmor;
    
    // Apply armor bonuses
    applyArmorBonuses(customArmor.bonuses);
    
    // Update display
    updateWeaponDisplay();
    populateCharacterSheet(currentCharacter);
    
    // Save changes
    saveCharacters();
    
    // Clear the modal
    clearCustomArmorModal();
    
    // Close modal
    document.getElementById('customArmorModal').classList.add('hidden');
    
    showCustomDialog('Armor Created', `Successfully created and equipped "${armorName}"!`);
}

// ====== ENHANCED MODAL DISPLAY FUNCTIONS ======

// Enhanced showWeaponModal function to include custom weapons
function showWeaponModalEnhanced(weaponType) {
    currentWeaponType = weaponType;
    const modal = document.getElementById('weaponModal');
    const title = document.getElementById('weaponModalTitle');
    const weaponList = document.getElementById('weaponList');
    const makeBtn = document.getElementById('makeWeaponBtn');
    
    // Clear previous selection
    selectedWeapon = null;
    selectedArmor = null;
    
    // Set modal title and select appropriate database
    let database, titleText, buttonText;
    if (weaponType === 'armor') {
        let baseDatabase = getArmorDatabase(1); // Default to Tier 1
        // Add custom armors to Tier 3 when displaying
        if (customArmors.length > 0) {
            // Ensure custom armors are in Tier 3 database
            customArmors.forEach(armor => {
                if (!armorDatabaseTier3.find(item => item.name === armor.name)) {
                    armorDatabaseTier3.push({ ...armor });
                }
            });
        }
        database = baseDatabase;
        titleText = 'Select Armor';
        buttonText = 'Add Armor';
        makeBtn.classList.remove('hidden');
    } else {
        // Combine base database with custom weapons
        const baseDatabase = weaponType === 'primary' ? primaryWeaponDatabase : secondaryWeaponDatabase;
        const customWeaponsForType = weaponType === 'primary' ? customWeapons : customSecondaryWeapons;
        
        database = [...baseDatabase, ...customWeaponsForType];
        titleText = weaponType === 'primary' ? 'Select Primary Weapon' : 'Select Secondary Weapon';
        buttonText = 'Add Weapon';
        makeBtn.classList.remove('hidden');
    }
    
    title.textContent = titleText;
    document.getElementById('confirmWeapon').textContent = buttonText;
    
    // Add tier selection radio buttons for armor only
    let tierRadiosHTML = '';
    if (weaponType === 'armor') {
        tierRadiosHTML = `
            <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 class="text-sm font-medium mb-2">Select Tier:</h4>
                <div class="flex space-x-4">
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="armorTier" value="1" class="mr-2" checked>
                        <span class="text-sm">Tier 1</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="armorTier" value="2" class="mr-2">
                        <span class="text-sm">Tier 2</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="armorTier" value="3" class="mr-2">
                        <span class="text-sm">Tier 3</span>
                    </label>
                </div>
            </div>
        `;
    }
    
    // Populate list with tier radios if armor
    weaponList.innerHTML = tierRadiosHTML + database.map((item, index) => {
        if (weaponType === 'armor') {
            const customLabel = item.isCustom ? ' (Custom)' : '';
            return `
                <div class="weapon-item" data-weapon-index="${index}">
                    <div class="flex items-center">
                        <input type="radio" name="weaponSelect" class="mr-3" value="${index}">
                        <div class="flex-1">
                            <div class="font-semibold">${item.name}${customLabel} | ${item.thresholdLower} / ${item.thresholdUpper} | +${item.armor} Armor</div>
${item.feature && item.feature !== 'Nothing' ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: <span class="feature-text">${formatFeatureText(item.feature)}</span></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else {
            const customLabel = item.isCustom ? ' (Custom)' : '';
            return `
                <div class="weapon-item" data-weapon-index="${index}">
                    <div class="flex items-center">
                        <input type="radio" name="weaponSelect" class="mr-3" value="${index}">
                        <div class="flex-1">
                            <div class="font-semibold">${item.name}${customLabel} | ${item.trait} / ${item.range} | ${item.damage}</div>
${item.feature && item.feature !== 'Nothing' ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: <span class="feature-text">${formatFeatureText(item.feature)}</span></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }
    }).join('');
    
    // Add event listeners to items
    weaponList.querySelectorAll('.weapon-item').forEach(item => {
        item.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            if (weaponType === 'armor') {
                const selectedTier = document.querySelector('input[name="armorTier"]:checked')?.value || '1';
                const currentDatabase = getArmorDatabase(parseInt(selectedTier));
                selectedArmor = currentDatabase[parseInt(radio.value)];
            } else {
                selectedWeapon = database[parseInt(radio.value)];
            }
            
            // Update visual selection
            weaponList.querySelectorAll('.weapon-item').forEach(w => w.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Add event listeners for tier radio buttons (armor only)
    if (weaponType === 'armor') {
        weaponList.querySelectorAll('input[name="armorTier"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const selectedTier = parseInt(this.value);
                updateArmorTierDisplay(selectedTier, weaponType);
            });
        });
    }
    
    modal.classList.remove('hidden');
}

// ====== MODAL CLEARING FUNCTIONS ======

function clearCustomWeaponModal() {
    // Clear weapon name
    document.getElementById('customWeaponName').value = '';
    
    // Clear all trait checkboxes
    document.querySelectorAll('.trait-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Clear all bonus checkboxes and trigger change events to disable inputs
    document.querySelectorAll('#customWeaponModal .bonus-checkbox').forEach(checkbox => {
        checkbox.checked = false;
        
        // Trigger change event to disable inputs
        const event = new Event('change');
        checkbox.dispatchEvent(event);
    });
    
    // Clear all bonus input values
    document.getElementById('evasionBonusValue').value = '';
    document.getElementById('armorBonusValue').value = '';
    document.getElementById('thresholdLowerBonusValue').value = '';
    document.getElementById('thresholdUpperBonusValue').value = '';
    document.getElementById('notesBonusValue').value = '';
    
    // Clear all ability score bonus inputs
    document.getElementById('strBonusValue').value = '';
    document.getElementById('dexBonusValue').value = '';
    document.getElementById('conBonusValue').value = '';
    document.getElementById('intBonusValue').value = '';
    document.getElementById('wisBonusValue').value = '';
    document.getElementById('chaBonusValue').value = '';
    
    // Hide ability score inputs section
    document.getElementById('abilityScoreBonusInputs').classList.add('hidden');
}

function clearCustomArmorModal() {
    // Clear armor name
    document.getElementById('customArmorName').value = '';
    
    // Clear all bonus checkboxes and trigger change events to disable inputs
    document.querySelectorAll('.armor-bonus-checkbox').forEach(checkbox => {
        checkbox.checked = false;
        
        // Trigger change event to disable inputs
        const event = new Event('change');
        checkbox.dispatchEvent(event);
    });
    
    // Clear all bonus input values
    document.getElementById('armorEvasionBonusValue').value = '';
    document.getElementById('armorArmorBonusValue').value = '';
    document.getElementById('armorThresholdLowerBonusValue').value = '';
    document.getElementById('armorThresholdUpperBonusValue').value = '';
    document.getElementById('armorNotesBonusValue').value = '';
    
    // Clear all ability score bonus inputs
    document.getElementById('armorStrBonusValue').value = '';
    document.getElementById('armorDexBonusValue').value = '';
    document.getElementById('armorConBonusValue').value = '';
    document.getElementById('armorIntBonusValue').value = '';
    document.getElementById('armorWisBonusValue').value = '';
    document.getElementById('armorChaBonusValue').value = '';
    
    // Hide ability score inputs section
    document.getElementById('armorAbilityScoreBonusInputs').classList.add('hidden');
}

// ====== EVENT LISTENERS ======

// Custom Weapon Creation Modal Event Listeners
document.getElementById('makeWeaponBtn').addEventListener('click', function() {
    document.getElementById('weaponModal').classList.add('hidden');
    if (currentWeaponType === 'armor') {
        document.getElementById('customArmorModal').classList.remove('hidden');
    } else {
        document.getElementById('customWeaponModal').classList.remove('hidden');
    }
});

document.getElementById('cancelCustomWeapon').addEventListener('click', function() {
    document.getElementById('customWeaponModal').classList.add('hidden');
});

document.getElementById('confirmCustomWeapon').addEventListener('click', function() {
    createCustomWeaponEnhanced();
});

// Custom Armor Creation Modal Event Listeners
document.getElementById('cancelCustomArmor').addEventListener('click', function() {
    document.getElementById('customArmorModal').classList.add('hidden');
});

document.getElementById('confirmCustomArmor').addEventListener('click', function() {
    createCustomArmor();
});

// Enable/disable weapon bonus input fields based on checkbox state
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('bonus-checkbox')) {
        const checkbox = e.target;
        const isAbilityScoresBonus = checkbox.id === 'abilityScoresBonus';
        const isNotesBonus = checkbox.id === 'notesBonus';
        
        if (isAbilityScoresBonus) {
            const inputsContainer = document.getElementById('abilityScoreBonusInputs');
            if (checkbox.checked) {
                inputsContainer.classList.remove('hidden');
                inputsContainer.querySelectorAll('input').forEach(input => input.disabled = false);
            } else {
                inputsContainer.classList.add('hidden');
                inputsContainer.querySelectorAll('input').forEach(input => {
                    input.disabled = true;
                    input.value = '';
                });
            }
        } else if (isNotesBonus) {
            const textArea = document.getElementById('notesBonusValue');
            textArea.disabled = !checkbox.checked;
            if (!checkbox.checked) {
                textArea.value = '';
            }
        } else {
            // Regular bonuses with single input field
            const inputId = checkbox.id.replace('Bonus', 'BonusValue');
            const input = document.getElementById(inputId);
            if (input) {
                input.disabled = !checkbox.checked;
                if (!checkbox.checked) {
                    input.value = '';
                }
            }
        }
    }
});

// Enable/disable armor bonus input fields based on checkbox state
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('armor-bonus-checkbox')) {
        const checkbox = e.target;
        const isAbilityScoresBonus = checkbox.id === 'armorAbilityScoresBonus';
        const isNotesBonus = checkbox.id === 'armorNotesBonus';
        
        if (isAbilityScoresBonus) {
            const inputsContainer = document.getElementById('armorAbilityScoreBonusInputs');
            if (checkbox.checked) {
                inputsContainer.classList.remove('hidden');
                inputsContainer.querySelectorAll('input').forEach(input => input.disabled = false);
            } else {
                inputsContainer.classList.add('hidden');
                inputsContainer.querySelectorAll('input').forEach(input => {
                    input.disabled = true;
                    input.value = '';
                });
            }
        } else if (isNotesBonus) {
            const textArea = document.getElementById('armorNotesBonusValue');
            textArea.disabled = !checkbox.checked;
            if (!checkbox.checked) {
                textArea.value = '';
            }
        } else {
            // Regular bonuses with single input field
            const inputId = checkbox.id.replace('Bonus', 'BonusValue');
            const input = document.getElementById(inputId);
            if (input) {
                input.disabled = !checkbox.checked;
                if (!checkbox.checked) {
                    input.value = '';
                }
            }
        }
    }
});

// ====== REPLACE EXISTING FUNCTIONS ======

// Replace the existing functions with enhanced versions
showWeaponModal = showWeaponModalEnhanced;

        // Global weapon state
        let selectedWeapon = null;
        let currentWeaponType = null; // 'primary', 'secondary', or 'armor'
        let selectedArmor = null;
        
        
        // Wild Beast weapon data based on level
        function getWildBeastWeapon(level) {
            if (level >= 1 && level <= 2) {
                return {
                    name: "Wild Beast 1",
                    trait: "STR/DEX",
                    range: "Melee",
                    damage: "d4",
                    feature: "Wild Beast Transformation",
                    bonuses: {
                        thresholdLower: 5,
                        thresholdUpper: 10,
                        evasion: 1,
                        armor: 1,
                        str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1
                    },
                    isWildBeast: true
                };
            } else if (level >= 3 && level <= 4) {
                return {
                    name: "Wild Beast 2",
                    trait: "STR/DEX",
                    range: "Melee",
                    damage: "d6", 
                    feature: "Wild Beast Transformation",
                    bonuses: {
                        thresholdLower: 10,
                        thresholdUpper: 15,
                        evasion: 1,
                        armor: 2,
                        str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1
                    },
                    isWildBeast: true
                };
            } else if (level >= 5 && level <= 6) {
                return {
                    name: "Wild Beast 3",
                    trait: "STR/DEX", 
                    range: "Melee",
                    damage: "d8",
                    feature: "Wild Beast Transformation",
                    bonuses: {
                        thresholdLower: 15,
                        thresholdUpper: 20,
                        evasion: 2,
                        armor: 3,
                        str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1
                    },
                    isWildBeast: true
                };
            } else if (level >= 7 && level <= 8) {
                return {
                    name: "Wild Beast 4",
                    trait: "STR/DEX",
                    range: "Melee", 
                    damage: "2d6",
                    feature: "Wild Beast Transformation",
                    bonuses: {
                        thresholdLower: 20,
                        thresholdUpper: 25,
                        evasion: 2,
                        armor: 4,
                        str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1
                    },
                    isWildBeast: true
                };
            } else if (level >= 9 && level <= 10) {
                return {
                    name: "Wild Beast 5",
                    trait: "STR/DEX",
                    range: "Melee",
                    damage: "2d8", 
                    feature: "Wild Beast Transformation",
                    bonuses: {
                        thresholdLower: 25,
                        thresholdUpper: 30,
                        evasion: 3,
                        armor: 5,
                        str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1
                    },
                    isWildBeast: true
                };
            }
            return null;
        }

        // Wild Beast toggle functions
        function handleWildBeastToggle(isChecked) {
            if (!currentCharacter) return;
            
            if (isChecked) {
                // Apply Wild Beast transformation
                applyWildBeastTransformation();
                currentCharacter.wildBeastActive = true;
            } else {
                // Remove Wild Beast transformation
                removeWildBeastTransformation();
                currentCharacter.wildBeastActive = false;
            }
            
            saveCharacters();
            populateCharacterSheet(currentCharacter);
        }
        
        function applyWildBeastTransformation() {
            if (!currentCharacter) return;
            
            const level = currentCharacter.level || 1;
            const wildBeastWeapon = getWildBeastWeapon(level);
            
            if (!wildBeastWeapon) return;
            
            // Store current equipment for restoration
            if (!currentCharacter.wildBeastStoredEquipment) {
                currentCharacter.wildBeastStoredEquipment = {
                    primaryWeapon: currentCharacter.primaryWeapon ? { ...currentCharacter.primaryWeapon } : null,
                    secondaryWeapon: currentCharacter.secondaryWeapon ? { ...currentCharacter.secondaryWeapon } : null,
                    armorItem: currentCharacter.armorItem ? { ...currentCharacter.armorItem } : null,
                    primaryWeaponBonuses: { ...currentCharacter.primaryWeaponBonuses } || {},
                    secondaryWeaponBonuses: { ...currentCharacter.secondaryWeaponBonuses } || {},
                    armorBonuses: { ...currentCharacter.armorBonuses } || {},
                    primaryWeaponAbilityBonuses: { ...currentCharacter.primaryWeaponAbilityBonuses } || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                    secondaryWeaponAbilityBonuses: { ...currentCharacter.secondaryWeaponAbilityBonuses } || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                    armorAbilityBonuses: { ...currentCharacter.armorAbilityBonuses } || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 }
                };
            }
            
            // Remove current equipment bonuses
            if (currentCharacter.primaryWeapon) {
                removeWeaponBonuses(currentCharacter.primaryWeapon.bonuses, 'primary');
            }
            if (currentCharacter.secondaryWeapon) {
                removeWeaponBonuses(currentCharacter.secondaryWeapon.bonuses, 'secondary');
            }
            if (currentCharacter.armorItem) {
                removeArmorBonuses(currentCharacter.armorItem.bonuses);
            }
            
            // Clear current equipment
            delete currentCharacter.primaryWeapon;
            delete currentCharacter.secondaryWeapon;
            delete currentCharacter.armorItem;
            
            // Equip Wild Beast weapon
            currentCharacter.primaryWeapon = { ...wildBeastWeapon };
            
            // Apply Wild Beast bonuses
            applyWildBeastBonuses(wildBeastWeapon.bonuses);
        }
        
        function removeWildBeastTransformation() {
            if (!currentCharacter || !currentCharacter.wildBeastStoredEquipment) return;
            
            // Remove Wild Beast bonuses
            if (currentCharacter.primaryWeapon && currentCharacter.primaryWeapon.isWildBeast) {
                removeWildBeastBonuses(currentCharacter.primaryWeapon.bonuses);
                delete currentCharacter.primaryWeapon;
            }
            
            // Restore stored equipment
            const stored = currentCharacter.wildBeastStoredEquipment;
            
            if (stored.primaryWeapon) {
                currentCharacter.primaryWeapon = { ...stored.primaryWeapon };
                currentCharacter.primaryWeaponBonuses = { ...stored.primaryWeaponBonuses };
                currentCharacter.primaryWeaponAbilityBonuses = { ...stored.primaryWeaponAbilityBonuses };
                applyWeaponBonuses(stored.primaryWeapon.bonuses, 'primary');
            }
            
            if (stored.secondaryWeapon) {
                currentCharacter.secondaryWeapon = { ...stored.secondaryWeapon };
                currentCharacter.secondaryWeaponBonuses = { ...stored.secondaryWeaponBonuses };
                currentCharacter.secondaryWeaponAbilityBonuses = { ...stored.secondaryWeaponAbilityBonuses };
                applyWeaponBonuses(stored.secondaryWeapon.bonuses, 'secondary');
            }
            
            if (stored.armorItem) {
                currentCharacter.armorItem = { ...stored.armorItem };
                currentCharacter.armorBonuses = { ...stored.armorBonuses };
                currentCharacter.armorAbilityBonuses = { ...stored.armorAbilityBonuses };
                applyArmorBonuses(stored.armorItem.bonuses);
            }
            
            // Clear stored equipment
            delete currentCharacter.wildBeastStoredEquipment;
        }
        
        function applyWildBeastBonuses(bonuses) {
            if (!currentCharacter || !bonuses) return;
            
            // Store Wild Beast bonuses for removal
            currentCharacter.wildBeastBonuses = {};
            currentCharacter.wildBeastAbilityBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            
            Object.keys(bonuses).forEach(stat => {
                const bonus = bonuses[stat];
                
                if (stat === 'evasion') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                    currentCharacter.wildBeastBonuses[stat] = bonus;
                } else if (stat === 'armor') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                    currentCharacter.wildBeastBonuses[stat] = bonus;
                    // Add armor slots
                    if (!currentCharacter.armorSlots) {
                        currentCharacter.armorSlots = { total: 0, filled: [], permanent: 0, temporary: 0 };
                    }
                    currentCharacter.armorSlots.total += bonus;
                    currentCharacter.armorSlots.permanent += bonus;
                } else if (stat === 'hp' || stat === 'stress' || stat === 'class' || stat === 'spell') {
                    const maxKey = stat + 'Max';
                    currentCharacter[maxKey] = (currentCharacter[maxKey] || 0) + bonus;
                    if (currentCharacter.resources && currentCharacter.resources[stat]) {
                        currentCharacter.resources[stat].max += bonus;
                    }
                    currentCharacter.wildBeastBonuses[stat] = bonus;
                } else if (stat === 'thresholdLower' || stat === 'thresholdUpper') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                    currentCharacter.wildBeastBonuses[stat] = bonus;
                } else if (['str', 'dex', 'con', 'int', 'wis', 'cha'].includes(stat)) {
                    currentCharacter.wildBeastAbilityBonuses[stat] = bonus;
                }
            });
        }
        
        function removeWildBeastBonuses(bonuses) {
            if (!currentCharacter || !bonuses) return;
            
            Object.keys(bonuses).forEach(stat => {
                const bonus = bonuses[stat];
                
                if (stat === 'evasion') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                } else if (stat === 'armor') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                    // Remove armor slots
                    if (currentCharacter.armorSlots) {
                        currentCharacter.armorSlots.total = Math.max(0, currentCharacter.armorSlots.total - bonus);
                        currentCharacter.armorSlots.permanent = Math.max(0, currentCharacter.armorSlots.permanent - bonus);
                        currentCharacter.armorSlots.filled = currentCharacter.armorSlots.filled.filter(index => index < currentCharacter.armorSlots.total);
                    }
                } else if (stat === 'hp' || stat === 'stress' || stat === 'class' || stat === 'spell') {
                    const maxKey = stat + 'Max';
                    currentCharacter[maxKey] = (currentCharacter[maxKey] || 0) - bonus;
                    if (currentCharacter.resources && currentCharacter.resources[stat]) {
                        currentCharacter.resources[stat].max -= bonus;
                        if (currentCharacter.resources[stat].max < 0) {
                            currentCharacter.resources[stat].max = 0;
                        }
                    }
                } else if (stat === 'thresholdLower' || stat === 'thresholdUpper') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                }
            });
            
            // Clear Wild Beast bonuses tracking
            currentCharacter.wildBeastBonuses = {};
            currentCharacter.wildBeastAbilityBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
        }
        
        function updateWildBeastDisplay() {
            if (!currentCharacter) return;
            
            const section = document.getElementById('wildBeastSection');
            const checkbox = document.getElementById('wildBeastToggle');
            
            // Show section only for Druid
            if (currentCharacter.class === 'Druid') {
                section.style.display = 'block';
                checkbox.checked = currentCharacter.wildBeastActive || false;
            } else {
                section.style.display = 'none';
            }
        }

        // Rest system state
        let restSelectedResources = [];
        let restType = null; // 'short' or 'long'

        // Race data for bonuses and proficiencies
        const raceData = {
            'Assaimar': {
                bonuses: [
                    { type: 'hp', value: 1, label: 'HP +1' }
                ],
                proficiencies: ['dex', 'con', 'int', 'wis'],
                abilityScores: [
                    { value: 1, label: 'Stats +1' }
                ],
                evasion: 10
            },
            'Dragonborn': {
                bonuses: [
                    { type: 'stress', value: 1, label: 'Stress +1' },
                    { type: 'threshold', lowerValue: 1, upperValue: +1, label: 'Threshold +1/+1' }
                ],
                proficiencies: ['str', 'con', 'int', 'wis'],
                abilityScores: [
                    { value: 2, label: 'Stats +1' },
                    { value: -1, label: 'Stats -1' }
                ],
                evasion: 9
            },
            'Dwarf': {
                bonuses: [
                    { type: 'threshold', lowerValue: 1, upperValue: 1, label: 'Threshold +1/+1' }
                ],
                proficiencies: ['str', 'con', 'int', 'wis'],
                abilityScores: [
                    { value: 1, label: 'Stats +1' }
                ],
                evasion: 9
            },
            'Elf': {
                bonuses: [
                    { type: 'class', value: 1, label: 'Class +1' },
                    { type: 'spell', value: 1, label: 'Spell +1' }
                ],
                proficiencies: ['dex', 'int', 'wis', 'cha'],
                abilityScores: [
                    { value: 2, label: 'Stats +2' },
                    { value: -1, label: 'Stats -1' }
                ],
                evasion: 11
            },
            'Gnome': {
                bonuses: [
                    { type: 'class', value: 1, label: 'Class +1' },
                    { type: 'spell', value: 2, label: 'Spell +2' }
                ],
                proficiencies: ['dex', 'int', 'wis', 'cha'],
                abilityScores: [
                    { value: 1, label: 'Stats +1' }
                ],
                evasion: 11
            },
            'Halfling': {
                bonuses: [
                    { type: 'class', value: 2, label: 'Class +2' },
                    { type: 'spell', value: 2, label: 'Spell +2' }
                ],
                proficiencies: ['dex', 'int', 'wis', 'cha'],
                abilityScores: [
                    { value: 1, label: 'Stats +1' }
                ],
                evasion: 11
            },
            'Human': {
                bonuses: [
                    { type: 'stress', value: 1, label: 'Stress +1' },
                    { type: 'class', value: 1, label: 'Class +1' }
                ],
                proficiencies: ['str', 'dex', 'con', 'int', 'wis', 'cha'],
                abilityScores: [
                    { value: 2, label: 'Stats +2' }
                ],
                evasion: 10
            },
            'Orc': {
                bonuses: [
                    { type: 'hp', value: 2, label: 'HP +2' },
                    { type: 'threshold', lowerValue: 2, upperValue: 2, label: 'Threshold +2/+2' }
                ],
                proficiencies: ['str', 'dex', 'con', 'cha'],
                abilityScores: [
                    { value: 1, label: 'Stats +1' },
                    { value: -1, label: 'Stats -1' }
                ],
                evasion: 9
            },
            'Tiefling': {
                bonuses: [
                    { type: 'stress', value: 2, label: 'Stress +2' },
                    { type: 'spell', value: 1, label: 'Spell +1' }
                ],
                proficiencies: ['str', 'con', 'int', 'cha'],
                abilityScores: [
                    { value: 1, label: 'Stats +1' },
                    { value: 1, label: 'Stats +1' }
                ],
                evasion: 10
            }
        };

        // Global state
        let characters = [];
        let currentCharacter = null;
        
        // Ranger Companion data
        const companionTypes = {
            'Bear': {
                hp: 2,
                stress: 2,
                evasion: 10,
                mod: 2,
                damage: 'd6',
                thresholdLower: 5,
                thresholdUpper: 10
            },
            'Great Cat': {
                hp: 3,
                stress: 2,
                evasion: 10,
                mod: 3,
                damage: 'd8',
                thresholdLower: 5,
                thresholdUpper: 10
            },
            'Wolf': {
                hp: 2,
                stress: 3,
                evasion: 11,
                mod: 2,
                damage: 'd6',
                thresholdLower: 4,
                thresholdUpper: 8
            },
            'Hawk': {
                hp: 1,
                stress: 2,
                evasion: 13,
                mod: 3,
                damage: 'd4',
                thresholdLower: 3,
                thresholdUpper: 6
            }
        };
        
        // Ability score modifier system
        const availableModifiers = [2, 1, 1, 0, 0, -1];
        let selectedModifiers = { str: null, dex: null, con: null, int: null, wis: null, cha: null };
        let usedModifiers = [];
        
        // Proficiency system
        let proficiencies = { str: false, dex: false, con: false, int: false, wis: false, cha: false };
        
        // Race selection tracking
        let selectedRaceBonuses = [];
        let selectedRaceProficiencies = [];
        let selectedAbilityScores = [];
        let raceBonusValues = {
            hp: 0,
            stress: 0,
            class: 0,
            spell: 0,
            evasion: 0,
            thresholdLower: 0,
            thresholdUpper: 0
        };
        let raceAbilityBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };

        // New ability score modal state
        let currentRaceAbilityScores = [];
        let abilityScoreAllocations = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };

        // Level Up state
        let levelUpSelectedOptions = [];
        let levelUpSelectionsCount = 0;

        // Class data for resources and thresholds
        const classData = {
            'Barbarian': {
                hp: 3,
                stress: 2,
                class: 2,
                spell: 0,
                thresholdLower: 1,
                thresholdUpper: 2,
            },
            'Bard': {
                hp: 1,
                stress: 1,
                class: 3,
                spell: 2,
                thresholdLower: 1,
                thresholdUpper: 1,
            },
            'Cleric': {
                hp: 2,
                stress: 3,
                class: 2,
                spell: 2,
                thresholdLower: 1,
                thresholdUpper: 1,
            },
            'Druid': {
                hp: 2,
                stress: 3,
                class: 2,
                spell: 1,
                thresholdLower: 1,
                thresholdUpper: 0,
            },
            'Fighter': {
                hp: 3,
                stress: 3,
                class: 2,
                spell: 0,
                thresholdLower: 1,
                thresholdUpper: 2,
            },
            'Monk': {
                hp: 2,
                stress: 3,
                class: 1,
                spell: 0,
                thresholdLower: 0,
                thresholdUpper: 1,
            },
            'Paladin': {
                hp: 3,
                stress: 3,
                class: 1,
                spell: 0,
                thresholdLower: 2,
                thresholdUpper: 1,
            },
            'Ranger': {
                hp: 2,
                stress: 3,
                class: 3,
                spell: 0,
                thresholdLower: 1,
                thresholdUpper: 1,
            },
            'Rogue': {
                hp: 2,
                stress: 3,
                class: 2,
                spell: 0,
                thresholdLower: 0,
                thresholdUpper: 1,
            },
            'Sorcerer': {
                hp: 1,
                stress: 2,
                class: 3,
                spell: 2,
                thresholdLower: 0,
                thresholdUpper: 1,
            },
            'Warlock': {
                hp: 2,
                stress: 2,
                class: 2,
                spell: 1,
                thresholdLower: 1,
                thresholdUpper: 1,
            },
            'Wizard': {
                hp: 1,
                stress: 2,
                class: 2,
                spell: 3,
                thresholdLower: 0,
                thresholdUpper: 1,
            }
        };

        // Default skills list
        const defaultSkills = [
            { name: 'Athletics (STR)', ability: 'str' },
            { name: 'Acrobatics (DEX)', ability: 'dex' },
            { name: 'Stealth (DEX)', ability: 'dex' },
            { name: 'Investigation (INT)', ability: 'int' },
            { name: 'History (INT)', ability: 'int' },
            { name: 'Insight (WIS)', ability: 'wis' },
            { name: 'Perception (WIS)', ability: 'wis' },
            { name: 'Persuasion (CHA)', ability: 'cha' },
            { name: 'Deception (CHA)', ability: 'cha' }
        ];

        // New function to handle threshold damage buttons
        function applyDamage(amount) {
            if (!currentCharacter) return;
            
            // Ensure resources are initialized
            if (!currentCharacter.resources) {
                currentCharacter.resources = {
                    hp: { max: 0, used: [], temp: 0 },
                    stress: { max: 0, used: [], temp: 0 },
                    class: { max: 0, used: [], temp: 0 },
                    spell: { max: 0, used: [], temp: 0 }
                };
            }
            
            const hpResource = currentCharacter.resources.hp;
            const totalHp = hpResource.max + (hpResource.temp || 0);
            const currentUsed = hpResource.used.length;
            
            // Check if we have enough HP remaining
            if (currentUsed + amount > totalHp) {
                showCustomDialog('Insufficient HP', `Cannot apply ${amount} damage. Only ${totalHp - currentUsed} HP remaining.`);
                return;
            }
            
            // Apply damage by marking HP boxes as used
            for (let i = 0; i < amount; i++) {
                // Find the first unused HP box and mark it as used
                for (let j = 0; j < totalHp; j++) {
                    if (!hpResource.used.includes(j)) {
                        hpResource.used.push(j);
                        break;
                    }
                }
            }
            
            // Refresh the HP display
            populateSheetResourceBoxes(currentCharacter);
            saveCharacters();
        }

        // Rest System Functions
        function showRestModal() {
            if (!currentCharacter) return;
            
            // Reset rest state
            restSelectedResources = [];
            restType = null;
            updateRestSelectionCount();
            
            // Clear all checkboxes
            document.querySelectorAll('#restModal input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = false;
                checkbox.closest('.rest-resource-option').classList.remove('selected');
            });
            
            document.getElementById('restModal').classList.remove('hidden');
        }

        function updateRestSelectionCount() {
            document.getElementById('restSelectionCount').textContent = restSelectedResources.length;
        }

        function handleRestResourceSelection(checkbox) {
            const resource = checkbox.dataset.resource;
            const option = checkbox.closest('.rest-resource-option');
            
            if (checkbox.checked) {
                if (restSelectedResources.length >= 2) {
                    checkbox.checked = false;
                    showCustomDialog('Selection Limit', 'You can only select up to 2 resources to restore.');
                    return;
                }
                restSelectedResources.push(resource);
                option.classList.add('selected');
            } else {
                restSelectedResources = restSelectedResources.filter(r => r !== resource);
                option.classList.remove('selected');
            }
            
            updateRestSelectionCount();
        }

        function executeShortRest() {
            if (!currentCharacter || restSelectedResources.length === 0) {
                showCustomDialog('No Selection', 'Please select at least one resource to restore.');
                return;
            }
            
            // Determine how many points to restore based on level
            const level = currentCharacter.level || 1;
            let pointsToRestore;
            
            if (level >= 1 && level <= 5) {
                pointsToRestore = 2;
            } else if (level >= 6 && level <= 8) {
                pointsToRestore = 3;
            } else if (level >= 9 && level <= 10) {
                pointsToRestore = 4;
            }
            
            // Process each selected resource
            restSelectedResources.forEach(resource => {
                if (resource === 'armorSlots') {
                    restoreArmorSlots(pointsToRestore);
                } else {
                    restoreResourceBoxes(resource, pointsToRestore);
                }
            });
            
            // Save and refresh
            saveCharacters();
            populateCharacterSheet(currentCharacter);
            updateCharacterDisplay(); // Update character cards
            
            // Close modal
            document.getElementById('restModal').classList.add('hidden');
            
            showCustomDialog('Short Rest Complete', `${currentCharacter.name} has rested and restored ${pointsToRestore} points for the selected resources.`);
        }

        function executeLongRest() {
            if (!currentCharacter || restSelectedResources.length === 0) {
                showCustomDialog('No Selection', 'Please select at least one resource to restore.');
                return;
            }
            
            // Process each selected resource - restore ALL points
            restSelectedResources.forEach(resource => {
                if (resource === 'armorSlots') {
                    restoreAllArmorSlots();
                } else {
                    restoreAllResourceBoxes(resource);
                }
            });
            
            // ALWAYS REMOVE ALL TEMPORARY BONUSES DURING LONG REST (regardless of selection)
            
            // Remove ALL temporary resource points from ALL resources and clean up used boxes
            if (currentCharacter.resources) {
                ['hp', 'stress', 'class', 'spell'].forEach(resourceType => {
                    if (currentCharacter.resources[resourceType]) {
                        const resource = currentCharacter.resources[resourceType];
                        // Remove temporary points
                        resource.temp = 0;
                        // Clean up any used boxes that are now beyond the permanent maximum
                        resource.used = resource.used.filter(index => index < resource.max);
                    }
                });
            }
            
            // Remove temporary armor slots
            if (currentCharacter.armorSlots) {
                currentCharacter.armorSlots.temporary = 0;
                currentCharacter.armorSlots.total = currentCharacter.armorSlots.permanent;
                // Remove filled states that are now beyond the total
                currentCharacter.armorSlots.filled = currentCharacter.armorSlots.filled.filter(index => index < currentCharacter.armorSlots.total);
            }
            
            // Remove all temporary threshold values
            if (currentCharacter.tempThreshold) {
                currentCharacter.tempThreshold = { lower: 0, upper: 0 };
            }
            
            // Remove all temporary evasion values (for both normal and unarmored defense modes)
            if (currentCharacter.normalEvasionData) {
                currentCharacter.normalEvasionData.temporary = 0;
            }
            if (currentCharacter.unarmoredDefenseEvasionData) {
                currentCharacter.unarmoredDefenseEvasionData.temporary = 0;
            }
            // Also handle legacy evasionData structure
            if (currentCharacter.evasionData) {
                currentCharacter.evasionData.temporary = 0;
            }
            
            // Disable Mage Armor during long rest
            if (currentCharacter.mageArmorActive) {
                removeMageArmorBonuses();
                currentCharacter.mageArmorActive = false;
                
                // Update the checkbox in the UI
                const mageArmorCheckbox = document.getElementById('mageArmorToggle');
                if (mageArmorCheckbox) {
                    mageArmorCheckbox.checked = false;
                }
            }
            
            // Recalculate current evasion based on active mode
            updateCharacterEvasion();
            
            // Save and refresh
            saveCharacters();
            populateCharacterSheet(currentCharacter);
            updateCharacterDisplay(); // Update character cards
            
            // Close modal
            document.getElementById('restModal').classList.add('hidden');
            
            showCustomDialog('Long Rest Complete', `${currentCharacter.name} has taken a long rest and fully restored the selected resources. All temporary bonuses have been removed.`);
        }

        function restoreResourceBoxes(resourceType, pointsToRestore) {
            if (!currentCharacter.resources || !currentCharacter.resources[resourceType]) return;
            
            const resource = currentCharacter.resources[resourceType];
            const usedIndices = [...resource.used].sort((a, b) => b - a); // Sort descending to remove from highest indices first
            
            let pointsRestored = 0;
            
            // Remove from the highest used indices first (temporary boxes first, then permanent)
            for (let i = 0; i < usedIndices.length && pointsRestored < pointsToRestore; i++) {
                const index = usedIndices[i];
                const indexPosition = resource.used.indexOf(index);
                if (indexPosition !== -1) {
                    resource.used.splice(indexPosition, 1);
                    pointsRestored++;
                }
            }
        }

        function restoreAllResourceBoxes(resourceType) {
            if (!currentCharacter.resources || !currentCharacter.resources[resourceType]) return;
            
            // Clear all used boxes
            currentCharacter.resources[resourceType].used = [];
            
            // Reset temporary points to 0
            currentCharacter.resources[resourceType].temp = 0;
        }

        function restoreArmorSlots(pointsToRestore) {
            if (!currentCharacter.armorSlots) return;
            
            const armorSlots = currentCharacter.armorSlots;
            const filledIndices = [...armorSlots.filled].sort((a, b) => b - a); // Sort descending
            
            let pointsRestored = 0;
            
            // Remove from highest indices first (rightmost, bottom row first)
            for (let i = 0; i < filledIndices.length && pointsRestored < pointsToRestore; i++) {
                const index = filledIndices[i];
                const indexPosition = armorSlots.filled.indexOf(index);
                if (indexPosition !== -1) {
                    armorSlots.filled.splice(indexPosition, 1);
                    pointsRestored++;
                }
            }
        }

        function restoreAllArmorSlots() {
            if (!currentCharacter.armorSlots) return;
            
            // Clear all filled armor slots
            currentCharacter.armorSlots.filled = [];
            
            // Reset temporary armor slots to 0
            currentCharacter.armorSlots.temporary = 0;
            currentCharacter.armorSlots.total = currentCharacter.armorSlots.permanent;
        }

        // Level Up Functions
        function showLevelUpModal() {
            if (!currentCharacter) return;
            
            const modal = document.getElementById('levelUpModal');
            const thresholdBonusText = document.getElementById('levelUpThresholdBonus');
            const spellBonusText = document.getElementById('levelUpSpellBonus');
            
            // Reset selection state
            levelUpSelectedOptions = [];
            levelUpSelectionsCount = 0;
            updateLevelUpSelectionCount();
            
            // Clear all previous selections
            modal.querySelectorAll('.level-up-option').forEach(option => {
                option.classList.remove('selected');
                option.querySelector('input').checked = false;
            });
            
            // Check ability score caps and disable options if needed
            updateLevelUpAbilityOptions();
            
            // Set the character name and threshold bonus text
            thresholdBonusText.textContent = `${currentCharacter.name} gains +1/+1 Threshold`;
            
            // Check if character is a main spell-caster class
            const mainCasterClasses = ['Cleric', 'Druid', 'Sorcerer', 'Wizard'];
            const isMainCaster = mainCasterClasses.includes(currentCharacter.class);
            
            if (isMainCaster) {
                spellBonusText.textContent = `${currentCharacter.name} gains +1 Spell (Caster Class)`;
                spellBonusText.style.display = 'block';
            } else {
                spellBonusText.style.display = 'none';
            }
            
            modal.classList.remove('hidden');
        }
        
        function updateLevelUpAbilityOptions() {
            if (!currentCharacter) return;
            
            const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
            
            abilities.forEach(ability => {
                const option = document.getElementById(`levelUp${ability.charAt(0).toUpperCase() + ability.slice(1)}`);
                if (!option) return;
                
                // Calculate current total ability score
                const currentTotal = getCurrentAbilityScore(currentCharacter, ability);
                
                // Check if at +6 cap
                if (currentTotal >= 6) {
                    option.classList.add('opacity-50', 'cursor-not-allowed');
                    option.querySelector('input').disabled = true;
                    option.querySelector('span').textContent = `+1 ${ability.toUpperCase()} (Max +6)`;
                    option.style.pointerEvents = 'none';
                } else {
                    option.classList.remove('opacity-50', 'cursor-not-allowed');
                    option.querySelector('input').disabled = false;
                    option.querySelector('span').textContent = `+1 ${ability.toUpperCase()}`;
                    option.style.pointerEvents = 'auto';
                }
            });
        }
        
        function getCurrentAbilityScore(character, ability) {
            // Calculate total including base, race, weapon, and armor bonuses
            const base = character[ability] || 0;
            const race = character.abilityScoreAllocations?.[ability] || 0;
            const primaryWeapon = character.primaryWeaponAbilityBonuses?.[ability] || 0;
            const secondaryWeapon = character.secondaryWeaponAbilityBonuses?.[ability] || 0;
            const armor = character.armorAbilityBonuses?.[ability] || 0;
            
            return base + race + primaryWeapon + secondaryWeapon + armor;
        }

        function updateLevelUpSelectionCount() {
            document.getElementById('levelUpSelectionCount').textContent = levelUpSelectionsCount;
        }

        function handleLevelUpOptionClick(optionElement) {
            const input = optionElement.querySelector('input');
            const type = optionElement.dataset.type;
            
            if (optionElement.classList.contains('selected')) {
                // Deselect
                optionElement.classList.remove('selected');
                input.checked = false;
                levelUpSelectedOptions = levelUpSelectedOptions.filter(option => option.element !== optionElement);
                levelUpSelectionsCount--;
            } else {
                // Check if we can select more
                if (levelUpSelectionsCount >= 2) {
                    showCustomDialog('Selection Limit', 'You can only select 2 options for level up.');
                    return;
                }
                
                // Select
                optionElement.classList.add('selected');
                input.checked = true;
                
                // Add to selected options
                const optionData = {
                    element: optionElement,
                    type: type
                };
                
                if (type === 'resource') {
                    optionData.resource = optionElement.dataset.resource;
                    optionData.value = parseInt(optionElement.dataset.value);
                } else if (type === 'threshold') {
                    optionData.lower = parseInt(optionElement.dataset.lower);
                    optionData.upper = parseInt(optionElement.dataset.upper);
                } else if (type === 'ability') {
                    optionData.ability = optionElement.dataset.ability;
                    optionData.value = parseInt(optionElement.dataset.value);
                }
                
                levelUpSelectedOptions.push(optionData);
                levelUpSelectionsCount++;
            }
            
            updateLevelUpSelectionCount();
        }

        function applyLevelUp() {
            if (!currentCharacter) return;
            
            if (levelUpSelectionsCount !== 2) {
                showCustomDialog('Incomplete Selection', 'You must select exactly 2 options to level up.');
                return;
            }
            
            // Increase level, defaulting to 1 if not set, and cap at 10
            currentCharacter.level = Math.min((currentCharacter.level || 1) + 1, 10);

            // Disable and grey out button if max level is reached
            if (currentCharacter.level === 10) {
                const levelUpBtn = document.getElementById('levelUpCharacter');
                levelUpBtn.disabled = true;
                levelUpBtn.classList.add('opacity-50', 'cursor-not-allowed');
                levelUpBtn.classList.remove('hover:bg-green-600');
            }
        
            
            // Apply automatic threshold bonus (+1/+1)
            currentCharacter.thresholdLower = (currentCharacter.thresholdLower || 0) + 1;
            currentCharacter.thresholdUpper = (currentCharacter.thresholdUpper || 0) + 1;
            
            // Apply automatic spell caster bonus if applicable
            const mainCasterClasses = ['Cleric', 'Druid', 'Sorcerer', 'Wizard'];
            if (mainCasterClasses.includes(currentCharacter.class)) {
                // Increase spell max
                currentCharacter.spellMax = (currentCharacter.spellMax || 0) + 1;
                
                // Update resources object
                if (!currentCharacter.resources) {
                    currentCharacter.resources = {
                        hp: { max: 0, used: [], temp: 0 },
                        stress: { max: 0, used: [], temp: 0 },
                        class: { max: 0, used: [], temp: 0 },
                        spell: { max: 0, used: [], temp: 0 }
                    };
                }
                
                if (!currentCharacter.resources.spell) {
                    currentCharacter.resources.spell = { max: 0, used: [], temp: 0 };
                }
                
                currentCharacter.resources.spell.max += 1;
            }
            
            // Apply weapon proficiency level up (fill one circle if available)
            applyWeaponProficiencyLevelUp();
            
            // Apply selected options
            levelUpSelectedOptions.forEach(option => {
                if (option.type === 'resource') {
                    const resource = option.resource;
                    
                    if (resource === 'armor') {
                        // Special handling for armor - increases both armor value and slots
                        currentCharacter.armor = (currentCharacter.armor || 0) + option.value;
                        
                        // Ensure armor slots are initialized and updated
                        if (!currentCharacter.armorSlots) {
                            currentCharacter.armorSlots = { 
                                total: 0, 
                                filled: [],
                                permanent: 0,
                                temporary: 0
                            };
                        }
                        
                        // Update both total and permanent slots
                        currentCharacter.armorSlots.total += option.value;
                        currentCharacter.armorSlots.permanent += option.value;
                    } else {
                        // Handle HP, Stress, Class, Spell
                        const maxKey = resource + 'Max';
                        currentCharacter[maxKey] = (currentCharacter[maxKey] || 0) + option.value;
                        
                        // Update resources object
                        if (!currentCharacter.resources) {
                            currentCharacter.resources = {
                                hp: { max: 0, used: [], temp: 0 },
                                stress: { max: 0, used: [], temp: 0 },
                                class: { max: 0, used: [], temp: 0 },
                                spell: { max: 0, used: [], temp: 0 }
                            };
                        }
                        
                        if (!currentCharacter.resources[resource]) {
                            currentCharacter.resources[resource] = { max: 0, used: [], temp: 0 };
                        }
                        
                        currentCharacter.resources[resource].max += option.value;
                    }
                } else if (option.type === 'threshold') {
                    // Additional threshold bonus (on top of the automatic +1/+1)
                    currentCharacter.thresholdLower = (currentCharacter.thresholdLower || 0) + option.lower;
                    currentCharacter.thresholdUpper = (currentCharacter.thresholdUpper || 0) + option.upper;
                } else if (option.type === 'ability') {
                    // Increase ability score
                    const ability = option.ability;
                    currentCharacter[ability] = (currentCharacter[ability] || 0) + option.value;
                }
            });
            // After level is updated, add this line:
            updateAbilityCheckboxStates();
            // Save and refresh
            saveCharacters();
            populateCharacterSheet(currentCharacter);
            updateCharacterDisplay();
            // Update DC Save after level-up changes
            updateDCSaveDisplay(currentCharacter);
            
            // Close modal
            document.getElementById('levelUpModal').classList.add('hidden');
           
            /*
            // Show success message
            showCustomDialog('Level Up Complete!', `${currentCharacter.name} is now level ${currentCharacter.level}!`);*/
        }

        // Weapon and armor system functions
        function showWeaponModal(weaponType) {
            currentWeaponType = weaponType;
            const modal = document.getElementById('weaponModal');
            const title = document.getElementById('weaponModalTitle');
            const weaponList = document.getElementById('weaponList');
            const makeBtn = document.getElementById('makeWeaponBtn');
            
            
            // Clear previous selection
            selectedWeapon = null;
            selectedArmor = null;
            
            // Set modal title and select appropriate database
            let database, titleText, buttonText;
            if (weaponType === 'armor') {
                database = getArmorDatabase(1); // Default to Tier 1
                titleText = 'Select Armor';
                buttonText = 'Add Armor';
                makeBtn.classList.remove('hidden'); // Hide Make button for armor
            } else {
                // Combine database weapons with custom weapons for weapons
                const baseDatabase = weaponType === 'primary' ? primaryWeaponDatabase : secondaryWeaponDatabase;
                const customWeaponsForType = customWeapons.filter(weapon => 
                    // Primary weapons can use any custom weapon, secondary can only use ones that make sense
                    weaponType === 'primary' || weapon.name.toLowerCase().includes('dagger') || weapon.name.toLowerCase().includes('short') || weapon.name.toLowerCase().includes('shield') || weapon.name.toLowerCase().includes('hand')
                );
                
                database = [...baseDatabase, ...customWeaponsForType];
                titleText = weaponType === 'primary' ? 'Select Primary Weapon' : 'Select Secondary Weapon';
                buttonText = 'Add Weapon';
                makeBtn.classList.remove('hidden'); // Show Make button for weapons
            }
            
            title.textContent = titleText;
            document.getElementById('confirmWeapon').textContent = buttonText;
            
            // Add tier selection radio buttons for armor only
            let tierRadiosHTML = '';
            if (weaponType === 'armor') {
                tierRadiosHTML = `
                    <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 class="text-sm font-medium mb-2">Select Tier:</h4>
                        <div class="flex space-x-4">
                            <label class="flex items-center cursor-pointer">
                                <input type="radio" name="armorTier" value="1" class="mr-2" checked>
                                <span class="text-sm">Tier 1</span>
                            </label>
                            <label class="flex items-center cursor-pointer">
                                <input type="radio" name="armorTier" value="2" class="mr-2">
                                <span class="text-sm">Tier 2</span>
                            </label>
                            <label class="flex items-center cursor-pointer">
                                <input type="radio" name="armorTier" value="3" class="mr-2">
                                <span class="text-sm">Tier 3</span>
                            </label>
                        </div>
                    </div>
                `;
            }
            
            // Populate list with tier radios if armor
            weaponList.innerHTML = tierRadiosHTML + database.map((item, index) => {
                if (weaponType === 'armor') {
                    return `
                        <div class="weapon-item" data-weapon-index="${index}">
                            <div class="flex items-center">
                                <input type="radio" name="weaponSelect" class="mr-3" value="${index}">
                                <div class="flex-1">
                                    <div class="font-semibold">${item.name} | ${item.thresholdLower} / ${item.thresholdUpper} | +${item.armor} Armor</div>
${item.feature && item.feature !== 'Nothing' ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: <span class="feature-text">${formatFeatureText(item.feature)}</span></div>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="weapon-item" data-weapon-index="${index}">
                            <div class="flex items-center">
                                <input type="radio" name="weaponSelect" class="mr-3" value="${index}">
                                <div class="flex-1">
                                    <div class="font-semibold">${item.name} | ${item.trait} / ${item.range} | ${item.damage}</div>
${item.feature ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: <span class="feature-text">${formatFeatureText(item.feature)}</span></div>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }
            }).join('');
            
            // Add event listeners to items
            weaponList.querySelectorAll('.weapon-item').forEach(item => {
                item.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    radio.checked = true;
                    
                    if (weaponType === 'armor') {
                        const selectedTier = document.querySelector('input[name="armorTier"]:checked')?.value || '1';
                        const currentDatabase = getArmorDatabase(parseInt(selectedTier));
                        selectedArmor = currentDatabase[parseInt(radio.value)];
                    } else {
                        selectedWeapon = database[parseInt(radio.value)];
                    }
                    
                    // Update visual selection
                    weaponList.querySelectorAll('.weapon-item').forEach(w => w.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
            
            // Add event listeners for tier radio buttons (armor only)
            if (weaponType === 'armor') {
                weaponList.querySelectorAll('input[name="armorTier"]').forEach(radio => {
                    radio.addEventListener('change', function() {
                        const selectedTier = parseInt(this.value);
                        updateArmorTierDisplay(selectedTier, weaponType);
                    });
                });
            }
            
            modal.classList.remove('hidden');
        }

        function addWeaponToCharacter() {
            if ((!selectedWeapon && !selectedArmor) || !currentCharacter || !currentWeaponType) return;
            
            if (currentWeaponType === 'armor') {
                if (!selectedArmor) return;
                
                // Check if character already has an actual armor item (not armor bonuses from weapons)
                if (currentCharacter.armorItem) {
                    showCustomDialog('Armor Limit', 'Character already has armor. Remove the current armor first.');
                    return;
                }
                
                // Add armor to character
                currentCharacter.armorItem = { ...selectedArmor };
                
                // Apply armor bonuses
                applyArmorBonuses(selectedArmor.bonuses);
                
            } else {
                if (!selectedWeapon) return;
                
                const weaponProperty = currentWeaponType === 'primary' ? 'primaryWeapon' : 'secondaryWeapon';
                
                // Check if character already has this type of weapon
                if (currentCharacter[weaponProperty]) {
                    showCustomDialog('Weapon Limit', `Character already has a ${currentWeaponType} weapon. Remove the current weapon first.`);
                    return;
                }
                
                // Add weapon to character
                currentCharacter[weaponProperty] = { ...selectedWeapon };
                
                // Apply weapon bonuses (including automatic armor slot addition)
                applyWeaponBonuses(currentCharacter[weaponProperty].bonuses, currentWeaponType);
            }
            
            // Update display
            updateWeaponDisplay();
            
            // Save changes
            saveCharacters();
            
            // Close modal
            document.getElementById('weaponModal').classList.add('hidden');
        }

        function applyWeaponBonuses(bonuses, weaponType) {
            if (!currentCharacter || !bonuses) return;
            
            const bonusProperty = weaponType === 'primary' ? 'primaryWeaponBonuses' : 'secondaryWeaponBonuses';
            const abilityBonusProperty = weaponType === 'primary' ? 'primaryWeaponAbilityBonuses' : 'secondaryWeaponAbilityBonuses';
            
            // Initialize weapon bonuses if not present
            if (!currentCharacter[bonusProperty]) {
                currentCharacter[bonusProperty] = {};
            }
            
            // Apply bonuses to character stats
            Object.keys(bonuses).forEach(stat => {
                const bonus = bonuses[stat];
                currentCharacter[bonusProperty][stat] = bonus;
                
                // Update the actual character stat
                if (stat === 'evasion') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                } else if (stat === 'armor') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                    // AUTOMATICALLY ADD ARMOR SLOTS when armor increases
                    if (!currentCharacter.armorSlots) {
                        currentCharacter.armorSlots = { 
                            total: 0, 
                            filled: [],
                            permanent: 0,
                            temporary: 0
                        };
                    }
                    currentCharacter.armorSlots.total += bonus;
                    currentCharacter.armorSlots.permanent += bonus;
                } else if (stat === 'hp' || stat === 'stress' || stat === 'class' || stat === 'spell') {
                    // Update max values
                    const maxKey = stat + 'Max';
                    currentCharacter[maxKey] = (currentCharacter[maxKey] || 0) + bonus;
                    // Update resources object
                    if (currentCharacter.resources && currentCharacter.resources[stat]) {
                        currentCharacter.resources[stat].max += bonus;
                    }
                } else if (stat === 'thresholdLower' || stat === 'thresholdUpper') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                } else if (['str', 'dex', 'con', 'int', 'wis', 'cha'].includes(stat)) {
                    // Apply ability score bonuses
                    if (!currentCharacter[abilityBonusProperty]) {
                        currentCharacter[abilityBonusProperty] = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
                    }
                    currentCharacter[abilityBonusProperty][stat] = bonus;
                }
            });
            
            // Refresh the character sheet display
            populateCharacterSheet(currentCharacter);
        }

        function applyArmorBonuses(bonuses) {
            if (!currentCharacter || !bonuses) return;
            
            // Disable Unarmored Defense when armor is added
            if (currentCharacter.unarmoredDefenseActive) {
                removeUnarmoredDefenseBonuses();
                currentCharacter.unarmoredDefenseActive = false;
                // Update the checkbox in the UI
                const checkbox = document.getElementById('unarmoredDefenseToggle');
                if (checkbox) {
                    checkbox.checked = false;
                }
            }
            
            // Initialize armor bonuses if not present
            if (!currentCharacter.armorBonuses) {
                currentCharacter.armorBonuses = {};
            }
            if (!currentCharacter.armorAbilityBonuses) {
                currentCharacter.armorAbilityBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            }
            
            // Apply bonuses to character stats
            Object.keys(bonuses).forEach(stat => {
                const bonus = bonuses[stat];
                currentCharacter.armorBonuses[stat] = bonus;
                
                // Update the actual character stat
                if (stat === 'evasion') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                } else if (stat === 'armor') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                    // AUTOMATICALLY ADD ARMOR SLOTS when armor increases
                    if (!currentCharacter.armorSlots) {
                        currentCharacter.armorSlots = { 
                            total: 0, 
                            filled: [],
                            permanent: 0,
                            temporary: 0
                        };
                    }
                    currentCharacter.armorSlots.total += bonus;
                    currentCharacter.armorSlots.permanent += bonus;
                } else if (stat === 'hp' || stat === 'stress' || stat === 'class' || stat === 'spell') {
                    // Update max values
                    const maxKey = stat + 'Max';
                    currentCharacter[maxKey] = (currentCharacter[maxKey] || 0) + bonus;
                    // Update resources object
                    if (currentCharacter.resources && currentCharacter.resources[stat]) {
                        currentCharacter.resources[stat].max += bonus;
                    }
                } else if (stat === 'thresholdLower' || stat === 'thresholdUpper') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) + bonus;
                } else if (['str', 'dex', 'con', 'int', 'wis', 'cha'].includes(stat)) {
                    // Apply ability score bonuses
                    currentCharacter.armorAbilityBonuses[stat] = bonus;
                }
            });
            
            // Refresh the character sheet display
            populateCharacterSheet(currentCharacter);
        }

        function removeWeaponBonuses(bonuses, weaponType) {
            if (!currentCharacter || !bonuses) return;
            
            const bonusProperty = weaponType === 'primary' ? 'primaryWeaponBonuses' : 'secondaryWeaponBonuses';
            const abilityBonusProperty = weaponType === 'primary' ? 'primaryWeaponAbilityBonuses' : 'secondaryWeaponAbilityBonuses';
            
            // Remove bonuses from character stats
            Object.keys(bonuses).forEach(stat => {
                const bonus = bonuses[stat];
                
                // Remove the actual bonus from character stat
                if (stat === 'evasion') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                } else if (stat === 'armor') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                    // AUTOMATICALLY REMOVE ARMOR SLOTS when armor decreases
                    if (currentCharacter.armorSlots) {
                        currentCharacter.armorSlots.total = Math.max(0, currentCharacter.armorSlots.total - bonus);
                        currentCharacter.armorSlots.permanent = Math.max(0, currentCharacter.armorSlots.permanent - bonus);
                        // Remove filled states that are now beyond the total
                        currentCharacter.armorSlots.filled = currentCharacter.armorSlots.filled.filter(index => index < currentCharacter.armorSlots.total);
                    }
                } else if (stat === 'hp' || stat === 'stress' || stat === 'class' || stat === 'spell') {
                    // Update max values
                    const maxKey = stat + 'Max';
                    currentCharacter[maxKey] = (currentCharacter[maxKey] || 0) - bonus;
                    // Update resources object
                    if (currentCharacter.resources && currentCharacter.resources[stat]) {
                        currentCharacter.resources[stat].max -= bonus;
                        // Ensure max doesn't go below 0
                        if (currentCharacter.resources[stat].max < 0) {
                            currentCharacter.resources[stat].max = 0;
                        }
                    }
                } else if (stat === 'thresholdLower' || stat === 'thresholdUpper') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                } else if (['str', 'dex', 'con', 'int', 'wis', 'cha'].includes(stat)) {
                    // Remove ability score bonuses
                    if (currentCharacter[abilityBonusProperty]) {
                        currentCharacter[abilityBonusProperty][stat] = 0;
                    }
                }
            });
            
            // Clear weapon bonuses tracking
            currentCharacter[bonusProperty] = {};
            if (currentCharacter[abilityBonusProperty]) {
                currentCharacter[abilityBonusProperty] = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            }
            
            // Refresh the character sheet display
            populateCharacterSheet(currentCharacter);
        }

        function removeArmorBonuses(bonuses) {
            if (!currentCharacter || !bonuses) return;
            
            // Remove bonuses from character stats
            Object.keys(bonuses).forEach(stat => {
                const bonus = bonuses[stat];
                
                // Remove the actual bonus from character stat
                if (stat === 'evasion') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                } else if (stat === 'armor') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                    // AUTOMATICALLY REMOVE ARMOR SLOTS when armor decreases
                    if (currentCharacter.armorSlots) {
                        currentCharacter.armorSlots.total = Math.max(0, currentCharacter.armorSlots.total - bonus);
                        currentCharacter.armorSlots.permanent = Math.max(0, currentCharacter.armorSlots.permanent - bonus);
                        // Remove filled states that are now beyond the total
                        currentCharacter.armorSlots.filled = currentCharacter.armorSlots.filled.filter(index => index < currentCharacter.armorSlots.total);
                    }
                } else if (stat === 'hp' || stat === 'stress' || stat === 'class' || stat === 'spell') {
                    // Update max values
                    const maxKey = stat + 'Max';
                    currentCharacter[maxKey] = (currentCharacter[maxKey] || 0) - bonus;
                    // Update resources object
                    if (currentCharacter.resources && currentCharacter.resources[stat]) {
                        currentCharacter.resources[stat].max -= bonus;
                        // Ensure max doesn't go below 0
                        if (currentCharacter.resources[stat].max < 0) {
                            currentCharacter.resources[stat].max = 0;
                        }
                    }
                } else if (stat === 'thresholdLower' || stat === 'thresholdUpper') {
                    currentCharacter[stat] = (currentCharacter[stat] || 0) - bonus;
                } else if (['str', 'dex', 'con', 'int', 'wis', 'cha'].includes(stat)) {
                    // Remove ability score bonuses
                    if (currentCharacter.armorAbilityBonuses) {
                        currentCharacter.armorAbilityBonuses[stat] = 0;
                    }
                }
            });
            
            // Clear armor bonuses tracking
            currentCharacter.armorBonuses = {};
            if (currentCharacter.armorAbilityBonuses) {
                currentCharacter.armorAbilityBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            }
            
            // Re-enable Unarmored Defense if character was using it before
            if ((currentCharacter.class === 'Barbarian' || currentCharacter.class === 'Monk')) {
                // Auto-enable Unarmored Defense when armor is removed
                currentCharacter.unarmoredDefenseActive = true;
                applyUnarmoredDefenseBonuses();
            }
            
            // Refresh the character sheet display (this will update Unarmored Defense display)
            populateCharacterSheet(currentCharacter);
        }

        function updateArmorTierDisplay(selectedTier, weaponType) {
            const weaponList = document.getElementById('weaponList');
            const database = getArmorDatabase(selectedTier);
            
            // Clear current selections
            selectedArmor = null;
            
            // Get the tier radio buttons HTML (preserve it)
            const tierRadiosHTML = `
                <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 class="text-sm font-medium mb-2">Select Tier:</h4>
                    <div class="flex space-x-4">
                        <label class="flex items-center cursor-pointer">
                            <input type="radio" name="armorTier" value="1" class="mr-2" ${selectedTier === 1 ? 'checked' : ''}>
                            <span class="text-sm">Tier 1</span>
                        </label>
                        <label class="flex items-center cursor-pointer">
                            <input type="radio" name="armorTier" value="2" class="mr-2" ${selectedTier === 2 ? 'checked' : ''}>
                            <span class="text-sm">Tier 2</span>
                        </label>
                        <label class="flex items-center cursor-pointer">
                            <input type="radio" name="armorTier" value="3" class="mr-2" ${selectedTier === 3 ? 'checked' : ''}>
                            <span class="text-sm">Tier 3</span>
                        </label>
                    </div>
                </div>
            `;
            
            // Update the weapon list with new tier data
            const weaponItemsHTML = database.map((item, index) => {
                return `
                    <div class="weapon-item" data-weapon-index="${index}">
                        <div class="flex items-center">
                            <input type="radio" name="weaponSelect" class="mr-3" value="${index}">
                            <div class="flex-1">
                                <div class="font-semibold">${item.name} | ${item.thresholdLower} / ${item.thresholdUpper} | +${item.armor} Armor</div>
                                ${item.feature && item.feature !== 'Nothing' ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: ${item.feature}</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            
            // Replace the content
            weaponList.innerHTML = tierRadiosHTML + weaponItemsHTML;
            
            // Re-add event listeners to items
            weaponList.querySelectorAll('.weapon-item').forEach(item => {
                item.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    radio.checked = true;
                    
                    selectedArmor = database[parseInt(radio.value)];
                    
                    // Update visual selection
                    weaponList.querySelectorAll('.weapon-item').forEach(w => w.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
            
            // Re-add event listeners for tier radio buttons
            weaponList.querySelectorAll('input[name="armorTier"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    const newSelectedTier = parseInt(this.value);
                    updateArmorTierDisplay(newSelectedTier, weaponType);
                });
            });
        }

        function updateWeaponDisplay() {
            const primaryWeaponDisplay = document.getElementById('primaryWeaponDisplay');
            const secondaryWeaponDisplay = document.getElementById('secondaryWeaponDisplay');
            const armorDisplay = document.getElementById('armorDisplay');
            
            // Update primary weapon display
            if (!currentCharacter || !currentCharacter.primaryWeapon) {
                primaryWeaponDisplay.innerHTML = `
                    <button id="addPrimaryWeapon" class="w-full px-3 py-2 border border-dashed border-gray-400 dark:border-gray-500 rounded text-sm text-gray-600 dark:text-gray-400 hover:border-primary hover:text-primary transition-colors">
                        <i class="fas fa-plus mr-1"></i>Add Primary Weapon
                    </button>
                `;
                
                // Re-attach event listener
                document.getElementById('addPrimaryWeapon').addEventListener('click', () => showWeaponModal('primary'));
            } else {
                const weapon = currentCharacter.primaryWeapon;
primaryWeaponDisplay.innerHTML = `
    <div class="weapon-display">
        <i class="fas fa-times weapon-remove" title="Remove weapon" data-weapon-type="primary"></i>
        <div class="font-semibold">${weapon.name} | ${weapon.trait} / ${weapon.range} | ${weapon.damage}</div>
        ${weapon.feature ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: ${formatFeatureText(weapon.feature)}</div>` : ''}
    </div>
`;
                
                // Add remove event listener
                primaryWeaponDisplay.querySelector('.weapon-remove').addEventListener('click', () => showWeaponRemovalModal('primary'));
            }
            
            // Update secondary weapon display
            if (!currentCharacter || !currentCharacter.secondaryWeapon) {
                secondaryWeaponDisplay.innerHTML = `
                    <button id="addSecondaryWeapon" class="w-full px-3 py-2 border border-dashed border-gray-400 dark:border-gray-500 rounded text-sm text-gray-600 dark:text-gray-400 hover:border-primary hover:text-primary transition-colors">
                        <i class="fas fa-plus mr-1"></i>Add Secondary Weapon
                    </button>
                `;
                
                // Re-attach event listener
                document.getElementById('addSecondaryWeapon').addEventListener('click', () => showWeaponModal('secondary'));
            } else {
                const weapon = currentCharacter.secondaryWeapon;
secondaryWeaponDisplay.innerHTML = `
    <div class="weapon-display">
        <i class="fas fa-times weapon-remove" title="Remove weapon" data-weapon-type="secondary"></i>
        <div class="font-semibold">${weapon.name} | ${weapon.trait} / ${weapon.range} | ${weapon.damage}</div>
        ${weapon.feature ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: ${formatFeatureText(weapon.feature)}</div>` : ''}
    </div>
`;
                
                // Add remove event listener
                secondaryWeaponDisplay.querySelector('.weapon-remove').addEventListener('click', () => showWeaponRemovalModal('secondary'));
            }
            
            // Update armor display
            if (!currentCharacter || !currentCharacter.armorItem) {
                armorDisplay.innerHTML = `
                    <button id="addArmor" class="w-full px-3 py-2 border border-dashed border-gray-400 dark:border-gray-500 rounded text-sm text-gray-600 dark:text-gray-400 hover:border-primary hover:text-primary transition-colors">
                        <i class="fas fa-plus mr-1"></i>Add Armor
                    </button>
                `;
                
                // Re-attach event listener
                document.getElementById('addArmor').addEventListener('click', () => showWeaponModal('armor'));
            } else {
                const armor = currentCharacter.armorItem;
armorDisplay.innerHTML = `
    <div class="weapon-display">
        <i class="fas fa-times weapon-remove" title="Remove armor" data-weapon-type="armor"></i>
        <div class="font-semibold">${armor.name} | ${armor.thresholdLower} / ${armor.thresholdUpper} | +${armor.armor} Armor</div>
        ${armor.feature && armor.feature !== 'Nothing' ? `<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">Feature: ${formatFeatureText(armor.feature)}</div>` : ''}
    </div>
`;
                
                // Add remove event listener
                armorDisplay.querySelector('.weapon-remove').addEventListener('click', () => showWeaponRemovalModal('armor'));
            }
        }

        function showWeaponRemovalModal(weaponType) {
            currentWeaponType = weaponType;
            const modal = document.getElementById('weaponRemovalModal');
            const title = document.getElementById('weaponRemovalTitle');
            
            if (weaponType === 'armor') {
                title.textContent = 'Remove Armor';
            } else {
                title.textContent = weaponType === 'primary' ? 'Remove Primary Weapon' : 'Remove Secondary Weapon';
            }
            modal.classList.remove('hidden');
        }

        function removeWeapon() {
            if (!currentCharacter || !currentWeaponType) return;
            
            if (currentWeaponType === 'armor') {
                if (!currentCharacter.armorItem) return;
                
                // Check if this is Unarmored Defense armor
                const isUnarmoredDefenseArmor = currentCharacter.armorItem.isUnarmoredDefense;
                
                // Remove armor bonuses
                removeArmorBonuses(currentCharacter.armorItem.bonuses);
                
                // Remove armor from character
                delete currentCharacter.armorItem;
                
                // If it was Unarmored Defense armor, also uncheck the checkbox and update status
                if (isUnarmoredDefenseArmor) {
                    currentCharacter.unarmoredDefenseActive = false;
                    currentCharacter.evasion = currentCharacter.normalEvasion;
                    
                    // Update the checkbox in the UI
                    const checkbox = document.getElementById('unarmoredDefenseToggle');
                    if (checkbox) {
                        checkbox.checked = false;
                    }
                }
            } else {
                const weaponProperty = currentWeaponType === 'primary' ? 'primaryWeapon' : 'secondaryWeapon';
                
                if (!currentCharacter[weaponProperty]) return;
                
                // Check if this is a Wild Beast weapon
                if (currentCharacter[weaponProperty].isWildBeast) {
                    // Handle Wild Beast removal - uncheck the checkbox and restore equipment
                    currentCharacter.wildBeastActive = false;
                    const wildBeastCheckbox = document.getElementById('wildBeastToggle');
                    if (wildBeastCheckbox) {
                        wildBeastCheckbox.checked = false;
                    }
                    // Remove Wild Beast transformation
                    removeWildBeastTransformation();
                } else {
                    // Remove normal weapon bonuses
                    removeWeaponBonuses(currentCharacter[weaponProperty].bonuses, currentWeaponType);
                    
                    // Remove weapon from character
                    delete currentCharacter[weaponProperty];
                }
            }
            
            // Update display
            updateWeaponDisplay();
            
            // Save changes
            saveCharacters();
            
            // Refresh the character sheet to update all displays
            populateCharacterSheet(currentCharacter);
            
            // Close modal
            document.getElementById('weaponRemovalModal').classList.add('hidden');
        }

        // ENHANCED ARMOR SYSTEM FUNCTIONS
        function generateArmorCircles(character) {
            const container = document.getElementById('armorCircles');
            const armorValue = character.armor || 0;
            
            // Ensure armor slots are properly initialized and synced with armor value
            if (!character.armorSlots) {
                character.armorSlots = { 
                    total: armorValue, 
                    filled: [],
                    permanent: armorValue,  // Track permanent vs temporary slots
                    temporary: 0
                };
            } else {
                // Ensure armor slots total is at least equal to armor value
                if (character.armorSlots.total < armorValue) {
                    character.armorSlots.total = armorValue;
                }
                
                // Initialize permanent/temporary tracking if missing
                if (character.armorSlots.permanent === undefined) {
                    character.armorSlots.permanent = armorValue;
                }
                if (character.armorSlots.temporary === undefined) {
                    character.armorSlots.temporary = Math.max(0, character.armorSlots.total - armorValue);
                }
            }
            
            const armorSlots = character.armorSlots;
            
            // Update armor slots display
            updateArmorSlotsDisplay(character);
            
            container.innerHTML = '';
            
            for (let i = 0; i < 12; i++) {
                const circle = document.createElement('div');
                circle.className = 'armor-circle';
                circle.dataset.index = i;
                
                // Determine circle type and style
                if (i < armorSlots.permanent) {
                    // Permanent armor slots (from base armor value)
                    circle.classList.add('solid-border');
                    circle.title = 'Permanent Armor Slot';
                } else if (i < armorSlots.total) {
                    // Temporary armor slots
                    circle.classList.add('solid-border', 'temp-armor-slot');
                    circle.title = 'Temporary Armor Slot';
                } else {
                    // No armor slot available
                    circle.title = 'Click to add temporary armor slots';
                }
                
                // Set filled state
                if (armorSlots.filled.includes(i)) {
                    circle.classList.add('filled');
                }
                
                // Only allow clicking on circles within total slots range
                if (i < armorSlots.total) {
                    circle.addEventListener('click', function() {
                        toggleArmorCircle(parseInt(this.dataset.index));
                    });
                    circle.style.cursor = 'pointer';
                } else {
                    // Show temp slot modal when clicking beyond available slots
                    circle.addEventListener('click', function() {
                        showArmorSlotsModal();
                    });
                    circle.style.cursor = 'pointer';
                    circle.classList.add('hover:border-white');
                }
                
                container.appendChild(circle);
            }
        }

        function updateArmorSlotsDisplay(character) {
            if (!character.armorSlots) return;
            
            const filledSlots = character.armorSlots.filled.length;
            const totalSlots = character.armorSlots.total;
            const tempSlots = character.armorSlots.temporary || 0;
            
            // Update the armor slots count display
            const slotsCountElement = document.getElementById('armorSlotsCount');
            const tempArmorCountElement = document.getElementById('tempArmorCount');
            
            if (slotsCountElement) {
                slotsCountElement.textContent = `${filledSlots}/${totalSlots}`;
            }
            
            if (tempArmorCountElement) {
                tempArmorCountElement.textContent = `+${tempSlots} temp`;
            }
        }
        
        function toggleArmorCircle(index) {
            if (!currentCharacter) return;
            
            if (!currentCharacter.armorSlots) {
                currentCharacter.armorSlots = { 
                    total: currentCharacter.armor || 0, 
                    filled: [],
                    permanent: currentCharacter.armor || 0,
                    temporary: 0
                };
            }
            
            const filledIndex = currentCharacter.armorSlots.filled.indexOf(index);
            if (filledIndex > -1) {
                // Remove from filled
                currentCharacter.armorSlots.filled.splice(filledIndex, 1);
            } else {
                // Add to filled
                currentCharacter.armorSlots.filled.push(index);
            }
            
            generateArmorCircles(currentCharacter);
            saveCharacters();
        }
        
        function showArmorSlotsModal() {
            if (!currentCharacter) return;
            
            const modal = document.getElementById('armorSlotsModal');
            
            // Initialize armor slots if missing
            if (!currentCharacter.armorSlots) {
                currentCharacter.armorSlots = { 
                    total: currentCharacter.armor || 0, 
                    filled: [],
                    permanent: currentCharacter.armor || 0,
                    temporary: 0
                };
            }
            
            // Update modal display
            document.getElementById('currentArmorSlots').textContent = currentCharacter.armorSlots.total;
            document.getElementById('permanentArmorSlots').textContent = currentCharacter.armorSlots.permanent;
            document.getElementById('temporaryArmorSlots').textContent = currentCharacter.armorSlots.temporary;
            
            document.getElementById('armorSlotsAmount').value = '';
            modal.classList.remove('hidden');
            document.getElementById('armorSlotsAmount').focus();
        }
        
        function adjustArmorSlots(amount, isAdd) {
            if (!currentCharacter || !amount || amount < 1) return;
            
            // Ensure armor slots are initialized
            if (!currentCharacter.armorSlots) {
                currentCharacter.armorSlots = { 
                    total: currentCharacter.armor || 0, 
                    filled: [],
                    permanent: currentCharacter.armor || 0,
                    temporary: 0
                };
            }
            
            if (isAdd) {
                // Add temporary slots above the base amount
                currentCharacter.armorSlots.total = Math.min(12, currentCharacter.armorSlots.total + amount);
                currentCharacter.armorSlots.temporary += amount;
            } else {
                // Remove slots but never go below the permanent armor slots
                const newTotal = Math.max(currentCharacter.armorSlots.permanent, currentCharacter.armorSlots.total - amount);
                const slotsRemoved = currentCharacter.armorSlots.total - newTotal;
                
                currentCharacter.armorSlots.total = newTotal;
                currentCharacter.armorSlots.temporary = Math.max(0, currentCharacter.armorSlots.temporary - slotsRemoved);
                
                // Remove filled states that are now beyond the total
                currentCharacter.armorSlots.filled = currentCharacter.armorSlots.filled.filter(index => index < newTotal);
            }
            
            generateArmorCircles(currentCharacter);
            saveCharacters();
            
            document.getElementById('armorSlotsModal').classList.add('hidden');
        }

        // Random character generation functions
        function generateRandomName() {
            const firstNames = ['Aiden', 'Aria', 'Björn', 'Cara', 'Darius', 'Elara', 'Felix', 'Gwen', 'Harren', 'Isla', 'Jaxon', 'Kira', 'Lyra', 'Magnus', 'Nora', 'Orion', 'Piper', 'Quinn', 'Raven', 'Senna', 'Thane', 'Uma', 'Vale', 'Wren', 'Xara', 'Zara'];
            const lastNames = ['Ashworth', 'Blackwood', 'Brightblade', 'Crowley', 'Darkbane', 'Emberheart', 'Frostwick', 'Goldhammer', 'Ironfoot', 'Nightwhisper', 'Stormwind', 'Thornfield', 'Wildmane'];
            
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            return `${firstName} ${lastName}`;
        }

        function getRandomArrayElement(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        function createRandomCharacter() {
            const races = ['Assaimar', 'Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Halfling', 'Human', 'Orc', 'Tiefling'];
            const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
            
            const name = generateRandomName();
            const race = getRandomArrayElement(races);
            const characterClass = getRandomArrayElement(classes);
            
            // Get race and class data
            const raceInfo = raceData[race];
            const classInfo = classData[characterClass];
            
            // Create random ability score modifiers
            const shuffledModifiers = [...availableModifiers];
            for (let i = shuffledModifiers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledModifiers[i], shuffledModifiers[j]] = [shuffledModifiers[j], shuffledModifiers[i]];
            }
            
            const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
            const randomModifiers = {};
            abilities.forEach((ability, index) => {
                randomModifiers[ability] = shuffledModifiers[index];
            });
            
            // Randomly select 2 race bonuses
            const availableBonuses = [...raceInfo.bonuses];
            const selectedBonuses = [];
            for (let i = 0; i < 2 && availableBonuses.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availableBonuses.length);
                selectedBonuses.push(availableBonuses[randomIndex]);
                availableBonuses.splice(randomIndex, 1);
            }
            
            // Calculate race bonus values
            const randomRaceBonusValues = {
                hp: 0, stress: 0, class: 0, spell: 0, evasion: raceInfo.evasion,
                thresholdLower: 0, thresholdUpper: 0
            };
            
            selectedBonuses.forEach(bonus => {
                if (bonus.type === 'threshold') {
                    randomRaceBonusValues.thresholdLower += bonus.lowerValue;
                    randomRaceBonusValues.thresholdUpper += bonus.upperValue;
                } else {
                    randomRaceBonusValues[bonus.type] += bonus.value;
                }
            });
            
            // Randomly allocate ability score points if race has them
            const randomAbilityScoreAllocations = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            if (raceInfo.abilityScores && raceInfo.abilityScores.length > 0) {
                const positivePoints = raceInfo.abilityScores.filter(s => s.value > 0).reduce((sum, s) => sum + s.value, 0);
                const negativePoints = raceInfo.abilityScores.filter(s => s.value < 0).reduce((sum, s) => sum + Math.abs(s.value), 0);
                
                // Randomly distribute positive points
                let remainingPositive = positivePoints;
                while (remainingPositive > 0) {
                    const randomAbility = getRandomArrayElement(abilities);
                    randomAbilityScoreAllocations[randomAbility]++;
                    remainingPositive--;
                }
                
                // Randomly distribute negative points
                let remainingNegative = negativePoints;
                while (remainingNegative > 0) {
                    const randomAbility = getRandomArrayElement(abilities);
                    if (randomAbilityScoreAllocations[randomAbility] > -2) { // Don't go below -2
                        randomAbilityScoreAllocations[randomAbility]--;
                        remainingNegative--;
                    }
                }
            }
            
            // Randomly select 2 proficiencies
            const availableProficiencies = [...raceInfo.proficiencies];
            const selectedProficiencies = [];
            const randomProficiencies = { str: false, dex: false, con: false, int: false, wis: false, cha: false };
            
            for (let i = 0; i < 2 && availableProficiencies.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availableProficiencies.length);
                const proficiency = availableProficiencies[randomIndex];
                selectedProficiencies.push(proficiency);
                randomProficiencies[proficiency] = true;
                availableProficiencies.splice(randomIndex, 1);
            }
            
            // Calculate combined values (class + race bonuses)
            const hpValue = classInfo.hp + randomRaceBonusValues.hp;
            const stressValue = classInfo.stress + randomRaceBonusValues.stress;
            const classValue = classInfo.class + randomRaceBonusValues.class;
            const spellValue = classInfo.spell + randomRaceBonusValues.spell;
            const thresholdLowerValue = classInfo.thresholdLower + randomRaceBonusValues.thresholdLower;
            const thresholdUpperValue = classInfo.thresholdUpper + randomRaceBonusValues.thresholdUpper;
            const evasionValue = randomRaceBonusValues.evasion;
            
            // Create the character object
            const character = {
                id: Date.now().toString(),
                name: name,
                level: 1,
                race: race,
                class: characterClass,
                str: randomModifiers.str,
                dex: randomModifiers.dex,
                con: randomModifiers.con,
                int: randomModifiers.int,
                wis: randomModifiers.wis,
                cha: randomModifiers.cha,
                initialDex: randomModifiers.dex + (randomAbilityScoreAllocations.dex || 0),
                initialCon: randomModifiers.con + (randomAbilityScoreAllocations.con || 0),
                proficiencies: { ...randomProficiencies },
                abilityScoreAllocations: { ...randomAbilityScoreAllocations },
                initialModifiers: {
                    dex: randomModifiers.dex + (randomAbilityScoreAllocations.dex || 0),
                    con: randomModifiers.con + (randomAbilityScoreAllocations.con || 0)
                },
                hpMax: hpValue,
                stressMax: stressValue,
                classMax: classValue,
                spellMax: spellValue,
                resources: {
                    hp: { max: hpValue, used: [], temp: 0 },
                    stress: { max: stressValue, used: [], temp: 0 },
                    class: { max: classValue, used: [], temp: 0 },
                    spell: { max: spellValue, used: [], temp: 0 }
                },
                evasion: evasionValue,
                armor: 0, // Basic character starts with 0 armor
                armorSlots: { 
                    total: 0, 
                    filled: [],
                    permanent: 0,
                    temporary: 0
                },
                thresholdLower: thresholdLowerValue,
                thresholdUpper: thresholdUpperValue,
                equipment: [],
                notes: '',
                selectedRaceBonuses: [0, 1], // First two bonuses
                selectedRaceProficiencies: selectedProficiencies,
                selectedAbilityScores: [], // Filled if race has ability scores
                raceBonusValues: { ...randomRaceBonusValues },
                primaryWeapon: null,
                secondaryWeapon: null,
                armorItem: null,
                primaryWeaponBonuses: {},
                secondaryWeaponBonuses: {},
                armorBonuses: {},
                primaryWeaponAbilityBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                secondaryWeaponAbilityBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                armorAbilityBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                weaponProficiency: 1,
                coins: {
                    platinum: 0,
                    gold: 0,
                    silver: 0,
                    copper: 0
                },
                classAbilities: {
                    selectedClass: [],
                    selectedUniversal: []
                }
            };
            
            return character;
        }

        // Navigation
        document.addEventListener('DOMContentLoaded', function() {
            loadCharacters();
            updateCharacterDisplay();
                // Initialize tooltips
    initializeTooltips();
            
            // Add Save/Load event listeners with null checks
            const saveBtn = document.getElementById('saveCharactersBtn');
            const loadBtn = document.getElementById('loadCharactersBtn');
            const loadInput = document.getElementById('loadFileInput');
            
            if (saveBtn) {
                saveBtn.addEventListener('click', saveAllCharacters);
            }
            if (loadBtn) {
                loadBtn.addEventListener('click', intelligentLoad);
            }
            if (loadInput) {
                loadInput.addEventListener('change', handleIntelligentLoad);
            }
        });

        // Race bonus system functions
        function updateRaceOptions(selectedRace) {
            const race = raceData[selectedRace];
            if (!race) {
                hideRaceOptions();
                return;
            }

            // Show race sections
            document.getElementById('raceBonusSection').classList.remove('hidden');
            document.getElementById('raceProficiencySection').classList.remove('hidden');

            // Reset selections
            selectedRaceBonuses = [];
            selectedRaceProficiencies = [];
            selectedAbilityScores = [];
            resetRaceBonusValues();
            resetRaceAbilityBonuses();
            
            // Reset ability score proficiencies
            resetProficiencySystem();

            // Update bonus buttons (combining regular bonuses and ability scores)
            updateCombinedRaceBonusButtons(race.bonuses, race.abilityScores);
            updateRaceProficiencyButtons(race.proficiencies);
            
            // Auto-apply evasion value
            raceBonusValues.evasion = race.evasion;
            updateFieldsWithRaceBonuses();
            updateAbilityScoreResults();
        }

        function hideRaceOptions() {
            document.getElementById('raceBonusSection').classList.add('hidden');
            document.getElementById('raceProficiencySection').classList.add('hidden');
            document.getElementById('abilityScoreResultsSection').classList.add('hidden');
            selectedRaceBonuses = [];
            selectedRaceProficiencies = [];
            selectedAbilityScores = [];
            resetRaceBonusValues();
            resetRaceAbilityBonuses();
        }

        function resetRaceBonusValues() {
            raceBonusValues = {
                hp: 0,
                stress: 0,
                class: 0,
                spell: 0,
                evasion: 0,
                thresholdLower: 0,
                thresholdUpper: 0
            };
            updateFieldsWithRaceBonuses();
        }

        function resetRaceAbilityBonuses() {
            raceAbilityBonuses = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            abilityScoreAllocations = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            updateAbilityScoreResults();
            updateLiveAbilityScores();
        }

        // UPDATED FUNCTION: Creates single ability score button
        function updateCombinedRaceBonusButtons(bonuses, abilityScores) {
            const container = document.getElementById('raceBonusButtons');
            container.innerHTML = '';

            // Add regular bonus buttons
            bonuses.forEach((bonus, index) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'race-bonus-button';
                button.textContent = bonus.label;
                button.dataset.index = index;
                button.dataset.type = bonus.type;
                button.dataset.category = 'bonus';
                
                if (bonus.type === 'threshold') {
                    button.dataset.lowerValue = bonus.lowerValue;
                    button.dataset.upperValue = bonus.upperValue;
                } else {
                    button.dataset.value = bonus.value;
                }
                
                button.addEventListener('click', function() {
                    toggleRaceBonus(this);
                });

                container.appendChild(button);
            });

            // Add single ability score button if there are any ability scores
            if (abilityScores.length > 0) {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'race-bonus-button';
                
                // Create display text showing all available points
                const positiveValues = abilityScores.filter(s => s.value > 0).map(s => `+${s.value}`);
                const negativeValues = abilityScores.filter(s => s.value < 0).map(s => s.value);
                const allValues = [...positiveValues, ...negativeValues];
                
                button.textContent = `Ability Scores (${allValues.join(', ')})`;
                button.dataset.category = 'ability';
                button.dataset.scores = JSON.stringify(abilityScores);
                
                button.addEventListener('click', function() {
                    toggleAbilityScoreGroup(this);
                });

                container.appendChild(button);
            }
        }

        function updateRaceProficiencyButtons(proficiencies) {
            const container = document.getElementById('raceProficiencyButtons');
            container.innerHTML = '';

            proficiencies.forEach(ability => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'race-proficiency-button';
                button.textContent = ability.toUpperCase();
                button.dataset.ability = ability;
                
                button.addEventListener('click', function() {
                    toggleRaceProficiency(this);
                });

                container.appendChild(button);
            });
        }

        function toggleRaceBonus(button) {
            const index = parseInt(button.dataset.index);
            const type = button.dataset.type;

            if (button.classList.contains('selected')) {
                // Remove selection
                button.classList.remove('selected');
                selectedRaceBonuses = selectedRaceBonuses.filter(i => i !== index);
                
                // Remove bonus value
                if (type === 'threshold') {
                    const lowerValue = parseInt(button.dataset.lowerValue);
                    const upperValue = parseInt(button.dataset.upperValue);
                    raceBonusValues.thresholdLower -= lowerValue;
                    raceBonusValues.thresholdUpper -= upperValue;
                } else {
                    const value = parseInt(button.dataset.value);
                    raceBonusValues[type] -= value;
                }
            } else {
                // Check if we can add more selections (fixed logic)
                const abilityScoreSelected = selectedAbilityScores.length > 0 ? 1 : 0;
                const totalSelected = selectedRaceBonuses.length + abilityScoreSelected;
                if (totalSelected >= 2) {
                    showCustomDialog('Selection Limit', 'Can only select 2 total bonuses and ability scores.');
                    return;
                }
                
                button.classList.add('selected');
                selectedRaceBonuses.push(index);
                
                // Add bonus value
                if (type === 'threshold') {
                    const lowerValue = parseInt(button.dataset.lowerValue);
                    const upperValue = parseInt(button.dataset.upperValue);
                    raceBonusValues.thresholdLower += lowerValue;
                    raceBonusValues.thresholdUpper += upperValue;
                } else {
                    const value = parseInt(button.dataset.value);
                    raceBonusValues[type] += value;
                }
            }

            updateFieldsWithRaceBonuses();
        }

        // UPDATED FUNCTION: Handles single ability score button with fixed logic
        function toggleAbilityScoreGroup(button) {
            const scores = JSON.parse(button.dataset.scores);

            if (button.classList.contains('selected')) {
                // Remove selection - clear ability score allocations
                button.classList.remove('selected');
                selectedAbilityScores = [];
                
                // Clear the allocations
                resetRaceAbilityBonuses();
                updateAbilityScoreResults();
                updateLiveAbilityScores();
                
                // Hide results section if no ability scores selected
                document.getElementById('abilityScoreResultsSection').classList.add('hidden');
            } else {
                // Check if we can add more selections (fixed logic)
                const abilityScoreSelected = selectedAbilityScores.length > 0 ? 1 : 0;
                const totalSelected = selectedRaceBonuses.length + abilityScoreSelected;
                if (totalSelected >= 2) {
                    showCustomDialog('Selection Limit', 'Can only select 2 total bonuses and ability scores.');
                    return;
                }
                
                // Add selection - show modal for allocation
                showAbilityScoreAllocationModal(scores);
                button.classList.add('selected');
                
                // Mark as selected for all scores
                scores.forEach((score, index) => {
                    selectedAbilityScores.push({
                        originalIndex: index,
                        value: score.value,
                        group: score.value > 0 ? 'positive' : 'negative'
                    });
                });
            }
        }

        function showAbilityScoreAllocationModal(scores) {
            currentRaceAbilityScores = scores;
            
            const modal = document.getElementById('abilityScoreModal');
            const title = document.getElementById('abilityScoreModalTitle');
            
            // Prepare points counters
            let positivePoints = 0;
            let negativePoints = 0;
            
            scores.forEach(score => {
                if (score.value > 0) {
                    positivePoints += score.value;
                } else {
                    negativePoints += Math.abs(score.value);
                }
            });
            
            title.textContent = `Allocate Ability Score Points`;
            
            // Update points display
            document.getElementById('positivePointsRemaining').textContent = positivePoints;
            document.getElementById('negativePointsRemaining').textContent = negativePoints;
            
            // Show/hide sections based on available points
            const positiveSection = document.getElementById('positivePointsSection');
            const negativeSection = document.getElementById('negativePointsSection');
            const positiveMultiOptions = document.getElementById('positiveMultiOptions');
            const negativeMultiOptions = document.getElementById('negativeMultiOptions');
            
            if (positivePoints > 0) {
                positiveSection.classList.remove('hidden');
                if (positivePoints > 1) {
                    positiveMultiOptions.classList.remove('hidden');
                } else {
                    positiveMultiOptions.classList.add('hidden');
                }
            } else {
                positiveSection.classList.add('hidden');
            }
            
            if (negativePoints > 0) {
                negativeSection.classList.remove('hidden');
                if (negativePoints > 1) {
                    negativeMultiOptions.classList.remove('hidden');
                } else {
                    negativeMultiOptions.classList.add('hidden');
                }
            } else {
                negativeSection.classList.add('hidden');
            }
            
            // Reset all checkboxes
            modal.querySelectorAll('.ability-checkbox').forEach(checkbox => {
                checkbox.classList.remove('selected');
                checkbox.querySelector('input').checked = false;
            });
            
            // Store initial points for validation
            modal.dataset.initialPositivePoints = positivePoints;
            modal.dataset.initialNegativePoints = negativePoints;
            
            modal.classList.remove('hidden');
        }

        function toggleRaceProficiency(button) {
            const ability = button.dataset.ability;

            if (button.classList.contains('selected')) {
                // Remove selection
                button.classList.remove('selected');
                selectedRaceProficiencies = selectedRaceProficiencies.filter(a => a !== ability);
                
                // Update proficiency system
                proficiencies[ability] = false;
            } else {
                // Add selection
                if (selectedRaceProficiencies.length >= 2) {
                    showCustomDialog('Selection Limit', 'Can only select 2 proficiencies.');
                    return;
                }
                
                button.classList.add('selected');
                selectedRaceProficiencies.push(ability);
                
                // Update proficiency system
                proficiencies[ability] = true;
            }

            updateProficiencyCircles();
        }

        function updateFieldsWithRaceBonuses() {
            // Update resource fields with base class values + race bonuses
            const selectedClass = document.getElementById('charClass').value;
            const classValues = selectedClass && classData[selectedClass] ? classData[selectedClass] : {
                hp: 0, stress: 0, class: 0, spell: 0, thresholdLower: 0, thresholdUpper: 0
            };

            // Calculate combined values
            const hpValue = classValues.hp + raceBonusValues.hp;
            const stressValue = classValues.stress + raceBonusValues.stress;
            const classValue = classValues.class + raceBonusValues.class;
            const spellValue = classValues.spell + raceBonusValues.spell;
            const thresholdLowerValue = classValues.thresholdLower + raceBonusValues.thresholdLower;
            const thresholdUpperValue = classValues.thresholdUpper + raceBonusValues.thresholdUpper;
            const evasionValue = raceBonusValues.evasion;

            // Update form fields
            document.getElementById('hpMax').value = hpValue;
            document.getElementById('stressMax').value = stressValue;
            document.getElementById('classMax').value = classValue;
            document.getElementById('spellMax').value = spellValue;
            document.getElementById('thresholdLower').value = thresholdLowerValue;
            document.getElementById('thresholdUpper').value = thresholdUpperValue;
            document.getElementById('evasion').value = evasionValue;

            // Regenerate resource boxes
            generateResourceBoxes('hpBoxes', hpValue, 'hp');
            generateResourceBoxes('stressBoxes', stressValue, 'stress');
            generateResourceBoxes('classBoxes', classValue, 'class');
            generateResourceBoxes('spellBoxes', spellValue, 'spell');
        }

        function updateAbilityScoreResults() {
            const resultsDiv = document.getElementById('abilityScoreResults');
            const resultsSection = document.getElementById('abilityScoreResultsSection');
            
            if (selectedAbilityScores.length === 0) {
                resultsDiv.textContent = 'No ability scores selected';
                resultsDiv.classList.add('empty');
                resultsSection.classList.add('hidden');
                return;
            }
            
            resultsSection.classList.remove('hidden');
            resultsDiv.classList.remove('empty');
            
            // Create summary of selected ability scores
            const summary = [];
            ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(ability => {
                const bonus = abilityScoreAllocations[ability];
                if (bonus !== 0) {
                    summary.push(`${ability.toUpperCase()} ${bonus >= 0 ? '+' : ''}${bonus}`);
                }
            });
            
            resultsDiv.textContent = summary.length > 0 ? summary.join(', ') : 'No ability scores allocated';
        }

        function updateLiveAbilityScores() {
            // Update the live display of ability scores in the character creation form
            // This updates the modifier display to show base modifier + race bonus
            updateAbilitySelectors();
        }

        // Character management
        function showCharacterList() {
            document.querySelectorAll('.character-view').forEach(view => view.classList.remove('active'));
            document.getElementById('characterList').classList.add('active');
        }

        function showCharacterCreation() {
            document.querySelectorAll('.character-view').forEach(view => view.classList.remove('active'));
            document.getElementById('characterCreation').classList.add('active');
            resetCharacterForm();
            
            // Initialize modifier system display
            setTimeout(() => {
                updateAvailableModifiers();
                updateAbilitySelectors();
                updateProficiencyCircles();
            }, 100);
        }

        function showCharacterSheet(character) {
            currentCharacter = character;
            document.querySelectorAll('.character-view').forEach(view => view.classList.remove('active'));
            document.getElementById('characterSheet').classList.add('active');
            populateCharacterSheet(character);
        }

        function updateClassValues(selectedClass) {
            updateFieldsWithRaceBonuses();
        }

        function resetCharacterForm() {
            document.getElementById('characterForm').reset();
            document.getElementById('charLevel').value = 1;
            document.getElementById('evasion').value = 0;
            document.getElementById('armor').value = 0;
            document.getElementById('thresholdLower').value = 0;
            document.getElementById('thresholdUpper').value = 0;
            resetModifierSystem();
            resetProficiencySystem();
            hideRaceOptions();
            
            // Reset resource values to 0
            document.getElementById('hpMax').value = 0;
            document.getElementById('stressMax').value = 0;
            document.getElementById('classMax').value = 0;
            document.getElementById('spellMax').value = 0;
            
            // Initialize resource boxes
            setTimeout(() => {
                initializeResourceBoxes();
            }, 100);
        }
        
        // Proficiency system functions
        function resetProficiencySystem() {
            proficiencies = { str: false, dex: false, con: false, int: false, wis: false, cha: false };
            updateProficiencyCircles();
        }
        
        function updateProficiencyCircles() {
            document.querySelectorAll('.proficiency-circle').forEach(circle => {
                const ability = circle.dataset.ability;
                if (proficiencies[ability]) {
                    circle.classList.add('proficient');
                } else {
                    circle.classList.remove('proficient');
                }
            });
        }

        function updateWeaponProficiencyCircles() {
            document.querySelectorAll('.weapon-proficiency-circle').forEach(circle => {
                const ability = circle.dataset.ability;
                if (proficiencies[ability]) {
                    circle.classList.add('proficient');
                } else {
                    circle.classList.remove('proficient');
                }
            });
        }
        
        function toggleProficiency(ability) {
            proficiencies[ability] = !proficiencies[ability];
            updateProficiencyCircles();
        }
        
        function updateSheetProficiencyCircles(character) {
            document.querySelectorAll('.stat-proficiency').forEach(circle => {
                const ability = circle.dataset.ability;
                if (character.proficiencies && character.proficiencies[ability]) {
                    circle.classList.add('proficient');
                } else {
                    circle.classList.remove('proficient');
                }
            });
        }
        
function toggleSheetProficiency(ability) {
    if (!currentCharacter) return;
    
    if (!currentCharacter.proficiencies) {
        currentCharacter.proficiencies = { str: false, dex: false, con: false, int: false, wis: false, cha: false };
    }
    
    const currentlyProficient = currentCharacter.proficiencies[ability];
    const abilityName = ability.toUpperCase();
    const action = currentlyProficient ? 'remove' : 'add';
    const message = `Are you sure you want to ${action} proficiency in ${abilityName}? This will affect skill bonuses and other abilities.`;
    
    showProficiencyConfirmDialog(message, () => {
        currentCharacter.proficiencies[ability] = !currentCharacter.proficiencies[ability];
        updateSheetProficiencyCircles(currentCharacter);
        saveCharacters();
        
        // Move this INSIDE the callback so it runs AFTER proficiency is changed
        generateSkillsList(currentCharacter);
    });
}
        
        function showProficiencyConfirmDialog(message, onConfirm) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">
                        <i class="fas fa-exclamation-triangle mr-2"></i>Proficiency Change Warning
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-6">${message}</p>
                    <div class="flex justify-end space-x-3">
                        <button class="cancel-proficiency px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Cancel</button>
                        <button class="confirm-proficiency px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded">Confirm Change</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.confirm-proficiency').addEventListener('click', () => {
                onConfirm();
                modal.remove();
            });
            
            modal.querySelector('.cancel-proficiency').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }
        
        // Resource box management functions
        function generateResourceBoxes(containerId, maxValue, resourceType) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            for (let i = 0; i < 12; i++) {
                const box = document.createElement('div');
                box.className = `resource-box ${i < maxValue ? 'solid' : 'dotted'}`;
                box.dataset.index = i;
                box.dataset.resourceType = resourceType;
                
                // Add click handler for character sheet boxes
                if (containerId.startsWith('sheet')) {
                    box.addEventListener('click', function() {
                        handleResourceBoxClick(this);
                    });
                }
                
                container.appendChild(box);
            }
        }
        
        function handleResourceBoxClick(box) {
            const resourceType = box.dataset.resourceType;
            const index = parseInt(box.dataset.index);
            
            // If it's a dotted box (beyond max), show temp points modal
            if (box.classList.contains('dotted')) {
                showTempPointsModal(resourceType);
                return;
            }
            
            // If it's a solid box, toggle it with ordering
            toggleResourceBoxOrdered(box);
        }
        
        function toggleResourceBoxOrdered(clickedBox) {
            const resourceType = clickedBox.dataset.resourceType;
            const clickedIndex = parseInt(clickedBox.dataset.index);
            const container = clickedBox.parentElement;
            const allBoxes = Array.from(container.querySelectorAll('.resource-box.solid, .resource-box.temp'));
            
            // Determine if we're marking used or unused
            const isMarkingUsed = !clickedBox.classList.contains('used');
            
            if (isMarkingUsed) {
                // Mark boxes from left to clicked index as used
                for (let i = 0; i <= clickedIndex; i++) {
                    const box = allBoxes.find(b => parseInt(b.dataset.index) === i);
                    if (box && (box.classList.contains('solid') || box.classList.contains('temp'))) {
                        box.classList.add('used');
                    }
                }
            } else {
                // Unmark boxes from clicked index to the right
                for (let i = clickedIndex; i < allBoxes.length; i++) {
                    const box = allBoxes.find(b => parseInt(b.dataset.index) === i);
                    if (box && (box.classList.contains('solid') || box.classList.contains('temp'))) {
                        box.classList.remove('used');
                    }
                }
            }
            
            // Save the state to character data
            if (currentCharacter) {
                if (!currentCharacter.resources) {
                    currentCharacter.resources = {
                        hp: { max: 0, used: [], temp: 0 },
                        stress: { max: 0, used: [], temp: 0 },
                        class: { max: 0, used: [], temp: 0 },
                        spell: { max: 0, used: [], temp: 0 }
                    };
                }
                
                // Update used array with all currently used boxes
                const usedBoxes = Array.from(container.querySelectorAll('.resource-box.used')).map(box => parseInt(box.dataset.index));
                currentCharacter.resources[resourceType].used = usedBoxes;
                
                saveCharacters();
                
                // Update character cards to reflect the current HP status
                updateCharacterDisplay();
            }
        }
        
        function showTempPointsModal(resourceType) {
            if (!currentCharacter) return;
            
            const modal = document.getElementById('tempPointsModal');
            const title = document.getElementById('tempPointsTitle');
            const input = document.getElementById('tempPointsAmount');
            
            const resourceName = resourceType.charAt(0).toUpperCase() + resourceType.slice(1);
            title.textContent = `Manage Temp ${resourceName}`;
            input.value = '';
            input.focus();
            
            // Get current resource data
            const resource = currentCharacter.resources?.[resourceType] || { max: 0, temp: 0 };
            const currentTotal = resource.max + (resource.temp || 0);
            const permanent = resource.max;
            const temporary = resource.temp || 0;
            
            // Update modal display
            document.getElementById('currentResourcePoints').textContent = currentTotal;
            document.getElementById('permanentResourcePoints').textContent = permanent;
            document.getElementById('temporaryResourcePoints').textContent = temporary;
            
            modal.classList.remove('hidden');
            
            // Store the resource type for the confirm handler
            modal.dataset.resourceType = resourceType;
        }
        
        function addTempPoints(resourceType, amount) {
            if (!currentCharacter || !amount || amount < 1) return;
            
            if (!currentCharacter.resources) {
                currentCharacter.resources = {
                    hp: { max: 0, used: [], temp: 0 },
                    stress: { max: 0, used: [], temp: 0 },
                    class: { max: 0, used: [], temp: 0 },
                    spell: { max: 0, used: [], temp: 0 }
                };
            }
            
            // Add temp points
            currentCharacter.resources[resourceType].temp = (currentCharacter.resources[resourceType].temp || 0) + amount;
            
            // Refresh the resource boxes display
            populateSheetResourceBoxes(currentCharacter);
            
            saveCharacters();
        }

        function removeTempPoints(resourceType) {
            if (!currentCharacter) return;
            
            if (!currentCharacter.resources) {
                return;
            }
            
            // Remove all temp points for this resource
            if (currentCharacter.resources[resourceType]) {
                const resource = currentCharacter.resources[resourceType];
                const maxBoxes = resource.max;
                
                // Remove temp points
                resource.temp = 0;
                
                // Clean up the used array - remove any indices that are now beyond the max range
                if (resource.used) {
                    resource.used = resource.used.filter(index => index < maxBoxes);
                }
                
                // Refresh the resource boxes display
                populateSheetResourceBoxes(currentCharacter);
                
                saveCharacters();
            }
        }

        function removeTempResourcePoints(resourceType, amount) {
            if (!currentCharacter || !amount || amount < 1) return;
            
            if (!currentCharacter.resources) {
                return;
            }
            
            if (currentCharacter.resources[resourceType]) {
                const resource = currentCharacter.resources[resourceType];
                
                // Only remove from temp points, never from permanent max
                const currentTemp = resource.temp || 0;
                const removeAmount = Math.min(amount, currentTemp);
                
                if (removeAmount > 0) {
                    resource.temp = Math.max(0, currentTemp - removeAmount);
                    
                    // Remove filled states for boxes that are now beyond the total
                    const newTotal = resource.max + resource.temp;
                    if (resource.used) {
                        resource.used = resource.used.filter(index => index < newTotal);
                    }
                    
                    // Refresh the resource boxes display
                    populateSheetResourceBoxes(currentCharacter);
                    
                    saveCharacters();
                } else {
                    showCustomDialog('No Temporary Points', 'There are no temporary points to remove for this resource.');
                }
            }
        }
        
        function initializeResourceBoxes() {
            // Initialize creation form boxes
            generateResourceBoxes('hpBoxes', 0, 'hp');
            generateResourceBoxes('stressBoxes', 0, 'stress');
            generateResourceBoxes('classBoxes', 0, 'class');
            generateResourceBoxes('spellBoxes', 0, 'spell');
            
            // Add event listeners to max value inputs
            document.getElementById('hpMax').addEventListener('input', function() {
                generateResourceBoxes('hpBoxes', parseInt(this.value) || 0, 'hp');
            });
            
            document.getElementById('stressMax').addEventListener('input', function() {
                generateResourceBoxes('stressBoxes', parseInt(this.value) || 0, 'stress');
            });
            
            document.getElementById('classMax').addEventListener('input', function() {
                generateResourceBoxes('classBoxes', parseInt(this.value) || 0, 'class');
            });
            
            document.getElementById('spellMax').addEventListener('input', function() {
                generateResourceBoxes('spellBoxes', parseInt(this.value) || 0, 'spell');
            });
        }
        
        function populateSheetResourceBoxes(character) {
            const resources = character.resources || {
                hp: { max: character.hpMax || 0, used: [], temp: 0 },
                stress: { max: character.stressMax || 0, used: [], temp: 0 },
                class: { max: character.classMax || 0, used: [], temp: 0 },
                spell: { max: character.spellMax || 0, used: [], temp: 0 }
            };
            
            // Helper function to create resource boxes
            function createResourceBoxes(containerId, resourceType) {
                const container = document.getElementById(containerId);
                const resource = resources[resourceType];
                const totalBoxes = resource.max + (resource.temp || 0);
                
                container.innerHTML = '';
                
                for (let i = 0; i < 12; i++) {
                    const box = document.createElement('div');
                    
                    if (i < resource.max) {
                        // Regular boxes
                        box.className = 'resource-box solid';
                    } else if (i < totalBoxes) {
                        // Temp boxes
                        box.className = 'resource-box temp';
                    } else {
                        // Dotted boxes (beyond max + temp)
                        box.className = 'resource-box dotted';
                    }
                    
                    // Mark as used if in the used array
                    if (resource.used && resource.used.includes(i)) {
                        box.classList.add('used');
                    }
                    
                    box.dataset.index = i;
                    box.dataset.resourceType = resourceType;
                    box.addEventListener('click', function() {
                        handleResourceBoxClick(this);
                    });
                    
                    container.appendChild(box);
                }
            }
            
            // Create all resource types
            createResourceBoxes('sheetHpBoxes', 'hp');
            createResourceBoxes('sheetStressBoxes', 'stress');
            createResourceBoxes('sheetClassBoxes', 'class');
            createResourceBoxes('sheetSpellBoxes', 'spell');
        }
        
        // Modifier selection system functions
        function resetModifierSystem() {
            selectedModifiers = { str: null, dex: null, con: null, int: null, wis: null, cha: null };
            usedModifiers = [];
            updateAvailableModifiers();
            updateAbilitySelectors();
        }
        
        function updateAvailableModifiers() {
            const container = document.getElementById('availableModifiers');
            const remaining = availableModifiers.filter((mod, index) => !usedModifiers.includes(index));
            
            if (remaining.length === 0) {
                container.innerHTML = '<span class="text-sm text-gray-500 dark:text-gray-400">All modifiers assigned</span>';
                return;
            }
            
            container.innerHTML = remaining.map(mod => 
                `<span class="px-2 py-1 bg-primary text-white rounded text-sm">${mod >= 0 ? '+' : ''}${mod}</span>`
            ).join('');
        }
        
        function updateAbilitySelectors() {
            document.querySelectorAll('.ability-selector').forEach(selector => {
                const ability = selector.dataset.ability;
                const display = selector.querySelector('.modifier-display');
                
                let totalModifier = selectedModifiers[ability];
                
                // Add race bonuses if they exist
                if (abilityScoreAllocations[ability] !== 0) {
                    if (totalModifier !== null) {
                        totalModifier += abilityScoreAllocations[ability];
                    }
                }
                
                if (selectedModifiers[ability] !== null) {
                    display.textContent = totalModifier >= 0 ? `+${totalModifier}` : totalModifier;
                    selector.classList.add('bg-primary', 'text-white');
                    selector.classList.remove('bg-white', 'dark:bg-gray-700');
                } else {
                    // Show race bonus only if no base modifier selected
                    if (abilityScoreAllocations[ability] !== 0) {
                        display.textContent = abilityScoreAllocations[ability] >= 0 ? `+${abilityScoreAllocations[ability]}` : abilityScoreAllocations[ability];
                        selector.classList.add('bg-green-500', 'text-white');
                        selector.classList.remove('bg-white', 'dark:bg-gray-700', 'bg-primary');
                    } else {
                        display.textContent = '--';
                        selector.classList.remove('bg-primary', 'text-white', 'bg-green-500');
                        selector.classList.add('bg-white', 'dark:bg-gray-700');
                    }
                }
            });
        }
        
        function showModifierSelection(ability) {
            const remaining = availableModifiers.filter((mod, index) => !usedModifiers.includes(index));
            
            if (remaining.length === 0) {
                showCustomDialog('No modifiers available', 'All modifiers have been assigned.');
                return;
            }
            
            // Create selection modal
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4">Select Modifier for ${ability.toUpperCase()}</h3>
                    <div class="grid grid-cols-2 gap-2 mb-4">
                        ${remaining.map((mod, index) => `
                            <button class="modifier-option px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-primary hover:text-white transition-colors" data-modifier="${mod}" data-original-index="${availableModifiers.findIndex((m, i) => m === mod && !usedModifiers.includes(i))}">
                                ${mod >= 0 ? '+' : ''}${mod}
                            </button>
                        `).join('')}
                    </div>
                    <div class="flex justify-end space-x-3">
                        <button class="cancel-modifier px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Cancel</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Add event listeners
            modal.querySelectorAll('.modifier-option').forEach(btn => {
                btn.addEventListener('click', function() {
                    const modifier = parseInt(this.dataset.modifier);
                    const originalIndex = parseInt(this.dataset.originalIndex);
                    
                    // If this ability already has a modifier, free it up
                    if (selectedModifiers[ability] !== null) {
                        const oldIndex = availableModifiers.findIndex((mod, i) => 
                            mod === selectedModifiers[ability] && usedModifiers.includes(i)
                        );
                        if (oldIndex !== -1) {
                            usedModifiers = usedModifiers.filter(i => i !== oldIndex);
                        }
                    }
                    
                    // Assign new modifier
                    selectedModifiers[ability] = modifier;
                    usedModifiers.push(originalIndex);
                    
                    updateAvailableModifiers();
                    updateAbilitySelectors();
                    
                    modal.remove();
                });
            });
            
            modal.querySelector('.cancel-modifier').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }
        
        function showCustomDialog(title, message) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4">${title}</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-4">${message}</p>
                    <div class="flex justify-end">
                        <button class="px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded">OK</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('button').addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

        function createCharacterCard(character) {
            const resources = character.resources || {
                hp: { max: character.hpMax || 0, used: [], temp: 0 },
                stress: { max: character.stressMax || 0, used: [], temp: 0 },
                class: { max: character.classMax || 0, used: [], temp: 0 },
                spell: { max: character.spellMax || 0, used: [], temp: 0 }
            };
            
            const hpUsed = resources.hp.used.length;
            const hpMax = resources.hp.max + (resources.hp.temp || 0);
            const hpCurrent = hpMax - hpUsed;
            
            return `
                <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer character-card" data-id="${character.id}">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold text-lg">${character.name}</h3>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Lv.${character.level}</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 mb-2">${character.race} ${character.class}</p>
                    <div class="flex justify-between text-sm">
                        <span>HP: ${hpCurrent}/${hpMax}</span>
                        <span>Evasion: ${character.evasion || 0}</span>
                    </div>
                    <div class="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-red-500 h-2 rounded-full transition-all duration-300" style="width: ${hpMax > 0 ? (hpCurrent / hpMax) * 100 : 0}%"></div>
                    </div>
                </div>
            `;
        }

        function updateCharacterDisplay() {
            const container = document.getElementById('characterCards');
            const noCharacters = document.getElementById('noCharacters');
            
            if (characters.length === 0) {
                container.innerHTML = '';
                noCharacters.style.display = 'block';
            } else {
                noCharacters.style.display = 'none';
                container.innerHTML = characters.map(createCharacterCard).join('');
                
                // Add click handlers
                document.querySelectorAll('.character-card').forEach(card => {
                    card.addEventListener('click', function() {
                        const characterId = this.dataset.id;
                        const character = characters.find(c => c.id === characterId);
                        if (character) {
                            showCharacterSheet(character);
                        }
                    });
                });
            }
        }

        function populateCharacterSheet(character) {
            document.getElementById('sheetCharName').textContent = character.name;
            document.getElementById('sheetCharInfo').textContent = `Level ${character.level} ${character.race} ${character.class}`;
            
            // Resources
            populateSheetResourceBoxes(character);
            
            // Threshold with Unarmored Defense bonuses if applicable
            const thresholdLowerBase = character.thresholdLower || 0;
            const thresholdUpperBase = character.thresholdUpper || 0;
            
            let thresholdLowerDisplay = thresholdLowerBase;
            let thresholdUpperDisplay = thresholdUpperBase;
            
            // Apply Unarmored Defense threshold bonuses if active (allow ceremonial Unarmored Defense armor)
            if (character.unarmoredDefenseActive && (!character.armorItem || character.armorItem.isUnarmoredDefense)) {
                if (character.class === 'Monk') {
                    const currentDex = getCurrentDexModifier(character);
                    thresholdLowerDisplay += currentDex;
                    thresholdUpperDisplay += currentDex;
                } else if (character.class === 'Barbarian') {
                    const currentDex = getCurrentDexModifier(character);
                    const currentCon = getCurrentConModifier(character);
                    thresholdLowerDisplay += currentDex;
                    thresholdUpperDisplay += currentDex + currentCon;
                }
                
                // Add level-up bonuses for Barbarians and Monks
                if (character.unarmoredDefenseThresholdBonuses) {
                    thresholdLowerDisplay += character.unarmoredDefenseThresholdBonuses.lower || 0;
                    thresholdUpperDisplay += character.unarmoredDefenseThresholdBonuses.upper || 0;
                }
   
            }
            
            document.getElementById('thresholdLowerDisplay').textContent = thresholdLowerDisplay;
            document.getElementById('thresholdUpperDisplay').textContent = thresholdUpperDisplay;
            
            // Threshold temp boxes
            updateThresholdTempBoxes(character);
            
            // Stats (include race bonuses, weapon bonuses, armor bonuses, and Wild Beast bonuses)
            const raceAbilityBonuses = character.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const primaryWeaponAbilityBonuses = character.primaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const secondaryWeaponAbilityBonuses = character.secondaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const armorAbilityBonuses = character.armorAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const wildBeastAbilityBonuses = character.wildBeastAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            
            const displayStr = (character.str || 0) + raceAbilityBonuses.str + primaryWeaponAbilityBonuses.str + secondaryWeaponAbilityBonuses.str + armorAbilityBonuses.str + wildBeastAbilityBonuses.str;
            const displayDex = (character.dex || 0) + raceAbilityBonuses.dex + primaryWeaponAbilityBonuses.dex + secondaryWeaponAbilityBonuses.dex + armorAbilityBonuses.dex + wildBeastAbilityBonuses.dex;
            const displayCon = (character.con || 0) + raceAbilityBonuses.con + primaryWeaponAbilityBonuses.con + secondaryWeaponAbilityBonuses.con + armorAbilityBonuses.con + wildBeastAbilityBonuses.con;
            const displayInt = (character.int || 0) + raceAbilityBonuses.int + primaryWeaponAbilityBonuses.int + secondaryWeaponAbilityBonuses.int + armorAbilityBonuses.int + wildBeastAbilityBonuses.int;
            const displayWis = (character.wis || 0) + raceAbilityBonuses.wis + primaryWeaponAbilityBonuses.wis + secondaryWeaponAbilityBonuses.wis + armorAbilityBonuses.wis + wildBeastAbilityBonuses.wis;
            const displayCha = (character.cha || 0) + raceAbilityBonuses.cha + primaryWeaponAbilityBonuses.cha + secondaryWeaponAbilityBonuses.cha + armorAbilityBonuses.cha + wildBeastAbilityBonuses.cha;
            
            document.getElementById('displayStr').textContent = displayStr >= 0 ? `+${displayStr}` : displayStr;
            document.getElementById('displayDex').textContent = displayDex >= 0 ? `+${displayDex}` : displayDex;
            document.getElementById('displayCon').textContent = displayCon >= 0 ? `+${displayCon}` : displayCon;
            document.getElementById('displayInt').textContent = displayInt >= 0 ? `+${displayInt}` : displayInt;
            document.getElementById('displayWis').textContent = displayWis >= 0 ? `+${displayWis}` : displayWis;
            document.getElementById('displayCha').textContent = displayCha >= 0 ? `+${displayCha}` : displayCha;

            // Store ability scores for dice rolling and setup click events
character.currentAbilityScores = {
    str: displayStr,
    dex: displayDex,
    con: displayCon,
    int: displayInt,
    wis: displayWis,
    cha: displayCha
};

// Setup ability score dice rolling
setupAbilityScoreDiceRolling(character);
            
            // Proficiencies
            updateSheetProficiencyCircles(character);
            
            // Combat stats
            document.getElementById('displayEvasion').textContent = character.evasion || 0;
            document.getElementById('displayArmor').textContent = character.armor || 0;
            
            // Initialize armor slots if not present
            if (!character.armorSlots) {
                character.armorSlots = { 
                    total: character.armor || 0, 
                    filled: [],
                    permanent: character.armor || 0,
                    temporary: 0
                };
            }
            
            // Generate armor circles
            generateArmorCircles(character);
            
            // Skills (include race, weapon, and armor bonuses)
            generateSkillsList(character);
            
            // Weapon and armor display
            updateWeaponDisplay();
            
            // Update weapon proficiency circles based on character data
            if (character.weaponProficiency) {
                updateWeaponProficiencyDisplay(character.weaponProficiency);
            }
            
            // Update Unarmored Defense display
            updateUnarmoredDefenseDisplay();
            
            // Update Mage Armor display
            updateMageArmorDisplay();
            
            // Update Wild Beast display
            updateWildBeastDisplay();
            
            // Update Jack of all Trades display
            updateJackOfAllTradesDisplay();
            
            // Update level up button state
            updateLevelUpButtonState(character);
            
            // Update Familiar display
            updateFamiliarDisplay(character);
            
            // Update Companion display
            updateCompanionDisplay(character);
            
            // Equipment
            updateEquipmentDisplay(character);

            // Update Coins
            updateAllCoinDisplays();

            // Update DC Save display - ADD THIS LINE
            updateDCSaveDisplay(character);

            // Update DC Save display
            updateDCSaveDisplay(character);

            // ADD THIS LINE: Update Spell Casting display
            updateSpellCastingDisplay(character);
            
            // Notes
            document.getElementById('characterNotes').value = character.notes || '';
        }

        function generateSkillsList(character) {
            const skillsList = document.getElementById('skillsList');
            skillsList.innerHTML = '';
            
            const raceAbilityBonuses = character.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const primaryWeaponAbilityBonuses = character.primaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const secondaryWeaponAbilityBonuses = character.secondaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const armorAbilityBonuses = character.armorAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const wildBeastAbilityBonuses = character.wildBeastAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            
            // Calculate Jack of all Trades bonus if active
            let jackOfAllTradesBonus = 0;
            if (character.class === 'Bard' && character.jackOfAllTradesActive) {
                const level = character.level || 1;
                if (level >= 1 && level <= 4) {
                    jackOfAllTradesBonus = 1;
                } else if (level >= 5 && level <= 7) {
                    jackOfAllTradesBonus = 2;
                } else if (level >= 8 && level <= 10) {
                    jackOfAllTradesBonus = 3;
                }
                
                // Debug logging to verify Jack of all Trades is working
                console.log(`Jack of all Trades active for ${character.name} (Level ${level}): +${jackOfAllTradesBonus} bonus`);
            }
            
            defaultSkills.forEach(skill => {
                const baseModifier = character[skill.ability] || 0;
                const raceBonus = raceAbilityBonuses[skill.ability] || 0;
                const primaryWeaponBonus = primaryWeaponAbilityBonuses[skill.ability] || 0;
                const secondaryWeaponBonus = secondaryWeaponAbilityBonuses[skill.ability] || 0;
                const armorBonus = armorAbilityBonuses[skill.ability] || 0;
                const wildBeastBonus = wildBeastAbilityBonuses[skill.ability] || 0;
                
               /* 
                // Add proficiency bonus if character is proficient in this skill's ability
                let proficiencyBonus = 0;
                if (character.proficiencies && character.proficiencies[skill.ability]) {
                    // Add the ability modifier again if proficient
                    const totalAbilityModifier = baseModifier + raceBonus + primaryWeaponBonus + secondaryWeaponBonus + armorBonus + wildBeastBonus;
                    proficiencyBonus = totalAbilityModifier;
                }*/
                // Add proficiency bonus if character is proficient in this skill's ability
                let proficiencyBonus = 0;
                if (character.proficiencies && character.proficiencies[skill.ability]) {
                    const level = character.level || 1;
                    if (level >= 10) {
                        proficiencyBonus = 2;
                    } else if (level >= 5) {
                        proficiencyBonus = 1;
                    }
                }

                const totalModifier = baseModifier + raceBonus + primaryWeaponBonus + secondaryWeaponBonus + armorBonus + wildBeastBonus + proficiencyBonus + jackOfAllTradesBonus;
                /*const totalModifier = baseModifier + raceBonus + primaryWeaponBonus + secondaryWeaponBonus + armorBonus + wildBeastBonus + jackOfAllTradesBonus;*/
                
                const skillDiv = document.createElement('div');
                skillDiv.className = 'flex justify-between items-center p-2 bg-white dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer skill-roll-btn';
                skillDiv.dataset.skillName = skill.name;
                skillDiv.dataset.skillModifier = totalModifier;
                
                // Add visual indicator for Jack of all Trades bonus
                let skillDisplayName = skill.name;
                if (jackOfAllTradesBonus > 0) {
                    skillDisplayName += ` <span class="text-xs text-orange-500 dark:text-orange-400">(+${jackOfAllTradesBonus} JoAT)</span>`;
                }
                
                skillDiv.innerHTML = `
                    <span>${skillDisplayName.replace(/\(([A-Z]{3})\)/g, '<span class="text-xs text-gray-500 dark:text-gray-400">($1)</span>')}</span>
                    <span class="font-semibold">${totalModifier >= 0 ? '+' : ''}${totalModifier}</span>
                `;
                
                // Add click event listener for dice rolling
                skillDiv.addEventListener('click', function() {
                    rollSkillCheck(skill.name, totalModifier);
                });
                
                skillsList.appendChild(skillDiv);
            });
        }

        function updateHealthBar(current, max) {
            const healthBar = document.getElementById('healthBar');
            const percentage = (current / max) * 100;
            healthBar.style.width = percentage + '%';
            
            // Change color based on health percentage
            if (percentage > 50) {
                healthBar.className = 'bg-green-500 h-3 rounded-full transition-all duration-300';
            } else if (percentage > 25) {
                healthBar.className = 'bg-yellow-500 h-3 rounded-full transition-all duration-300';
            } else {
                healthBar.className = 'bg-red-500 h-3 rounded-full transition-all duration-300';
            }
        }

        function updateEquipmentDisplay(character) {
            const equipmentList = document.getElementById('equipmentList');
            equipmentList.innerHTML = '';
            
            // Generate health potion circles
            generateHealthPotionCircles(character);
            
            if (!character.equipment || character.equipment.length === 0) {
                equipmentList.innerHTML = '<div class="text-gray-500 dark:text-gray-400 text-sm text-center py-4">No equipment</div>';
                return;
            }
            
            character.equipment.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'flex justify-between items-center p-2 bg-white dark:bg-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors';
                itemDiv.innerHTML = `
                    <button class="equipment-item-btn flex-1 text-left font-medium dark:text-white text-black hover:text-white cursor-pointer" data-index="${index}">
                        ${item.name}
                    </button>
                    <div class="flex items-center space-x-2">
                        <span class="text-sm dark:text-white text-black">x${item.quantity}</span>
                        <button class="text-red-500 hover:text-red-600 text-sm remove-equipment-btn" data-index="${index}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                equipmentList.appendChild(itemDiv);
            });
            
            // Add event listeners for equipment item buttons
            equipmentList.querySelectorAll('.equipment-item-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    showEquipmentQuantityModal(index);
                });
            });
            
            // Add event listeners for remove buttons
            equipmentList.querySelectorAll('.remove-equipment-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const index = parseInt(this.dataset.index);
                    removeEquipment(index);
                });
            });
        }

        function showEquipmentQuantityModal(itemIndex) {
            if (!currentCharacter || !currentCharacter.equipment || !currentCharacter.equipment[itemIndex]) return;
            
            const item = currentCharacter.equipment[itemIndex];
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4">Adjust Quantity</h3>
                    <div class="mb-4">
                        <div class="text-gray-600 dark:text-gray-400 mb-2">${item.name}</div>
                        <div class="text-sm text-gray-500 mb-3">Current quantity: ${item.quantity}</div>
                        <input type="number" id="newQuantity" class="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent" value="${item.quantity}" min="1" max="99">
                    </div>
                    <div class="flex justify-end space-x-3">
                        <button class="cancel-quantity px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Cancel</button>
                        <button class="confirm-quantity px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded">Update</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            const input = modal.querySelector('#newQuantity');
            input.focus();
            input.select();
            
            modal.querySelector('.confirm-quantity').addEventListener('click', () => {
                const newQuantity = parseInt(input.value);
                if (newQuantity && newQuantity > 0) {
                    currentCharacter.equipment[itemIndex].quantity = newQuantity;
                    updateEquipmentDisplay(currentCharacter);
                    saveCharacters();
                }
                modal.remove();
            });
            
            modal.querySelector('.cancel-quantity').addEventListener('click', () => {
                modal.remove();
            });
            
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const newQuantity = parseInt(input.value);
                    if (newQuantity && newQuantity > 0) {
                        currentCharacter.equipment[itemIndex].quantity = newQuantity;
                        updateEquipmentDisplay(currentCharacter);
                        saveCharacters();
                    }
                    modal.remove();
                }
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

        function saveCharacters() {
            // Save to localStorage for automatic persistence
            try {
                const dataToStore = {
                    version: "1.0",
                    saveDate: new Date().toISOString(),
                    characters: characters
                };
                localStorage.setItem('rpg-character-manager-data', JSON.stringify(dataToStore));
                console.log('Characters saved to localStorage:', characters.length, 'characters');
            } catch (error) {
                console.error('Error saving to localStorage:', error);
                // Could show a user notification here if desired
            }
        }

        function loadCharacters() {
            // Load from localStorage if available
            try {
                const storedData = localStorage.getItem('rpg-character-manager-data');
                if (storedData) {
                    const data = JSON.parse(storedData);
                    if (data.characters && Array.isArray(data.characters)) {
                        characters = data.characters;
                        console.log('Characters loaded from localStorage:', characters.length, 'characters');
                        return;
                    }
                }
            } catch (error) {
                console.error('Error loading from localStorage:', error);
                // Fall back to empty array if there's an issue
            }
            
            // If no valid data in localStorage, start with empty array
            characters = [];
            console.log('Started with empty character list');
        }

        function removeEquipment(index) {
            if (currentCharacter && currentCharacter.equipment) {
                currentCharacter.equipment.splice(index, 1);
                updateEquipmentDisplay(currentCharacter);
                saveCharacters();
            }
        }

        function showHealthPrompt(title, callback) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4">${title}</h3>
                    <input type="number" id="healthAmount" class="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Amount" min="1">
                    <div class="flex justify-end space-x-3 mt-4">
                        <button class="cancel-health px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Cancel</button>
                        <button class="confirm-health px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded">Confirm</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            const input = modal.querySelector('#healthAmount');
            input.focus();
            
            modal.querySelector('.confirm-health').addEventListener('click', () => {
                const amount = parseInt(input.value);
                if (amount && !isNaN(amount)) {
                    callback(amount);
                }
                modal.remove();
            });
            
            modal.querySelector('.cancel-health').addEventListener('click', () => {
                modal.remove();
            });
            
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const amount = parseInt(input.value);
                    if (amount && !isNaN(amount)) {
                        callback(amount);
                    }
                    modal.remove();
                }
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

// Feature text formatting function
function formatFeatureText(featureText) {
    if (!featureText || featureText === 'Nothing') return '';
    
    // Split the text on patterns like "- FeatureName:" and create formatted HTML
    let formatted = featureText;
    
    // Replace patterns like "- FeatureName:" with proper formatting
    formatted = formatted.replace(/- ([^:]+):/g, '<br><strong class="text-blue-600 dark:text-blue-400">• $1:</strong>');
    
    // Clean up any leading <br> tags
    formatted = formatted.replace(/^<br>/, '');
    
    // If no special patterns were found, just return the original text
    if (formatted === featureText) {
        return featureText;
    }
    
    return formatted;
}

        // Event listeners with null checks
        const makeRandomBtn = document.getElementById('makeRandomBtn');
        if (makeRandomBtn) {
            makeRandomBtn.addEventListener('click', function() {
                const randomCharacter = createRandomCharacter();
                characters.push(randomCharacter);
                saveCharacters();
                updateCharacterDisplay();
                showCharacterSheet(randomCharacter);
            });
        }
        
        const newCharacterBtn = document.getElementById('newCharacterBtn');
        if (newCharacterBtn) {
            newCharacterBtn.addEventListener('click', showCharacterCreation);
        }
        
        const backToList = document.getElementById('backToList');
        if (backToList) {
            backToList.addEventListener('click', showCharacterList);
        }
        
        const backToListFromSheet = document.getElementById('backToListFromSheet');
        if (backToListFromSheet) {
            backToListFromSheet.addEventListener('click', showCharacterList);
        }
        
        const cancelCreate = document.getElementById('cancelCreate');
        if (cancelCreate) {
            cancelCreate.addEventListener('click', showCharacterList);
        }

        const backToSheetFromEdit = document.getElementById('backToSheetFromEdit');
        if (backToSheetFromEdit) {
            backToSheetFromEdit.addEventListener('click', function() {
                showCharacterSheet(currentCharacter);
            });
        }
        
        const cancelEdit = document.getElementById('cancelEdit');
        if (cancelEdit) {
            cancelEdit.addEventListener('click', function() {
                showCharacterSheet(currentCharacter);
            });
        }

        // Threshold damage button event listeners
        document.addEventListener('click', function(e) {
            if (e.target.closest('.threshold-damage-button')) {
                const button = e.target.closest('.threshold-damage-button');
                const damage = parseInt(button.dataset.damage);
                applyDamage(damage);
            }
        });

        // Rest event listeners
        document.getElementById('restCharacter').addEventListener('click', showRestModal);
        document.getElementById('cancelRest').addEventListener('click', function() {
            document.getElementById('restModal').classList.add('hidden');
        });
        document.getElementById('shortRestBtn').addEventListener('click', executeShortRest);
        document.getElementById('longRestBtn').addEventListener('click', executeLongRest);

        // Rest resource selection handling
        document.addEventListener('change', function(e) {
            if (e.target.matches('#restModal input[type="checkbox"]')) {
                handleRestResourceSelection(e.target);
            }
        });

        // Level Up event listeners
        document.getElementById('levelUpCharacter').addEventListener('click', function() {
            // Check if the button is disabled before showing modal
            if (!this.disabled) {
                showLevelUpModal();
            }
        });
        document.getElementById('cancelLevelUp').addEventListener('click', function() {
            document.getElementById('levelUpModal').classList.add('hidden');
        });
        document.getElementById('confirmLevelUp').addEventListener('click', applyLevelUp);

        // Level Up option click handling
        document.addEventListener('click', function(e) {
            if (e.target.closest('.level-up-option')) {
                const option = e.target.closest('.level-up-option');
                handleLevelUpOptionClick(option);
            }
        });

        // Race selection event listener
        document.getElementById('charRace').addEventListener('change', function() {
            updateRaceOptions(this.value);
        });

        // Class selection event listener
        document.getElementById('charClass').addEventListener('change', function() {
            updateClassValues(this.value);
        });

        // Character Actions toggle functionality
        document.addEventListener('click', function(e) {
            if (e.target.id === 'characterActionsToggle' || e.target.closest('#characterActionsToggle')) {
                toggleCharacterActionsSection();
            }
            // Familiar toggle functionality
            if (e.target.id === 'familiarToggle' || e.target.closest('#familiarToggle')) {
                toggleFamiliarSection();
            }
            // Handle familiar resource box clicks
            if (e.target.dataset.familiarResource) {
                handleFamiliarResourceClick(e.target);
            }
            // Companion toggle functionality
            if (e.target.id === 'companionToggle' || e.target.closest('#companionToggle')) {
                toggleCompanionSection();
            }
            // Handle companion resource box clicks
            if (e.target.dataset.companionResource) {
                handleCompanionResourceClick(e.target);
            }
            // ADD THIS: Spell Casting toggle functionality
            if (e.target.id === 'spellCastingToggle' || e.target.closest('#spellCastingToggle')) {
                toggleSpellCastingSection();
    }
        });

            // Spell Selection Event Listeners
            document.getElementById('addSpellsBtn').addEventListener('click', openSpellSelectionModal);
            document.getElementById('closeSpellModal').addEventListener('click', closeSpellSelectionModal);

            // Spell search functionality
            document.getElementById('spellSearchInput').addEventListener('input', function() {
                if (currentCharacter) {
                    populateSpellsList(currentCharacter.class, this.value);
                }
            });

            // Close modal when clicking outside
            document.getElementById('spellSelectionModal').addEventListener('click', function(e) {
                if (e.target.id === 'spellSelectionModal') {
                    closeSpellSelectionModal();
                }
            });

        function toggleCharacterActionsSection() {
            const content = document.getElementById('characterActionsContent');
            const toggleButton = document.getElementById('characterActionsToggle');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleButton.innerHTML = '<i class="fas fa-minus text-xs"></i>';
            } else {
                content.style.display = 'none';
                toggleButton.innerHTML = '<i class="fas fa-plus text-xs"></i>';
            }
        }

        function toggleFamiliarSection() {
            const content = document.getElementById('familiarContent');
            const toggleButton = document.getElementById('familiarToggle');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleButton.innerHTML = '<i class="fas fa-minus text-xs"></i>';
            } else {
                content.style.display = 'none';
                toggleButton.innerHTML = '<i class="fas fa-plus text-xs"></i>';
            }
        }

        function handleFamiliarResourceClick(box) {
            if (!currentCharacter || !currentCharacter.familiar) return;
            
            const resourceType = box.dataset.familiarResource;
            
            if (resourceType === 'hp') {
                // Toggle HP (only 1 box)
                currentCharacter.familiar.hpUsed = !currentCharacter.familiar.hpUsed;
                updateFamiliarDisplay(currentCharacter);
            } else if (resourceType === 'stress') {
                // Toggle stress boxes (2 boxes) with ordering
                if (!currentCharacter.familiar.stressUsed) {
                    currentCharacter.familiar.stressUsed = 0;
                }
                
                const boxId = box.id;
                if (boxId === 'familiarStressBox1') {
                    // If clicking first box
                    if (currentCharacter.familiar.stressUsed === 0) {
                        currentCharacter.familiar.stressUsed = 1; // Mark first box
                    } else {
                        currentCharacter.familiar.stressUsed = 0; // Unmark all
                    }
                } else if (boxId === 'familiarStressBox2') {
                    // If clicking second box
                    if (currentCharacter.familiar.stressUsed < 2) {
                        currentCharacter.familiar.stressUsed = 2; // Mark both boxes
                    } else {
                        currentCharacter.familiar.stressUsed = 1; // Unmark second box only
                    }
                }
                
                updateFamiliarDisplay(currentCharacter);
            }
            
            saveCharacters();
        }

        function updateFamiliarDisplay(character) {
            if (!character) return;
            
            const familiarSection = document.getElementById('familiarSheetSection');
            
            // Show familiar section only if character has a familiar
            if (character.familiar) {
                familiarSection.style.display = 'block';
                
                // Update familiar name
                const nameDisplay = document.getElementById('familiarDisplayName');
                if (nameDisplay) {
                    nameDisplay.textContent = character.familiar.name || 'Familiar';
                }
                
                // Update familiar resource boxes
                const hpBox = document.getElementById('familiarHpBox');
                const stressBox1 = document.getElementById('familiarStressBox1');
                const stressBox2 = document.getElementById('familiarStressBox2');
                
                if (hpBox) {
                    if (character.familiar.hpUsed) {
                        hpBox.classList.add('used');
                    } else {
                        hpBox.classList.remove('used');
                    }
                }
                
                if (stressBox1 && stressBox2) {
                    const stressUsed = character.familiar.stressUsed || 0;
                    
                    if (stressUsed >= 1) {
                        stressBox1.classList.add('used');
                    } else {
                        stressBox1.classList.remove('used');
                    }
                    
                    if (stressUsed >= 2) {
                        stressBox2.classList.add('used');
                    } else {
                        stressBox2.classList.remove('used');
                    }
                }
            } else {
                familiarSection.style.display = 'none';
            }
        }

        function toggleCompanionSection() {
            const content = document.getElementById('companionContent');
            const toggleButton = document.getElementById('companionToggle');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleButton.innerHTML = '<i class="fas fa-minus text-xs"></i>';
            } else {
                content.style.display = 'none';
                toggleButton.innerHTML = '<i class="fas fa-plus text-xs"></i>';
            }
        }

        function toggleSpellCastingSection() {
            const content = document.getElementById('spellCastingContent');
            const toggleButton = document.getElementById('spellCastingToggle');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleButton.innerHTML = '<i class="fas fa-minus text-xs"></i>';
            } else {
                content.style.display = 'none';
                toggleButton.innerHTML = '<i class="fas fa-plus text-xs"></i>';
            }
        }

        function handleCompanionResourceClick(box) {
            if (!currentCharacter || !currentCharacter.companion) return;
            
            const resourceType = box.dataset.companionResource;
            const boxId = box.id;
            
            if (resourceType === 'hp') {
                const hpIndex = parseInt(boxId.replace('companionHpBox', '')) - 1;
                toggleCompanionResourceOrdered(hpIndex, 'hp');
            } else if (resourceType === 'stress') {
                const stressIndex = parseInt(boxId.replace('companionStressBox', '')) - 1;
                toggleCompanionResourceOrdered(stressIndex, 'stress');
            }
            
            saveCharacters();
        }

        function toggleCompanionResourceOrdered(clickedIndex, resourceType) {
            if (!currentCharacter || !currentCharacter.companion) return;
            
            // Initialize arrays if not present
            if (!currentCharacter.companion.hpUsed) {
                currentCharacter.companion.hpUsed = [];
            }
            if (!currentCharacter.companion.stressUsed) {
                currentCharacter.companion.stressUsed = [];
            }
            
            const usedArray = resourceType === 'hp' ? currentCharacter.companion.hpUsed : currentCharacter.companion.stressUsed;
            const isCurrentlyUsed = usedArray.includes(clickedIndex);
            
            if (!isCurrentlyUsed) {
                // Mark as used - fill from left to clicked index (left to right)
                for (let i = 0; i <= clickedIndex; i++) {
                    if (!usedArray.includes(i)) {
                        usedArray.push(i);
                    }
                }
            } else {
                // Unmark as used - unfill from clicked index to the right (right to left)
                for (let i = clickedIndex; i < 10; i++) { // 10 is safe upper bound
                    const indexInArray = usedArray.indexOf(i);
                    if (indexInArray > -1) {
                        usedArray.splice(indexInArray, 1);
                    }
                }
            }
            
            // Update display
            updateCompanionDisplay(currentCharacter);
        }

        function updateCompanionDisplay(character) {
            if (!character) return;
            
            const companionSection = document.getElementById('companionSheetSection');
            
            // Show companion section only if character has a companion
            if (character.companion) {
                companionSection.style.display = 'block';
                
                // Update companion name and type
                const nameDisplay = document.getElementById('companionDisplayName');
                const typeDisplay = document.getElementById('companionDisplayType');
                
                if (nameDisplay) {
                    nameDisplay.textContent = character.companion.name || 'Companion';
                }
                
                if (typeDisplay) {
                    typeDisplay.textContent = character.companion.type || 'Bear';
                }
                
                // Get companion type data
                const companionData = companionTypes[character.companion.type] || companionTypes['Bear'];
                
                // Update the entire companion content with new layout
                const companionContent = document.getElementById('companionContent');
                companionContent.innerHTML = `
                    <!-- Row 1: Name -->
                    <div class="text-center font-medium mb-2">${character.companion.name || 'Companion'}</div>
                    
                    <!-- Row 2: Type -->
                    <div class="text-center text-sm text-gray-600 dark:text-gray-400 mb-3">${character.companion.type || 'Bear'}</div>
                    
                    <!-- Row 3: HP and Stress -->
                    <div class="flex justify-center gap-6 mb-3">
                        <div class="flex flex-col items-center">
                            <div class="text-xs font-medium mb-1">HP</div>
                            <div class="flex gap-1" id="companionHpBoxes">
                                <!-- HP boxes will be generated here -->
                            </div>
                        </div>
                        
                        <div class="flex flex-col items-center">
                            <div class="text-xs font-medium mb-1">Stress</div>
                            <div class="flex gap-1" id="companionStressBoxes">
                                <!-- Stress boxes will be generated here -->
                            </div>
                        </div>
                    </div>
                    
                    <!-- Row 4: Stats -->
                    <div class="flex justify-between items-center text-xs">
                        <div class="flex flex-col items-center">
                            <div class="text-xs font-medium mb-1">Evasion</div>
                            <div class="text-sm font-medium">${companionData.evasion}</div>
                        </div>
                        
                        <div class="flex flex-col items-center">
                            <div class="text-xs font-medium mb-1">Mod</div>
                            <div class="text-sm font-medium">+${companionData.mod}</div>
                        </div>
                        
                        <div class="flex flex-col items-center">
                            <div class="text-xs font-medium mb-1">Damage</div>
                            <div class="text-sm font-medium">${companionData.damage}</div>
                        </div>
                        
                        <div class="flex flex-col items-center">
                            <div class="text-xs font-medium mb-1">Threshold</div>
                            <div class="text-sm font-medium">${companionData.thresholdLower} / ${companionData.thresholdUpper}</div>
                        </div>
                    </div>
                `;
                
                // Now populate the HP and Stress boxes in their new containers
                const hpContainer = document.getElementById('companionHpBoxes');
                const stressContainer = document.getElementById('companionStressBoxes');
                
                // Update HP boxes
                for (let i = 0; i < companionData.hp; i++) {
                    const box = document.createElement('div');
                    box.className = 'resource-box solid cursor-pointer';
                    box.id = `companionHpBox${i + 1}`;
                    box.dataset.companionResource = 'hp';
                    
                    if (character.companion.hpUsed && character.companion.hpUsed.includes(i)) {
                        box.classList.add('used');
                    }
                    
                    hpContainer.appendChild(box);
                }
                
                // Update Stress boxes
                for (let i = 0; i < companionData.stress; i++) {
                    const box = document.createElement('div');
                    box.className = 'resource-box solid cursor-pointer';
                    box.id = `companionStressBox${i + 1}`;
                    box.dataset.companionResource = 'stress';
                    
                    if (character.companion.stressUsed && character.companion.stressUsed.includes(i)) {
                        box.classList.add('used');
                    }
                    
                    stressContainer.appendChild(box);
                }
            } else {
                companionSection.style.display = 'none';
            }
        }

        // Character form submission
        document.getElementById('characterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if all modifiers are assigned
            const unassigned = Object.values(selectedModifiers).some(mod => mod === null);
            if (unassigned) {
                showCustomDialog('Incomplete Character', 'Please assign all ability score modifiers before creating the character.');
                return;
            }
            
            const characterClass = document.getElementById('charClass').value;
            const normalEvasion = parseInt(document.getElementById('evasion').value);
            
            // Calculate Unarmored Defense evasion for Barbarian and Monk
            let unarmoredDefenseEvasion = normalEvasion;
            let hasUnarmoredDefense = false;
            
            if (characterClass === 'Barbarian' || characterClass === 'Monk') {
                hasUnarmoredDefense = true;
                const initialDexMod = selectedModifiers.dex + (abilityScoreAllocations.dex || 0);
                unarmoredDefenseEvasion = normalEvasion + initialDexMod;
            }
            
            // Handle familiar data for Wizard and Warlock
            let familiarData = null;
            if ((characterClass === 'Wizard' || characterClass === 'Warlock') && document.getElementById('hasFamiliar').checked) {
                const familiarName = document.getElementById('familiarName').value.trim() || 'Familiar';
                familiarData = {
                    name: familiarName,
                    hpUsed: false,
                    stressUsed: 0 // 0 = none, 1 = first box, 2 = both boxes
                };
            }

            // Handle companion data for Ranger
            let companionData = null;
            if (characterClass === 'Ranger' && document.getElementById('hasCompanion').checked) {
                const companionName = document.getElementById('companionName').value.trim() || 'Companion';
                const companionType = document.getElementById('companionType').value || 'Bear';
                companionData = {
                    name: companionName,
                    type: companionType,
                    hpUsed: [], // Array of used HP box indices
                    stressUsed: [] // Array of used Stress box indices
                };
            }

            // Handle Jack of all Trades for Bard
            let jackOfAllTradesActive = false;
            if (characterClass === 'Bard' && document.getElementById('hasJackOfAllTrades').checked) {
                jackOfAllTradesActive = true;
            }

            const character = {
                id: Date.now().toString(),
                name: document.getElementById('charName').value,
                level: parseInt(document.getElementById('charLevel').value),
                race: document.getElementById('charRace').value,
                class: characterClass,
                str: selectedModifiers.str,
                dex: selectedModifiers.dex,
                con: selectedModifiers.con,
                int: selectedModifiers.int,
                wis: selectedModifiers.wis,
                cha: selectedModifiers.cha,
                // Store initial ability scores for Unarmored Defense
                initialDex: selectedModifiers.dex + (abilityScoreAllocations.dex || 0),
                initialCon: selectedModifiers.con + (abilityScoreAllocations.con || 0),
                proficiencies: { ...proficiencies },
                abilityScoreAllocations: { ...abilityScoreAllocations },
                // Store initial modifiers for Unarmored Defense (including racial bonuses)
                initialModifiers: {
                    dex: selectedModifiers.dex + (abilityScoreAllocations.dex || 2),
                    con: selectedModifiers.con + (abilityScoreAllocations.con || 0)
                },
                hpMax: parseInt(document.getElementById('hpMax').value),
                stressMax: parseInt(document.getElementById('stressMax').value),
                classMax: parseInt(document.getElementById('classMax').value),
                spellMax: parseInt(document.getElementById('spellMax').value),
                resources: {
                    hp: { max: parseInt(document.getElementById('hpMax').value), used: [], temp: 0 },
                    stress: { max: parseInt(document.getElementById('stressMax').value), used: [], temp: 0 },
                    class: { max: parseInt(document.getElementById('classMax').value), used: [], temp: 0 },
                    spell: { max: parseInt(document.getElementById('spellMax').value), used: [], temp: 0 }
                },
                // Store both evasion values for Unarmored Defense classes
                evasion: normalEvasion,
                normalEvasion: normalEvasion,
                unarmoredDefenseEvasion: unarmoredDefenseEvasion,
                hasUnarmoredDefense: hasUnarmoredDefense,
                unarmoredDefenseActive: false, // Default to normal evasion
                armor: parseInt(document.getElementById('armor').value),
                armorSlots: { 
                    total: parseInt(document.getElementById('armor').value), 
                    filled: [],
                    permanent: parseInt(document.getElementById('armor').value),
                    temporary: 0
                },
                thresholdLower: parseInt(document.getElementById('thresholdLower').value),
                thresholdUpper: parseInt(document.getElementById('thresholdUpper').value),
                equipment: [],
                notes: '',
                // Store race selections
                selectedRaceBonuses: [...selectedRaceBonuses],
                selectedRaceProficiencies: [...selectedRaceProficiencies],
                selectedAbilityScores: [...selectedAbilityScores],
                raceBonusValues: { ...raceBonusValues },
                // Store familiar data
                familiar: familiarData,
                // Store companion data
                companion: companionData,
                // Store Jack of all Trades data
                jackOfAllTradesActive: jackOfAllTradesActive,
                // Initialize weapon and armor properties
                primaryWeapon: null,
                secondaryWeapon: null,
                armorItem: null,
                primaryWeaponBonuses: {},
                secondaryWeaponBonuses: {},
                armorBonuses: {},
                primaryWeaponAbilityBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                secondaryWeaponAbilityBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                armorAbilityBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                // Initialize weapon proficiency (starts with 1 circle filled at level 1)
                weaponProficiency: 1,
                coins: {
                    platinum: 0,
                    gold: 0,
                    silver: 0,
                    copper: 0
                },
                classAbilities: {
                    selectedClass: [],
                    selectedUniversal: []
                }
            };
            
            characters.push(character);
            saveCharacters();
            updateCharacterDisplay();
            showCharacterList();
            // Update DC Save for the new character
            updateDCSaveDisplay(character);
        });
        
        // Ability selector event listeners
        document.querySelectorAll('.ability-selector').forEach(selector => {
            selector.addEventListener('click', function() {
                const ability = this.dataset.ability;
                showModifierSelection(ability);
            });
        });
        
        // Proficiency circle event listeners removed for character creation
           // Proficiency circle event listeners
        document.querySelectorAll('.weapon-proficiency-circle').forEach(circle => {
            circle.addEventListener('click', function() {
                const ability = this.dataset.ability;
                toggleProficiency(ability);
            });
        });
        
        // Sheet proficiency circle event listeners
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('stat-proficiency')) {
                const ability = e.target.dataset.ability;
                toggleSheetProficiency(ability);
            }
        });
        
        // Combat stat box click listeners - Enhanced for armor slots and evasion
        document.addEventListener('click', function(e) {
            if (e.target.id === 'displayArmor' || e.target.closest('#armorCircles')) {
                if (e.target.id === 'displayArmor') {
                    showArmorSlotsModal();
                }
            } else if (e.target.id === 'displayEvasion') {
                showEvasionModal();
            }
        });
        
        // Reset modifiers button
        document.getElementById('resetModifiers').addEventListener('click', function() {
            resetModifierSystem();
            // Don't reset proficiency system - preserve race-selected proficiencies
        });

        // Randomize modifiers button
        document.getElementById('randomizeModifiers').addEventListener('click', function() {
            randomizeModifiers();
        });
        
        function randomizeModifiers() {
            // Reset current selections
            selectedModifiers = { str: null, dex: null, con: null, int: null, wis: null, cha: null };
            usedModifiers = [];
            
            // Create a shuffled copy of available modifiers
            const shuffledModifiers = [...availableModifiers];
            for (let i = shuffledModifiers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledModifiers[i], shuffledModifiers[j]] = [shuffledModifiers[j], shuffledModifiers[i]];
            }
            
            // Assign modifiers to abilities randomly
            const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
            for (let i = 0; i < abilities.length; i++) {
                selectedModifiers[abilities[i]] = shuffledModifiers[i];
                usedModifiers.push(i);
            }
            
            // Update displays
            updateAvailableModifiers();
            updateAbilitySelectors();
        }

// Weapon/armor modal event listeners
document.addEventListener('click', function(e) {
    if (e.target.id === 'addPrimaryWeapon') {
        showWeaponModal('primary');
    } else if (e.target.id === 'addSecondaryWeapon') {
        showWeaponModal('secondary');
    } else if (e.target.id === 'addArmor') {
        showWeaponModal('armor');
    }
});

document.getElementById('cancelWeapon').addEventListener('click', function() {
    document.getElementById('weaponModal').classList.add('hidden');
});

document.getElementById('confirmWeapon').addEventListener('click', function() {
    if (selectedWeapon || selectedArmor) {
        addWeaponToCharacter();
    } else {
        showCustomDialog('No Selection', 'Please select an item first.');
    }
});

document.getElementById('cancelWeaponRemoval').addEventListener('click', function() {
    document.getElementById('weaponRemovalModal').classList.add('hidden');
});

document.getElementById('confirmWeaponRemoval').addEventListener('click', function() {
    removeWeapon();
});

// Modified Custom Weapon Creation Modal Event Listeners
document.getElementById('makeWeaponBtn').addEventListener('click', function() {
    document.getElementById('weaponModal').classList.add('hidden');
    if (currentWeaponType === 'armor') {
        document.getElementById('customArmorModal').classList.remove('hidden');
    } else {
        document.getElementById('customWeaponModal').classList.remove('hidden');
    }
});

document.getElementById('cancelCustomWeapon').addEventListener('click', function() {
    document.getElementById('customWeaponModal').classList.add('hidden');
});

        function clearCustomWeaponModal() {
            // Clear weapon name
            document.getElementById('customWeaponName').value = '';
            
            // Clear all trait checkboxes
            document.querySelectorAll('.trait-checkbox').forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Clear all bonus checkboxes and trigger change events to disable inputs
            document.querySelectorAll('.bonus-checkbox').forEach(checkbox => {
                checkbox.checked = false;
                
                // Trigger change event to disable inputs
                const event = new Event('change');
                checkbox.dispatchEvent(event);
            });
            
            // Clear all bonus input values
            document.getElementById('evasionBonusValue').value = '';
            document.getElementById('armorBonusValue').value = '';
            document.getElementById('thresholdLowerBonusValue').value = '';
            document.getElementById('thresholdUpperBonusValue').value = '';
            document.getElementById('notesBonusValue').value = '';
            
            // Clear all ability score bonus inputs
            document.getElementById('strBonusValue').value = '';
            document.getElementById('dexBonusValue').value = '';
            document.getElementById('conBonusValue').value = '';
            document.getElementById('intBonusValue').value = '';
            document.getElementById('wisBonusValue').value = '';
            document.getElementById('chaBonusValue').value = '';
            
            // Hide ability score inputs section
            document.getElementById('abilityScoreBonusInputs').classList.add('hidden');
        }

        // Enable/disable bonus input fields based on checkbox state
        document.addEventListener('change', function(e) {
            if (e.target.classList.contains('bonus-checkbox')) {
                const checkbox = e.target;
                const isAbilityScoresBonus = checkbox.id === 'abilityScoresBonus';
                const isNotesBonus = checkbox.id === 'notesBonus';
                
                if (isAbilityScoresBonus) {
                    const inputsContainer = document.getElementById('abilityScoreBonusInputs');
                    if (checkbox.checked) {
                        inputsContainer.classList.remove('hidden');
                        inputsContainer.querySelectorAll('input').forEach(input => input.disabled = false);
                    } else {
                        inputsContainer.classList.add('hidden');
                        inputsContainer.querySelectorAll('input').forEach(input => {
                            input.disabled = true;
                            input.value = '';
                        });
                    }
                } else if (isNotesBonus) {
                    const textArea = document.getElementById('notesBonusValue');
                    textArea.disabled = !checkbox.checked;
                    if (!checkbox.checked) {
                        textArea.value = '';
                    }
                } else {
                    // Regular bonuses with single input field
                    const inputId = checkbox.id.replace('Bonus', 'BonusValue');
                    const input = document.getElementById(inputId);
                    if (input) {
                        input.disabled = !checkbox.checked;
                        if (!checkbox.checked) {
                            input.value = '';
                        }
                    }
                }
            }
        });

        

        // New Ability Score Modal Event Listeners
        document.getElementById('cancelAbilityScoreNew').addEventListener('click', function() {
            document.getElementById('abilityScoreModal').classList.add('hidden');
        });



        // FIXED FUNCTION: Proper allocation logic for multi-options
        document.getElementById('confirmAbilityScoreNew').addEventListener('click', function() {
            const modal = document.getElementById('abilityScoreModal');
            const selectedCheckboxes = modal.querySelectorAll('.ability-checkbox.selected');
            
            let allocations = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            let hasPositiveMulti = false;
            let hasNegativeMulti = false;
            let selectedPositiveAbilities = [];
            let selectedNegativeAbilities = [];
            
            const initialPositive = parseInt(modal.dataset.initialPositivePoints);
            const initialNegative = parseInt(modal.dataset.initialNegativePoints);
            
            // First pass: collect all selections
            selectedCheckboxes.forEach(checkbox => {
                const type = checkbox.dataset.type;
                const ability = checkbox.dataset.ability;
                
                if (type === 'positive-multi') {
                    hasPositiveMulti = true;
                } else if (type === 'negative-multi') {
                    hasNegativeMulti = true;
                } else if (type === 'positive') {
                    selectedPositiveAbilities.push(ability);
                } else if (type === 'negative') {
                    selectedNegativeAbilities.push(ability);
                }
            });
            
            // Second pass: allocate points
            if (hasPositiveMulti && selectedPositiveAbilities.length === 1) {
                // Apply all positive points to the one selected ability
                allocations[selectedPositiveAbilities[0]] += initialPositive;
            } else if (!hasPositiveMulti) {
                // Normal allocation of 1 point per selected ability
                selectedPositiveAbilities.forEach(ability => {
                    allocations[ability] += 1;
                });
            }
            
            if (hasNegativeMulti && selectedNegativeAbilities.length === 1) {
                // Apply all negative points to the one selected ability
                allocations[selectedNegativeAbilities[0]] -= initialNegative;
            } else if (!hasNegativeMulti) {
                // Normal allocation of -1 point per selected ability
                selectedNegativeAbilities.forEach(ability => {
                    allocations[ability] -= 1;
                });
            }
            
            // Validate allocation matches available points
            let allocatedPositive = 0;
            let allocatedNegative = 0;
            
            Object.values(allocations).forEach(value => {
                if (value > 0) allocatedPositive += value;
                if (value < 0) allocatedNegative += Math.abs(value);
            });
            
            // Check for invalid multi-option usage
            if (hasPositiveMulti && selectedPositiveAbilities.length !== 1) {
                showCustomDialog('Invalid Selection', 'When using "Apply all positive points to one ability score", you must select exactly one positive ability.');
                return;
            }
            
            if (hasNegativeMulti && selectedNegativeAbilities.length !== 1) {
                showCustomDialog('Invalid Selection', 'When using "Apply all negative points to one ability score", you must select exactly one negative ability.');
                return;
            }
            
            if (allocatedPositive !== initialPositive || allocatedNegative !== initialNegative) {
                showCustomDialog('Invalid Allocation', 'You must allocate all available points.');
                return;
            }
            
            // Apply the allocations
            abilityScoreAllocations = allocations;
            updateAbilityScoreResults();
            updateLiveAbilityScores();
            
            modal.classList.add('hidden');
        });

        // Ability checkbox click handler
        document.addEventListener('click', function(e) {
            if (e.target.closest('.ability-checkbox')) {
                const checkbox = e.target.closest('.ability-checkbox');
                const input = checkbox.querySelector('input');
                const type = checkbox.dataset.type;
                
                // Toggle selection
                if (checkbox.classList.contains('selected')) {
                    checkbox.classList.remove('selected');
                    input.checked = false;
                } else {
                    // Handle multi-option logic
                    if (type === 'positive-multi' || type === 'negative-multi') {
                        // Unselect other multi options in the same category
                        const categoryPrefix = type.split('-')[0];
                        document.querySelectorAll(`.ability-checkbox[data-type^="${categoryPrefix}-multi"]`).forEach(cb => {
                            if (cb !== checkbox) {
                                cb.classList.remove('selected');
                                cb.querySelector('input').checked = false;
                            }
                        });
                    }
                    
                    checkbox.classList.add('selected');
                    input.checked = true;
                }
                
                // Update points counter
                updateAbilityScorePointsCounter();
            }
        });

        function updateAbilityScorePointsCounter() {
            const modal = document.getElementById('abilityScoreModal');
            const initialPositive = parseInt(modal.dataset.initialPositivePoints);
            const initialNegative = parseInt(modal.dataset.initialNegativePoints);
            
            let allocatedPositive = 0;
            let allocatedNegative = 0;
            let hasPositiveMulti = false;
            let hasNegativeMulti = false;
            
            // Count allocated points
            modal.querySelectorAll('.ability-checkbox.selected').forEach(checkbox => {
                const type = checkbox.dataset.type;
                
                if (type === 'positive') {
                    allocatedPositive += hasPositiveMulti ? 0 : 1;
                } else if (type === 'negative') {
                    allocatedNegative += hasNegativeMulti ? 0 : 1;
                } else if (type === 'positive-multi') {
                    hasPositiveMulti = true;
                    allocatedPositive = initialPositive; // Multi takes all points
                } else if (type === 'negative-multi') {
                    hasNegativeMulti = true;
                    allocatedNegative = initialNegative; // Multi takes all points
                }
            });
            
            document.getElementById('positivePointsRemaining').textContent = initialPositive - allocatedPositive;
            document.getElementById('negativePointsRemaining').textContent = initialNegative - allocatedNegative;
        }

        // Temp Points Modal Event Listeners
        document.getElementById('cancelTempPoints').addEventListener('click', function() {
            document.getElementById('tempPointsModal').classList.add('hidden');
        });

        document.getElementById('addTempPoints').addEventListener('click', function() {
            const modal = document.getElementById('tempPointsModal');
            const amount = parseInt(document.getElementById('tempPointsAmount').value);
            const resourceType = modal.dataset.resourceType;
            
            if (amount && amount > 0) {
                addTempPoints(resourceType, amount);
            }
            
            modal.classList.add('hidden');
        });

        document.getElementById('removeTempPoints').addEventListener('click', function() {
            const modal = document.getElementById('tempPointsModal');
            const amount = parseInt(document.getElementById('tempPointsAmount').value);
            const resourceType = modal.dataset.resourceType;
            
            if (amount && amount > 0) {
                removeTempResourcePoints(resourceType, amount);
            } else {
                showCustomDialog('Invalid Amount', 'Please enter a valid amount to remove.');
                return;
            }
            
            modal.classList.add('hidden');
        });

        // Allow Enter key to confirm temp points
        document.getElementById('tempPointsAmount').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('confirmTempPoints').click();
            }
        });

        // Enhanced Armor Slots Modal Event Listeners
        document.getElementById('cancelArmorSlots').addEventListener('click', function() {
            document.getElementById('armorSlotsModal').classList.add('hidden');
        });

        document.getElementById('addArmorSlots').addEventListener('click', function() {
            const amount = parseInt(document.getElementById('armorSlotsAmount').value);
            if (amount && amount > 0) {
                adjustArmorSlots(amount, true);
            }
        });

        document.getElementById('removeArmorSlots').addEventListener('click', function() {
            const amount = parseInt(document.getElementById('armorSlotsAmount').value);
            if (amount && amount > 0) {
                adjustArmorSlots(amount, false);
            }
        });

        // Allow Enter key to focus on Add button for armor slots
        document.getElementById('armorSlotsAmount').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('addArmorSlots').focus();
            }
        });

        // Health Potions Functions
        function generateHealthPotionCircles(character) {
            const container = document.getElementById('healthPotionCircles');
            container.innerHTML = '';
            
            // Initialize health potions array if not present
            if (!character.healthPotions) {
                character.healthPotions = [false, false, false, false];
            }
            
            for (let i = 0; i < 4; i++) {
                const circle = document.createElement('div');
                circle.className = 'w-5 h-5 rounded-full border-2 border-red-400 cursor-pointer transition-all hover:border-red-600';
                circle.dataset.index = i;
                
                // Set filled state
                if (character.healthPotions[i]) {
                    circle.classList.add('bg-red-500');
                } else {
                    circle.classList.add('bg-transparent');
                }
                
                circle.addEventListener('click', function() {
                    toggleHealthPotion(parseInt(this.dataset.index));
                });
                
                container.appendChild(circle);
            }
        }
        
        function toggleHealthPotion(index) {
            if (!currentCharacter) return;
            
            if (!currentCharacter.healthPotions) {
                currentCharacter.healthPotions = [false, false, false, false];
            }
            
            // Toggle the potion state
            currentCharacter.healthPotions[index] = !currentCharacter.healthPotions[index];
            
            // Regenerate circles to update display
            generateHealthPotionCircles(currentCharacter);
            saveCharacters();
        }
        
        function useHealthPotion() {
            if (!currentCharacter) return;
            
            if (!currentCharacter.healthPotions) {
                currentCharacter.healthPotions = [false, false, false, false];
            }
            
            // Check if there are any health potions available
            const availablePotionIndex = currentCharacter.healthPotions.findIndex(potion => potion === true);
            if (availablePotionIndex === -1) {
                showCustomDialog('No Health Potions', 'You have no health potions available to use.');
                return;
            }
            
            // Roll 1d6
            const roll = Math.floor(Math.random() * 6) + 1;
            
            // Remove one health potion (unfill the first available one)
            currentCharacter.healthPotions[availablePotionIndex] = false;
            
            // Restore HP by removing 'roll' amount of used HP boxes
            if (!currentCharacter.resources || !currentCharacter.resources.hp) {
                showCustomDialog('No HP to Restore', 'Character has no HP resource to restore.');
                generateHealthPotionCircles(currentCharacter);
                saveCharacters();
                return;
            }
            
            const hpResource = currentCharacter.resources.hp;
            const usedBoxes = [...hpResource.used].sort((a, b) => b - a); // Sort descending to remove from highest indices first
            
            let pointsRestored = 0;
            
            // Remove used HP boxes starting from the highest indices
            for (let i = 0; i < usedBoxes.length && pointsRestored < roll; i++) {
                const index = usedBoxes[i];
                const indexPosition = hpResource.used.indexOf(index);
                if (indexPosition !== -1) {
                    hpResource.used.splice(indexPosition, 1);
                    pointsRestored++;
                }
            }
            
            // Update displays
            generateHealthPotionCircles(currentCharacter);
            populateSheetResourceBoxes(currentCharacter);
            saveCharacters();
            
            // Show result message
            const message = `Used health potion! Rolled ${roll} and restored ${pointsRestored} HP.`;
            showCustomDialog('Health Potion Used', message);
        }
        
        // Health Potion button event listener
        document.addEventListener('click', function(e) {
            if (e.target.id === 'useHealthPotion' || e.target.closest('#useHealthPotion')) {
                useHealthPotion();
            }
        });

        // Evasion Modal Event Listeners
        document.getElementById('cancelEvasion').addEventListener('click', function() {
            document.getElementById('evasionModal').classList.add('hidden');
        });

        document.getElementById('adjustTempEvasion').addEventListener('click', function() {
            const amount = parseInt(document.getElementById('evasionAmount').value);
            if (amount) {
                adjustTempEvasion(amount);
            }
        });

        document.getElementById('adjustBaseEvasion').addEventListener('click', function() {
            const amount = parseInt(document.getElementById('evasionAmount').value);
            if (amount) {
                adjustBaseEvasion(amount);
            }
        });

        // Allow Enter key to focus on Add Temp button for evasion
        document.getElementById('evasionAmount').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('adjustTempEvasion').focus();
            }
        });

        // Evasion Modal Functions
        function showEvasionModal() {
            if (!currentCharacter) return;
            
            const modal = document.getElementById('evasionModal');
            
            // Initialize simplified evasion data if missing
            if (!currentCharacter.evasionData) {
                currentCharacter.evasionData = {
                    base: currentCharacter.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            // Get armor evasion value
            const armorEvasion = getArmorEvasionValue(currentCharacter);
            
            // Calculate current total evasion
            const currentEvasion = getCurrentEvasion(currentCharacter);
            
            // Update modal display
            document.getElementById('currentEvasion').textContent = currentEvasion;
            document.getElementById('baseEvasion').textContent = currentCharacter.evasionData.base || 0;
            document.getElementById('temporaryEvasion').textContent = currentCharacter.evasionData.temporary || 0;
            document.getElementById('armorEvasion').textContent = armorEvasion;
            
            document.getElementById('evasionAmount').value = '';
            modal.classList.remove('hidden');
            document.getElementById('evasionAmount').focus();
        }
        
        function getArmorEvasionValue(character) {
            if (!character.armorItem) return 0;
            
            // Get the evasion bonus from armor (can be negative)
            return character.armorItem.bonuses?.evasion || 0;
        }
        
        function getCurrentEvasion(character) {
            if (!character.evasionData) {
                character.evasionData = {
                    base: character.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            const baseEvasion = character.evasionData.base || 0;
            const tempEvasion = character.evasionData.temporary || 0;
            const unarmoredDefenseEvasion = character.evasionData.unarmoredDefense || 0;
            const mageArmorEvasion = character.evasionData.mageArmor || 0;
            const armorEvasion = getArmorEvasionValue(character);
            
            return baseEvasion + tempEvasion + unarmoredDefenseEvasion + mageArmorEvasion + armorEvasion;
        }
        
        function calculateTotalEvasion(character) {
            if (!character.evasionData) {
                character.evasionData = {
                    base: character.evasion || 0,
                    temporary: 0
                };
            }
            
            const baseEvasion = character.evasionData.base || 0;
            const tempEvasion = character.evasionData.temporary || 0;
            const armorEvasion = getArmorEvasionValue(character);
            
            return baseEvasion + tempEvasion + armorEvasion;
        }
        
        function getMinimumEvasionValue(character) {
            const armorEvasion = getArmorEvasionValue(character);
            // Minimum evasion is 1, but if armor provides evasion bonus, use that as minimum
            return Math.max(1, armorEvasion);
        }
        
        function updateLevelUpButtonState(character) {
            if (!character) return;
            
            const levelUpBtn = document.getElementById('levelUpCharacter');
            if (!levelUpBtn) return;
            
            // Check if character is at max level (10)
            if (character.level >= 10) {
                levelUpBtn.disabled = true;
                levelUpBtn.classList.add('opacity-50', 'cursor-not-allowed');
                levelUpBtn.classList.remove('hover:bg-green-600');
            } else {
                levelUpBtn.disabled = false;
                levelUpBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                levelUpBtn.classList.add('hover:bg-green-600');
            }
        }

        function updateCharacterEvasion() {
            if (!currentCharacter) return;
            
            // Initialize simplified evasion data if missing
            if (!currentCharacter.evasionData) {
                currentCharacter.evasionData = {
                    base: currentCharacter.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            // Update character's main evasion value
            currentCharacter.evasion = getCurrentEvasion(currentCharacter);
            
            // Update display
            const evasionDisplay = document.getElementById('displayEvasion');
            if (evasionDisplay) {
                evasionDisplay.textContent = currentCharacter.evasion;
            }
        }

        function adjustTempEvasion(amount) {
            if (!currentCharacter || !amount) return;
            
            // Initialize evasion data if missing
            if (!currentCharacter.evasionData) {
                currentCharacter.evasionData = {
                    base: currentCharacter.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            // Add temporary evasion
            currentCharacter.evasionData.temporary = (currentCharacter.evasionData.temporary || 0) + amount;
            
            // Update the character's main evasion value
            currentCharacter.evasion = getCurrentEvasion(currentCharacter);
            
            saveCharacters();
            populateCharacterSheet(currentCharacter);
            
            document.getElementById('evasionModal').classList.add('hidden');
        }
        
        function adjustBaseEvasion(amount) {
            if (!currentCharacter || !amount) return;
            
            // Initialize evasion data if missing
            if (!currentCharacter.evasionData) {
                currentCharacter.evasionData = {
                    base: currentCharacter.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            // Get minimum evasion value (1 or armor's evasion value, whichever is higher)
            const minimumEvasion = getMinimumEvasionValue(currentCharacter);
            const newBaseEvasion = (currentCharacter.evasionData.base || 0) + amount;
            
            // Check if the new value would go below the minimum
            if (newBaseEvasion < minimumEvasion) {
                const armorEvasion = getArmorEvasionValue(currentCharacter);
                if (armorEvasion > 1) {
                    showCustomDialog('Evasion Restriction', `Sorry, you can't go below your Armor's Value of ${armorEvasion}.`);
                } else {
                    showCustomDialog('Evasion Restriction', "Sorry, you can't go below your Armor's Value. Evasion cannot drop below 1.");
                }
                document.getElementById('evasionModal').classList.add('hidden');
                return;
            }
            
            // Adjust base evasion
            currentCharacter.evasionData.base = newBaseEvasion;
            
            // Update the character's main evasion value
            currentCharacter.evasion = getCurrentEvasion(currentCharacter);
            
            saveCharacters();
            populateCharacterSheet(currentCharacter);
            
            document.getElementById('evasionModal').classList.add('hidden');
        }
        
        /*function resetTempEvasion() {
            if (!currentCharacter) return;
            
            // Initialize evasion data if missing
            if (!currentCharacter.evasionData) {
                currentCharacter.evasionData = {
                    base: currentCharacter.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            // Reset temporary evasion only
            currentCharacter.evasionData.temporary = 0;
            
            // Update the character's main evasion value
            currentCharacter.evasion = getCurrentEvasion(currentCharacter);
            
            saveCharacters();
            populateCharacterSheet(currentCharacter);
            
            document.getElementById('evasionModal').classList.add('hidden');
        }*/

        // Helper function to calculate effective threshold values (including Unarmored Defense)
        function getEffectiveThresholdValues(character) {
            const thresholdLowerBase = character.thresholdLower || 0;
            const thresholdUpperBase = character.thresholdUpper || 0;
            
            let thresholdLowerEffective = thresholdLowerBase;
            let thresholdUpperEffective = thresholdUpperBase;
            
            // Apply Unarmored Defense threshold bonuses if active (allow ceremonial Unarmored Defense armor)
            if (character.unarmoredDefenseActive && (!character.armorItem || character.armorItem.isUnarmoredDefense)) {
                if (character.class === 'Monk') {
                    const currentDex = getCurrentDexModifier(character);
                    thresholdLowerEffective += currentDex;
                    thresholdUpperEffective += currentDex;
                } else if (character.class === 'Barbarian') {
                    const currentDex = getCurrentDexModifier(character);
                    const currentCon = getCurrentConModifier(character);
                    thresholdLowerEffective += currentDex;
                    thresholdUpperEffective += currentDex + currentCon;
                }
                
                // Add level-up bonuses for Barbarians and Monks
                if (character.unarmoredDefenseThresholdBonuses) {
                    thresholdLowerEffective += character.unarmoredDefenseThresholdBonuses.lower || 0;
                    thresholdUpperEffective += character.unarmoredDefenseThresholdBonuses.upper || 0;
                }
            }
            
            return {
                lower: thresholdLowerEffective,
                upper: thresholdUpperEffective
            };
        }

        // Threshold temp box functions
        function updateThresholdTempBoxes(character) {
            if (!character.tempThreshold) {
                character.tempThreshold = { lower: 0, upper: 0 };
            }
            
            // Get effective threshold values (including Unarmored Defense)
            const effectiveThreshold = getEffectiveThresholdValues(character);
            
            const lowerValue = effectiveThreshold.lower + character.tempThreshold.lower;
            const upperValue = effectiveThreshold.upper + character.tempThreshold.upper;
            
            // Update lower temp boxes
            document.getElementById('thresholdLowerTemp1').textContent = character.tempThreshold.lower > 0 ? lowerValue : '-';
           
            
            // Update upper temp boxes
            document.getElementById('thresholdUpperTemp1').textContent = character.tempThreshold.upper > 0 ? upperValue : '-';
        }
        
        function showTempThresholdModal() {
            const modal = document.getElementById('tempThresholdModal');
            document.getElementById('tempThresholdLower').value = '';
            document.getElementById('tempThresholdUpper').value = '';
            modal.classList.remove('hidden');
            document.getElementById('tempThresholdLower').focus();
        }
        
        function addTempThreshold() {
            if (!currentCharacter) return;
            
            const lowerTemp = parseInt(document.getElementById('tempThresholdLower').value) || 0;
            const upperTemp = parseInt(document.getElementById('tempThresholdUpper').value) || 0;
            
            if (!currentCharacter.tempThreshold) {
                currentCharacter.tempThreshold = { lower: 0, upper: 0 };
            }
            
            currentCharacter.tempThreshold.lower += lowerTemp;
            currentCharacter.tempThreshold.upper += upperTemp;
            
            updateThresholdTempBoxes(currentCharacter);
            saveCharacters();
            
            document.getElementById('tempThresholdModal').classList.add('hidden');
        }
        
        function resetTempThreshold() {
            if (!currentCharacter) return;
            
            currentCharacter.tempThreshold = { lower: 0, upper: 0 };
            updateThresholdTempBoxes(currentCharacter);
            saveCharacters();
            
            // Clear the modal inputs
            document.getElementById('tempThresholdLower').value = '';
            document.getElementById('tempThresholdUpper').value = '';
        }

        // Notes saving
        document.getElementById('characterNotes').addEventListener('blur', function() {
            if (currentCharacter) {
                currentCharacter.notes = this.value;
                saveCharacters();
            }
        });
        
        // Unarmored Defense, Mage Armor, and Wild Beast toggles
        document.addEventListener('change', function(e) {
            if (e.target.id === 'unarmoredDefenseToggle') {
                handleUnarmoredDefenseToggle(e.target.checked);
            } else if (e.target.id === 'mageArmorToggle') {
                handleMageArmorToggle(e.target.checked);
            } else if (e.target.id === 'wildBeastToggle') {
                handleWildBeastToggle(e.target.checked);
            }
        });

        // Equipment modal
        document.getElementById('addEquipment').addEventListener('click', function() {
            document.getElementById('equipmentModal').classList.remove('hidden');
        });

        document.getElementById('cancelEquipment').addEventListener('click', function() {
            document.getElementById('equipmentModal').classList.add('hidden');
        });

        document.getElementById('equipmentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (currentCharacter) {
                const item = {
                    name: document.getElementById('equipmentName').value,
                    quantity: parseInt(document.getElementById('equipmentQuantity').value)
                };
                
                if (!currentCharacter.equipment) {
                    currentCharacter.equipment = [];
                }
                
                currentCharacter.equipment.push(item);
                updateEquipmentDisplay(currentCharacter);
                saveCharacters();
                
                document.getElementById('equipmentModal').classList.add('hidden');
                document.getElementById('equipmentForm').reset();
                document.getElementById('equipmentQuantity').value = 1;
            }
        });

        // Temp Threshold Modal Event Listeners
        document.getElementById('cancelTempThreshold').addEventListener('click', function() {
            document.getElementById('tempThresholdModal').classList.add('hidden');
        });

        document.getElementById('confirmTempThreshold').addEventListener('click', function() {
            addTempThreshold();
        });

        document.getElementById('resetTempThreshold').addEventListener('click', function() {
            resetTempThreshold();
        });

        // Add event listeners to threshold temp boxes on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Use event delegation for dynamically created threshold temp boxes
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('threshold-temp-box')) {
                    showTempThresholdModal();
                }
            });
        });

            // Class abilities modal event listeners
    document.getElementById('classAbilitiesBtn').addEventListener('click', openClassAbilitiesModal);
    document.getElementById('closeClassAbilities').addEventListener('click', closeClassAbilitiesModal);
    
    // Handle ability checkbox changes using event delegation
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('class-ability-checkbox') || e.target.classList.contains('universal-ability-checkbox')) {
            handleAbilityCheckboxChange(e.target);
        }
    });
    
    // Close modal when clicking outside
    document.getElementById('classAbilitiesModal').addEventListener('click', function(e) {
        if (e.target.id === 'classAbilitiesModal') {
            closeClassAbilitiesModal();
        }
    });


    // Coin modal event listeners
    document.getElementById('addCoin').addEventListener('click', addCoins);
    document.getElementById('subtractCoin').addEventListener('click', subtractCoins);
    document.getElementById('closeCoinModal').addEventListener('click', closeCoinModal);
    document.getElementById('convertCoin').addEventListener('click', convertCurrentCoin);
    
    // Close modal when clicking outside
    document.getElementById('coinModal').addEventListener('click', function(e) {
        if (e.target.id === 'coinModal') {
            closeCoinModal();
        }
    });

    // Enter key support in input field
    document.getElementById('coinAmount').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addCoins();
        }
    });

    // Add click listeners to coin buttons using event delegation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('coin-button')) {
            const coinType = e.target.getAttribute('data-coin-type');
            openCoinModal(coinType);
        }
    });


        // Allow Enter key to confirm temp threshold
        document.getElementById('tempThresholdLower').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('tempThresholdUpper').focus();
            }
        });

        document.getElementById('tempThresholdUpper').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTempThreshold();
            }
        });

        // Familiar section event listeners
        document.getElementById('hasFamiliar').addEventListener('change', function() {
            const familiarNameSection = document.getElementById('familiarNameSection');
            if (this.checked) {
                familiarNameSection.classList.remove('hidden');
            } else {
                familiarNameSection.classList.add('hidden');
            }
        });

        document.getElementById('editHasFamiliar').addEventListener('change', function() {
            const familiarNameSection = document.getElementById('editFamiliarNameSection');
            if (this.checked) {
                familiarNameSection.classList.remove('hidden');
            } else {
                familiarNameSection.classList.add('hidden');
            }
        });

        // Companion section event listeners
        document.getElementById('hasCompanion').addEventListener('change', function() {
            const companionDetailsSection = document.getElementById('companionDetailsSection');
            if (this.checked) {
                companionDetailsSection.classList.remove('hidden');
            } else {
                companionDetailsSection.classList.add('hidden');
            }
        });

        document.getElementById('editHasCompanion').addEventListener('change', function() {
            const companionDetailsSection = document.getElementById('editCompanionDetailsSection');
            if (this.checked) {
                companionDetailsSection.classList.remove('hidden');
            } else {
                companionDetailsSection.classList.add('hidden');
            }
        });

        // Jack of All Trades section event listeners
        // No additional event listener needed for creation form as it's just a checkbox
        // No additional event listener needed for edit form as it's just a checkbox

        // Class selection event listeners for familiar and companion sections
        document.getElementById('charClass').addEventListener('change', function() {
            const familiarSection = document.getElementById('familiarSection');
            const companionSection = document.getElementById('companionSection');
            const jackOfAllTradesSection = document.getElementById('jackOfAllTradesSection');
            
            // Handle Familiar section (Wizard/Warlock)
            if (this.value === 'Wizard' || this.value === 'Warlock') {
                familiarSection.style.display = 'block';
            } else {
                familiarSection.style.display = 'none';
                // Reset familiar when class changes away from Wizard/Warlock
                document.getElementById('hasFamiliar').checked = false;
                document.getElementById('familiarNameSection').classList.add('hidden');
                document.getElementById('familiarName').value = '';
            }
            
            // Handle Companion section (Ranger)
            if (this.value === 'Ranger') {
                companionSection.style.display = 'block';
            } else {
                companionSection.style.display = 'none';
                // Reset companion when class changes away from Ranger
                document.getElementById('hasCompanion').checked = false;
                document.getElementById('companionDetailsSection').classList.add('hidden');
                document.getElementById('companionName').value = '';
                document.getElementById('companionType').value = '';
            }
            
            // Handle Jack of all Trades section (Bard)
            if (this.value === 'Bard') {
                jackOfAllTradesSection.style.display = 'block';
            } else {
                jackOfAllTradesSection.style.display = 'none';
                // Reset Jack of all Trades when class changes away from Bard
                document.getElementById('hasJackOfAllTrades').checked = false;
            }
            
            updateClassValues(this.value);
        });

        document.getElementById('editCharClass').addEventListener('change', function() {
            const familiarSection = document.getElementById('editFamiliarSection');
            const companionSection = document.getElementById('editCompanionSection');
            const jackOfAllTradesSection = document.getElementById('editJackOfAllTradesSection');
            
            // Handle Familiar section (Wizard/Warlock)
            if (this.value === 'Wizard' || this.value === 'Warlock') {
                familiarSection.style.display = 'block';
            } else {
                familiarSection.style.display = 'none';
                // Reset familiar when class changes away from Wizard/Warlock
                document.getElementById('editHasFamiliar').checked = false;
                document.getElementById('editFamiliarNameSection').classList.add('hidden');
                document.getElementById('editFamiliarName').value = '';
            }
            
            // Handle Companion section (Ranger)
            if (this.value === 'Ranger') {
                companionSection.style.display = 'block';
            } else {
                companionSection.style.display = 'none';
                // Reset companion when class changes away from Ranger
                document.getElementById('editHasCompanion').checked = false;
                document.getElementById('editCompanionDetailsSection').classList.add('hidden');
                document.getElementById('editCompanionName').value = '';
                document.getElementById('editCompanionType').value = '';
            }
            
            // Handle Jack of all Trades section (Bard)
            if (this.value === 'Bard') {
                jackOfAllTradesSection.style.display = 'block';
            } else {
                jackOfAllTradesSection.style.display = 'none';
                // Reset Jack of all Trades when class changes away from Bard
                document.getElementById('editHasJackOfAllTrades').checked = false;
            }
        });

        // Character Deletion Event Listeners
        document.getElementById('deleteCharacter').addEventListener('click', function() {
            if (!currentCharacter) return;
            showCharacterDeletionModal();
        });

        document.getElementById('cancelCharacterDeletion').addEventListener('click', function() {
            document.getElementById('characterDeletionModal').classList.add('hidden');
        });

        document.getElementById('confirmCharacterDeletion').addEventListener('click', function() {
            deleteCurrentCharacter();
        });

        // Edit Character event listener
        document.getElementById('editCharacterBtn').addEventListener('click', function() {
            if (!currentCharacter) return;
            populateCharacterCreationForm();
        });

        // Individual Character Save/Load Event Listeners
        const saveCharacterBtn = document.getElementById('saveCharacter');
        if (saveCharacterBtn) {
            saveCharacterBtn.addEventListener('click', function() {
                if (!currentCharacter) return;
                saveIndividualCharacter();
            });
        }

        const loadSingleCharacterInput = document.getElementById('loadSingleCharacterInput');
        if (loadSingleCharacterInput) {
            loadSingleCharacterInput.addEventListener('change', function(event) {
                loadSingleCharacterFromFile(event);
            });
        }

        // Character deletion confirmation checkbox handling
        document.getElementById('deleteConfirmationCheckbox').addEventListener('change', function() {
            const confirmButton = document.getElementById('confirmCharacterDeletion');
            if (this.checked) {
                confirmButton.disabled = false;
                confirmButton.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                confirmButton.disabled = true;
                confirmButton.classList.add('opacity-50', 'cursor-not-allowed');
            }
        });

        // Floating Dice Button Event Listeners
        document.getElementById('floatingDiceButton').addEventListener('click', function() {
            showDiceSelectionModal();
        });

        document.getElementById('closeDiceModal').addEventListener('click', function() {
            hideDiceSelectionModal();
        });

        // Dice counter state - track multiple dice types
        let diceSelections = {
            d4: 0,
            d6: 0,
            d8: 0,
            d10: 0,
            d12: 0,
            d20: 0
        };

        // Add event listeners for dice option buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('dice-option-btn')) {
                const diceType = e.target.dataset.dice;
                incrementDiceCounter(diceType);
            }
        });

        // Add event listeners for dice roll and clear buttons
        document.getElementById('rollDiceBtn').addEventListener('click', function() {
            const totalDice = Object.values(diceSelections).reduce((sum, count) => sum + count, 0);
            if (totalDice > 0) {
                rollAllSelectedDice();
                resetDiceCounter();
                hideDiceSelectionModal();
            }
        });

        document.getElementById('clearDiceBtn').addEventListener('click', function() {
            resetDiceCounter();
        });

        // Dice counter functions
        function incrementDiceCounter(diceType) {
            diceSelections[diceType]++;
            updateDiceCounterDisplay();
        }

        function resetDiceCounter() {
            diceSelections = {
                d4: 0,
                d6: 0,
                d8: 0,
                d10: 0,
                d12: 0,
                d20: 0
            };
            updateDiceCounterDisplay();
        }

        function updateDiceCounterDisplay() {
            // Update the global counter with total dice
            const totalDice = Object.values(diceSelections).reduce((sum, count) => sum + count, 0);
            document.getElementById('diceCounter').textContent = totalDice;
            
            // Update individual button counters
            document.querySelectorAll('.dice-option-btn').forEach(btn => {
                const diceType = btn.dataset.dice;
                const count = diceSelections[diceType];
                
                if (count > 0) {
                    // Show counter on button
                    btn.innerHTML = `${diceType} <span class="text-xs">(${count})</span>`;
                } else {
                    // Reset button text
                    btn.textContent = diceType;
                }
            });
        }

        function rollAllSelectedDice() {
            const allRolls = [];
            let grandTotal = 0;
            
            // Roll each dice type
            Object.keys(diceSelections).forEach(diceType => {
                const count = diceSelections[diceType];
                if (count > 0) {
                    const sides = parseInt(diceType.substring(1));
                    const rolls = [];
                    let subtotal = 0;
                    
                    for (let i = 0; i < count; i++) {
                        const roll = Math.floor(Math.random() * sides) + 1;
                        rolls.push(roll);
                        subtotal += roll;
                    }
                    
                    allRolls.push({
                        diceType: diceType,
                        count: count,
                        rolls: rolls,
                        subtotal: subtotal
                    });
                    
                    grandTotal += subtotal;
                }
            });
            
            showMultipleDiceTypesResult(allRolls, grandTotal);
        }

        function rollMultipleDice(diceType, numDice) {
            const sides = parseInt(diceType.substring(1));
            const rolls = [];
            let total = 0;
            
            for (let i = 0; i < numDice; i++) {
                const roll = Math.floor(Math.random() * sides) + 1;
                rolls.push(roll);
                total += roll;
            }
            
            showMultipleDiceResult(diceType, numDice, rolls, total);
        }

        function showMultipleDiceResult(diceType, numDice, rolls, total) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                    <div class="text-center">
                        <div class="mb-4">
                            <i class="fas fa-dice text-4xl text-primary mb-2"></i>
                            <h3 class="text-lg font-semibold">${numDice}${diceType.toUpperCase()} Roll</h3>
                        </div>
                        
                        <div class="mb-4">
                            <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">Individual rolls:</div>
                            <div class="text-lg font-medium mb-2">[${rolls.join(', ')}]</div>
                        </div>
                        
                        <div class="mb-6">
                            <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Total:</div>
                            <div class="text-4xl font-bold text-primary">${total}</div>
                        </div>
                        
                        <div class="flex justify-center space-x-3">
                            <button type="button" class="roll-again-multiple px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded">
                                <i class="fas fa-dice mr-1"></i>Roll Again
                            </button>
                            <button type="button" class="close-multiple-roll px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Close</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.roll-again-multiple').addEventListener('click', () => {
                // Re-roll the same dice
                const newRolls = [];
                let newTotal = 0;
                const sides = parseInt(diceType.substring(1));
                
                for (let i = 0; i < numDice; i++) {
                    const roll = Math.floor(Math.random() * sides) + 1;
                    newRolls.push(roll);
                    newTotal += roll;
                }
                
                // Update the display
                modal.querySelector('.text-lg.font-medium').textContent = `[${newRolls.join(', ')}]`;
                modal.querySelector('.text-4xl.font-bold').textContent = newTotal;
            });
            
            modal.querySelector('.close-multiple-roll').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

        function showMultipleDiceTypesResult(allRolls, grandTotal) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            
            // Build the rolls display
            let rollsDisplay = '';
            allRolls.forEach(rollData => {
                rollsDisplay += `
                    <div class="mb-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div class="font-semibold text-sm mb-1">${rollData.count}${rollData.diceType.toUpperCase()}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">Rolls: [${rollData.rolls.join(', ')}]</div>
                    </div>
                `;
            });
            
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
                    <div class="text-center">
                        <div class="mb-4">
                            <i class="fas fa-dice text-4xl text-primary mb-2"></i>
                            <h3 class="text-lg font-semibold">Multiple Dice Roll</h3>
                        </div>
                        
                        <div class="mb-4">
                            ${rollsDisplay}
                        </div>
                        
                        <div class="mb-6 p-4 bg-primary bg-opacity-10 rounded-lg">
                            <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Grand Total:</div>
                            <div class="text-4xl font-bold text-primary">${grandTotal}</div>
                        </div>
                        
                        <div class="flex justify-center space-x-3">
                            <button type="button" class="roll-again-multi px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded">
                                <i class="fas fa-dice mr-1"></i>Roll Again
                            </button>
                            <button type="button" class="close-multi-roll px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Close</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.roll-again-multi').addEventListener('click', () => {
                // Re-roll all the dice types
                const newAllRolls = [];
                let newGrandTotal = 0;
                
                allRolls.forEach(rollData => {
                    const sides = parseInt(rollData.diceType.substring(1));
                    const newRolls = [];
                    let newSubtotal = 0;
                    
                    for (let i = 0; i < rollData.count; i++) {
                        const roll = Math.floor(Math.random() * sides) + 1;
                        newRolls.push(roll);
                        newSubtotal += roll;
                    }
                    
                    newAllRolls.push({
                        diceType: rollData.diceType,
                        count: rollData.count,
                        rolls: newRolls,
                        subtotal: newSubtotal
                    });
                    
                    newGrandTotal += newSubtotal;
                });
                
                // Remove current modal and show new one
                modal.remove();
                showMultipleDiceTypesResult(newAllRolls, newGrandTotal);
            });
            
            modal.querySelector('.close-multi-roll').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

        function showDiceSelectionModal() {
            const modal = document.getElementById('diceSelectionModal');
            const modalContent = document.getElementById('diceModalContent');
            
            modal.classList.remove('hidden');
            
            // Animate the modal content expanding upward
            setTimeout(() => {
                modalContent.classList.remove('scale-0');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function hideDiceSelectionModal() {
            const modal = document.getElementById('diceSelectionModal');
            const modalContent = document.getElementById('diceModalContent');
            
            // Animate the modal content shrinking
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-0');
            
            // Hide the modal after animation
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

      // Divine modal functionality
        divineBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !divineOptionsModal.classList.contains('hidden');
            
            if (isOpen) {
                closeDivineOptions();
            } else {
                divineOptionsModal.classList.remove('hidden');
                setTimeout(() => {
                    divineOptionsModal.classList.remove('scale-0');
                    divineOptionsModal.classList.add('scale-100');
                }, 10);
            }
        });

             function closeDivineOptions() {
            divineOptionsModal.classList.remove('scale-100');
            divineOptionsModal.classList.add('scale-0');
            setTimeout(() => {
                divineOptionsModal.classList.add('hidden');
            }, 200);
        }

        // Close divine options when clicking outside
        document.addEventListener('click', (e) => {
            if (!divineBtn.contains(e.target) && !divineOptionsModal.contains(e.target)) {
                closeDivineOptions();
            }
        });

        
        // Divine roll functions
        function rollDivine(type) {
            let whiteDice = [];
            let blackDice = [];
            
            switch(type) {
                case 'normal':
                    whiteDice.push(Math.floor(Math.random() * 12) + 1);
                    blackDice.push(Math.floor(Math.random() * 12) + 1);
                    break;
                case 'advantage':
                    whiteDice.push(Math.floor(Math.random() * 12) + 1);
                    whiteDice.push(Math.floor(Math.random() * 12) + 1);
                    blackDice.push(Math.floor(Math.random() * 12) + 1);
                    break;
                case 'disadvantage':
                    whiteDice.push(Math.floor(Math.random() * 12) + 1);
                    blackDice.push(Math.floor(Math.random() * 12) + 1);
                    blackDice.push(Math.floor(Math.random() * 12) + 1);
                    break;
            }
            
            showDivineResult(type, whiteDice, blackDice);
            closeDivineOptions();
        }

        function showDivineResult(type, whiteDice, blackDice) {
            const rollType = document.getElementById('divineRollType');
            const rollResults = document.getElementById('divineRollResults');
            const finalResult = document.getElementById('divineFinalResult');
            
            // Set roll type
            const typeNames = {
                'normal': 'Normal Divine Roll',
                'advantage': 'Divine Advantage',
                'disadvantage': 'Divine Disadvantage'
            };
            rollType.textContent = typeNames[type];
            rollType.className = `text-lg font-semibold mb-4 ${
                type === 'advantage' ? 'text-green-600' : 
                type === 'disadvantage' ? 'text-red-600' : 'text-gray-600'
            }`;
            
            // Clear previous results
            rollResults.innerHTML = '';
            
            // Show white dice
            whiteDice.forEach((value, index) => {
                const die = document.createElement('div');
                die.className = 'divine-dice white-die w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl';
                die.textContent = value;
                rollResults.appendChild(die);
            });
            
            // Show black dice
            blackDice.forEach((value, index) => {
                const die = document.createElement('div');
                die.className = 'divine-dice black-die w-16 h-16 flex items-center justify-center rounded-lg font-bold text-xl';
                die.textContent = value;
                rollResults.appendChild(die);
            });
            
            // Calculate and show final result
            const whiteTotal = whiteDice.reduce((sum, val) => sum + val, 0);
            const blackTotal = blackDice.reduce((sum, val) => sum + val, 0);
            const result = whiteTotal - blackTotal;
            
            finalResult.innerHTML = `
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    White: ${whiteTotal} - Black: ${blackTotal}
                </div>
            `;
            
            divineResultModal.classList.remove('hidden');
        }

        // Divine roll event listeners
        divineNormal.addEventListener('click', () => rollDivine('normal'));
        divineAdvantage.addEventListener('click', () => rollDivine('advantage'));
        divineDisadvantage.addEventListener('click', () => rollDivine('disadvantage'));

        closeDivineResult.addEventListener('click', () => {
            divineResultModal.classList.add('hidden');
        });

        function rollDice(diceType) {
            // Extract the number from dice type (e.g., 'd20' -> 20)
            const sides = parseInt(diceType.substring(1));
            const roll = Math.floor(Math.random() * sides) + 1;
            
            // Show result in a simple modal
            showSimpleDiceResult(diceType, roll);
            
            // Hide the dice selection modal
            hideDiceSelectionModal();
        }

        function showSimpleDiceResult(diceType, roll) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                    <div class="text-center">
                        <div class="mb-4">
                            <i class="fas fa-dice text-4xl text-primary mb-2"></i>
                            <h3 class="text-lg font-semibold">${diceType.toUpperCase()} Roll</h3>
                        </div>
                        
                        <div class="mb-6">
                            <div class="text-4xl font-bold text-primary mb-2">${roll}</div>
                        </div>
                        
                        <div class="flex justify-center space-x-3">
                            <button type="button" class="roll-again-simple px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded">
                                <i class="fas fa-dice mr-1"></i>Roll Again
                            </button>
                            <button type="button" class="close-simple-roll px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Close</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.roll-again-simple').addEventListener('click', () => {
                const newRoll = Math.floor(Math.random() * parseInt(diceType.substring(1))) + 1;
                modal.querySelector('.text-4xl').textContent = newRoll;
            });
            
            modal.querySelector('.close-simple-roll').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

        // Save/Load Characters Event Listeners
        document.getElementById('saveCharactersBtn').addEventListener('click', saveAllCharacters);
        // Intelligent Load Functions
        function intelligentLoad() {
            // Trigger the hidden file input
            document.getElementById('loadFileInput').click();
        }

        function handleIntelligentLoad(event) {
            const file = event.target.files[0];
            if (!file) return;

            // Validate file type
            if (!file.name.endsWith('.json')) {
                showCustomDialog('Invalid File', 'Please select a valid JSON file.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Determine file type and handle accordingly
                    if (data.character) {
                        // Single character format
                        handleSingleCharacterLoad(data, file.name);
                    } else if (data.characters && Array.isArray(data.characters)) {
                        if (data.characters.length === 1) {
                            // Single character in array format
                            handleSingleCharacterLoad({ character: data.characters[0], exportDate: data.exportDate }, file.name);
                        } else {
                            // Multiple characters format
                            handleMultipleCharactersLoad(data, file.name);
                        }
                    } else {
                        showCustomDialog('Invalid File Format', 'The selected file does not contain valid character data.');
                        return;
                    }

                } catch (error) {
                    console.error('Error parsing file:', error);
                    showCustomDialog('File Error', 'Failed to read the file. Please ensure it is a valid RPG Character Manager export.');
                }
            };

            reader.readAsText(file);
            
            // Reset the file input so the same file can be selected again
            event.target.value = '';
        }

        function handleSingleCharacterLoad(data, fileName) {
            const characterToImport = data.character;
            
            // Validate character has required properties
            if (!characterToImport.name || !characterToImport.race || !characterToImport.class) {
                showCustomDialog('Invalid Character', 'The character data is incomplete or invalid.');
                return;
            }
            
            // Show confirmation dialog for single character
            const characterName = characterToImport.name;
            const exportDate = data.exportDate ? new Date(data.exportDate).toLocaleDateString() : 'Unknown';
            
            showLoadSingleCharacterConfirmDialog(
                characterName,
                exportDate,
                () => {
                    // User confirmed - proceed with import
                    importSingleCharacter(characterToImport);
                }
            );
        }

        function handleMultipleCharactersLoad(data, fileName) {
            // Validate the data structure
            if (!data.characters || !Array.isArray(data.characters)) {
                showCustomDialog('Invalid File Format', 'The selected file does not contain valid character data.');
                return;
            }

            // Show confirmation dialog with details for multiple characters
            const importCount = data.characters.length;
            const exportDate = data.exportDate ? new Date(data.exportDate).toLocaleDateString() : 'Unknown';
            const currentCount = characters.length;
            
            showLoadConfirmDialog(
                importCount, 
                exportDate, 
                currentCount, 
                () => {
                    // User confirmed - proceed with import
                    importCharacters(data.characters);
                }
            );
        }

        // Save and Load Functions
        function saveAllCharacters() {
            if (characters.length === 0) {
                showCustomDialog('No Characters', 'There are no characters to save.');
                return;
            }

            try {
                const dataToSave = {
                    version: "1.0",
                    exportDate: new Date().toISOString(),
                    characterCount: characters.length,
                    characters: characters
                };

                const dataStr = JSON.stringify(dataToSave, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                
                // Create download link
                const url = URL.createObjectURL(dataBlob);
                const downloadLink = document.createElement('a');
                downloadLink.href = url;
                downloadLink.download = `rpg-characters-${new Date().toISOString().split('T')[0]}.json`;
                
                // Trigger download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                // Clean up the URL object
                URL.revokeObjectURL(url);
                
                showCustomDialog('Export Successful', `Successfully exported ${characters.length} character(s) to your downloads folder.`);
            } catch (error) {
                console.error('Error saving characters:', error);
                showCustomDialog('Export Failed', 'Failed to export characters. Please try again.');
            }
        }

        function triggerLoadCharacters() {
            // Trigger the hidden file input
            document.getElementById('loadFileInput').click();
        }

        function loadCharactersFromFile(event) {
            const file = event.target.files[0];
            if (!file) return;

            // Validate file type
            if (!file.name.endsWith('.json')) {
                showCustomDialog('Invalid File', 'Please select a valid JSON file.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Validate the data structure
                    if (!data.characters || !Array.isArray(data.characters)) {
                        showCustomDialog('Invalid File Format', 'The selected file does not contain valid character data.');
                        return;
                    }

                    // Show confirmation dialog with details
                    const importCount = data.characters.length;
                    const exportDate = data.exportDate ? new Date(data.exportDate).toLocaleDateString() : 'Unknown';
                    const currentCount = characters.length;
                    
                    showLoadConfirmDialog(
                        importCount, 
                        exportDate, 
                        currentCount, 
                        () => {
                            // User confirmed - proceed with import
                            importCharacters(data.characters);
                        }
                    );

                } catch (error) {
                    console.error('Error parsing file:', error);
                    showCustomDialog('File Error', 'Failed to read the file. Please ensure it is a valid RPG Character Manager export.');
                }
            };

            reader.readAsText(file);
            
            // Reset the file input so the same file can be selected again
            event.target.value = '';
        }

        function showLoadConfirmDialog(importCount, exportDate, currentCount, onConfirm) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                        <i class="fas fa-upload mr-2"></i>Import Characters
                    </h3>
                    <div class="space-y-3 mb-6">
                        <p class="text-gray-700 dark:text-gray-300">
                            <strong>File contains:</strong> ${importCount} character(s)
                        </p>
                        <p class="text-gray-700 dark:text-gray-300">
                            <strong>Export date:</strong> ${exportDate}
                        </p>
                        <p class="text-gray-700 dark:text-gray-300">
                            <strong>Current characters:</strong> ${currentCount}
                        </p>
                        <div class="p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                            <p class="text-yellow-800 dark:text-yellow-200 text-sm">
                                <i class="fas fa-exclamation-triangle mr-1"></i>
                                ${currentCount > 0 ? 
                                    'This will replace all current characters. Your existing characters will be lost.' : 
                                    'This will import the characters from the file.'
                                }
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-end space-x-3">
                        <button class="cancel-import px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Cancel</button>
                        <button class="confirm-import px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded">Import Characters</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.confirm-import').addEventListener('click', () => {
                onConfirm();
                modal.remove();
            });
            
            modal.querySelector('.cancel-import').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

        function importCharacters(importedCharacters) {
            try {
                // Validate each character has required properties
                const validCharacters = importedCharacters.filter(char => {
                    return char.id && char.name && char.race && char.class;
                });

                if (validCharacters.length === 0) {
                    showCustomDialog('Import Failed', 'No valid characters found in the file.');
                    return;
                }

                // Replace current characters with imported ones
                characters = validCharacters.map(char => ({
                    // Ensure all required properties exist with defaults
                    id: char.id || Date.now().toString(),
                    name: char.name || 'Unknown Character',
                    level: char.level || 1,
                    race: char.race || 'Human',
                    class: char.class || 'Fighter',
                    str: char.str || 0,
                    dex: char.dex || 0,
                    con: char.con || 0,
                    int: char.int || 0,
                    wis: char.wis || 0,
                    cha: char.cha || 0,
                    proficiencies: char.proficiencies || { str: false, dex: false, con: false, int: false, wis: false, cha: false },
                    abilityScoreAllocations: char.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                    hpMax: char.hpMax || 0,
                    stressMax: char.stressMax || 0,
                    classMax: char.classMax || 0,
                    spellMax: char.spellMax || 0,
                    resources: char.resources || {
                        hp: { max: char.hpMax || 0, used: [], temp: 0 },
                        stress: { max: char.stressMax || 0, used: [], temp: 0 },
                        class: { max: char.classMax || 0, used: [], temp: 0 },
                        spell: { max: char.spellMax || 0, used: [], temp: 0 }
                    },
                    evasion: char.evasion || 0,
                    armor: char.armor || 1,
                    armorSlots: char.armorSlots || { total: char.armor || 1, filled: [], permanent: char.armor || 1, temporary: 0 },
                    thresholdLower: char.thresholdLower || 0,
                    thresholdUpper: char.thresholdUpper || 0,
                    equipment: char.equipment || [],
                    notes: char.notes || '',
                    // Preserve all other character properties
                    ...char
                }));

                // Clear current character if it no longer exists
                if (currentCharacter && !characters.find(c => c.id === currentCharacter.id)) {
                    currentCharacter = null;
                }

                // Save and update display
                saveCharacters();
                updateCharacterDisplay();
                
                // Show success message
                const importedCount = validCharacters.length;
                const skippedCount = importedCharacters.length - validCharacters.length;
                
                let message = `Successfully imported ${importedCount} character(s).`;
                if (skippedCount > 0) {
                    message += ` ${skippedCount} character(s) were skipped due to invalid data.`;
                }
                
                showCustomDialog('Import Successful', message);
                
                // Return to character list
                showCharacterList();

            } catch (error) {
                console.error('Error importing characters:', error);
                showCustomDialog('Import Failed', 'Failed to import characters. Please try again with a valid file.');
            }
        }

        // Character Deletion Functions
        function showCharacterDeletionModal() {
            if (!currentCharacter) return;
            
            const modal = document.getElementById('characterDeletionModal');
            const characterNameElement = document.getElementById('deleteCharacterName');
            const checkbox = document.getElementById('deleteConfirmationCheckbox');
            const confirmButton = document.getElementById('confirmCharacterDeletion');
            
            // Set character name in the modal
            characterNameElement.textContent = currentCharacter.name;
            
            // Reset checkbox and button state
            checkbox.checked = false;
            confirmButton.disabled = true;
            confirmButton.classList.add('opacity-50', 'cursor-not-allowed');
            
            modal.classList.remove('hidden');
        }

        function deleteCurrentCharacter() {
            if (!currentCharacter) return;
            
            // Find and remove the character from the characters array
            const characterIndex = characters.findIndex(char => char.id === currentCharacter.id);
            if (characterIndex !== -1) {
                characters.splice(characterIndex, 1);
                saveCharacters();
                
                // Hide the modal
                document.getElementById('characterDeletionModal').classList.add('hidden');
                
                // Go back to character list
                showCharacterList();
                updateCharacterDisplay();
                
                // Clear current character reference
                currentCharacter = null;
                
                showCustomDialog('Character Deleted', 'The character has been successfully deleted.');
            }
        }

        function showCharacterEdit() {
            document.querySelectorAll('.character-view').forEach(view => view.classList.remove('active'));
            document.getElementById('characterEdit').classList.add('active');
            populateCharacterEditForm();
        }

        function populateCharacterEditForm() {
            if (!currentCharacter) return;
            
            // Populate basic information
            document.getElementById('editCharName').value = currentCharacter.name || '';
            document.getElementById('editCharLevel').value = currentCharacter.level || 1;
            document.getElementById('editCharRace').value = currentCharacter.race || '--';
            document.getElementById('editCharClass').value = currentCharacter.class || '--';
            
            // Populate ability scores with manual input fields
            const raceAbilityBonuses = currentCharacter.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const primaryWeaponAbilityBonuses = currentCharacter.primaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const secondaryWeaponAbilityBonuses = currentCharacter.secondaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const armorAbilityBonuses = currentCharacter.armorAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            
            // Set the direct input fields with the current total values
            document.getElementById('editStrInput').value = (currentCharacter.str || 0) + raceAbilityBonuses.str + primaryWeaponAbilityBonuses.str + secondaryWeaponAbilityBonuses.str + armorAbilityBonuses.str;
            document.getElementById('editDexInput').value = (currentCharacter.dex || 0) + raceAbilityBonuses.dex + primaryWeaponAbilityBonuses.dex + secondaryWeaponAbilityBonuses.dex + armorAbilityBonuses.dex;
            document.getElementById('editConInput').value = (currentCharacter.con || 0) + raceAbilityBonuses.con + primaryWeaponAbilityBonuses.con + secondaryWeaponAbilityBonuses.con + armorAbilityBonuses.con;
            document.getElementById('editIntInput').value = (currentCharacter.int || 0) + raceAbilityBonuses.int + primaryWeaponAbilityBonuses.int + secondaryWeaponAbilityBonuses.int + armorAbilityBonuses.int;
            document.getElementById('editWisInput').value = (currentCharacter.wis || 0) + raceAbilityBonuses.wis + primaryWeaponAbilityBonuses.wis + secondaryWeaponAbilityBonuses.wis + armorAbilityBonuses.wis;
            document.getElementById('editChaInput').value = (currentCharacter.cha || 0) + raceAbilityBonuses.cha + primaryWeaponAbilityBonuses.cha + secondaryWeaponAbilityBonuses.cha + armorAbilityBonuses.cha;
            
            // Populate resources with the actual current maximum values
            document.getElementById('editHpMax').value = currentCharacter.resources?.hp?.max || currentCharacter.hpMax || 0;
            document.getElementById('editStressMax').value = currentCharacter.resources?.stress?.max || currentCharacter.stressMax || 0;
            document.getElementById('editClassMax').value = currentCharacter.resources?.class?.max || currentCharacter.classMax || 0;
            document.getElementById('editSpellMax').value = currentCharacter.resources?.spell?.max || currentCharacter.spellMax || 0;
            
            // Populate combat stats
            document.getElementById('editEvasion').value = currentCharacter.evasion || 0;
            document.getElementById('editArmor').value = currentCharacter.armor || 0;
            
            // Populate threshold values - show the actual stored base values
            document.getElementById('editThresholdLower').value = currentCharacter.thresholdLower || 0;
            document.getElementById('editThresholdUpper').value = currentCharacter.thresholdUpper || 0;
            
            // Handle familiar section
            const editFamiliarSection = document.getElementById('editFamiliarSection');
            if (currentCharacter.class === 'Wizard' || currentCharacter.class === 'Warlock') {
                editFamiliarSection.style.display = 'block';
                
                // Set familiar checkbox and name
                const hasFamiliarCheckbox = document.getElementById('editHasFamiliar');
                const familiarNameSection = document.getElementById('editFamiliarNameSection');
                const familiarNameInput = document.getElementById('editFamiliarName');
                
                if (currentCharacter.familiar) {
                    hasFamiliarCheckbox.checked = true;
                    familiarNameSection.classList.remove('hidden');
                    familiarNameInput.value = currentCharacter.familiar.name || 'Familiar';
                } else {
                    hasFamiliarCheckbox.checked = false;
                    familiarNameSection.classList.add('hidden');
                    familiarNameInput.value = '';
                }
            } else {
                editFamiliarSection.style.display = 'none';
            }
            
            // Handle companion section
            const editCompanionSection = document.getElementById('editCompanionSection');
            if (currentCharacter.class === 'Ranger') {
                editCompanionSection.style.display = 'block';
                
                // Set companion checkbox, name, and type
                const hasCompanionCheckbox = document.getElementById('editHasCompanion');
                const companionDetailsSection = document.getElementById('editCompanionDetailsSection');
                const companionNameInput = document.getElementById('editCompanionName');
                const companionTypeSelect = document.getElementById('editCompanionType');
                
                if (currentCharacter.companion) {
                    hasCompanionCheckbox.checked = true;
                    companionDetailsSection.classList.remove('hidden');
                    companionNameInput.value = currentCharacter.companion.name || 'Companion';
                    companionTypeSelect.value = currentCharacter.companion.type || 'Bear';
                } else {
                    hasCompanionCheckbox.checked = false;
                    companionDetailsSection.classList.add('hidden');
                    companionNameInput.value = '';
                    companionTypeSelect.value = '';
                }
            } else {
                editCompanionSection.style.display = 'none';
            }
            
            // Handle Jack of All Trades section
            const editJackOfAllTradesSection = document.getElementById('editJackOfAllTradesSection');
            if (currentCharacter.class === 'Bard') {
                editJackOfAllTradesSection.style.display = 'block';
                
                // Set Jack of All Trades checkbox
                const hasJackOfAllTradesCheckbox = document.getElementById('editHasJackOfAllTrades');
                
                if (currentCharacter.jackOfAllTradesActive) {
                    hasJackOfAllTradesCheckbox.checked = true;
                } else {
                    hasJackOfAllTradesCheckbox.checked = false;
                }
            } else {
                editJackOfAllTradesSection.style.display = 'none';
            }
            
            // Generate resource boxes
            setTimeout(() => {
                generateResourceBoxes('editHpBoxes', currentCharacter.resources?.hp?.max || currentCharacter.hpMax || 0, 'hp');
                generateResourceBoxes('editStressBoxes', currentCharacter.resources?.stress?.max || currentCharacter.stressMax || 0, 'stress');
                generateResourceBoxes('editClassBoxes', currentCharacter.resources?.class?.max || currentCharacter.classMax || 0, 'class');
                generateResourceBoxes('editSpellBoxes', currentCharacter.resources?.spell?.max || currentCharacter.spellMax || 0, 'spell');
            }, 100);
        }

        // Function to populate Character Creation form with existing character data
        function populateCharacterCreationForm() {
            if (!currentCharacter) return;
            
            // Switch to character edit view instead
            showCharacterEdit();
            
            // Wait for the form to be visible before populating
            setTimeout(() => {
                // Basic Information
                document.getElementById('charName').value = currentCharacter.name || '';
                document.getElementById('charLevel').value = currentCharacter.level || 1;
                document.getElementById('charRace').value = currentCharacter.race || '--';
                document.getElementById('charClass').value = currentCharacter.class || '--';
                
                // Handle race selection first to set up race bonuses/proficiencies
                if (currentCharacter.race && currentCharacter.race !== '--') {
                    updateRaceOptions(currentCharacter.race);
                    
                    // Restore race bonus selections
                    if (currentCharacter.selectedRaceBonuses) {
                        currentCharacter.selectedRaceBonuses.forEach(bonusIndex => {
                            const button = document.querySelector(`[data-index="${bonusIndex}"][data-category="bonus"]`);
                            if (button) {
                                button.classList.add('selected');
                                selectedRaceBonuses.push(bonusIndex);
                            }
                        });
                    }
                    
                    // Restore ability score selections if they exist
                    if (currentCharacter.abilityScoreAllocations) {
                        abilityScoreAllocations = { ...currentCharacter.abilityScoreAllocations };
                        
                        // Check if there are any non-zero allocations
                        const hasAllocations = Object.values(abilityScoreAllocations).some(value => value !== 0);
                        if (hasAllocations) {
                            selectedAbilityScores = currentCharacter.selectedAbilityScores || [];
                            const abilityButton = document.querySelector('[data-category="ability"]');
                            if (abilityButton) {
                                abilityButton.classList.add('selected');
                            }
                        }
                    }
                    
                    // Restore race proficiency selections
                    if (currentCharacter.selectedRaceProficiencies) {
                        currentCharacter.selectedRaceProficiencies.forEach(proficiency => {
                            const button = document.querySelector(`[data-ability="${proficiency}"].race-proficiency-button`);
                            if (button) {
                                button.classList.add('selected');
                                selectedRaceProficiencies.push(proficiency);
                            }
                        });
                    }
                    
                    // Restore race bonus values
                    if (currentCharacter.raceBonusValues) {
                        raceBonusValues = { ...currentCharacter.raceBonusValues };
                    }
                }
                
                // Handle class selection to update base values
                if (currentCharacter.class && currentCharacter.class !== '--') {
                    updateClassValues(currentCharacter.class);
                }
                
                // Ability Scores - restore modifiers and proficiencies
                if (currentCharacter.str !== undefined) selectedModifiers.str = currentCharacter.str;
                if (currentCharacter.dex !== undefined) selectedModifiers.dex = currentCharacter.dex;
                if (currentCharacter.con !== undefined) selectedModifiers.con = currentCharacter.con;
                if (currentCharacter.int !== undefined) selectedModifiers.int = currentCharacter.int;
                if (currentCharacter.wis !== undefined) selectedModifiers.wis = currentCharacter.wis;
                if (currentCharacter.cha !== undefined) selectedModifiers.cha = currentCharacter.cha;
                
                // Update used modifiers array
                usedModifiers = [];
                Object.values(selectedModifiers).forEach((modifier, index) => {
                    if (modifier !== null) {
                        const modifierIndex = availableModifiers.findIndex((mod, i) => 
                            mod === modifier && !usedModifiers.includes(i)
                        );
                        if (modifierIndex !== -1) {
                            usedModifiers.push(modifierIndex);
                        }
                    }
                });
                
                // Restore proficiencies
                if (currentCharacter.proficiencies) {
                    proficiencies = { ...currentCharacter.proficiencies };
                }
                
                // Resources - use base values only (not including race bonuses)
                const classInfo = classData[currentCharacter.class] || { hp: 0, stress: 0, class: 0, spell: 0 };
                document.getElementById('hpMax').value = classInfo.hp + (raceBonusValues.hp || 0);
                document.getElementById('stressMax').value = classInfo.stress + (raceBonusValues.stress || 0);
                document.getElementById('classMax').value = classInfo.class + (raceBonusValues.class || 0);
                document.getElementById('spellMax').value = classInfo.spell + (raceBonusValues.spell || 0);
                
                // Evasion - use base evasion (without temporary and armor values)
                let baseEvasion = currentCharacter.evasion || 0;
                
                // If we have evasion data, use the base value
                if (currentCharacter.evasionData && currentCharacter.evasionData.base !== undefined) {
                    baseEvasion = currentCharacter.evasionData.base;
                } else {
                    // Calculate base by removing temporary and armor bonuses
                    const tempEvasion = currentCharacter.evasionData?.temporary || 0;
                    const armorEvasion = getArmorEvasionValue(currentCharacter);
                    baseEvasion = (currentCharacter.evasion || 0) - tempEvasion - armorEvasion;
                }
                
                document.getElementById('evasion').value = baseEvasion;
                
                // Armor - use base armor value
                let baseArmor = 0;
                if (currentCharacter.armorSlots && currentCharacter.armorSlots.permanent !== undefined) {
                    baseArmor = currentCharacter.armorSlots.permanent;
                } else {
                    baseArmor = currentCharacter.armor || 0;
                }
                document.getElementById('armor').value = baseArmor;
                
                // Threshold - use base threshold values (not temporary)
                let baseLowerThreshold = currentCharacter.thresholdLower || 0;
                let baseUpperThreshold = currentCharacter.thresholdUpper || 0;
                
                // Remove temporary threshold bonuses if they exist
                if (currentCharacter.tempThreshold) {
                    baseLowerThreshold -= currentCharacter.tempThreshold.lower || 0;
                    baseUpperThreshold -= currentCharacter.tempThreshold.upper || 0;
                }
                
                document.getElementById('thresholdLower').value = baseLowerThreshold;
                document.getElementById('thresholdUpper').value = baseUpperThreshold;
                
                // Update all displays
                updateAvailableModifiers();
                updateAbilitySelectors();
                updateProficiencyCircles();
                updateAbilityScoreResults();
                
                // Regenerate resource boxes with current values
                setTimeout(() => {
                    generateResourceBoxes('hpBoxes', parseInt(document.getElementById('hpMax').value) || 0, 'hp');
                    generateResourceBoxes('stressBoxes', parseInt(document.getElementById('stressMax').value) || 0, 'stress');
                    generateResourceBoxes('classBoxes', parseInt(document.getElementById('classMax').value) || 0, 'class');
                    generateResourceBoxes('spellBoxes', parseInt(document.getElementById('spellMax').value) || 0, 'spell');
                }, 100);
                
            }, 100);
        }

        // Individual Character Save/Load Functions
        function saveIndividualCharacter() {
            if (!currentCharacter) return;
            
            try {
                const dataToSave = {
                    version: "1.0",
                    exportDate: new Date().toISOString(),
                    character: currentCharacter
                };
                
                const dataStr = JSON.stringify(dataToSave, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                
                // Create download link
                const url = URL.createObjectURL(dataBlob);
                const downloadLink = document.createElement('a');
                downloadLink.href = url;
                
                // Clean character name for filename
                const cleanName = currentCharacter.name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
                downloadLink.download = `${cleanName}-character.json`;
                
                // Trigger download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                // Clean up the URL object
                URL.revokeObjectURL(url);
                
                showCustomDialog('Character Saved', `Successfully saved ${currentCharacter.name} to your downloads folder.`);
            } catch (error) {
                console.error('Error saving character:', error);
                showCustomDialog('Save Failed', 'Failed to save character. Please try again.');
            }
        }
        
        function loadIndividualCharacter() {
            // Trigger the hidden file input for single character
            document.getElementById('loadSingleCharacterInput').click();
        }
        
        function loadSingleCharacterFromFile(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            // Validate file type
            if (!file.name.endsWith('.json')) {
                showCustomDialog('Invalid File', 'Please select a valid JSON file.');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Check if it's a single character file or characters file
                    let characterToImport = null;
                    
                    if (data.character) {
                        // Single character format
                        characterToImport = data.character;
                    } else if (data.characters && Array.isArray(data.characters) && data.characters.length === 1) {
                        // Single character in characters array format
                        characterToImport = data.characters[0];
                    } else if (data.characters && Array.isArray(data.characters) && data.characters.length > 1) {
                        showCustomDialog('Multiple Characters', 'This file contains multiple characters. Please use "Load All" to import multiple characters.');
                        return;
                    } else {
                        showCustomDialog('Invalid File Format', 'The selected file does not contain valid character data.');
                        return;
                    }
                    
                    // Validate character has required properties
                    if (!characterToImport.name || !characterToImport.race || !characterToImport.class) {
                        showCustomDialog('Invalid Character', 'The character data is incomplete or invalid.');
                        return;
                    }
                    
                    // Show confirmation dialog
                    const characterName = characterToImport.name;
                    const exportDate = data.exportDate ? new Date(data.exportDate).toLocaleDateString() : 'Unknown';
                    
                    showLoadSingleCharacterConfirmDialog(
                        characterName,
                        exportDate,
                        () => {
                            // User confirmed - proceed with import
                            importSingleCharacter(characterToImport);
                        }
                    );
                    
                } catch (error) {
                    console.error('Error parsing character file:', error);
                    showCustomDialog('File Error', 'Failed to read the file. Please ensure it is a valid character file.');
                }
            };
            
            reader.readAsText(file);
            
            // Reset the file input so the same file can be selected again
            event.target.value = '';
        }
        
        function showLoadSingleCharacterConfirmDialog(characterName, exportDate, onConfirm) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">
                        <i class="fas fa-user-plus mr-2"></i>Load Character
                    </h3>
                    <div class="space-y-3 mb-6">
                        <p class="text-gray-700 dark:text-gray-300">
                            <strong>Character:</strong> ${characterName}
                        </p>
                        <p class="text-gray-700 dark:text-gray-300">
                            <strong>Export date:</strong> ${exportDate}
                        </p>
                        <div class="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                            <p class="text-green-800 dark:text-green-200 text-sm">
                                <i class="fas fa-info-circle mr-1"></i>
                                This character will be added to your character list.
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-end space-x-3">
                        <button class="cancel-load px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Cancel</button>
                        <button class="confirm-load px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded">Load Character</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.confirm-load').addEventListener('click', () => {
                onConfirm();
                modal.remove();
            });
            
            modal.querySelector('.cancel-load').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }
        
        // Helper function to create a character from data with proper validation
        function createCharacterFromData(characterData, preserveId = null) {
            return {
                // Use preserved ID if provided, otherwise generate new one
                id: preserveId || Date.now().toString() + Math.random().toString(36).substr(2, 9),
                name: characterData.name || 'Unknown Character',
                level: characterData.level || 1,
                race: characterData.race || 'Human',
                class: characterData.class || 'Fighter',
                str: characterData.str || 0,
                dex: characterData.dex || 0,
                con: characterData.con || 0,
                int: characterData.int || 0,
                wis: characterData.wis || 0,
                cha: characterData.cha || 0,
                proficiencies: characterData.proficiencies || { str: false, dex: false, con: false, int: false, wis: false, cha: false },
                abilityScoreAllocations: characterData.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
                hpMax: characterData.hpMax || 0,
                stressMax: characterData.stressMax || 0,
                classMax: characterData.classMax || 0,
                spellMax: characterData.spellMax || 0,
                resources: characterData.resources || {
                    hp: { max: characterData.hpMax || 0, used: [], temp: 0 },
                    stress: { max: characterData.stressMax || 0, used: [], temp: 0 },
                    class: { max: characterData.classMax || 0, used: [], temp: 0 },
                    spell: { max: characterData.spellMax || 0, used: [], temp: 0 }
                },
                evasion: characterData.evasion || 0,
                armor: characterData.armor || 1,
                armorSlots: characterData.armorSlots || { total: characterData.armor || 1, filled: [], permanent: characterData.armor || 1, temporary: 0 },
                thresholdLower: characterData.thresholdLower || 0,
                thresholdUpper: characterData.thresholdUpper || 0,
                equipment: characterData.equipment || [],
                notes: characterData.notes || '',
                // Preserve all other character properties
                ...characterData,
                // Override ID only if preserveId is provided
                id: preserveId || Date.now().toString() + Math.random().toString(36).substr(2, 9)
            };
        }

        function showDuplicateCharacterDialog(characterData, callback) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                    <h3 class="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">
                        <i class="fas fa-exclamation-triangle mr-2"></i>Duplicate Character Name
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-4">
                        A character named <strong>"${characterData.name}"</strong> already exists.
                    </p>
                    <p class="text-gray-700 dark:text-gray-300 mb-6">
                        Would you like to:
                    </p>
                    
                    <div class="space-y-3 mb-6">
                        <label class="flex items-center cursor-pointer">
                            <input type="radio" name="duplicateAction" value="overwrite" class="mr-3">
                            <div>
                                <div class="font-medium">Overwrite existing character</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Replace the current character data with the new data</div>
                            </div>
                        </label>
                        
                        <label class="flex items-center cursor-pointer">
                            <input type="radio" name="duplicateAction" value="copy" class="mr-3">
                            <div>
                                <div class="font-medium">Create a copy</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Add as "${characterData.name} - copy"</div>
                            </div>
                        </label>
                    </div>
                    
                    <div class="flex justify-end space-x-3">
                        <button class="cancel-duplicate px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Cancel</button>
                        <button class="confirm-duplicate px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded">Continue</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.confirm-duplicate').addEventListener('click', () => {
                const selectedAction = modal.querySelector('input[name="duplicateAction"]:checked');
                if (!selectedAction) {
                    showCustomDialog('No Option Selected', 'Please select an option to continue.');
                    return;
                }
                
                let finalCharacterData = { ...characterData };
                
                if (selectedAction.value === 'copy') {
                    // Add " - copy" to the name for the copy option
                    finalCharacterData.name = `${characterData.name} - copy`;
                }
                
                callback(selectedAction.value, finalCharacterData);
                modal.remove();
            });
            
            modal.querySelector('.cancel-duplicate').addEventListener('click', () => {
                modal.remove();
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.remove();
                }
            });
        }

        function importSingleCharacter(characterData) {
            try {
                // Check for duplicate names
                const existingCharacter = characters.find(char => char.name === characterData.name);
                
                if (existingCharacter) {
                    // Show duplicate warning dialog
                    showDuplicateCharacterDialog(characterData, (action, finalCharacterData) => {
                        if (action === 'overwrite') {
                            // Update existing character with new data while preserving ID
                            const updatedCharacter = createCharacterFromData(finalCharacterData, existingCharacter.id);
                            const existingIndex = characters.findIndex(char => char.id === existingCharacter.id);
                            characters[existingIndex] = updatedCharacter;
                            
                            saveCharacters();
                            updateCharacterDisplay();
                            showCustomDialog('Character Updated', `Successfully updated ${updatedCharacter.name} with new data.`);
                        } else if (action === 'copy') {
                            // Create new character with copy name
                            const newCharacter = createCharacterFromData(finalCharacterData);
                            characters.push(newCharacter);
                            
                            saveCharacters();
                            updateCharacterDisplay();
                            showCustomDialog('Character Copy Created', `Successfully created ${newCharacter.name}.`);
                        }
                        
                        showCharacterList();
                    });
                    return;
                }
                
                // No duplicate found, proceed normally
                const newCharacter = createCharacterFromData(characterData);
                characters.push(newCharacter);
                
                saveCharacters();
                updateCharacterDisplay();
                showCustomDialog('Character Loaded', `Successfully loaded ${newCharacter.name} and added to your character list.`);
                showCharacterList();
                
            } catch (error) {
                console.error('Error importing character:', error);
                showCustomDialog('Import Failed', 'Failed to import character. Please try again with a valid file.');
            }
        }

        // Close modals when clicking outside
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('fixed') && e.target.classList.contains('inset-0')) {
                e.target.classList.add('hidden');
            }
        });

       // Create 6 weapon proficiency circles
        function createWeaponCircles() {
            const container = document.getElementById('weapon-circles-container');
            
            for (let i = 0; i < 6; i++) {
                const circle = document.createElement('button');
                circle.type = 'button';
                circle.className = 'weapon-proficiency-circle w-6 h-6 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-500 bg-transparent hover:border-gray-600 dark:hover:border-gray-300';
                circle.setAttribute('data-index', i);
                
                // First circle is always filled and unclickable
                if (i === 0) {
                    circle.className = 'weapon-proficiency-circle w-6 h-6 rounded-full border-2 bg-black proficient';
                    circle.setAttribute('data-filled', 'true');
                    circle.style.cursor = 'default';
                    circle.disabled = true;
                } else {
                    circle.setAttribute('data-filled', 'false');
                    
                    // Add click event listener for sequential filling/unfilling
                    circle.addEventListener('click', function() {
                        handleCircleClick(parseInt(this.getAttribute('data-index')));
                    });
                }
                
                container.appendChild(circle);
            }
        }

        // Handle manual circle clicks that update character data
        function handleCircleClick(clickedIndex) {
            if (!currentCharacter) return;
            
            const currentProficiency = currentCharacter.weaponProficiency || 1;
            
            // Check if this is the next circle to fill (left to right)
            if (clickedIndex === currentProficiency) {
                // Fill this circle and update character data
                currentCharacter.weaponProficiency = clickedIndex + 1;
                updateWeaponProficiencyDisplay(currentCharacter.weaponProficiency);
                saveCharacters();
            }
            // Check if this is the rightmost filled circle to unfill (right to left)
            else if (clickedIndex === currentProficiency - 1 && clickedIndex > 0) {
                // Unfill this circle and update character data
                currentCharacter.weaponProficiency = clickedIndex;
                updateWeaponProficiencyDisplay(currentCharacter.weaponProficiency);
                saveCharacters();
            }
        }

        // Dice rolling function for skills
        function rollSkillCheck(skillName, modifier) {
            const roll = Math.floor(Math.random() * 20) + 1;
            const total = roll + modifier;
            
            // Show the dice roll modal
            showDiceRollResult(skillName, roll, modifier, total);
        }

        function showDiceRollResult(skillName, roll, modifier, total) {
            const modal = document.getElementById('diceRollModal');
            
            // Update modal content
            document.getElementById('rollSkillName').textContent = skillName;
            document.getElementById('rollTotal').textContent = total;
            document.getElementById('rollBreakdown').textContent = `d20: ${roll} + modifier: ${modifier >= 0 ? '+' : ''}${modifier}`;
            
           /* // Update result badge based on roll
            const badge = document.getElementById('rollResultBadge');
            const resultText = document.getElementById('rollResultText');
            
           if (roll === 20) {
                badge.className = 'inline-block px-4 py-2 rounded-lg bg-gold-500 text-white';
                badge.style.backgroundColor = '#FFD700';
                resultText.textContent = 'Critical Success!';
            } else if (roll === 1) {
                badge.className = 'inline-block px-4 py-2 rounded-lg bg-red-500 text-white';
                resultText.textContent = 'Critical Failure!';
            } else if (total >= 15) {
                badge.className = 'inline-block px-4 py-2 rounded-lg bg-green-500 text-white';
                resultText.textContent = 'Great Success!';
            } else if (total >= 10) {
                badge.className = 'inline-block px-4 py-2 rounded-lg bg-blue-500 text-white';
                resultText.textContent = 'Success!';
            } else {
                badge.className = 'inline-block px-4 py-2 rounded-lg bg-gray-500 text-white';
                resultText.textContent = 'Failure';
            }*/
            
            // Store current roll data for "Roll Again"
            modal.dataset.skillName = skillName;
            modal.dataset.modifier = modifier;
            
            modal.classList.remove('hidden');
        }

        // Dice Roll Modal Event Listeners
document.getElementById('rollAgain').addEventListener('click', function() {
    const modal = document.getElementById('diceRollModal');
    const skillName = modal.dataset.skillName;
    const modifier = parseInt(modal.dataset.modifier);
    
    // Check if it's an ability check or skill check
    if (skillName.includes('Check')) {
        const abilityName = skillName.replace(' Check', '').toLowerCase();
        rollAbilityCheck(abilityName, modifier);
    } else {
        rollSkillCheck(skillName, modifier);
    }
});

        document.getElementById('closeDiceRoll').addEventListener('click', function() {
            document.getElementById('diceRollModal').classList.add('hidden');
        });

        // Dice rolling function for ability scores
function rollAbilityCheck(abilityName, modifier) {
    const roll = Math.floor(Math.random() * 20) + 1;
    const total = roll + modifier;
    
    // Show the dice roll modal with ability check formatting
    showDiceRollResult(`${abilityName.toUpperCase()} Check`, roll, modifier, total);
}

// Setup ability score dice rolling event listeners
function setupAbilityScoreDiceRolling(character) {
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    
    abilities.forEach(ability => {
        const textElement = document.getElementById(`display${ability.charAt(0).toUpperCase() + ability.slice(1)}`);
        if (textElement && character.currentAbilityScores) {
            // Get the stat-circle button (parent of the text element)
            const circleButton = textElement.parentNode;
            if (circleButton && circleButton.classList.contains('stat-circle')) {
                // Remove existing event listeners by cloning the element
                const newCircleButton = circleButton.cloneNode(true);
                circleButton.parentNode.replaceChild(newCircleButton, circleButton);
                
                // Add dice rolling to the button, but check if click came from proficiency circle
                newCircleButton.title = `Click to roll ${ability.toUpperCase()} check`;
                newCircleButton.classList.add('rollable-stat');
                
                newCircleButton.addEventListener('click', function(event) {
                    // Don't roll dice if click came from the proficiency circle
                    if (event.target.classList.contains('stat-proficiency')) {
                        return; // Let the existing proficiency handler deal with it
                    }
                    
                    const modifier = character.currentAbilityScores[ability];
                    rollAbilityCheck(ability, modifier);
                });
            }
        }
    });
}


        // Weapon proficiency level up function
        function applyWeaponProficiencyLevelUp() {
            if (!currentCharacter) return;
            
            // Initialize weapon proficiency if not present
            if (!currentCharacter.weaponProficiency) {
                currentCharacter.weaponProficiency = 1; // Start with 1 circle filled at level 1
            }
            
            // Check if we can fill another circle (max 6)
            if (currentCharacter.weaponProficiency < 6) {
                currentCharacter.weaponProficiency++;
            }
            
            // Update the weapon proficiency circles display
            updateWeaponProficiencyDisplay(currentCharacter.weaponProficiency);
        }

        // Update weapon proficiency display based on character data
        function updateWeaponProficiencyDisplay(proficiencyLevel) {
            const circles = document.querySelectorAll('.weapon-proficiency-circle');
            
            circles.forEach((circle, index) => {
                if (index < proficiencyLevel) {
                    circle.classList.add('proficient');
                    circle.setAttribute('data-filled', 'true');
                } else {
                    circle.classList.remove('proficient');
                    circle.setAttribute('data-filled', 'false');
                }
            });
        }

        // Count how many circles are currently filled
        function getFilledCircleCount() {
            return currentCharacter?.weaponProficiency || 1;
        }

        // Initialize circles when page loads
        document.addEventListener('DOMContentLoaded', createWeaponCircles);

        // Edit Character Form Event Handlers
        document.getElementById('editCharacterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!currentCharacter) return;
            
            // Update basic information
            currentCharacter.name = document.getElementById('editCharName').value;
            currentCharacter.level = parseInt(document.getElementById('editCharLevel').value);
            currentCharacter.race = document.getElementById('editCharRace').value;
            currentCharacter.class = document.getElementById('editCharClass').value;
            
            // Update ability scores from direct input fields - remove all existing bonuses and apply new totals
            const strInput = parseInt(document.getElementById('editStrInput').value) || 0;
            const dexInput = parseInt(document.getElementById('editDexInput').value) || 0;
            const conInput = parseInt(document.getElementById('editConInput').value) || 0;
            const intInput = parseInt(document.getElementById('editIntInput').value) || 0;
            const wisInput = parseInt(document.getElementById('editWisInput').value) || 0;
            const chaInput = parseInt(document.getElementById('editChaInput').value) || 0;
            
            // Calculate the base ability scores by removing all bonuses
            const raceAbilityBonuses = currentCharacter.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const primaryWeaponAbilityBonuses = currentCharacter.primaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const secondaryWeaponAbilityBonuses = currentCharacter.secondaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const armorAbilityBonuses = currentCharacter.armorAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            
            // Set base ability scores (input minus all bonuses)
            currentCharacter.str = strInput - raceAbilityBonuses.str - primaryWeaponAbilityBonuses.str - secondaryWeaponAbilityBonuses.str - armorAbilityBonuses.str;
            currentCharacter.dex = dexInput - raceAbilityBonuses.dex - primaryWeaponAbilityBonuses.dex - secondaryWeaponAbilityBonuses.dex - armorAbilityBonuses.dex;
            currentCharacter.con = conInput - raceAbilityBonuses.con - primaryWeaponAbilityBonuses.con - secondaryWeaponAbilityBonuses.con - armorAbilityBonuses.con;
            currentCharacter.int = intInput - raceAbilityBonuses.int - primaryWeaponAbilityBonuses.int - secondaryWeaponAbilityBonuses.int - armorAbilityBonuses.int;
            currentCharacter.wis = wisInput - raceAbilityBonuses.wis - primaryWeaponAbilityBonuses.wis - secondaryWeaponAbilityBonuses.wis - armorAbilityBonuses.wis;
            currentCharacter.cha = chaInput - raceAbilityBonuses.cha - primaryWeaponAbilityBonuses.cha - secondaryWeaponAbilityBonuses.cha - armorAbilityBonuses.cha;
            
            // Update resources
            currentCharacter.hpMax = parseInt(document.getElementById('editHpMax').value) || 0;
            currentCharacter.stressMax = parseInt(document.getElementById('editStressMax').value) || 0;
            currentCharacter.classMax = parseInt(document.getElementById('editClassMax').value) || 0;
            currentCharacter.spellMax = parseInt(document.getElementById('editSpellMax').value) || 0;
            
            // Update resources object
            if (!currentCharacter.resources) {
                currentCharacter.resources = {
                    hp: { max: 0, used: [], temp: 0 },
                    stress: { max: 0, used: [], temp: 0 },
                    class: { max: 0, used: [], temp: 0 },
                    spell: { max: 0, used: [], temp: 0 }
                };
            }
            
            currentCharacter.resources.hp.max = currentCharacter.hpMax;
            currentCharacter.resources.stress.max = currentCharacter.stressMax;
            currentCharacter.resources.class.max = currentCharacter.classMax;
            currentCharacter.resources.spell.max = currentCharacter.spellMax;
            
            // Clean up used resources that are now beyond the max
            Object.keys(currentCharacter.resources).forEach(resourceType => {
                const resource = currentCharacter.resources[resourceType];
                const totalMax = resource.max + (resource.temp || 0);
                resource.used = resource.used.filter(index => index < totalMax);
            });
            
            // Update combat stats
            currentCharacter.evasion = parseInt(document.getElementById('editEvasion').value) || 0;
            currentCharacter.armor = parseInt(document.getElementById('editArmor').value) || 0;
            
            // Update armor slots to match new armor value
            if (!currentCharacter.armorSlots) {
                currentCharacter.armorSlots = { 
                    total: currentCharacter.armor, 
                    filled: [],
                    permanent: currentCharacter.armor,
                    temporary: 0
                };
            } else {
                currentCharacter.armorSlots.permanent = currentCharacter.armor;
                currentCharacter.armorSlots.total = currentCharacter.armor + (currentCharacter.armorSlots.temporary || 0);
                // Remove filled states that are now beyond the total
                currentCharacter.armorSlots.filled = currentCharacter.armorSlots.filled.filter(index => index < currentCharacter.armorSlots.total);
            }
            
            // Update threshold values
            currentCharacter.thresholdLower = parseInt(document.getElementById('editThresholdLower').value) || 0;
            currentCharacter.thresholdUpper = parseInt(document.getElementById('editThresholdUpper').value) || 0;
            
            // Handle familiar data for Wizard and Warlock
            if (currentCharacter.class === 'Wizard' || currentCharacter.class === 'Warlock') {
                if (document.getElementById('editHasFamiliar').checked) {
                    const familiarName = document.getElementById('editFamiliarName').value.trim() || 'Familiar';
                    if (!currentCharacter.familiar) {
                        currentCharacter.familiar = {
                            name: familiarName,
                            hpUsed: false,
                            stressUsed: 0
                        };
                    } else {
                        currentCharacter.familiar.name = familiarName;
                    }
                } else {
                    // Remove familiar if unchecked
                    currentCharacter.familiar = null;
                }
            } else {
                // Remove familiar if class is changed away from Wizard/Warlock
                currentCharacter.familiar = null;
            }
            
            // Handle companion data for Ranger
            if (currentCharacter.class === 'Ranger') {
                if (document.getElementById('editHasCompanion').checked) {
                    const companionName = document.getElementById('editCompanionName').value.trim() || 'Companion';
                    const companionType = document.getElementById('editCompanionType').value || 'Bear';
                    if (!currentCharacter.companion) {
                        currentCharacter.companion = {
                            name: companionName,
                            type: companionType,
                            hpUsed: [], // Array of used HP box indices
                            stressUsed: [] // Array of used Stress box indices
                        };
                    } else {
                        currentCharacter.companion.name = companionName;
                        currentCharacter.companion.type = companionType;
                    }
                } else {
                    // Remove companion if unchecked
                    currentCharacter.companion = null;
                }
            } else {
                // Remove companion if class is changed away from Ranger
                currentCharacter.companion = null;
            }

            // Handle Jack of all Trades for Bard  
            if (currentCharacter.class === 'Bard') {
                if (document.getElementById('editHasJackOfAllTrades').checked) {
                    currentCharacter.jackOfAllTradesActive = true;
                } else {
                    currentCharacter.jackOfAllTradesActive = false;
                }
            } else {
                // Remove Jack of all Trades if class is changed away from Bard
                currentCharacter.jackOfAllTradesActive = false;
            }
            
            // Save changes
            saveCharacters();
            updateCharacterDisplay();
            showCharacterSheet(currentCharacter);
            // Update DC Save for the edited character
            updateDCSaveDisplay(currentCharacter);
        });

        // Edit form resource input event listeners
        document.getElementById('editHpMax').addEventListener('input', function() {
            generateResourceBoxes('editHpBoxes', parseInt(this.value) || 0, 'hp');
        });
        
        document.getElementById('editStressMax').addEventListener('input', function() {
            generateResourceBoxes('editStressBoxes', parseInt(this.value) || 0, 'stress');
        });
        
        document.getElementById('editClassMax').addEventListener('input', function() {
            generateResourceBoxes('editClassBoxes', parseInt(this.value) || 0, 'class');
        });
        
        document.getElementById('editSpellMax').addEventListener('input', function() {
            generateResourceBoxes('editSpellBoxes', parseInt(this.value) || 0, 'spell');
        });

        // Unarmored Defense helper functions
        function getCurrentDexModifier(character) {
            const raceAbilityBonuses = character.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const primaryWeaponAbilityBonuses = character.primaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const secondaryWeaponAbilityBonuses = character.secondaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const armorAbilityBonuses = character.armorAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            
            return (character.dex || 0) + raceAbilityBonuses.dex + primaryWeaponAbilityBonuses.dex + secondaryWeaponAbilityBonuses.dex + armorAbilityBonuses.dex;
        }
        
        function getCurrentConModifier(character) {
            const raceAbilityBonuses = character.abilityScoreAllocations || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const primaryWeaponAbilityBonuses = character.primaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const secondaryWeaponAbilityBonuses = character.secondaryWeaponAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            const armorAbilityBonuses = character.armorAbilityBonuses || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
            
            return (character.con || 0) + raceAbilityBonuses.con + primaryWeaponAbilityBonuses.con + secondaryWeaponAbilityBonuses.con + armorAbilityBonuses.con;
        }
        
        function getInitialDexModifier(character) {
            return character.initialModifiers?.dex || 0;
        }
        
        function handleUnarmoredDefenseToggle(isChecked) {
            if (!currentCharacter) return;
            
            if (isChecked) {
                // Apply Unarmored Defense transformation
                applyUnarmoredDefenseTransformation();
                currentCharacter.unarmoredDefenseActive = true;
            } else {
                // Remove Unarmored Defense transformation
                removeUnarmoredDefenseTransformation();
                currentCharacter.unarmoredDefenseActive = false;
            }
            
            saveCharacters();
            populateCharacterSheet(currentCharacter);
        }
        
        function applyUnarmoredDefenseTransformation() {
            if (!currentCharacter) return;
            
            // Store current armor for restoration (like Wild Beast does)
            if (!currentCharacter.unarmoredDefenseStoredEquipment && currentCharacter.armorItem) {
                currentCharacter.unarmoredDefenseStoredEquipment = {
                    armorItem: currentCharacter.armorItem ? { ...currentCharacter.armorItem } : null,
                    armorBonuses: { ...currentCharacter.armorBonuses } || {},
                    armorAbilityBonuses: { ...currentCharacter.armorAbilityBonuses } || { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 }
                };
            }
            
            // Remove current armor bonuses (if any)
            if (currentCharacter.armorItem && !currentCharacter.armorItem.isUnarmoredDefense) {
                removeArmorBonuses(currentCharacter.armorItem.bonuses);
            }
            
            // Clear current armor
            if (currentCharacter.armorItem && !currentCharacter.armorItem.isUnarmoredDefense) {
                delete currentCharacter.armorItem;
            }
            
            // Apply Unarmored Defense bonuses
            applyUnarmoredDefenseBonuses();
        }

        function removeUnarmoredDefenseTransformation() {
            if (!currentCharacter) return;
            
            // Remove Unarmored Defense bonuses
            removeUnarmoredDefenseBonuses();
            
            // Restore stored armor if it exists
            if (currentCharacter.unarmoredDefenseStoredEquipment) {
                const stored = currentCharacter.unarmoredDefenseStoredEquipment;
                
                if (stored.armorItem) {
                    currentCharacter.armorItem = { ...stored.armorItem };
                    currentCharacter.armorBonuses = { ...stored.armorBonuses };
                    currentCharacter.armorAbilityBonuses = { ...stored.armorAbilityBonuses };
                    applyArmorBonuses(stored.armorItem.bonuses);
                }
                
                // Clear stored equipment
                delete currentCharacter.unarmoredDefenseStoredEquipment;
            }
        }

        function applyUnarmoredDefenseBonuses() {
            if (!currentCharacter) return;
            
            // Initialize evasion data if missing
            if (!currentCharacter.evasionData) {
                currentCharacter.evasionData = {
                    base: currentCharacter.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            // Add initial DEX modifier to evasion data
            const initialDexMod = getInitialDexModifier(currentCharacter);
            currentCharacter.evasionData.unarmoredDefense = initialDexMod;
            
            // Update character's main evasion value
            currentCharacter.evasion = getCurrentEvasion(currentCharacter);
            
            // Apply threshold bonuses for Barbarians (+1/+1 per level)
            if (currentCharacter.class === 'Barbarian') {
                const level = currentCharacter.level || 1;
                
                // Initialize Unarmored Defense threshold bonuses
                if (!currentCharacter.unarmoredDefenseThresholdBonuses) {
                    currentCharacter.unarmoredDefenseThresholdBonuses = { lower: 0, upper: 0 };
                }
                
                // Apply +3/+3 threshold bonus per level
                currentCharacter.unarmoredDefenseThresholdBonuses.lower = level * 3;
                currentCharacter.unarmoredDefenseThresholdBonuses.upper = level * 3;
            }
            else if (currentCharacter.class === 'Monk') {
                const level = currentCharacter.level || 1;
                
                // Initialize Unarmored Defense threshold bonuses
                if (!currentCharacter.unarmoredDefenseThresholdBonuses) {
                    currentCharacter.unarmoredDefenseThresholdBonuses = { lower: 0, upper: 0 };
                }
                
                // Apply +2/+2 threshold bonus per level
                currentCharacter.unarmoredDefenseThresholdBonuses.lower = level * 2;
                currentCharacter.unarmoredDefenseThresholdBonuses.upper = level * 2;
            }
            
            // Auto-equip ceremonial Unarmored Defense "armor" for display purposes  
            if (!currentCharacter.armorItem) {
                currentCharacter.armorItem = createUnarmoredDefenseArmor(currentCharacter.class);
            }
        }
        
        function removeUnarmoredDefenseBonuses() {
            if (!currentCharacter) return;
            
            // Initialize evasion data if missing
            if (!currentCharacter.evasionData) {
                currentCharacter.evasionData = {
                    base: currentCharacter.evasion || 0,
                    temporary: 0,
                    unarmoredDefense: 0,
                    mageArmor: 0
                };
            }
            
            // Remove Unarmored Defense evasion bonus
            currentCharacter.evasionData.unarmoredDefense = 0;
            
            // Update character's main evasion value
            currentCharacter.evasion = getCurrentEvasion(currentCharacter);
            
            // Remove Unarmored Defense "armor" if present
            if (currentCharacter.armorItem && currentCharacter.armorItem.isUnarmoredDefense) {
                delete currentCharacter.armorItem;
            }
        }
        
        function createUnarmoredDefenseArmor(characterClass) {
            if (characterClass === 'Barbarian') {
                return {
                    name: "Unarmored Defense (Barbarian)",
                    thresholdLower: 0,
                    thresholdUpper: 0,
                    armor: 0,
                    feature: "DEX to Evasion & Thresholds, CON to Upper Threshold",
                    bonuses: {}, // No actual bonuses - purely ceremonial
                    isUnarmoredDefense: true
                };
            } else if (characterClass === 'Monk') {
                return {
                    name: "Unarmored Defense (Monk)",
                    thresholdLower: 0,
                    thresholdUpper: 0,
                    armor: 0,
                    feature: "DEX to Evasion & Thresholds",
                    bonuses: {}, // No actual bonuses - purely ceremonial
                    isUnarmoredDefense: true
                };
            }
            return null;
        }
        function createMageArmor(characterClass) {
            if (characterClass === 'Wizard') {
                return {
                    name: "Mage Armor (Wizard)",
                    thresholdLower: 0,
                    thresholdUpper: 0,
                    armor: 0,
                    feature: "DEX to Evasion, Threshold level/2xlevel",
                    bonuses: {}, // No actual bonuses - purely ceremonial
                    isMageArmor: true
                };
            } else if (characterClass === 'Sorcerer') {
                return {
                    name: "Mage Armor (Sorcerer)",
                    thresholdLower: 0,
                    thresholdUpper: 0,
                    armor: 0,
                    feature: "DEX to Evasion, Threshold level/2xlevel",
                    bonuses: {}, // No actual bonuses - purely ceremonial
                    isMageArmor: true
                };
            }
            return null;
        }
        
        function applyUnarmoredDefenseThresholdBonuses() {
            if (!currentCharacter || !currentCharacter.unarmoredDefenseActive) return;
            
            // Initialize if not present
            if (!currentCharacter.unarmoredDefenseThresholdBonuses) {
                currentCharacter.unarmoredDefenseThresholdBonuses = { lower: 0, upper: 0 };
            }
            
            // Add level-up bonus for Barbarians and Monks (+1/+1)
            if ((currentCharacter.class === 'Barbarian' || currentCharacter.class === 'Monk') && currentCharacter.level > 1) {
                currentCharacter.unarmoredDefenseThresholdBonuses.lower += (currentCharacter.level - 1);
                currentCharacter.unarmoredDefenseThresholdBonuses.upper += (currentCharacter.level - 1);
            }
        }
        
        function removeUnarmoredDefenseThresholdBonuses() {
            if (!currentCharacter) return;
            
            // Clear any Unarmored Defense threshold bonuses
            if (currentCharacter.unarmoredDefenseThresholdBonuses) {
                currentCharacter.unarmoredDefenseThresholdBonuses = { lower: 0, upper: 0 };
            }
        }
        
        function updateUnarmoredDefenseDisplay() {
            if (!currentCharacter) return;
            
            const section = document.getElementById('unarmoredDefenseSection');
            const checkbox = document.getElementById('unarmoredDefenseToggle');
            const description = document.getElementById('unarmoredDefenseDescription');
            
            // Show section only for Barbarian and Monk
            if (currentCharacter.class === 'Barbarian' || currentCharacter.class === 'Monk') {
                section.style.display = 'block';
                
                // Set description based on class
                if (currentCharacter.class === 'Monk') {
                    description.textContent = 'Add initial DEX modifier to Evasion and current DEX modifier to Thresholds';
                } else if (currentCharacter.class === 'Barbarian') {
                    description.textContent = 'Add initial DEX modifier to Evasion, current DEX to Lower Threshold, DEX+CON to Upper Threshold';
                }
                
                // Always keep checkbox enabled - just reflect current state
                checkbox.disabled = false;
                checkbox.checked = currentCharacter.unarmoredDefenseActive || false;
            } else {
                section.style.display = 'none';
            }
        }
        
        // Mage Armor Functions
        function handleMageArmorToggle(isChecked) {
            if (!currentCharacter) return;
            
            if (isChecked) {
                // Apply Mage Armor bonuses
                applyMageArmorBonuses();
                currentCharacter.mageArmorActive = true;
            } else {
                // Remove Mage Armor bonuses
                removeMageArmorBonuses();
                currentCharacter.mageArmorActive = false;
            }
            
            saveCharacters();
            populateCharacterSheet(currentCharacter);
        }
        

        function applyMageArmorBonuses() {
            if (!currentCharacter) return;
            
            const currentDex = getCurrentDexModifier(currentCharacter);
            const level = currentCharacter.level || 1;
            
            // Initialize Mage Armor bonuses if not present
            if (!currentCharacter.mageArmorBonuses) {
                currentCharacter.mageArmorBonuses = {
                    evasion: 0,
                    thresholdLower: 0,
                    thresholdUpper: 0
                };
            }
            
            // Calculate bonuses
            const evasionBonus = Math.max(1, currentDex);
            const lowerThresholdBonus = level;
            const upperThresholdBonus = level * 2;
            
            // Apply evasion bonus to current evasion
            currentCharacter.evasion = (currentCharacter.evasion || 0) + evasionBonus;
            
            // Apply temporary threshold bonuses
            if (!currentCharacter.tempThreshold) {
                currentCharacter.tempThreshold = { lower: 0, upper: 0 };
            }
            
            currentCharacter.tempThreshold.lower += lowerThresholdBonus;
            currentCharacter.tempThreshold.upper += upperThresholdBonus;
            
            // Store the applied bonuses for removal later
            currentCharacter.mageArmorBonuses = {
                evasion: evasionBonus,
                thresholdLower: lowerThresholdBonus,
                thresholdUpper: upperThresholdBonus
            };
            // Auto-equip ceremonial Mage Armor "armor" for display purposes  
if (!currentCharacter.armorItem) {
    currentCharacter.armorItem = createMageArmor(currentCharacter.class);
}
        }
        
        function removeMageArmorBonuses() {
            if (!currentCharacter || !currentCharacter.mageArmorBonuses) return;
            
            const bonuses = currentCharacter.mageArmorBonuses;
            
            // Remove evasion bonus
            currentCharacter.evasion = (currentCharacter.evasion || 0) - bonuses.evasion;
            
            // Remove temporary threshold bonuses
            if (currentCharacter.tempThreshold) {
                currentCharacter.tempThreshold.lower -= bonuses.thresholdLower;
                currentCharacter.tempThreshold.upper -= bonuses.thresholdUpper;
                
                // Ensure temp thresholds don't go negative
                currentCharacter.tempThreshold.lower = Math.max(0, currentCharacter.tempThreshold.lower);
                currentCharacter.tempThreshold.upper = Math.max(0, currentCharacter.tempThreshold.upper);
            }
            
            // Clear the stored bonuses
            currentCharacter.mageArmorBonuses = {
                evasion: 0,
                thresholdLower: 0,
                thresholdUpper: 0
            };
            // Remove Mage Armor "armor" if present
if (currentCharacter.armorItem && currentCharacter.armorItem.isMageArmor) {
    delete currentCharacter.armorItem;
}

        }
        
        function updateMageArmorDisplay() {
            if (!currentCharacter) return;
            
            const section = document.getElementById('mageArmorSection');
            const checkbox = document.getElementById('mageArmorToggle');
            
            // Show section only for Wizard and Sorcerer
            if (currentCharacter.class === 'Wizard' || currentCharacter.class === 'Sorcerer') {
                section.style.display = 'block';
                checkbox.checked = currentCharacter.mageArmorActive || false;
            } else {
                section.style.display = 'none';
            }
        }

        function updateJackOfAllTradesDisplay() {
            if (!currentCharacter) return;
            
            const section = document.getElementById('jackOfAllTradesSheetSection');
            const description = document.getElementById('jackOfAllTradesDescription');
            
            // Show section only for Bard with Jack of all Trades active
            if (currentCharacter.class === 'Bard' && currentCharacter.jackOfAllTradesActive) {
                section.style.display = 'block';
                
                // Calculate Jack of all Trades bonus based on level
                const level = currentCharacter.level || 1;
                let jackBonus = 1; // Default bonus
                
                if (level >= 5 && level <= 7) {
                    jackBonus = 2;
                } else if (level >= 8 && level <= 10) {
                    jackBonus = 3;
                }
                
                description.textContent = `All skills have increased by +${jackBonus}, Ability proficiency is added.`;
            } else {
                section.style.display = 'none';
            }
        }

// Simplified coin management functions (add this to your main JS file)
let currentCoinType = null;

function initializeCharacterCoins(character) {
    if (!character.coins) {
        character.coins = {
            platinum: 0,
            gold: 0,
            silver: 0,
            copper: 0
        };
    }
}

function openCoinModal(coinType) {
    if (!currentCharacter) {
        showCustomDialog('No Character Selected', 'Please select a character first.');
        return;
    }

    initializeCharacterCoins(currentCharacter);
    currentCoinType = coinType;
    
    const modal = document.getElementById('coinModal');
    const coinTypeName = document.getElementById('coinTypeName');
    const currentAmount = document.getElementById('currentAmount');
    const coinAmountInput = document.getElementById('coinAmount');
    const convertButton = document.getElementById('convertCoin');

    coinTypeName.textContent = coinType;
    currentAmount.textContent = currentCharacter.coins[coinType];
    coinAmountInput.value = '';
    coinAmountInput.focus();
    
    // Show/hide convert button based on coin type
    if (coinType === 'platinum') {
        convertButton.style.display = 'none'; // Hide for platinum since it's the highest
    } else {
        convertButton.style.display = 'block';
        
        // Update button text to show what it converts to
        const nextCoin = coinType === 'copper' ? 'Silver' : 
                        coinType === 'silver' ? 'Gold' : 'Platinum';
        convertButton.innerHTML = `<i class="fas fa-exchange-alt mr-1"></i>Convert to ${nextCoin}`;
    }

    modal.classList.remove('hidden');
}

function closeCoinModal() {
    document.getElementById('coinModal').classList.add('hidden');
    currentCoinType = null;
}

function convertCurrentCoin() {
    if (!currentCharacter || !currentCoinType) return;
    
    initializeCharacterCoins(currentCharacter);
    
    let converted = false;
    
    switch (currentCoinType) {
        case 'copper':
            if (currentCharacter.coins.copper >= 10) {
                const silverToAdd = Math.floor(currentCharacter.coins.copper / 10);
                currentCharacter.coins.silver += silverToAdd;
                currentCharacter.coins.copper = currentCharacter.coins.copper % 10;
                converted = true;
            }
            break;
            
        case 'silver':
            if (currentCharacter.coins.silver >= 10) {
                const goldToAdd = Math.floor(currentCharacter.coins.silver / 10);
                currentCharacter.coins.gold += goldToAdd;
                currentCharacter.coins.silver = currentCharacter.coins.silver % 10;
                converted = true;
            }
            break;
            
        case 'gold':
            if (currentCharacter.coins.gold >= 10) {
                const platinumToAdd = Math.floor(currentCharacter.coins.gold / 10);
                currentCharacter.coins.platinum += platinumToAdd;
                currentCharacter.coins.gold = currentCharacter.coins.gold % 10;
                converted = true;
            }
            break;
            
        case 'platinum':
            // Platinum is the highest denomination, no conversion possible
            showCustomDialog('Cannot Convert', 'Platinum is the highest coin denomination.');
            return;
    }
    
    if (converted) {
        // Update all displays since multiple coin types changed
        updateAllCoinDisplays();
        updateCurrentAmountInModal();
        saveCharacters();
        
        // Show success message
        const nextCoin = currentCoinType === 'copper' ? 'silver' : 
                        currentCoinType === 'silver' ? 'gold' : 'platinum';
        showCustomDialog('Conversion Complete', `Successfully converted ${currentCoinType} to ${nextCoin}!`);
    } else {
        showCustomDialog('Cannot Convert', `You need at least 10 ${currentCoinType} to convert.`);
    }
}

// Update the addCoins function to use conversion
function addCoins() {
    const amount = parseInt(document.getElementById('coinAmount').value) || 0;
    if (amount > 0 && currentCoinType && currentCharacter) {
        initializeCharacterCoins(currentCharacter);
        currentCharacter.coins[currentCoinType] += amount;
        updateCoinDisplay(currentCoinType);
        updateCurrentAmountInModal();
        document.getElementById('coinAmount').value = '';
        saveCharacters();
        closeCoinModal();
    }
}
function subtractCoins() {
    const amount = parseInt(document.getElementById('coinAmount').value) || 0;
    if (amount > 0 && currentCoinType && currentCharacter) {
        initializeCharacterCoins(currentCharacter);
        currentCharacter.coins[currentCoinType] = Math.max(0, currentCharacter.coins[currentCoinType] - amount);
        updateCoinDisplay(currentCoinType);
        updateCurrentAmountInModal();
        document.getElementById('coinAmount').value = '';
        saveCharacters();
        closeCoinModal();
    }
}

function updateCurrentAmountInModal() {
    if (currentCoinType && currentCharacter) {
        document.getElementById('currentAmount').textContent = currentCharacter.coins[currentCoinType];
    }
}

function updateCoinDisplay(coinType) {
    const displayElement = document.getElementById(`display${coinType.charAt(0).toUpperCase() + coinType.slice(1)}`);
    if (displayElement && currentCharacter) {
        displayElement.textContent = currentCharacter.coins[coinType];
    }
}

function updateAllCoinDisplays() {
    if (!currentCharacter) {
        // Clear displays when no character is selected
        ['platinum', 'gold', 'silver', 'copper'].forEach(coinType => {
            const displayElement = document.getElementById(`display${coinType.charAt(0).toUpperCase() + coinType.slice(1)}`);
            if (displayElement) {
                displayElement.textContent = '0';
            }
        });
        return;
    }

    initializeCharacterCoins(currentCharacter);
    ['platinum', 'gold', 'silver', 'copper'].forEach(coinType => {
        updateCoinDisplay(coinType);
    });
}

