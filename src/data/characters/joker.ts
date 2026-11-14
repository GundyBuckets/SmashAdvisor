import type { CharacterProfile } from '../../types/matchup.js';

export const joker: CharacterProfile & {
  archetypeNotes: Record<string, {
    ratio: string;
    summary: string;
    neutralKeys: string[];
    advantageTips: string[];
    disadvantageTips: string[];
  }>;
} = {
  characterId: 'joker',
  displayName: 'Joker',
  iconPath: '/icons/joker.png',
  archetype: 'Dynamic / Stance',
  fastestOOS: 'Up-Smash (Frame 10) / Back Air (Frame 10)',
  matchups: {},
  archetypeNotes: {
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Harass heavies at mid-range with Gun and Eiha/Eigaon. Build Arsène quickly and use Tetrakarn to punish linear recoveries.',
      neutralKeys: [
        'Camp horizontally with Gun down-shots and wavebounced Eiha to rack up damage safely.',
        'Never contest grounded heavy shields directly to avoid grab setups.'
      ],
      advantageTips: [
        'Arsène Down-B (Tetrakarn) completely counters heavy super-armor recovery moves off-stage.',
        'Use tether pull-up or Arsène Dair spikes to catch heavy ledge snaps.'
      ],
      disadvantageTips: [
        'Rebel’s Guard (Down-B) can be grabbed; do not use it predictably against grapplers.',
        'DI outward against mid-percent cargo or command throws.'
      ]
    }
  }
};