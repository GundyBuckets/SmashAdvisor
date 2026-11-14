// src/utils/matchupResolver.ts
import type { CharacterProfile, MatchupNote } from '../types/matchup.js';
import { archetypeDefaults } from '../data/archetypeDefaults.js';

export function resolveMatchup(
  player: CharacterProfile,
  opponent: CharacterProfile
): MatchupNote {
  // Tier 1: Exact 1-to-1 Pairwise Matchup
  const directMatchup = player.matchups[opponent.characterId];
  if (directMatchup) {
    return {
      ...directMatchup,
      isArchetypeFallback: false,
    };
  }

  // Tier 2: Player Character vs. Opponent Archetype Custom Notes
  const charArchetypeNote = (
    player as CharacterProfile & {
      archetypeNotes?: Partial<Record<CharacterProfile['archetype'], MatchupNote>>;
    }
  ).archetypeNotes?.[opponent.archetype];
  if (charArchetypeNote) {
    return {
      ...charArchetypeNote,
      summary: `[Archetype Matchup] ${charArchetypeNote.summary}`,
      isArchetypeFallback: true,
    };
  }

  // Tier 3: Global Archetype vs. Archetype Matrix
  const playerArchetype = player.archetype as keyof typeof archetypeDefaults;
  const opponentArchetype = opponent.archetype as keyof typeof archetypeDefaults;
  const globalArchetypeNote = archetypeDefaults[playerArchetype]?.[opponentArchetype];
  if (globalArchetypeNote) {
    return {
      ...globalArchetypeNote,
      summary: `[General Archetype Guide: ${player.archetype} vs ${opponent.archetype}] ${globalArchetypeNote.summary}`,
      isArchetypeFallback: true,
    };
  }

  // Tier 4: Baseline Safety Net
  return {
    ratio: 'Even',
    summary: `Baseline matchup interaction against ${opponent.displayName}. Play disciplined neutral spacing.`,
    neutralKeys: [
      `Respect ${opponent.displayName}'s primary Out-of-Shield option (${opponent.fastestOOS}).`,
      'Focus on stage control and safe poke spacing to bait overextensions.',
      'Identify opponent landing and roll habits before committing to high-lag smash attacks.',
    ],
    advantageTips: [
      'Maintain stage positioning and contest ledge getup options with spaced aerials.',
      'Watch for panic air dodges or double jumps out of disadvantage.',
    ],
    disadvantageTips: [
      'Use defensive DI away from combo starters and drift toward the ledge.',
      'Avoid burning double jumps early when caught in vertical juggle traps.',
    ],
    isArchetypeFallback: true,
  };
}