import type { CharacterProfile } from '../../types/matchup.js';
import {toonLink} from './toon_link.js';

export const characterRegistry: Record<string, CharacterProfile> = {
  toon_link: toonLink,
};