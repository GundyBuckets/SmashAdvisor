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
    }
  }
};