import type { CharacterProfile } from '../../types/matchup.js';

export const pokemonTrainer: CharacterProfile = {
  characterId: 'pokemon_trainer',
  displayName: 'Pokémon Trainer',
  iconPath: '/icons/pokemon_trainer.png',
  archetype: 'Multi-Fighter Stance',
  fastestOOS: 'Squirtle Up-B (Frame 5), Ivysaur Nair (Frame 12)',
  archetypeNotes: {
    'Zoner / Trapper': {
      ratio: 'Even',
      summary: 'Weave under projectiles with Squirtle, match mid-range with Ivysaur Razor Leaf, and close stocks with Charizard.',
      neutralKeys: [
        'Use Squirtle’s low profile and fast ground speed to weave inside projectile deadzones.',
        'Swap to Ivysaur to contest mid-range with Razor Leaf and disjointed Bair.',
      ],
      advantageTips: [
        'Edgeguard floaty zoners with Ivysaur Dair spikes or Vine Whip (Up-B) sweetspots.',
        'Swap to Charizard above 100% for Frame 6 Up-Smash OOS and Bair kills.',
      ],
      disadvantageTips: [
        'Use Pokémon Change invulnerability frames (Frames 1–24) to escape trap setups.',
        'Recover with Charizard’s extra mid-air jump when knocked far off-stage.',
      ],
    },
    'Rushdown / Burst': {
      ratio: 'Even',
      summary: 'Win early scrambles with Squirtle’s Frame 4 Nair and Frame 5 Up-B OOS, then switch to Ivysaur and Charizard as percent rises.',
      neutralKeys: [
        'Match close-range rushdown frame data with Squirtle’s Nair and Grab combos.',
        'Wall out burst dash-ins at mid-percent with Ivysaur’s retreating Bair.',
      ],
      advantageTips: [
        'Confirm Ivysaur D-throw -> Vine Whip to take stocks around 85–100%.',
        'Punish aggressive landings with Charizard’s Frame 6 Up-Smash OOS.',
      ],
      disadvantageTips: [
        'Use Pokémon Change invulnerability to break out of tight juggle pressure.',
        'Switch to Charizard for heavy survivability and extra jumps when recovering.',
      ],
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Whiff-punish sword swings with Squirtle’s dash speed and contest mid-range spacing with Ivysaur’s Bair and Razor Leaf.',
      neutralKeys: [
        'Use Ivysaur’s Razor Leaf and long-reaching Bair to match sword disjoints.',
        'Dash-dance with Squirtle to whiff-punish extended sword aerials into Grab combos.',
      ],
      advantageTips: [
        '2-frame vertical sword recoveries at the ledge with Ivysaur’s massive Dair hitbox.',
        'Close high-percent stocks with Charizard Bair or Flare Blitz tech-chases.',
      ],
      disadvantageTips: [
        'Avoid recovering linearly with Ivysaur’s tether against sword Counters; switch to Charizard.',
        'Use Pokémon Change invulnerability to escape corner landing traps.',
      ],
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Build 0–60% instantly with Squirtle throw loops, spike recoveries with Ivysaur Dair, and kill early with Charizard.',
      neutralKeys: [
        'Open every stock with Squirtle D-throw / Up-throw loops on giant hurtboxes.',
        'Switch to Ivysaur at 50% to wall out heavy approaches with Bair and Razor Leaf.',
      ],
      advantageTips: [
        'Intercept linear heavy recoveries with Ivysaur’s Dair spike or Vine Whip.',
        'Use Charizard’s Frame 6 Up-Smash OOS to kill heavies landing on shield.',
      ],
      disadvantageTips: [
        'Respect mid-percent grab kill setups; switch off Squirtle before 70% to avoid early death.',
        'Use Charizard’s weight and extra jumps to survive heavy edgeguards.',
      ],
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Cycle through Squirtle, Ivysaur, and Charizard cleanly by percent to always hold the matchup tool advantage.',
      neutralKeys: [
        'Use Squirtle (0–45%) for combo speed, Ivysaur (45–95%) for disjoint walls, and Charizard (95%+) for survivability.',
        'Punish rival stance swaps with Ivysaur Razor Leaf into Vine Whip.',
      ],
      advantageTips: [
        'Exploit weak vertical recoveries with Ivysaur Dair spikes.',
        'Ledge-trap with Charizard Flamethrower to catch regular getup and jump.',
      ],
      disadvantageTips: [
        'Leverage Pokémon Change invulnerability frames to escape disadvantage strings.',
        'Recover high with Charizard’s extra mid-air jump.',
      ],
    },
    'Hit-and-Run / Speedster': {
      ratio: 'Even',
      summary: 'Hold center stage with Ivysaur’s Bair walls and punish cross-up spin attacks with Charizard’s Frame 6 Up-Smash OOS.',
      neutralKeys: [
        'Wall out high-speed dash lanes with Ivysaur’s Razor Leaf and retreating Bair.',
        'Switch to Charizard at higher percents to punish cross-ups with Frame 6 Up-Smash OOS.',
      ],
      advantageTips: [
        'Swat high recovery arcs with Ivysaur Up-Air or Vine Whip.',
        'Ledge-trap with Charizard Flamethrower to cover jump escapes.',
      ],
      disadvantageTips: [
        'Use Charizard’s extra jumps to avoid getting stage-spiked by deep Bairs.',
        'SDI outward against vertical ladder combos.',
      ],
    },
  },
  matchups: {
    toon_link: {
      ratio: 'Even',
      summary: 'Squirtle rushes down Toon Link, Ivysaur out-ranges him with disjoints, and Charizard survives his kill confirms.',
      neutralKeys: [
        'Use Squirtle low profile and fast dash to run beneath Boomerangs and start combo loops.',
        'Switch to Ivysaur at mid-range to control horizontal space with Razor Leaf.'
      ],
      advantageTips: [
        'Ivysaur Down-Air off-stage spikes Toon Link tether recovery easily.',
        'Charizard Up-Smash catches Toon Link floaty landing drift.'
      ],
      disadvantageTips: [
        'Toon Link bomb drops off-stage intercept Ivysaur tether grapple cleanly.',
        'Avoid getting caught in Toon Link bomb-to-Fair confirms as Squirtle.'
      ]
    },
    roy: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Roy rushdown overwhelms Ivysaur slower startups and combos Charizard heavy hurtbox heavily.',
      neutralKeys: [
        'Use Squirtle to contest Roy dash-ins with fast Fair and low-profile tilt strings.',
        'Keep Roy at distance with Ivysaur Razor Leaf; avoid letting him into unspaced hilt range.'
      ],
      advantageTips: [
        'Ivysaur Down-Air spikes Roy vulnerable vertical Blazer recovery.',
        'Charizard Down-Throw into Fair confirms kill Roy at high percent near ledge.'
      ],
      disadvantageTips: [
        'Roy off-stage Counter invalidates Charizard Flare Blitz and Ivysaur tether recovery.',
        'SDI outward on Roy sweetspot Jab to escape guaranteed Bair knockouts.'
      ]
    },
    fox: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Fox ground speed out-paces the trainer roster, and his Shine reflector shuts down Ivysaur Razor Leaf.',
      neutralKeys: [
        'Rely on Squirtle fast frame data to contest Fox dash-dance approaches up close.',
        'Avoid auto-piloting Razor Leaf with Ivysaur; Fox reflects it on reaction.'
      ],
      advantageTips: [
        'Ivysaur Up-Air juggle ladders kill Fox early due to his high fall speed.',
        'Charizard Up-B out of shield armors through Fox landing aerial pressure.'
      ],
      disadvantageTips: [
        'Fox Up-Smash kills Squirtle under 75% on Battlefield platforms.',
        'Vary recovery timing; Fox run-off Shine gimps Ivysaur tether snap.'
      ]
    },
    lucina: {
      ratio: 'Even',
      summary: 'Lucina sword walls out Squirtle, but Ivysaur matches her range and Charizard has the weight to outlast her.',
      neutralKeys: [
        'Zone Lucina with Ivysaur Razor Leaf and retreating Fair disjoints.',
        'Switch to Charizard at high percents to survive Lucina kill moves and fish for Up-B reversals.'
      ],
      advantageTips: [
        'Ivysaur Up-Air kills Lucina off-stage during her floaty descent.',
        'Charizard Back Air walls Lucina away from the stage ledge.'
      ],
      disadvantageTips: [
        'Lucina Dolphin Slash out of shield (Frame 5) punishes unspaced Squirtle aerials.',
        'Counter off-stage stops Charizard Flare Blitz recovery dead.'
      ]
    },
    donkey_kong: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Squirtle and Ivysaur combo DK massive hurtbox effortlessly, though Charizard must respect Cargo Grabs.',
      neutralKeys: [
        'Use Squirtle Up-Tilt and Fair to execute 0-to-60% combos on DK massive hurtbox.',
        'Wall DK out with Ivysaur Razor Leaf; DK has no projectile to contest it.'
      ],
      advantageTips: [
        'Ivysaur Down-Air spikes DK Spinning Kong recovery through super armor.',
        'Charizard Forward-Air off-stage carries DK to side blast zones.'
      ],
      disadvantageTips: [
        'Respect DK Frame 4 grounded Up-B out of shield when approaching.',
        'Avoid 65%–80% grab ranges to eliminate Cargo Throw Ding-Dong setups.'
      ]
    },
    pyra_mythra: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Mythra overwhelms Ivysaur in neutral, while Pyra trades favorably with Squirtle light weight.',
      neutralKeys: [
        'Use Squirtle fast frame data to contest Mythra dash-ins.',
        'Switch to Ivysaur to out-space Pyra slower sword swings with Razor Leaf.'
      ],
      advantageTips: [
        'Ivysaur Down-Air off-stage easily spikes both characters vulnerable recoveries.',
        'Charizard Flare Blitz punishes Pyra slow smash attack whiffs across stage.'
      ],
      disadvantageTips: [
        'Pyra Prominence Revolt kills Squirtle as early as 60%.',
        'Avoid predictable tether recoveries; Pyra Down-Smash covers the ledge lip.'
      ]
    },
    lucas: {
      ratio: 'Even',
      summary: 'Squirtle rushes down Lucas, but Lucas PSI Magnet absorbs Ivysaur Razor Leaf and PK Freeze threatens Charizard.',
      neutralKeys: [
        'Use Squirtle to rush down Lucas and prevent PK Fire zoning.',
        'Avoid relying on Ivysaur Razor Leaf if Lucas is actively fishing for PSI Magnet heals.'
      ],
      advantageTips: [
        'Ivysaur Down-Air spikes Lucas out of PK Thunder recovery.',
        'Charizard Up-Throw kills Lucas under 110% on flat stages.'
      ],
      disadvantageTips: [
        'Never recover linearly with Charizard against Lucas off-stage PK Freeze.',
        'Avoid teching near ledge to escape Lucas Down-Smash multi-hits.'
      ]
    },
    steve: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Steve block walls neutralize Squirtle approaches, and Minecart armors through Ivysaur disjoints.',
      neutralKeys: [
        'Use Ivysaur Razor Leaf to chip away at Steve block walls from safe range.',
        'Switch to Charizard to break blocks quickly with Rock Smash and heavy aerials.'
      ],
      advantageTips: [
        'Ivysaur Up-Air hits Steve through thin wooden block ceilings.',
        'Charizard Flare Blitz punishes Steve block-building stalls off-stage.'
      ],
      disadvantageTips: [
        'Never shield Anvil above 80%; roll away to avoid shield break.',
        'Tech roll away from TNT pressure plates immediately.'
      ]
    },
    sonic: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Sonic out-speeds the entire trainer roster and punishes Pokemon Switch lag on reaction.',
      neutralKeys: [
        'Switch Pokémon only when Sonic is knocked off-stage or in tumble to avoid switch punishes.',
        'Use Squirtle low profile and fast tilts to swat Sonic out of Spin Dash.'
      ],
      advantageTips: [
        'Ivysaur Up-Air catches Sonic landing out of Spring recovery.',
        'Charizard super-armor Up-B out of shield punishes Sonic Spin Dash cross-ups.'
      ],
      disadvantageTips: [
        'Sonic Spring gimp kills Ivysaur tether recovery off-stage.',
        'SDI outward against Sonic Up-Air ladder combos.'
      ]
    }
  }
};