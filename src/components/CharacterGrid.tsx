// src/components/CharacterGrid.tsx
import React, { useState, useMemo } from 'react';
import type { RosterEntry } from '../data/roster.js';
import { CharacterTile } from './CharacterTile.js';

interface CharacterGridProps {
  roster: RosterEntry[];
  selectedPlayerId: string | null;
  selectedOpponentId: string | null;
  onSelectCharacter: (id: string) => void;
  activeSlot: 'player' | 'opponent';
}

export const CharacterGrid: React.FC<CharacterGridProps> = ({
  roster,
  selectedPlayerId,
  selectedOpponentId,
  onSelectCharacter,
  activeSlot,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRoster = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return roster;

    return roster.filter(
      (entry) =>
        entry.name.toLowerCase().includes(q) ||
        entry.aliases.some((alias) => alias.toLowerCase().includes(q))
    );
  }, [roster, searchQuery]);

  return (
    <section className="flex flex-col gap-3 w-full">
      {/* Slot Prompt Banner */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5">
        <span className="text-sm font-medium text-slate-300">
          {activeSlot === 'player' ? (
            <>
              Step 1: Select <strong className="text-blue-400">Your Character (Slot A)</strong>
            </>
          ) : (
            <>
              Step 2: Select <strong className="text-rose-400">Opponent (Slot B)</strong>
            </>
          )}
        </span>
      </div>

      {/* Search Bar (16px text-base prevents mobile browser zoom) */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search fighter or alias (e.g. TL, DK, Aegis)..."
          aria-label="Search character by name or alias"
          className="w-full min-h-11 bg-slate-900 border border-slate-700 focus:border-blue-500 focus:outline-none rounded-lg pl-3.5 pr-12 py-2.5 text-base text-slate-100 placeholder-slate-500"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
            className="absolute right-1 min-h-11 min-w-11 flex items-center justify-center text-slate-400 hover:text-white text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Responsive Character Grid */}
      {filteredRoster.length > 0 ? (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {filteredRoster.map((entry) => (
            <CharacterTile
              key={entry.id}
              character={entry}
              isPlayer={selectedPlayerId === entry.id}
              isOpponent={selectedOpponentId === entry.id}
              onSelect={() => {
                onSelectCharacter(entry.id);
                setSearchQuery('');
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-slate-900/50 border border-slate-800 rounded-lg">
          <p className="text-base text-slate-400">No fighters match "{searchQuery}"</p>
        </div>
      )}
    </section>
  );
};