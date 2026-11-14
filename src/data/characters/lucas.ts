import type { CharacterProfile } from '../../types/matchup.js';

export const lucas: CharacterProfile = {
  characterId: 'lucas',
  displayName: 'Lucas',
  iconPath: '/icons/lucas.png',
  archetype: 'Zoner / Spacing Trapper',
  fastestOOS: 'Nair (Frame 10)',
  archetypeNotes: {
    'Zoner / Trapper': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Heal off energy projectiles with PSI Magnet and out-poke rival zoners at mid-range using Zair (Rope Snake).',
      neutralKeys: [
        'Flash PSI Magnet (Down-B) to absorb energy projectiles and neutralize long-range camping.',
        'Space Double-Jump Cancel Zair (DJCZ) to poke safely through physical projectiles.',
      ],
      advantageTips: [
        'Use PK Freeze off-stage to force early air-dodges or blast-zone KOs.',
        '2-frame ledge snaps with D-smash’s lingering triple-hit hitbox.',
      ],
      disadvantageTips: [
        'Use PK Thunder 2 or long tether Zair to mix up recovery angles safely.',
        'Save double-jump until zoners commit to ledge traps.',
      ],
    },
    'Rushdown / Burst': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Create a wall with DJCZ and retreating PK Fire, relying on Frame 4 Jab and Frame 7 Nair OOS when cornered.',
      neutralKeys: [
        'Space DJCZ and retreating short-hop Fair to stuff burst dash approaches.',
        'Use Frame 4 Jab or Frame 7 Nair OOS when rushdown fighters land unsafely on shield.',
      ],
      advantageTips: [
        'Carry rushdown fighters toward the corner with DJCZ loops into F-tilt or Grab.',
        '2-frame linear recoveries at the ledge with D-smash.',
      ],
      disadvantageTips: [
        'Use PSI Magnet stall momentum in mid-air to throw off rushdown juggle timing.',
        'Snap to the ledge with Tether Zair whenever possible instead of risking PK Thunder.',
      ],
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Stay just outside sword tippers with DJCZ and retreating PK Fire, then 2-frame linear sword recoveries with D-smash.',
      neutralKeys: [
        'Out-range grounded sword pokes with spaced Zair and retreating PK Fire.',
        'Punish unspaced falling sword aerials with Grab into D-throw -> Nair/Fair.',
      ],
      advantageTips: [
        'Time D-smash at the ledge to catch vertical sword recoveries during 2-frame snap windows.',
        'Send PK Freeze off-stage to force high, punishable recovery angles.',
      ],
      disadvantageTips: [
        'Use PSI Magnet wavebounces to reverse landing momentum away from sword Up-Airs.',
        'Tether snap with Zair to avoid off-stage sword Counters.',
      ],
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Push massive hurtboxes across the stage with DJCZ chains and obliterate linear recoveries with PK Freeze and Dair spikes.',
      neutralKeys: [
        'Chain DJCZ pokes to rack up damage and push heavies off-stage safely outside grab range.',
        'Use retreating PK Fire and Fair to stuff giant jump approaches.',
      ],
      advantageTips: [
        'Intercept linear heavy recoveries with PK Freeze, PK Thunder tail, or Dair spikes.',
        'Ledge-trap wide hurtboxes with D-smash and Grab.',
      ],
      disadvantageTips: [
        'Respect mid-percent grab kill setups; use PSI Magnet movement to avoid shielding predictably.',
        'Save double-jump off-stage against heavy ledge guards.',
      ],
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Wall out agility stances with Zair and retreating Fair, and exploit weak vertical recoveries with PK Freeze and D-smash.',
      neutralKeys: [
        'Use Zair and retreating PK Fire to stuff agility dash-ins.',
        'Punish slow power-stance startups with PK Fire into Grab or Fair.',
      ],
      advantageTips: [
        'Edgeguard vulnerable vertical recoveries with PK Freeze and D-smash 2-frames.',
        'Confirm Grab -> Up-Throw kills around 115–130%.',
      ],
      disadvantageTips: [
        'Use PSI Magnet momentum shifts to escape multi-hit agility strings.',
        'Avoid landing unsafely onto fast stance Out-of-Shield options.',
      ],
    },
    'Hit-and-Run / Speedster': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Stuff grounded burst lanes with low Zairs and PK Fire while using Frame 7 Nair OOS against shield cross-ups.',
      neutralKeys: [
        'Place low Zairs and retreating PK Fire in front of you to block high-speed dash lanes.',
        'Buffer Frame 7 Nair OOS when speedsters cross up shield with spin moves.',
      ],
      advantageTips: [
        'Catch panic ledge jumps with rising Fair or Up-Air.',
        '2-frame low recovery snaps with D-smash.',
      ],
      disadvantageTips: [
        'Snap early with Tether Zair so speedsters cannot stage-spike PK Thunder startups.',
        'SDI outward against vertical ladder combos.',
      ],
    },
  },
  matchups: {
      toon_link: {
        ratio: 'Even',
        summary: 'PSI Magnet absorbs Toon Link projectiles, neutralizing his zoning and forcing physical trades.',
        neutralKeys: [
          'Use PSI Magnet (Down-B) to absorb thrown bombs and boomerangs to heal damage.',
          'Zone with wavebounced and short-hop PK Fire to control horizontal ground movement.'
        ],
        advantageTips: [
          'Steer PK Freeze off-stage into Toon Link tether recovery line for early knockouts.',
          'Down-Smash at ledge covers regular getup, jump, and ledge hang simultaneously.'
        ],
        disadvantageTips: [
          'Tether recovery with Zair is safer than PK Thunder, which Toon Link can disrupt with bombs.',
          'Space landing drift carefully to avoid landing directly on Toon Link Up-B.'
        ]
      },
      roy: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Roy rapid speed overwhelms Lucas startup frames and punishes missed PK Fires hard.',
        neutralKeys: [
          'Limit raw PK Fire commitments; Roy dashes beneath the projectile trajectory.',
          'Rely on fast Nair (Frame 7) out of shield when Roy attacks shield carelessly.'
        ],
        advantageTips: [
          'Hit Roy with PK Thunder off-stage before he initiates Blazer to strip his momentum.',
          'Down-Smash at ledge catches Roy vulnerable 2-frame recovery snap.'
        ],
        disadvantageTips: [
          'Never use PK Thunder recovery if Roy is positioned near ledge; Roy Counter kills instantly.',
          'Rely primarily on Zair tether snap from maximum distance when recovering.'
        ]
      },
      fox: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Fox ground speed outpaces Lucas zoning, and Shine provides a reliable reflector against PK Fire.',
        neutralKeys: [
          'Avoid predictable PK Fire; Fox reflects it on reaction with Shine.',
          'Use disjointed Up-Tilt and Forward-Tilt to swat Fox out of dash attacks.'
        ],
        advantageTips: [
          'Down-Smash at ledge catches Fox linear Fire Fox snap angles cleanly.',
          'Up-Air juggle strings combo Fox fast fall speed effectively.'
        ],
        disadvantageTips: [
          'Mix up recovery with early Zair tether to avoid Fox run-off Shine gimps.',
          'SDI outward on Fox Up-Tilt strings to escape 40% juggle chains.'
        ]
      },
      lucina: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Lucina disjointed sword out-spaces Lucas normals and cuts through PK Fire arcs.',
        neutralKeys: [
          'Use Zair to poke at Lucina shield from outside her sword reach.',
          'Bait Lucina Dolphin Slash out of shield with empty hop cross-ups.'
        ],
        advantageTips: [
          'Steer PK Freeze into Lucina floaty off-stage recovery drift.',
          'Down-Smash at ledge covers Lucina neutral getup and roll.'
        ],
        disadvantageTips: [
          'Do not use PK Thunder recovery near stage lip; Lucina Counter off-stage ends your stock.',
          'Tech roll outward from corner pressure to escape Down-Tilt pokes.'
        ]
      },
      donkey_kong: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Heavily exploit DK large hurtbox with PK Fire spacing and off-stage PK Freeze edgeguards.',
        neutralKeys: [
          'Wall DK out with continuous short-hop retreating PK Fire.',
          'Use Zair to poke at DK shield safely outside his Frame 4 Up-B grab range.'
        ],
        advantageTips: [
          'PK Freeze completely counters DK recovery: guide the ice orb into his wide Spinning Kong hitbox.',
          'Charge Down-Smash at ledge to 2-frame DK linear vertical snap.'
        ],
        disadvantageTips: [
          'Avoid getting grabbed between 60% and 80% to eliminate Cargo Throw Ding-Dong kill setups.',
          'Save double jump off-stage until DK commits to an aerial edgeguard attempt.'
        ]
      },
      pyra_mythra: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Mythra frame data suffocates Lucas zoning, while Pyra raw kill power punishes floaty landings.',
        neutralKeys: [
          'Rely on fast Nair out of shield against Mythra aggressive dash-ins.',
          'Zone Pyra with PK Fire and Zair while staying outside her sword tip reach.'
        ],
        advantageTips: [
          'PK Freeze off-stage intercepts both characters poor vertical recoveries.',
          'Down-Smash at ledge covers Mythra vulnerable recovery snap.'
        ],
        disadvantageTips: [
          'Avoid predictable PK Thunder recoveries; both characters can Counter or hit you off-stage.',
          'SDI outward on Mythra Lightning Buster.'
        ]
      },
      pokemon_trainer: {
        ratio: 'Even',
        summary: 'Use PSI Magnet against Ivysaur Razor Leaf, wall Squirtle with tilts, and edgeguard Charizard.',
        neutralKeys: [
          'Absorb Ivysaur Razor Leaf with PSI Magnet to heal damage and reset neutral.',
          'Space Forward-Tilt to contest Squirtle low-profile dash approaches.'
        ],
        advantageTips: [
          'PK Freeze off-stage intercepts Charizard and Ivysaur recoveries cleanly.',
          'Down-Smash at ledge catches Ivysaur tether pull-up lag.'
        ],
        disadvantageTips: [
          'Watch out for Charizard Flare Blitz bursts across stage.',
          'DI away from Ivysaur Down-Tilt to avoid Up-Air kill setups.'
        ]
      },
      steve: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Steve blocks absorb PK Fire, and Minecart armors through Lucas defensive zoning.',
        neutralKeys: [
          'Use PK Fire wavebounces to hit Steve over low block walls while mining.',
          'Use PSI Magnet to absorb TNT explosions safely.'
        ],
        advantageTips: [
          'PK Freeze off-stage catches Steve Elytra flight glide easily.',
          'Down-Smash at ledge breaks blocks placed below the lip.'
        ],
        disadvantageTips: [
          'Never shield Anvil above 80%; roll away to avoid shield break.',
          'Tech roll away from TNT pressure plates immediately.'
        ]
      },
      sonic: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Sonic mobility invalidates PK Fire spacing and punishes Lucas floaty double jump.',
        neutralKeys: [
          'Use buffered Forward-Tilt and Jab to contest Sonic Spin Dash on the ground.',
          'Hold center stage and avoid throwing raw PK Fires that Sonic can jump over.'
        ],
        advantageTips: [
          'PK Freeze off-stage forces Sonic to burn Spring early.',
          'Up-Smash invulnerability frames catch Sonic landing out of Spring.'
        ],
        disadvantageTips: [
          'Mix up recovery drift to avoid Sonic Bair stage-spike gimps.',
          'SDI outward on Sonic Up-Air ladder combos.'
        ]
      }
    }
  };