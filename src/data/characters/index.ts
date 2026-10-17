import type { CharacterProfile } from '../../types/matchup.js';
import { toonLink } from './toon_link.js';
import { roy } from './roy.js';
import { fox } from './fox.js';
import { lucina } from './lucina.js';
import { donkey_kong } from './donkey_kong.js';
import { pyraMythra } from './pyra_mythra.js';
import { pokemonTrainer } from './pokemon_trainer.js';
import { lucas } from './lucas.js';
import { steve } from './steve.js';
import { sonic } from './sonic.js';

export const characterRegistry: Record<string, CharacterProfile> = {
  toon_link: toonLink,
  roy: roy,
  fox: fox,
  lucina: lucina,
  donkey_kong: donkey_kong,
  pyra_mythra: pyraMythra,
  pokemon_trainer: pokemonTrainer,
  lucas: lucas,
  steve: steve,
  sonic: sonic,
};