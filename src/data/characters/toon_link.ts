import type { CharacterProfile } from '../../types/matchup.js';

export const toonLink: CharacterProfile = {
  characterId: 'toon_link',
  displayName: 'Toon Link',
  iconPath: '/icons/toon_link.png',
  archetype: 'Zoner / Trapper',
  fastestOOS: 'Up-B (Frame 6)',
  matchups: {
    fox: {
      ratio: 'Even',
      summary: 'High-velocity match. Keep Fox out with grounded projectiles; avoid throwing raw boomerangs at mid-range.',
      neutralKeys: [
        'Use Bombs and grounded Boomerangs to wall out dash-ins.',
        'Bait Fox Shine with empty short-hops prior to projectile commitments.',
        'Space Fair/Nair carefully to avoid Fox Up-Tilt anti-airs.'
      ],
      advantageTips: [
        'Exploit linear Fire Fox angles with dropped bombs or timed Dair at the ledge.',
        'Up-B out of shield punishes unspaced landing aerials.'
      ],
      disadvantageTips: [
        'Avoid teching in place against Fox near ledge due to Up-Smash kill confirms.',
        'Mix up landing timing using bomb pulls to disrupt juggle chains.'
      ]
    },
    donkey_kong: {
      ratio: 'Even',
      summary: 'DK is a heavy-hitting threat. Use projectiles to keep him at bay and punish his laggy moves.',
      neutralKeys: [
        'Establish double-bomb setups to control space and limit DK\'s approach options.',
        'Use Zair and short-hop Fair to swat away giant aerial approches.',
        'Never roll backward into the corner; DK dash attack covers backward evasions.'
      ],
      advantageTips: [
        'Exploit Spinning Kong horizontally: dropped bombs and tether Zair disrupt super-armor spin effortlessly.',
        'Ledge-trap using remote bomb placement on the ledge roll distance and down-smash the regular getup.'
      ],
      disadvantageTips: [
        'Respect 60%–85% grab range to avoid dying to Cargo Throw into Up-Air setups on platforms.',
        'Do not challenge DK landing Dair directly below him without bomb armor absorption.'
      ],
      stageNotes: [
        'Preferred: Final Destination (denies platform Ding-Dong extensions).',
        'Avoid: Smashville (center platform enables early cargo kill confirms).'
      ]
    },
    roy: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'High-pressure matchup. Roy closes space rapidly and punishes slow bomb pulls with unreactable dash-in bursts.',
      neutralKeys: [
        'Pull bombs only when Roy is fully reset across half-stage or in tumble.',
        'Space retreating Fair to clip Roy sweetspot approach angles before his sword reaches hilt range.',
        'Rely on fast Nair out of shield rather than slow rolls against Roy shield pressure.'
      ],
      advantageTips: [
        'Roy recovery has minimal vertical snap: intercept Blazer with falling bombs or timed Dair.',
        'Maintain ledge pressure with Boomerang angled downward to catch low recovery lines.'
      ],
      disadvantageTips: [
        'Roy Jab into Bair kills at 80% at the ledge; hold defensive SDI outward and avoid shield drops.',
        'Never challenge Roy when juggled directly above him; drift to corner ledge instead.'
      ],
      stageNotes: [
        'Preferred: Battlefield (tri-platforms provide escape routes from rushdown pressure).',
        'Avoid: Small Battlefield (cramped neutral facilitates Roy burst range).'
      ]
    },
    steve: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Steve builds walls to mine diamonds while Toon Link projectiles get blocked by wooden and dirt blocks.',
      neutralKeys: [
        'Use Boomerang angled upward over block walls to harass Steve while mining.',
        'Save bombs specifically to detonate Minecart approaches on reaction.',
        'Avoid grounded commitments that let Steve trap you with pressure near blocks.'
      ],
      advantageTips: [
        'Exploit Elytra recovery angles by dropping bombs off-stage into his flight path.',
        'Punish Steve block-building ledge stalls with down-air spikes through thin blocks.'
      ],
      disadvantageTips: [
        'Do not shield Anvil above 90%; roll off or parry to prevent instant shield break.',
        'Tech away from TNT pads to prevent footstool pickaxe death setups.'
      ]
    }
    }

};