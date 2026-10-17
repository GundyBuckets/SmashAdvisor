import React from 'react';
import type { CharacterProfile, MatchupNote } from '../types/matchup.js';

interface MatchupViewProps {
  player: CharacterProfile;
  opponent: CharacterProfile;
  matchupData?: MatchupNote | undefined;
  onSwap: () => void;
  onReset: () => void;
}

export const MatchupView: React.FC<MatchupViewProps> = ({
  player,
  opponent,
  matchupData,
  onSwap,
  onReset,
}) => {
  const getBadgeColor = (ratio: string) => {
    if (ratio.includes('+2') || ratio.includes('+1')) {
      return 'bg-emerald-950/70 text-emerald-400 border-emerald-600/60';
    }
    if (ratio.includes('-1') || ratio.includes('-2')) {
      return 'bg-rose-950/70 text-rose-400 border-rose-600/60';
    }
    return 'bg-amber-950/70 text-amber-300 border-amber-600/60';
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      {/* Header controls & matchup badge */}
      <div className="flex items-center justify-between bg-slate-800/80 border border-slate-700/80 rounded-xl p-3">
        <div className="flex items-center gap-3">
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Player</span>
            <p className="text-base font-bold text-white">{player.displayName}</p>
          </div>
          <span className="text-xs text-slate-500 font-bold">VS</span>
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">Opponent</span>
            <p className="text-base font-bold text-white">{opponent.displayName}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSwap}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-md transition-colors min-h-[44px] min-w-[44px]"
            title="Swap Characters"
          >
            Swap
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-700/60 hover:bg-rose-950/50 text-slate-300 hover:text-rose-300 rounded-md transition-colors min-h-[44px]"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Matchup content or fallback */}
      {matchupData ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between bg-slate-800/40 border border-slate-800 p-3 rounded-lg">
            <span className="text-xs font-medium text-slate-400">Matchup Verdict</span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded border ${getBadgeColor(matchupData.ratio)}`}>
              {matchupData.ratio}
            </span>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-lg">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Executive Summary</h3>
            <p className="text-sm leading-relaxed text-slate-200">{matchupData.summary}</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-lg">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Neutral Game Keys</h3>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
              {matchupData.neutralKeys.map((key: string, i: number) => (
                <li key={i} className="leading-snug">{key}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-lg">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">Advantage State</h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
                {matchupData.advantageTips.map((tip: string, i: number) => (
                  <li key={i} className="leading-snug">{tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-lg">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">Disadvantage & OOS</h3>
              <p className="text-xs text-amber-300 mb-2 font-mono">Opponent OOS: {opponent.fastestOOS}</p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
                {matchupData.disadvantageTips.map((tip: string, i: number) => (
                  <li key={i} className="leading-snug">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-800/40 border border-slate-700/80 p-6 rounded-lg text-center flex flex-col items-center gap-2">
          <p className="text-sm font-semibold text-slate-200">
            No curated notes available for this matchup yet.
          </p>
          <p className="text-xs text-slate-400">
            Opponent Baseline OOS: <span className="font-mono text-amber-300">{opponent.fastestOOS}</span>
          </p>
        </div>
      )}
    </div>
  );
};