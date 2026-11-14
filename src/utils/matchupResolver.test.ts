// src/utils/matchupResolver.test.ts
import { describe, it, expect } from 'vitest';
import { roster } from '../data/roster.js';
import { characterRegistry } from '../data/characters/index.js';
import { resolveMatchup } from './matchupResolver.js';

describe('SmashAdvisor Data Integrity & Matchup Resolver', () => {
  const registeredCharacters = Object.values(characterRegistry);

  it('keeps roster.ts and characterRegistry completely synchronized', () => {
    expect(roster.length).toBeGreaterThan(0);

    for (const entry of roster) {
      const profile = characterRegistry[entry.id];
      expect(profile, `Missing registry entry for roster ID: ${entry.id}`).toBeDefined();
      if (!profile) continue;
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

        // Core string fields must never be empty
        expect(result.ratio.trim().length).toBeGreaterThan(0);
        expect(result.summary.trim().length).toBeGreaterThan(0);

        // SRS Section 4 Schema Check: 2–4 neutral keys and populated tip arrays
        expect(result.neutralKeys.length).toBeGreaterThanOrEqual(2);
        expect(result.neutralKeys.length).toBeLessThanOrEqual(4);
        expect(result.advantageTips.length).toBeGreaterThan(0);
        expect(result.disadvantageTips.length).toBeGreaterThan(0);

        // Verify fallback flag triggers if and only if 1-to-1 data is absent
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
});