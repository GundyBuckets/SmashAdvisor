import type { CharacterProfile } from '../../types/matchup.js';

export const lucina: CharacterProfile = {
    characterId: 'lucina',
    displayName: 'Lucina',
    iconPath: '/icons/lucina.png',
    archetype: 'Spacing / Fundamentals',
    fastestOOS: 'Dolphin Slash Up-B (Frame 5, Frame 1 Invulnerable)',
    archetypeNotes: {
    'Zoner / Trapper': {
      ratio: 'Even',
      summary: 'Cleave through physical projectiles and items with short-hop Fair/Nair while walking zoners into the corner.',
      neutralKeys: [
        'Use short-hop Fair and F-tilt to swat away items and projectiles mid-air.',
        'Walk and parry behind shield to corner zoners without committing to unsafe jumps.',
      ],
      advantageTips: [
        'Edgeguard floaty zoners off-stage with run-off Fair/Bair before tether snap engages.',
        'Use Counter off-stage to punish multi-hit vertical recovery specials.',
      ],
      disadvantageTips: [
        'Drift to the ledge with Fair rather than landing directly onto stationary bombs.',
        'Use Frame 5 invincible Dolphin Slash (Up-B) to escape shield trap pressure.',
      ],
    },
    'Rushdown / Burst': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Wall out aggressive burst entries with retreating Fair and D-tilt, backed by Frame 5 invincible Up-B OOS.',
      neutralKeys: [
        'Space retreating short-hop Fair and D-tilt to keep rushdown fighters at max sword tip.',
        'Punish any unspaced landing or cross-up immediately with Frame 5 Dolphin Slash OOS.',
      ],
      advantageTips: [
        'Use D-tilt at ledge to 2-frame linear rushdown recovery snaps.',
        'Punish high recovery drift with full-hop Bair.',
      ],
      disadvantageTips: [
        'Keep shield up against multi-hit burst specials until the final hit before using Up-B OOS.',
        'Mix up high drift and instant low Dolphin Slash snaps when recovering.',
      ],
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Win the spacing mirror through disciplined footwork, D-tilt ledge traps, and Frame 5 Up-B Out-of-Shield punishes.',
      neutralKeys: [
        'Space every Fair and Bair at maximum reach; avoid landing close enough to eat rival Up-B OOS.',
        'Whiff-punish missed aerials with fast-falling F-tilt or D-tilt.',
      ],
      advantageTips: [
        'Time D-tilt at the ledge to catch rival Up-B 2-frame windows.',
        'Use Counter off-stage against predictable vertical sword recoveries.',
      ],
      disadvantageTips: [
        'Hold survival DI outward on F-smash and Up-B kill confirms near stage edges.',
        'Never challenge rival disjoints from below during landing disadvantage.',
      ],
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Shut down heavy approaches with safe sword walls and dominate off-stage with run-off Fair and Counter.',
      neutralKeys: [
        'Space retreating Fair and D-tilt continuously; heavies cannot contest disjoints cleanly.',
        'Never land unsafely on shield to avoid fast heavy Out-of-Shield grabs.',
      ],
      advantageTips: [
        'Run off with Fair/Bair or use Counter to beat super-armor heavy recoveries for early stocks.',
        'Ledge-trap with D-tilt into F-smash tech-chase setups.',
      ],
      disadvantageTips: [
        'Respect mid-percent grab kill confirms; avoid shielding predictably.',
        'DI away from low-tilt trip setups to prevent F-smash followups.',
      ],
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Out-frame slow power forms with D-tilt and Fair, and shut down agility multi-hits with Frame 5 Up-B OOS.',
      neutralKeys: [
        'Contest agility dash-ins with retreating Fair and low-profile D-tilt.',
        'Bait slow power-stance swings and whiff-punish with F-tilt or Grab.',
      ],
      advantageTips: [
        'D-tilt at ledge catches vertical recoveries that lack upward hitboxes.',
        'Counter off-stage stops high-speed recovery lunges cleanly.',
      ],
      disadvantageTips: [
        'Avoid panic rolling out of multi-hit agility strings.',
        'DI outward from high-priority power-stance smash attacks.',
      ],
    },
    'Hit-and-Run / Speedster': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Restrict high-commitment jumps and use grounded D-tilt and Jab pokes to stuff burst dash entries.',
      neutralKeys: [
        'Use grounded D-tilt and Frame 5 Jab rather than floaty aerials to swat burst dashes.',
        'Buffer Frame 5 Dolphin Slash OOS whenever speedsters cross up shield with spin moves.',
      ],
      advantageTips: [
        'Swat high recovery arcs with full-hop Nair or Bair.',
        'Ledge-trap with Jab -> F-tilt to cover regular getup and roll.',
      ],
      disadvantageTips: [
        'Vary recovery drift to avoid getting stage-spiked by deep Bairs.',
        'SDI outward against vertical ladder juggle strings.',
      ],
    },
  },
    matchups: {
      toon_link: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Lucina disjointed sword swats through projectile arcs and out-ranges Toon Link sword normals.',
        neutralKeys: [
          'Use retreating Fair and short-hop Nair to cut through Boomerangs and swats Bombs in mid-air.',
          'Walk and parry behind shield to corner Toon Link without overextending.'
        ],
        advantageTips: [
          'Run off-stage and swat Toon Link with Fair before he can deploy tether grapple.',
          'Down-B Counter off-stage completely invalidates Toon Link Spin Attack recovery.'
        ],
        disadvantageTips: [
          'Do not challenge bomb drops directly from underneath; drift to ledge instead.',
          'SDI outward on Toon Link multi-hit Up-B out of shield.'
        ]
      },
      roy: {
        ratio: 'Even',
        summary: 'Sword duel where Lucina controls range with consistent tip hitboxes while Roy seeks sweetspot hilt depth.',
        neutralKeys: [
          'Keep Roy at maximum sword reach using Forward-Tilt and retreating Fair.',
          'Dolphin Slash (Frame 5) punishes Roy if he crosses up shield without optimal spacing.'
        ],
        advantageTips: [
          'Counter (Down-B) off-stage intercepting Roy Blazer secures stocks as early as 40%.',
          'Ledge-trap with timed Down-Tilt to 2-frame Roy ledge snap.'
        ],
        disadvantageTips: [
          'Avoid teching in place against Roy at ledge; sweetspot Jab confirms into Bair.',
          'Wait through the 4th hit of Roy Dancing Blade before attempting Dolphin Slash.'
        ]
      },
      fox: {
        ratio: 'Even',
        summary: 'Fox controls ground speed, but Lucina dominates off-stage edgeguards and defensive punishes.',
        neutralKeys: [
          'Swat defensively with Fair and Jab rather than aggressive approaches against Fox sprint.',
          'Punish Fox landing aerials on shield instantly with Dolphin Slash.'
        ],
        advantageTips: [
          'Time Down-Air or Back Air against linear Fire Fox angles, or swat Illusion with Forward-Tilt.',
          'Ledge-trap using Down-Tilt to hit Fox 2-frame recovery snap.'
        ],
        disadvantageTips: [
          'DI strictly outward against Fox Up-Tilt strings to escape early juggle chains.',
          'Never jump out of disadvantage directly above Fox; drift toward ledge.'
        ]
      },
      donkey_kong: {
        ratio: '+2 (Major Advantage)',
        summary: 'Heavily winning matchup. Wall out DK massive hurtbox in neutral and shut down his recovery off-stage.',
        neutralKeys: [
          'Space retreating Fair and Down-Tilt repeatedly; DK cannot contest these disjoints cleanly.',
          'Never land with unsafely spaced aerials on DK shield to avoid Frame 4 grounded Up-B.'
        ],
        advantageTips: [
          'Counter (Down-B) off-stage completely beats Spinning Kong super armor.',
          'Run-off Back Air continuously walls DK away from the ledge boundaries.'
        ],
        disadvantageTips: [
          'Respect 65%–85% grab ranges on flat stages to prevent Cargo Up-Throw Ding-Dong setups.',
          'DI away from DK Down-Tilt to avoid trip into Forward-Smash confirms.'
        ]
      },
      pyra_mythra: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Mythra out-paces Lucina sword normals in neutral, while Pyra matches her disjointed reach with superior kill power.',
        neutralKeys: [
          'Use defensive Forward-Tilt to contest Mythra dash-ins; avoid committing to high aerials.',
          'Bait Pyra slow smash attacks and punish with Dolphin Slash or Dash Attack.'
        ],
        advantageTips: [
          'Counter (Down-B) off-stage invalidates both Mythra and Pyra vertical recoveries.',
          'Ledge-trap with Down-Tilt to catch their vulnerable 2-frame ledge snap.'
        ],
        disadvantageTips: [
          'Avoid rolling predictably out of Mythra Nair strings to prevent Foresight punishes.',
          'DI away from Pyra Forward-Smash and Up-B.'
        ]
      },
      pokemon_trainer: {
        ratio: 'Even',
        summary: 'Disjoints wall out Squirtle and contest Charizard, but Ivysaur matches Lucina range effectively.',
        neutralKeys: [
          'Wall Squirtle out with retreating Fair and Down-Tilt.',
          'Respect Ivysaur Up-Air and Forward-Air range by staying horizontal rather than directly above him.'
        ],
        advantageTips: [
          'Down-tilt at ledge hits Ivysaur vulnerable 2-frame tether snap.',
          'Counter off-stage completely stops Charizard Flare Blitz.'
        ],
        disadvantageTips: [
          'DI outward against Ivysaur Down-Tilt into Up-Air kill confirms.',
          'Avoid challenging Charizard super-armor Up-B out of shield.'
        ]
      },
      lucas: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Lucina sword range out-spaces Lucas normals, and disjointed aerials swat through PK Fire arcs.',
        neutralKeys: [
          'Short-hop Fair cuts through PK Fire and controls horizontal neutral space.',
          'Dolphin Slash punishes Lucas landing aerials on shield cleanly.'
        ],
        advantageTips: [
          'Run off-stage and Counter Lucas PK Thunder rocket for immediate stock removals.',
          'Swat Lucas out of tether recovery with deep run-off Bair.'
        ],
        disadvantageTips: [
          'Do not tech near ledge to avoid Lucas Down-Smash 3-hit coverage.',
          'DI away from PK Freeze to avoid horizontal screen-kill vectors.'
        ]
      },
      steve: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Steve blocks absorb Lucina disjointed sword swings, giving him uninterrupted mining time.',
        neutralKeys: [
          'Use Fair and Forward-Tilt to break through wooden and dirt blocks quickly.',
          'Space aerials to swat Steve directly out of Minecart command grab.'
        ],
        advantageTips: [
          'Counter off-stage stops Steve Elytra flight glide instantly.',
          'Down-tilt at ledge breaks blocks placed below the lip to contest recovery.'
        ],
        disadvantageTips: [
          'Never shield Anvil above 80%; roll away to avoid shield break.',
          'Tech roll outward from TNT pads to escape pickaxe loops.'
        ]
      },
      sonic: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Sonic hit-and-run pacing frustrates Lucina fundamentals and punishes missed sword swings.',
        neutralKeys: [
          'Use Down-Tilt and low Fair to contest Sonic Spin Dash approaches on the ground.',
          'Hold center stage and avoid chasing Sonic to stage corners.'
        ],
        advantageTips: [
          'Swat Sonic with high-altitude Fair when he uses Spring recovery.',
          'Ledge-trap with Jab into Forward-Tilt to cover neutral getup.'
        ],
        disadvantageTips: [
          'Mix up recovery drift to avoid Sonic Bair stage spikes.',
          'SDI outward on Sonic Up-Air ladder strings.'
        ]
      }
    }
  };