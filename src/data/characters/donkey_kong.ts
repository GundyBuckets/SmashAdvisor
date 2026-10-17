import type { CharacterProfile } from '../../types/matchup.js';

export const donkey_kong: CharacterProfile = {
    characterId: 'donkey_kong',
    displayName: 'Donkey Kong',
    iconPath: '/icons/donkey_kong.png',
    archetype: 'Super Heavy / Grappler',
    fastestOOS: 'Spinning Kong Grounded (Frame 4)',
    matchups: {
      toon_link: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Navigate projectile walls patiently and secure high-reward grabs on landing commitments.',
        neutralKeys: [
          'Parry incoming Boomerangs and arrows to maintain full shield health.',
          'Use Bair to swat away incoming Fair/Nair pressure without committing to grab.'
        ],
        advantageTips: [
          'Execute Cargo Forward Throw into off-stage stage-spike setups at 70%.',
          'Use grounded Up-B to armor through Toon Link ledge jump-ins.'
        ],
        disadvantageTips: [
          'Save double jump off-stage until Toon Link throws his primary bomb.',
          'DI outward against Toon Link bomb combos to escape Up-Smash finish windows.'
        ]
      },
      roy: {
        ratio: '-2 (Major Disadvantage)',
        summary: 'Extreme disadvantage. Rely strictly on Frame 4 grounded Up-B to break Roy relentless shield pressure.',
        neutralKeys: [
          'Punish unsafely spaced Roy aerials with grounded Up-B out of shield on Frame 4.',
          'Space Bair strictly at maximum reach to contest Roy sweetspot sword entry.'
        ],
        advantageTips: [
          'Carry Roy off-stage with Cargo Throw; his recovery is short and vulnerable to Bair stage spikes.',
          'Down-tilt at ledge to fish for trips into instant Giant Punch.'
        ],
        disadvantageTips: [
          'Never recover high with Up-B against Roy off-stage Counter.',
          'SDI Roy multi-hit Blazer upward and outward to escape sweetspot kill knocks.'
        ]
      },
      fox: {
        ratio: '-2 (Major Disadvantage)',
        summary: 'Fox combos DK hurtbox effortlessly; play patient and capitalize on Fox light weight with early Cargo kills.',
        neutralKeys: [
          'Punish unsafely spaced Fox landing aerials with Frame 4 grounded Up-B out of shield.',
          'Space Bair to keep Fox from dash-dancing directly into your face.'
        ],
        advantageTips: [
          'Cargo Up-Throw into Up-Air (Ding-Dong) kills Fox as early as 65% on flat stages.',
          'Off-stage Bair swats Fox linear Fire Fox recovery cleanly.'
        ],
        disadvantageTips: [
          'DI away from Fox Up-Tilt strings to escape 50% combo ladders.',
          'Never challenge Fox landing Dair from directly beneath him.'
        ]
      },
      lucina: {
        ratio: '-2 (Major Disadvantage)',
        summary: 'Lucina disjoints wall DK out completely; rely on parries, patient walking, and high-damage grab punishes.',
        neutralKeys: [
          'Walk and parry Lucina Fair spacing rather than rolling or jumping.',
          'Punish unspaced landing sword aerials with Frame 4 grounded Up-B.'
        ],
        advantageTips: [
          'Cargo Throw Lucina off-stage toward the blast zone to contest her horizontal drift.',
          'Down-tilt at ledge to fish for trips into charged F-Smash.'
        ],
        disadvantageTips: [
          'Never recover with Up-B into Lucina off-stage Counter.',
          'DI outward on Lucina Dolphin Slash to escape early ceiling knockouts.'
        ]
      },
      pyra_mythra: {
        ratio: '-2 (Major Disadvantage)',
        summary: 'Mythra combos DK hurtbox endlessly, while Pyra kills exceptionally early. Capitalize on their weak recoveries.',
        neutralKeys: [
          'Use grounded Up-B out of shield on Frame 4 to interrupt Mythra multi-hit shield pressure.',
          'Space Bair to contest Pyra slower normals.'
        ],
        advantageTips: [
          'Cargo Throw both off-stage and stage-spike them; their vertical recoveries cannot tech easily.',
          'Down-B (Hand Slap) at ledge covers their vulnerable ledge snap frames.'
        ],
        disadvantageTips: [
          'Never challenge Pyra Prominence Revolt or Smash attacks head-on.',
          'SDI outward against Mythra Lightning Buster.'
        ]
      },
      pokemon_trainer: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Squirtle and Ivysaur combo DK heavily, but Charizard can be out-grappled and killed early.',
        neutralKeys: [
          'Use Bair to contest Squirtle low-profile approach angles.',
          'Punish Ivysaur landing aerials with Frame 4 grounded Up-B out of shield.'
        ],
        advantageTips: [
          'Cargo Throw Ivysaur off-stage to exploit his vulnerable tether recovery distance.',
          'Giant Punch armors through Charizard Flare Blitz.'
        ],
        disadvantageTips: [
          'DI away from Ivysaur Down-Tilt to avoid Up-Air kill confirms.',
          'Respect Charizard super armor on Up-B reversals.'
        ]
      },
      lucas: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Lucas PK Fire and PK Freeze exploit DK hurtbox, but DK kills Lucas very early off a single Cargo Grab.',
        neutralKeys: [
          'Walk and parry through PK Fire rather than jumping into Lucas anti-air Up-Tilt.',
          'Use Bair spacing to contest Lucas short-hop aerial approaches.'
        ],
        advantageTips: [
          'Cargo Throw Lucas off-stage; his tether recovery is vulnerable to deep Bair stage spikes.',
          'Ding-Dong kill confirm works reliably on Lucas between 70% and 85%.'
        ],
        disadvantageTips: [
          'Save double jump off-stage to avoid getting clipped by off-stage PK Freeze.',
          'Never tech toward Lucas at ledge to avoid Down-Smash multi-hits.'
        ]
      },
      steve: {
        ratio: '-2 (Major Disadvantage)',
        summary: 'Steve blocks stop DK dead in his tracks, while Minecart and pickaxe combos lead to zero-deaths.',
        neutralKeys: [
          'Break block barricades using Bair and Hand Slap (Down-B).',
          'Use grounded Up-B out of shield on Frame 4 to punish unsafely spaced Steve normals.'
        ],
        advantageTips: [
          'Cargo Throw Steve off-stage into deep stage spikes before he can deploy Elytra.',
          'Giant Punch punches clean through Steve block walls.'
        ],
        disadvantageTips: [
          'Never shield Anvil; roll away to avoid shield break into fully charged F-Smash.',
          'Tech roll immediately out of TNT pressure pads.'
        ]
      },
      sonic: {
        ratio: '-2 (Major Disadvantage)',
        summary: 'Sonic runs circles around DK, timing out or whiff-punishing every commitment.',
        neutralKeys: [
          'Hold center stage and swat Spin Dash approaches with low-spaced Bair.',
          'Use Frame 4 grounded Up-B out of shield when Sonic crosses up shield.'
        ],
        advantageTips: [
          'Cargo Forward Throw Sonic off-stage to force him to burn Spring early.',
          'Up-Smash catches Sonic landing lag after Spring deployment.'
        ],
        disadvantageTips: [
          'Never chase Sonic off-stage; his Spring gimp kills DK recovery instantly.',
          'SDI outward against Sonic Up-Air ladder combos.'
        ]
      }
    }
  };