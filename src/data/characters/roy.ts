import type { CharacterProfile } from '../../types/matchup.js';

export const roy: CharacterProfile = {
    characterId: 'roy',
    displayName: 'Roy',
    iconPath: '/icons/roy.png',
    archetype: 'Rushdown / Swordie',
    fastestOOS: 'Blazer Up-B (Frame 9, Frame 4 Armor)',
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