import React from 'react';
import type { RosterEntry } from '../data/roster.js';

interface CharacterTileProps {
  character: RosterEntry;
  isPlayer: boolean;
  isOpponent: boolean;
  onSelect: (id: string) => void;
}

export const CharacterTile: React.FC<CharacterTileProps> = ({
  character,
  isPlayer,
  isOpponent,
  onSelect,
}) => {
  let borderClass = 'border-slate-800 hover:border-slate-600 bg-slate-800/60';
  let badgeLabel = null;

  if (isPlayer) {
    borderClass = 'border-blue-500 bg-blue-950/40 ring-2 ring-blue-500/50';
    badgeLabel = 'P1';
  } else if (isOpponent) {
    borderClass = 'border-rose-500 bg-rose-950/40 ring-2 ring-rose-500/50';
    badgeLabel = 'CPU';
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(character.id)}
      className={`relative flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-150 min-h-[72px] min-w-[72px] cursor-pointer focus:outline-none ${borderClass}`}
      aria-label={`Select ${character.name}`}
    >
      {badgeLabel && (
        <span
          className={`absolute top-1 right-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${
            isPlayer ? 'bg-blue-500 text-white' : 'bg-rose-500 text-white'
          }`}
        >
          {badgeLabel}
        </span>
      )}
      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden mb-1">
        <img
          src={character.iconPath}
          alt={character.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback placeholder if image asset is missing
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <span className="text-xs font-bold text-slate-300 select-none">
          {character.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span className="text-xs font-medium text-slate-200 text-center truncate w-full">
        {character.name}
      </span>
    </button>
  );
};