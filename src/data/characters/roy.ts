import type { CharacterProfile } from '../../types/matchup.js';

export const roy: CharacterProfile = {
    characterId: 'roy',
    displayName: 'Roy',
    iconPath: '/icons/roy.png',
    archetype: 'Rushdown / Swordie',
    fastestOOS: 'Blazer Up-B (Frame 9, Frame 4 Armor)',
    archetypeNotes: {
    'Zoner / Trapper': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Close distance with dash-shielding and punish item-pull animations with sweetspot Nair and Jab-Bair kill confirms.',
      neutralKeys: [
        'Walk and dash-shield through projectile walls rather than jumping into anti-air traps.',
        'Punish item pulls or casting animations on reaction with burst Dash Attack or sweetspot Nair.',
      ],
      advantageTips: [
        'Convert Frame 5 Jab into reverse Up-Air or Bair at ledge to take stocks around 85–95%.',
        'Ledge-trap with D-tilt and Side-B (Double-Edge Dance) to cover regular getup and roll.',
      ],
      disadvantageTips: [
        'Save double-jump when recovering low against lingering ledge bombs.',
        'DI outward on zoner projectile-to-aerial kill confirms.',
      ],
    },
    'Rushdown / Burst': {
      ratio: 'Even',
      summary: 'Win close-quarters scrambles with Frame 5 sweetspot Jab and super-armored Blazer (Up-B) Out-of-Shield reversals.',
      neutralKeys: [
        'Whiff-punish aggressive dash-ins with sweetspot Nair 1 into Jab or Grab.',
        'Use Frame 9 Blazer (Up-B) OOS with early super armor to blow through unspaced shield pressure.',
      ],
      advantageTips: [
        'Tech-chase fast fallers on platforms with D-tilt and Side-B red finishers.',
        'Punish linear burst recoveries with run-off Fair or Blazer stage-spikes.',
      ],
      disadvantageTips: [
        'Hold survival DI outward on burst kill confirms near the ledge.',
        'Angle Blazer slightly inward when recovering to avoid getting clipped before ledge snap.',
      ],
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Weave inside tipper ranges using superior initial dash speed so Roy’s hilt sweetspots out-trade rival disjoints.',
      neutralKeys: [
        'Dash-dance just outside tipper spacing, then burst in during sword landing lag with Nair or Grab.',
        'Cross up shields with fast-fall Nair to avoid Frame 5 invincible sword Up-B reversals.',
      ],
      advantageTips: [
        'Confirm Jab -> Bair at 90% to kill lighter swordfighters off the side blast zone.',
        'Contest vertical sword recoveries off-stage with fast-falling Fair.',
      ],
      disadvantageTips: [
        'Never mash aerials out of hitstun against disjointed juggle strings.',
        'Mix up high drift and angled Blazer snaps when recovering from off-stage.',
      ],
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Overwhelm massive hurtboxes with falling Up-Air chains, sweetspot Nair loops, and early Side-B kills.',
      neutralKeys: [
        'Pressure shields with safe spaced D-tilt and falling Nair while staying outside command grab range.',
        'Punish heavy aerial landings with Blazer OOS or Grab into Up-Throw -> Up-Air.',
      ],
      advantageTips: [
        'Chain falling Up-Airs into Jab -> Bair or Side-B red finisher to kill heavies under 90%.',
        'Edgeguard linear recoveries with run-off Bair and Counter.',
      ],
      disadvantageTips: [
        'Respect mid-percent cargo and command grab kill setups; spot-dodge grab reads.',
        'Do not challenge armored heavy moves head-on without hilt disjoint spacing.',
      ],
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Rush down sluggish power stances before they swing, and bait agility evasion counters with empty-hop grabs.',
      neutralKeys: [
        'Contest power-stance startup frames with Frame 5 Jab and falling Nair.',
        'Mix in empty-hop Grabs against agility stances that rely on counters or Foresight.',
      ],
      advantageTips: [
        'Exploit weak vertical recoveries common to stance fighters with off-stage Fair.',
        'Use Jab -> Bair at ledge to close stocks before power stances build rage.',
      ],
      disadvantageTips: [
        'SDI outward against multi-hit agility ladder strings.',
        'Hold shield patiently against multi-hit stance specials before reversing with Blazer.',
      ],
    },
    'Hit-and-Run / Speedster': {
      ratio: 'Even',
      summary: 'Hold center stage and swat high-speed dash entries with rising Nair and D-tilt instead of chasing into corners.',
      neutralKeys: [
        'Wall out burst dash approaches with low-profile D-tilt and rising short-hop Nair.',
        'Buffer Blazer OOS whenever speedsters cross up shield with spin attacks.',
      ],
      advantageTips: [
        'Catch panic rolls from the corner with Jab -> Side-B or Bair.',
        'Anti-air high recovery escapes with rising Up-Air.',
      ],
      disadvantageTips: [
        'Avoid predictable double-jumps off-stage where speedsters can stage-spike with Bair.',
        'Hold survival DI on sweetspot burst kill confirms.',
      ],
    },
  },
    matchups: {
      toon_link: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Suffocate Toon Link setup time with aggressive dash-in pressure and high air-speed burst tools.',
        neutralKeys: [
          'Dash dance just outside Boomerang range and punish pulling animations with Jab or Dash Attack.',
          'Cross up shields with falling Nair to prevent Toon Link Up-B out of shield from punishing.'
        ],
        advantageTips: [
          'Ledge-trap with D-tilt to send Toon Link off-stage at severe horizontal angles.',
          'Use Counter against high tether recovery attempts for immediate kills.'
        ],
        disadvantageTips: [
          'Respect Toon Link bomb-to-Fair confirms starting around 90%.',
          'Angle Blazer strictly toward ledge snap to avoid dropped bombs.'
        ]
      },
      fox: {
        ratio: 'Even',
        summary: 'High-speed slugfest where both characters kill in two neutral wins. Whiff-punishing determines the set.',
        neutralKeys: [
          'Dash dance outside Fox Forward-Tilt reach and whiff-punish with running Jab or Dash Attack.',
          'Land with sweetspot Nair behind Fox shield to avoid his fast OOS options.'
        ],
        advantageTips: [
          'Counter predictable Fire Fox recovery angles off-stage for free stocks.',
          'Up-Smash tech-chase Fox on platforms starting at 85%.'
        ],
        disadvantageTips: [
          'Hold hard DI away on Fox sweetspot Jab to prevent guaranteed Bair knockouts.',
          'Mix up recovery timing to avoid Fox run-off Shine edgeguards.'
        ]
      },
      lucina: {
        ratio: 'Even',
        summary: 'Spacing battle. Lucina controls max range, while Roy dominates once inside her sword tip reach.',
        neutralKeys: [
          'Use dash-in shield to bypass Lucina Fair spacing and enter sweetspot hilt distance.',
          'Whiff-punish Lucina landing aerials with Forward-Tilt or sweetspot Jab.'
        ],
        advantageTips: [
          'Ledge-trap with D-tilt to hit Lucina 2-frame ledge snap vulnerability.',
          'Punish high recovery with full-hop Bair intercepts.'
        ],
        disadvantageTips: [
          'Never drop shield early against Dolphin Slash out of shield (Frame 5).',
          'Avoid predictable Blazer paths; Lucina Counter off-stage ends your stock.'
        ]
      },
      donkey_kong: {
        ratio: '+2 (Major Advantage)',
        summary: 'Dominate DK massive hurtbox with relentless sword juggles and off-stage counters.',
        neutralKeys: [
          'Abuse sweetspot D-tilt into Dash Attack for continuous 0-to-60% juggle sequences.',
          'Space falling Fair safely outside DK Frame 4 grounded Up-B out of shield range.'
        ],
        advantageTips: [
          'Down-B Counter off-stage deletes DK Spinning Kong super armor instantly.',
          'Ledge-trap with sweetspot Jab into Bair kill confirms starting at 70%.'
        ],
        disadvantageTips: [
          'Respect DK Frame 4 grounded Up-B when pressing buttons close to shield.',
          'Do not drop shield early against DK landing aerials to avoid Cargo Grab.'
        ]
      },
      pyra_mythra: {
        ratio: 'Even',
        summary: 'Match Mythra speed with burst dashes, then capitalize heavily on their exploitable recoveries.',
        neutralKeys: [
          'Against Mythra: contest dash-ins with Forward-Tilt and buffered Jab out of run.',
          'Against Pyra: overwhelm her startup frames with aggressive close-range sword pressure.'
        ],
        advantageTips: [
          'Off-stage Counter completely beats Mythra Ray of Punishment and Pyra Prominence Revolt.',
          'Ledge-trap with D-tilt to contest their vulnerable vertical ledge snaps.'
        ],
        disadvantageTips: [
          'SDI outward against Mythra multi-hit Up-Tilt and Nair ladder combos.',
          'Avoid challenge commitments against Pyra high-priority kill aerials.'
        ]
      },
      pokemon_trainer: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Pressure Squirtle with disjoints, overwhelm Ivysaur up close, and combo Charizard heavily.',
        neutralKeys: [
          'Out-range Squirtle with sweetspot Forward-Tilt and retreating Fair.',
          'Close distance rapidly on Ivysaur to deny Razor Leaf projectile control.'
        ],
        advantageTips: [
          'Down-tilt at ledge to hit Ivysaur 2-frame vulnerability during tether pull.',
          'Counter Charizard Flare Blitz for instant high-damage reversals.'
        ],
        disadvantageTips: [
          'DI away against Ivysaur Up-Air juggle ladders at high percent.',
          'Watch out for Squirtle low-profile dash attack beneath Roy sweetspot swings.'
        ]
      },
      lucas: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Overwhelm Lucas slower startup frames and punish exposed PK Fire commitments.',
        neutralKeys: [
          'Dash under PK Fire trajectory and punish recovery frames with sweetspot Jab.',
          'Cross up Lucas shield to avoid his Frame 7 Nair out of shield.'
        ],
        advantageTips: [
          'Run-off Counter against Lucas PK Thunder rocket recovery secures free stocks.',
          'Ledge-trap with D-tilt to punish Lucas tether reel-in lag.'
        ],
        disadvantageTips: [
          'Do not roll toward Lucas near ledge; Down-Smash multi-hits catch evasions cleanly.',
          'SDI away from Lucas Nair loop strings.'
        ]
      },
      steve: {
        ratio: '-1 (Slight Disadvantage)',
        summary: 'Steve resource walls hinder rushdown, while Minecart contests Roy direct approach angles.',
        neutralKeys: [
          'Break block walls immediately with sweetspot Fair to disrupt Steve mining rhythm.',
          'Bait Minecart bursts with empty hops and punish with falling sweetspot Dair.'
        ],
        advantageTips: [
          'Hit Steve with Counter off-stage during Elytra flight glide.',
          'Ledge-trap with D-tilt to break blocks placed below the stage lip.'
        ],
        disadvantageTips: [
          'Never shield Anvil above 80%; roll away to avoid shield break into F-Smash.',
          'Tech roll outward from TNT setups to escape pickaxe zero-death chains.'
        ]
      },
      sonic: {
        ratio: 'Even',
        summary: 'Fast-paced spacing duel. Intercept Spin Dash approaches with disjointed hitboxes.',
        neutralKeys: [
          'Time sweetspot Forward-Tilt and Jab to swat Sonic directly out of Spin Dash charge.',
          'Do not chase Sonic across stage; hold center stage and control platform space.'
        ],
        advantageTips: [
          'Catch Sonic Spring recovery with high-altitude Fair intercepts.',
          'Ledge-trap with Jab into Bair to cover Sonic neutral getup.'
        ],
        disadvantageTips: [
          'Avoid rolling predictably when Sonic crosses up shield with Spin Dash.',
          'SDI outward against Sonic Up-Air ladder combos.'
        ]
      }
    }
  };