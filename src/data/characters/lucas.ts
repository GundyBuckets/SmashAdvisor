import type { CharacterProfile } from '../../types/matchup.js';

export const lucas: CharacterProfile = {
  characterId: 'lucas',
  displayName: 'Lucas',
  iconPath: '/icons/lucas.png',
  archetype: 'Zoner / Spacing Trapper',
  fastestOOS: 'Nair (Frame 10)',
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