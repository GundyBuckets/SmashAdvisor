import { useState } from 'react';
import { roster } from './data/roster.js';
import { characterRegistry } from './data/characters/index.js';
import { CharacterGrid } from './components/CharacterGrid.js';
import { MatchupView } from './components/MatchupView.js';

export default function App() {
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [opponentId, setOpponentId] = useState<string | null>(null);

  const activeSlot = !playerId ? 'player' : 'opponent';

  const handleSelectCharacter = (id: string) => {
    if (!playerId) {
      setPlayerId(id);
    } else if (!opponentId) {
      setOpponentId(id);
    } else {
      // If both were already selected, re-select opponent
      setOpponentId(id);
    }
  };

  const handleSwap = () => {
    if (playerId && opponentId) {
      const prevPlayer = playerId;
      setPlayerId(opponentId);
      setOpponentId(prevPlayer);
    }
  };

  const handleReset = () => {
    setPlayerId(null);
    setOpponentId(null);
  };

  const playerProfile = playerId ? characterRegistry[playerId] : null;
  const opponentProfile = opponentId ? characterRegistry[opponentId] : null;
  const matchupData =
    playerProfile && opponentId ? playerProfile.matchups[opponentId] : undefined;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-base font-black tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            SmashAdvisor
          </h1>
          <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
            v1.0 MVP
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col gap-4">
        {playerProfile && opponentProfile ? (
          <MatchupView
            player={playerProfile}
            opponent={opponentProfile}
            matchupData={matchupData}
            onSwap={handleSwap}
            onReset={handleReset}
          />
        ) : (
          <CharacterGrid
            roster={roster}
            selectedPlayerId={playerId}
            selectedOpponentId={opponentId}
            onSelectCharacter={handleSelectCharacter}
            activeSlot={activeSlot}
          />
        )}
      </main>
    </div>
  );
}