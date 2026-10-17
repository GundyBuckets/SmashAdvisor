import type { CharacterProfile } from '../../types/matchup.js';

export const fox: CharacterProfile = {
    characterId: 'fox',
    displayName: 'Fox',
    iconPath: '/icons/fox.png',
    archetype: 'High-Velocity Rushdown',
    fastestOOS: 'Back Air (Frame 9), Down Air (Frame 8)',
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