export interface RosterEntry {
  id: string;
  name: string;
  archetype: string;
  iconPath: string;
  aliases: string[];
}

export const roster: RosterEntry[] = [
  { id: 'toon_link', name: 'Toon Link', archetype: 'Zoner / Trapper', iconPath: '/icons/toon_link.png', aliases: ['tl', 'tlink', 'tink'] },
  { id: 'roy', name: 'Roy', archetype: 'Rushdown / Swordie', iconPath: '/icons/roy.png', aliases: ['our boy'] },
  { id: 'donkey_kong', name: 'Donkey Kong', archetype: 'Super Heavy / Grappler', iconPath: '/icons/donkey_kong.png', aliases: ['dk', 'ape', 'monkey'] },
  { id: 'lucina', name: 'Lucina', archetype: 'Spacing / Fundamentals', iconPath: '/icons/lucina.png', aliases: ['luci', 'marth clone'] },
  { id: 'fox', name: 'Fox', archetype: 'High-Velocity Rushdown', iconPath: '/icons/fox.png', aliases: ['fox mccloud', 'spacie'] },
  { id: 'lucas', name: 'Lucas', archetype: 'Zoner / Spacing Trapper', iconPath: '/icons/lucas.png', aliases: ['mother3'] },
  { id: 'steve', name: 'Steve', archetype: 'Resource Builder / Trapper', iconPath: '/icons/steve.png', aliases: ['minecraft', 'alex', 'zombie'] },
  { id: 'pyra_mythra', name: 'Pyra / Mythra', archetype: 'Dynamic Stance', iconPath: '/icons/pyra_mythra.png', aliases: ['aegis', 'pythra'] },
  { id: 'pokemon_trainer', name: 'Pokémon Trainer', archetype: 'Multi-Fighter Stance', iconPath: '/icons/pokemon_trainer.png', aliases: ['pt', 'squirtle', 'ivysaur', 'charizard'] },
  { id: 'sonic', name: 'Sonic', archetype: 'Hit-and-Run / Speedster', iconPath: '/icons/sonic.png', aliases: ['blue blur'] }
];