import type { CharacterProfile } from '../../types/matchup.js';

export const lucina: CharacterProfile = {
    characterId: 'lucina',
    displayName: 'Lucina',
    iconPath: '/icons/lucina.png',
    archetype: 'Spacing / Fundamentals',
    fastestOOS: 'Dolphin Slash Up-B (Frame 5, Frame 1 Invulnerable)',
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