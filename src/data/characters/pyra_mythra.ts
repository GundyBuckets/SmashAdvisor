import type { CharacterProfile } from '../../types/matchup.js';

export const pyraMythra: CharacterProfile = {
  characterId: 'pyra_mythra',
  displayName: 'Pyra / Mythra',
  iconPath: '/icons/pyra_mythra.png',
  archetype: 'Dynamic Stance',
  fastestOOS: 'Mythra Nair (Frame 8), Pyra Up-B (Frame 13)',
  matchups: {
    toon_link: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Mythra speed suffocates Toon Link bomb pulls, while Pyra secures stocks early with massive disjointed reach.',
      neutralKeys: [
        'Play neutral primarily as Mythra: use dash speed and Foresight to bypass projectile zoning.',
        'Switch to Pyra once Toon Link exceeds 80% to find early kill confirms off Up-Tilt or D-tilt.'
      ],
      advantageTips: [
        'Ledge-trap Toon Link with Pyra Down-Smash to cover both neutral getup and roll.',
        'Mythra Lightning Buster covers Toon Link floaty landing options cleanly.'
      ],
      disadvantageTips: [
        'Both characters have poor vertical recoveries; save double jump to avoid dropped bomb gimps.',
        'Do not challenge Toon Link Up-B out of shield with unspaced Mythra aerials.'
      ]
    },
    roy: {
      ratio: 'Even',
      summary: 'High-octane sword duel. Mythra controls neutral pacing, but both characters can exploit each other off-stage.',
      neutralKeys: [
        'Use Mythra Nair and Photon Edge to contest Roy burst dash-ins.',
        'Swap to Pyra to contest Roy sweetspot hilt entries with longer sword reach.'
      ],
      advantageTips: [
        'Ledge-trap Roy with Pyra Down-Tilt into Up-Smash kill confirms.',
        'Mythra Side-B catches Roy linear Blazer recovery path off-stage.'
      ],
      disadvantageTips: [
        'Roy off-stage Counter deletes both Pyra and Mythra recoveries; mix up angles carefully.',
        'SDI outward against Roy sweetspot Jab to avoid guaranteed Bair knockouts.'
      ]
    },
    fox: {
      ratio: 'Even',
      summary: 'Even speed duel against Mythra; switch to Pyra only for confirmed punishes or edgeguard traps.',
      neutralKeys: [
        'Rely on Mythra high air speed and Nair to contest Fox dash-dance approaches.',
        'Use Foresight on Fox predictable Dash Attack to land massive counter-attacks.'
      ],
      advantageTips: [
        'Ledge-trap Fox with Pyra F-Smash to catch linear Fire Fox angles.',
        'Mythra Up-Tilt strings combo Fox fast fall speed effortlessly from 0 to 50%.'
      ],
      disadvantageTips: [
        'Vary recovery timing; Fox run-off Shine invalidates Pyra Prominence Revolt.',
        'Never tech roll inward against Fox near ledge to avoid Up-Smash confirms.'
      ]
    },
    lucina: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Mythra out-speeds Lucina in neutral, while Pyra disjointed sword matches her range with vastly superior launch power.',
      neutralKeys: [
        'Use Mythra superior ground acceleration to bait Lucina Fair whiffs and punish with Dash Attack.',
        'Switch to Pyra to contest Lucina defensive swatting with high-priority hitboxes.'
      ],
      advantageTips: [
        'Pyra Up-B (Prominence Revolt) at ledge covers Lucina floaty recovery drift.',
        'Mythra Lightning Buster traps Lucina on platforms.'
      ],
      disadvantageTips: [
        'Be cautious recovering low: Lucina Counter off-stage secures stocks as early as 40%.',
        'Do not drop shield early against Lucina Dolphin Slash reversals.'
      ]
    },
    donkey_kong: {
      ratio: '+2 (Major Advantage)',
      summary: 'Massively winning matchup. Mythra combos DK infinitely, while Pyra kills him under 70%.',
      neutralKeys: [
        'Use Mythra Up-Tilt and Nair: DK massive hurtbox allows 0-to-70% uninterrupted combo strings.',
        'Switch to Pyra at 70% to kill with Down-Tilt into Up-Smash or raw Forward-Smash.'
      ],
      advantageTips: [
        'Ledge-trap DK with Pyra Side-B (Blazing End) to cover all getup options simultaneously.',
        'Pyra Dair off-stage spikes DK wide Spinning Kong super-armor recovery cleanly.'
      ],
      disadvantageTips: [
        'Respect DK Frame 4 grounded Up-B out of shield when pressing buttons up close.',
        'Avoid getting grabbed at 65%–80% to eliminate Cargo Throw Ding-Dong kill setups.'
      ]
    },
    pokemon_trainer: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Mythra overwhelms Ivysaur and Charizard in neutral, while Pyra trades favorably with Squirtle.',
      neutralKeys: [
        'Use Mythra to rush down Ivysaur before he can establish Razor Leaf spacing.',
        'Switch to Pyra to combo and out-damage Charizard heavy hurtbox.'
      ],
      advantageTips: [
        'Pyra Blazing End (Side-B) at ledge invalidates Ivysaur tether recovery reel-in.',
        'Mythra Ray of Punishment hits Charizard big recovery snap.'
      ],
      disadvantageTips: [
        'Watch out for Charizard Flare Blitz bursts across stage.',
        'DI away from Ivysaur Down-Tilt to avoid Up-Air kill setups.'
      ]
    },
    lucas: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Mythra frame data suffocates Lucas zoning, and Pyra raw launch power punishes floaty landings.',
      neutralKeys: [
        'Use Mythra dash speed to bypass PK Fire and punish startup with Dash Attack.',
        'Use Foresight on Lucas PK Freeze off-stage to regain stage control safely.'
      ],
      advantageTips: [
        'Pyra Blazing End traps Lucas at ledge and covers his tether reel-in lag.',
        'Mythra Up-Air ladders carry Lucas to high blast zones effortlessly.'
      ],
      disadvantageTips: [
        'Never use predictable low vertical recoveries; Lucas Down-Smash at ledge catches all snap lines.',
        'SDI outward against Lucas Nair loops.'
      ]
    },
    steve: {
      ratio: 'Even',
      summary: 'Mythra has the speed to break Steve walls and contest mining, but Steve Minecart threatens both characters off-stage.',
      neutralKeys: [
        'Use Mythra speed to rush down Steve and prevent diamond mining.',
        'Use Foresight against Minecart command grab to trigger massive counter windows.'
      ],
      advantageTips: [
        'Pyra Down-Smash breaks through block barricades and hits Steve underneath.',
        'Mythra Lightning Buster covers Steve block-stalls off-stage.'
      ],
      disadvantageTips: [
        'Never shield Anvil above 80%; roll away to avoid shield break into F-Smash.',
        'Tech roll away from TNT pressure plates immediately.'
      ]
    },
    sonic: {
      ratio: 'Even',
      summary: 'High-speed matchup. Mythra matches Sonic pace, while Foresight punishes Spin Dash approaches.',
      neutralKeys: [
        'Use Mythra Foresight to slow down Sonic Spin Dash on reaction and land full combo starters.',
        'Hold center stage and avoid chasing Sonic when he resets neutral across stage.'
      ],
      advantageTips: [
        'Pyra Blazing End at ledge restricts Sonic aggressive Spring ledge getup options.',
        'Mythra Up-Air ladders catch Sonic landing out of Spring.'
      ],
      disadvantageTips: [
        'Mix up recovery drift to avoid Sonic Bair stage-spike gimps.',
        'SDI outward on Sonic Up-Air ladder combos.'
      ]
    }
  }
};