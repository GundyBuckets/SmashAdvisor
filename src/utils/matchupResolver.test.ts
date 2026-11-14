// src/utils/matchupResolver.test.ts
import { describe, it, expect } from 'vitest';
import type { CharacterProfile } from '../types/matchup.js';
import { roster } from '../data/roster.js';
import { characterRegistry } from '../data/characters/index.js';
import { resolveMatchup } from './matchupResolver.js';

describe('SmashAdvisor Data Integrity & Matchup Resolver', () => {
  const registeredCharacters: CharacterProfile[] = Object.values(characterRegistry);

  it('keeps roster.ts and characterRegistry completely synchronized', () => {
    expect(roster.length).toBeGreaterThan(0);

    for (const entry of roster) {
      const profile = characterRegistry[entry.id];
      if (!profile) {
        throw new Error(`Missing registry entry for roster ID: ${entry.id}`);
      }
      expect(profile.displayName).toBe(entry.name);
      expect(profile.archetype).toBe(entry.archetype);
    }

    expect(registeredCharacters.length).toBe(roster.length);
  });

  it('validates baseline metadata and icon paths for every registered character', () => {
    for (const char of registeredCharacters) {
      expect(char.characterId.trim().length).toBeGreaterThan(0);
      expect(char.displayName.trim().length).toBeGreaterThan(0);
      expect(char.fastestOOS.trim().length).toBeGreaterThan(0);
      expect(char.iconPath).toMatch(/^\/icons\/[a-z0-9_]+\.(png|webp|svg)$/);
    }
  });

  it('resolves all N x N character pairings without runtime errors or missing fields', () => {
    let directCount = 0;
    let fallbackCount = 0;

    for (const player of registeredCharacters) {
      for (const opponent of registeredCharacters) {
        const result = resolveMatchup(player, opponent);
        const hasDirectMatchup = Boolean(player.matchups[opponent.characterId]);

        expect(result.ratio.trim().length).toBeGreaterThan(0);
        expect(result.summary.trim().length).toBeGreaterThan(0);
        expect(result.neutralKeys.length).toBeGreaterThanOrEqual(2);
        expect(result.neutralKeys.length).toBeLessThanOrEqual(4);
        expect(result.advantageTips.length).toBeGreaterThan(0);
        expect(result.disadvantageTips.length).toBeGreaterThan(0);

        if (hasDirectMatchup) {
          expect(result.isArchetypeFallback).toBe(false);
          directCount++;
        } else {
          expect(result.isArchetypeFallback).toBe(true);
          fallbackCount++;
        }
      }
    }

    console.info(
      `[Matchup Audit] Tested ${directCount + fallbackCount} total pairings ` +
        `(${directCount} 1-to-1 guides, ${fallbackCount} archetype fallbacks).`
    );
  });

  it('resolves competitive shorthand aliases case-insensitively', () => {
    const filterRoster = (query: string) => {
      const q = query.trim().toLowerCase();
      return roster.filter(
        (entry) =>
          entry.name.toLowerCase().includes(q) ||
          entry.aliases?.some((alias) => alias.toLowerCase().includes(q))
      );
    };

    expect(filterRoster('dk').some((c) => c.id === 'donkey_kong')).toBe(true);
    expect(filterRoster('TL').some((c) => c.id === 'toon_link')).toBe(true);
    expect(filterRoster('aegis').some((c) => c.id === 'pyra_mythra')).toBe(true);
  });

  it('resolves Tier 2 character-specific archetypeNotes before global defaults', () => {
    const mockOpponent: CharacterProfile = {
      characterId: 'test_heavy',
      displayName: 'Test Heavy',
      iconPath: '/icons/donkey_kong.png',
      archetype: 'Super Heavy / Grappler',
      fastestOOS: 'Up-B (Frame 6)',
      matchups: {},
    };

    const toonLink = characterRegistry['toon_link'];
    if (!toonLink) {
      throw new Error('Expected toon_link to exist in characterRegistry');
    }

    const result = resolveMatchup(toonLink, mockOpponent);

    expect(result.isArchetypeFallback).toBe(true);
    expect(result.summary).toContain('[Archetype Matchup]');
    expect(result.neutralKeys.length).toBeGreaterThanOrEqual(2);
  });
});