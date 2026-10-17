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
  const [query, setQuery] = useState('');

  const filteredRoster = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return roster;

    return roster.filter((char) => {
      const matchesName = char.name.toLowerCase().includes(cleanQuery);
      const matchesAlias = char.aliases.some((alias) =>
        alias.toLowerCase().includes(cleanQuery)
      );
      return matchesName || matchesAlias;
    });
  }, [roster, query]);

  return (
    <div className="flex flex-col gap-3 w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-1">
        <span className="text-sm font-semibold tracking-wide uppercase text-slate-400">
          Selecting: <span className={activeSlot === 'player' ? 'text-blue-400' : 'text-rose-400'}>
            {activeSlot === 'player' ? 'My Character (Slot A)' : 'Opponent (Slot B)'}
          </span>
        </span>
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="text-xs text-slate-400 hover:text-slate-200 underline"
          >
            Clear Search
          </button>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or alias (e.g., 'DK', 'TL', 'Roy')..."
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[44px]"
        />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 max-h-[380px] overflow-y-auto p-1 rounded-lg border border-slate-800/80 bg-slate-900/50">
        {filteredRoster.map((character) => (
          <CharacterTile
            key={character.id}
            character={character}
            isPlayer={character.id === selectedPlayerId}
            isOpponent={character.id === selectedOpponentId}
            onSelect={onSelectCharacter}
          />
        ))}
        {filteredRoster.length === 0 && (
          <div className="col-span-full py-8 text-center text-sm text-slate-400">
            No characters found matching "{query}".
          </div>
        )}
      </div>
    </div>
  );
};