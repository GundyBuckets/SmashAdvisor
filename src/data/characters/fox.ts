import type { CharacterProfile } from '../../types/matchup.js';

export const fox: CharacterProfile = {
    characterId: 'fox',
    displayName: 'Fox',
    iconPath: '/icons/fox.png',
    archetype: 'High-Velocity Rushdown',
    fastestOOS: 'Back Air (Frame 9), Down Air (Frame 8)',
    archetypeNotes: {
    'Zoner / Trapper': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Deter full-screen projectiles with Frame 1 Shine and punish item pulls on reaction with Dash Attack into Up-Air.',
      neutralKeys: [
        'Flash Reflector (Shine) at mid-range to discourage predictable projectile rhythms.',
        'Punish item pulls and slow specials on reaction with burst Dash Attack -> Up-Air strings.',
      ],
      advantageTips: [
        'Confirm soft Nair or Dair into Frame 8 Up-Smash to close stocks around 95–110%.',
        'Contest floaty zoner recoveries off-stage with fast-falling Bair.',
      ],
      disadvantageTips: [
        'Do not run blindly into stationary traps; use Illusion (Side-B) high to bypass ledge setups.',
        'DI outward on zoner bomb-to-aerial confirms.',
      ],
    },
    'Rushdown / Burst': {
      ratio: 'Even',
      summary: 'Out-frame rival rushdowns with Frame 4 Nair, Frame 7 Up-Tilt strings, and Frame 8 Up-Smash Out-of-Shield.',
      neutralKeys: [
        'Use low-landing Nair and Frame 7 Up-Tilt to win close-quarters frame-data scrambles.',
        'Punish unspaced landing aerials immediately with Frame 8 Up-Smash OOS.',
      ],
      advantageTips: [
        'Tech-chase fast fallers on platforms with Dash Attack and Up-Tilt loops.',
        'Edgeguard linear burst recoveries with Shine gimps or run-off Bair.',
      ],
      disadvantageTips: [
        'Mix up Illusion (Side-B) and Fire Fox angles to avoid getting spiked off-stage.',
        'Hold strict survival DI on burst kill confirms.',
      ],
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Dash-dance just outside sword tipper reach and whiff-punish extended swings with Dash Attack into Up-Air.',
      neutralKeys: [
        'Bait sword aerials with dash retreats, then whiff-punish landing lag with Dash Attack.',
        'Cross up shields with low Nair so fast sword Up-B OOS options miss.',
      ],
      advantageTips: [
        'Carry swordfighters off the top with Up-Tilt -> Up-Air ladders.',
        'Intercept vertical recoveries before ledge snap with run-off Bair.',
      ],
      disadvantageTips: [
        'Use fast fall speed to land safely on platforms rather than challenging sword Up-Airs.',
        'Vary recovery timing with Fire Fox stalls to throw off sword 2-frames.',
      ],
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Abuse giant hurtboxes with uninterrupted Up-Tilt and Nair loops, closing stocks early with Nair -> Up-Smash.',
      neutralKeys: [
        'Land with safe cross-up Nair and Dair while staying outside command grab range.',
        'Punish heavy aerial landings with Frame 8 Up-Smash OOS.',
      ],
      advantageTips: [
        'Chain 4–5 Up-Tilts into Up-Air strings on massive hurtboxes for 0–60% bursts.',
        'Confirm soft Nair or Dair into Up-Smash starting at 105%.',
      ],
      disadvantageTips: [
        'Avoid shielding predictably at mid-percents to eliminate cargo or kill-throw setups.',
        'Save double-jump off-stage until heavies commit to ledge-guard swings.',
      ],
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Overwhelm sluggish power forms with Nair shield pressure and bait agility counters with empty-hop grabs.',
      neutralKeys: [
        'Pressure power forms relentlessly with Frame 4 Nair and Frame 7 Up-Tilt.',
        'Bait evasion counters (like Foresight) with empty-hop grabs into Up-Air strings.',
      ],
      advantageTips: [
        'Exploit weak vertical recoveries with run-off Bair or Shine intercepts.',
        'Confirm Nair -> Up-Smash kills before power stances build high rage.',
      ],
      disadvantageTips: [
        'SDI outward against multi-hit agility ladder combos.',
        'Do not challenge high-priority power-stance smash attacks head-on.',
      ],
    },
    'Hit-and-Run / Speedster': {
      ratio: 'Even',
      summary: 'Chip with short-hop Lasers to force approaches, then catch burst dash entries with low Nair and Up-Air ladders.',
      neutralKeys: [
        'Fire single Lasers at full screen to force speedsters to initiate into your center-stage control.',
        'Intercept burst spin dashes with fast-falling Nair or Frame 7 Up-Tilt.',
      ],
      advantageTips: [
        'Juggle light speedsters off the top blast zone with Up-Air chains.',
        'Ledge-trap with Bair to cover jump and regular getup options.',
      ],
      disadvantageTips: [
        'Save double-jump off-stage to avoid getting stage-spiked by deep Bairs.',
        'Hold survival DI outward on edge kill confirms.',
      ],
    },
  },
    matchups: {
      toon_link: {
        ratio: 'Even',
        summary: 'Suffocate Toon Link zoning with top ground speed, but respect his Frame 6 Up-B out of shield.',
        neutralKeys: [
          'Punish bomb pulls on reaction with Fox rapid Dash Attack.',
          'Reflect grounded Boomerangs to turn projectile zoning back onto Toon Link.'
        ],
        advantageTips: [
          'Exploit Toon Link floaty fall speed with Up-Tilt strings into Up-Air ladders.',
          'Ledge-trap with repeated short-hop Bair to cover jump and neutral getup.'
        ],
        disadvantageTips: [
          'Mix up recovery using early Illusion (Side-B) to avoid dropped bombs off-stage.',
          'Do not land unsafely on Toon Link shield to avoid Frame 6 Spin Attack.'
        ]
      },
      roy: {
        ratio: 'Even',
        summary: 'Speed mirror. Whiff-punish Roy sword swings and abuse juggle combos on his fast fall speed.',
        neutralKeys: [
          'Dash dance outside Roy sword range and punish whiffs with Dash Attack or running Up-Tilt.',
          'Land fast-fall Nair behind Roy shield to avoid Blazer Up-B.'
        ],
        advantageTips: [
          'Up-Smash tech-chase Roy on platforms starting around 80%.',
          'Run-off Shine off-stage disrupts Roy Blazer momentum for gimp kills.'
        ],
        disadvantageTips: [
          'Hold hard DI away on Roy Jab to escape guaranteed Bair kill setups.',
          'Vary Fire Fox angles to avoid running directly into Roy Counter.'
        ]
      },
      lucina: {
        ratio: 'Even',
        summary: 'Win neutral with superior ground velocity, but stay mindful of Dolphin Slash out of shield.',
        neutralKeys: [
          'Whiff-punish Lucina Fair with Dash Attack during her landing frames.',
          'Use Blaster laser pressure to force Lucina to approach across flat stage.'
        ],
        advantageTips: [
          'Juggle Lucina floaty descent with fast-fall Up-Air strings.',
          'Tech chase Lucina on platforms using Fox sprint speed into Up-Smash.'
        ],
        disadvantageTips: [
          'Angle Fire Fox away from the ledge lip to bait out Lucina Counter safely.',
          'Tech roll outward when cornered to escape Down-Tilt poke pressure.'
        ]
      },
      donkey_kong: {
        ratio: '+2 (Major Advantage)',
        summary: 'Dominate DK massive hurtbox with relentless combo loops while avoiding Cargo Grab windows.',
        neutralKeys: [
          'Abuse fast-fall Nair and Up-Tilt: DK large hurtbox enables 0-to-50% combo strings.',
          'Bait DK Frame 4 Up-B out of shield with empty hops and punish with full Up-Smash.'
        ],
        advantageTips: [
          'Run off-stage and use Shine to cancel DK Spinning Kong horizontal momentum.',
          'Ledge-trap with Dash Attack to catch DK wide hurtbox during recovery snap.'
        ],
        disadvantageTips: [
          'Stay alert at 60%–75%: Cargo Throw into Up-Air (Ding-Dong) kills Fox early.',
          'Never challenge DK landing Dair directly from below.'
        ]
      },
      pyra_mythra: {
        ratio: 'Even',
        summary: 'Equal frame-data battle against Mythra; overwhelming speed advantage against Pyra.',
        neutralKeys: [
          'Against Mythra: contest dash-ins with Fox Jab and fast-fall Nair cross-ups.',
          'Against Pyra: rush down her slow startup frames and bait out unsafe Up-B reversals.'
        ],
        advantageTips: [
          'Shine off-stage disrupts both Mythra and Pyra vertical recovery trajectories.',
          'Up-Smash kills both characters reliably under 95% on Battlefield platforms.'
        ],
        disadvantageTips: [
          'Do not challenge Mythra Foresight with predictable multi-hit moves.',
          'DI away from Pyra Forward-Smash to survive high-percent ledge traps.'
        ]
      },
      pokemon_trainer: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Overwhelm Ivysaur and Charizard with speed, while playing patient spacing against Squirtle.',
        neutralKeys: [
          'Reflect Ivysaur Razor Leaf to shut down his primary approach zoning tool.',
          'Combo Charizard relentlessly with Up-Tilt strings into Up-Air ladders.'
        ],
        advantageTips: [
          'Edgeguard Ivysaur tether recovery with well-timed run-off Shine.',
          'Ledge-trap Charizard with short-hop Bair to catch big hurtbox getup options.'
        ],
        disadvantageTips: [
          'Avoid teching predictably near Squirtle to prevent extended regrab chains.',
          'Respect Charizard super armor on Up-B and Flare Blitz.'
        ]
      },
      lucas: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Fox ground speed outpaces Lucas zoning, and Shine provides a consistent reflector against PK Fire.',
        neutralKeys: [
          'Reflect PK Fire on reaction to punish Lucas horizontal zoning.',
          'Use fast-fall Nair to bypass Lucas disjointed Up-Tilt anti-airs.'
        ],
        advantageTips: [
          'Drop off-stage and Shine Lucas out of PK Thunder recovery before he launches himself.',
          'Up-Smash tech-chase Lucas on platforms starting at 80%.'
        ],
        disadvantageTips: [
          'Never use linear Fire Fox recoveries near stage lip; Lucas Down-Smash covers all snap angles.',
          'SDI out of Lucas Nair loops.'
        ]
      },
      steve: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Steve blocks halt Fox dash-dance speed, and Minecart armors through Fox rapid burst options.',
        neutralKeys: [
          'Break block walls quickly with short-hop Nair and Blaster lasers to disrupt mining.',
          'Reflect Minecart command grab approach on reaction.'
        ],
        advantageTips: [
          'Run-off Shine off-stage stops Steve Elytra glide dead in its tracks.',
          'Up-Smash punishes Steve block-building ledge stalls through platforms.'
        ],
        disadvantageTips: [
          'Never shield Anvil above 75%; roll away to avoid shield stun into F-Smash.',
          'Tech roll away from TNT pressure plates immediately.'
        ]
      },
      sonic: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Sonic out-speeds Fox on the ground, making dash-dance baiting difficult to maintain.',
        neutralKeys: [
          'Harass Sonic with Blaster lasers to force him to commit to Spin Dash approaches.',
          'Use buffered Up-Tilt to catch Sonic landing out of Spin Dash jump cancels.'
        ],
        advantageTips: [
          'Shine Sonic off-stage to strip his double jump before he uses Spring.',
          'Up-Smash catches Sonic landing lag after Spring deployment.'
        ],
        disadvantageTips: [
          'Mix up recovery timing to prevent Sonic Bair edgeguard stage spikes.',
          'Do not contest Sonic Up-Air ladders out of disadvantage.'
        ]
      }
    }
  };