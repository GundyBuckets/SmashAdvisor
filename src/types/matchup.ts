export type MatchupRatio = 
  | "+2 (Major Advantage)" 
  | "+1 (Slight Advantage)" 
  | "Even" 
  | "-1 (Slight Disadvantage)" 
  | "-2 (Major Disadvantage)";

export interface MatchupNote {
  ratio: MatchupRatio;
  summary: string;
  neutralKeys: string[];
  advantageTips: string[];
  disadvantageTips: string[];
  stageNotes?: string[];
}

export interface CharacterProfile {
  characterId: string;
  displayName: string;
  iconPath: string;
  archetype: string;
  fastestOOS: string;
  matchups: Record<string, MatchupNote>;
}