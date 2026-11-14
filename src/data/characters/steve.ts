import type { CharacterProfile } from '../../types/matchup.js';

export const steve: CharacterProfile = {
    characterId: 'steve',
    displayName: 'Steve',
    iconPath: '/icons/steve.png',
    archetype: 'Resource Builder / Trapper',
    fastestOOS: 'Up-Tilt (Frame 4), Anvil Down-Air (Frame 18)',
    archetypeNotes: {
    'Zoner / Trapper': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Erect vertical block walls to block horizontal projectiles and mine safely until you hold Diamond and Gold resources.',
      neutralKeys: [
        'Build a 2-to-3 block wall at mid-stage to block projectiles and mine for Diamond tools.',
        'Force rival zoners to approach your block shelter rather than trading projectiles.',
      ],
      advantageTips: [
        'Confirm Frame 4 Up-Tilt into Up-Air ladders and Diamond Back-Air kills.',
        'Place blocks off-stage to block horizontal zoner recovery paths.',
      ],
      disadvantageTips: [
        'Use Minecart (Side-B) to armor through trap setups and regain stage center.',
        'Save crafting table placements for safe respawn or off-stage edgeguard windows.',
      ],
    },
    'Rushdown / Burst': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Place single-block buffers to stop burst dashes and threaten Frame 4 Up-Tilt and Minecart reversals.',
      neutralKeys: [
        'Drop a single dirt/wood block in front of you to disrupt rushdown dash-attack spacing.',
        'Stuff close-range approaches with walking Jab and Frame 4 Up-Tilt.',
      ],
      advantageTips: [
        'Execute Up-Tilt -> Up-Air -> Block extension combos for 60%+ damage bursts.',
        'Place ledge blocks to block linear rushdown recovery angles.',
      ],
      disadvantageTips: [
        'Drop Anvil (Dair) sparingly when juggled; mix up landing with empty Minecart jumps.',
        'Keep Iron in stock so Minecart is always available to escape corner pressure.',
      ],
    },
    'Spacing / Swordie': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Force swordfighters to burn swings breaking block walls while you mine, then punish approach gaps with Minecart.',
      neutralKeys: [
        'Build block walls to force swordfighters into predictable aerial swings over the top.',
        'Punish sword landings with Frame 4 Up-Tilt or Minecart command grab.',
      ],
      advantageTips: [
        'Place blocks off-stage to intercept vertical sword Up-B snaps.',
        'Close stocks early with Diamond F-smash or Back-Air.',
      ],
      disadvantageTips: [
        'Do not spam Anvil predictably from above against fast sword Up-Airs.',
        'Use Minecart horizontal momentum + Elytra to recover safely from deep off-stage.',
      ],
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Wall off command grab approaches with blocks and shred giant hurtboxes with Up-Tilt ladders and Minecart spikes.',
      neutralKeys: [
        'Build block barriers to block command grab dash-ins while mining for Diamond.',
        'Catch giant hurtboxes with Frame 4 Up-Tilt -> Up-Air chains.',
      ],
      advantageTips: [
        'Ride Minecart off-stage into Fair spike to gimp linear heavy recoveries.',
        'Place ledge blocks to force heavies into high, punishable recovery arcs.',
      ],
      disadvantageTips: [
        'Respect heavy armored moves that break through wood/dirt blocks in one hit.',
        'Keep shield healthy and punish heavy landings with Frame 4 Up-Tilt OOS.',
      ],
    },
    'Dynamic / Stance': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Wall out agility stances with blocks to farm resources, and punish slow power-stance startups with Minecart.',
      neutralKeys: [
        'Use block walls to slow down agility movement and force predictable jump entries.',
        'Punish slow power-stance swings with Minecart or Diamond F-smash.',
      ],
      advantageTips: [
        'Block off vertical recovery paths at the ledge with 2-block overhangs.',
        'Execute Up-Tilt ladders to carry stance fighters off the top blast zone.',
      ],
      disadvantageTips: [
        'Watch for evasion counters (like Foresight) when throwing predictable Minecarts.',
        'Use Minecart jumps to escape multi-hit agility strings.',
      ],
    },
    'Hit-and-Run / Speedster': {
      ratio: 'Even',
      summary: 'Construct L-shaped block shelters to halt burst spin dashes and catch close-range entries with Frame 4 Up-Tilt.',
      neutralKeys: [
        'Place L-shaped block walls to stop grounded burst dashes and force speedsters airborne.',
        'Stuff close-range spin entries with walking Jab and Frame 4 Up-Tilt.',
      ],
      advantageTips: [
        'Place high blocks to interrupt speedster Spring recovery trajectories.',
        'Confirm Up-Tilt chains into Diamond Up-Smash or Back-Air.',
      ],
      disadvantageTips: [
        'Avoid dropping predictable Anvils when speedsters bait landings from below.',
        'Use Minecart + Elytra to mix up recovery heights.',
      ],
    },
  },
    matchups: {
      toon_link: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Steve blocks neutralize Toon Link projectile angles, providing safe space to mine diamonds and build setups.',
        neutralKeys: [
          'Build three-block walls to nullify Toon Link grounded Boomerangs and arrow zoning.',
          'Use Minecart to burst through bomb setups and punish bomb-pull animations on reaction.'
        ],
        advantageTips: [
          'Place TNT at ledge with a pressure plate to cover neutral getup and roll simultaneously.',
          'Drop Anvil (Down-Air) off-stage to invalidate Toon Link vertical Spin Attack recovery.'
        ],
        disadvantageTips: [
          'Watch for upward-angled Boomerangs over block walls while mining.',
          'Use Minecart or Elytra immediately off-stage to avoid dropped bomb ledge-traps.'
        ]
      },
      roy: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Block walls halt Roy rushdown, and Minecart armors through his aggressive dash-in approaches.',
        neutralKeys: [
          'Mine behind three-block barricades; Roy has no projectiles to contest mining from distance.',
          'Use Minecart command grab whenever Roy dashes in recklessly.'
        ],
        advantageTips: [
          'Place TNT at ledge; Roy lacks tools to safely detonate it without getting hit.',
          'Drop Anvil directly on top of Roy Blazer recovery trajectory.'
        ],
        disadvantageTips: [
          'Roy sweetspot Fair breaks through wood and dirt blocks quickly; stay alert.',
          'Tech roll away from corner ledge pressure to avoid Roy sweetspot Jab.'
        ]
      },
      fox: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Blocks shut down Fox dash-dance lanes, and Up-Tilt loops combo Fox fast fall speed for zero-deaths.',
        neutralKeys: [
          'Build walls to block Fox laser chip damage and force him into linear jump approaches.',
          'Anti-air Fox landing aerials with Frame 4 Up-Tilt into full pickaxe combo strings.'
        ],
        advantageTips: [
          'Drop Anvil off-stage to delete Fox Fire Fox recovery instantly.',
          'TNT ledge traps cover Fox Illusion recovery angles cleanly.'
        ],
        disadvantageTips: [
          'Fox Blaster chips away at iron resource health if you camp too long.',
          'DI strictly outward against Fox Up-Smash tech-chases on platforms.'
        ]
      },
      lucina: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Lucina disjoints cannot penetrate thick block walls, allowing Steve to achieve diamond gear unhindered.',
        neutralKeys: [
          'Mine safely behind block walls; Lucina lacks projectile tools to harass mining.',
          'Use Minecart command grab to bypass Lucina shield and sword spacing.'
        ],
        advantageTips: [
          'Block off the ledge completely with dirt blocks to prevent Lucina Dolphin Slash snap.',
          'Drop Anvil off-stage to beat Lucina floaty recovery drift.'
        ],
        disadvantageTips: [
          'Lucina Counter off-stage completely stops Steve Elytra flight glide.',
          'Avoid landing predictably with Anvil; Lucina Dolphin Slash punishes landing lag.'
        ]
      },
      donkey_kong: {
        ratio: '+2 (Major Advantage)',
        summary: 'Invalidate DK entirely with resource walls, Minecart command grabs, and 0-to-death pickaxe combos.',
        neutralKeys: [
          'Mine safely behind block barricades; DK cannot clear walls without high aerial commitments.',
          'Hit DK with Minecart command grab whenever he attempts to approach on the ground.'
        ],
        advantageTips: [
          'Block off the ledge completely with blocks to prevent DK from grabbing the lip with Up-B.',
          'Drop Anvil directly on top of DK Spinning Kong recovery.'
        ],
        disadvantageTips: [
          'Do not get predictable with Anvil landing escapes; DK can punish with charged Giant Punch.',
          'Tech out of DK cargo throws toward center stage to avoid stage-spike deaths.'
        ]
      },
      pyra_mythra: {
        ratio: 'Even',
        summary: 'Mythra has the speed to break blocks and contest mining, but Steve traps Pyra easily.',
        neutralKeys: [
          'Use Up-Tilt out of shield (Frame 4) to interrupt Mythra multi-hit pressure.',
          'Mine actively when Pyra is on stage; her slower speed gives you time to build materials.'
        ],
        advantageTips: [
          'Drop Anvil directly on top of both characters poor vertical recoveries.',
          'TNT at ledge covers Pyra slow ledge getup options.'
        ],
        disadvantageTips: [
          'Mythra Foresight slows down Minecart and triggers massive counter-attacks.',
          'Pyra Down-Smash breaks block walls quickly; keep moving.'
        ]
      },
      pokemon_trainer: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Blocks nullify Squirtle rushdown, and pickaxe ladders combo Charizard and Ivysaur heavily.',
        neutralKeys: [
          'Build walls to force Ivysaur to waste Razor Leaf on blocks rather than hitting you.',
          'Use Minecart to armor through Squirtle low-profile dash approaches.'
        ],
        advantageTips: [
          'Block off the ledge to deny Ivysaur tether recovery snap.',
          'Drop Anvil directly on top of Charizard recovery line.'
        ],
        disadvantageTips: [
          'Charizard Flare Blitz breaks through all block materials instantly.',
          'DI away from Ivysaur Up-Air juggle ladders.'
        ]
      },
      lucas: {
        ratio: '+1 (Slight Advantage)',
        summary: 'Blocks absorb Lucas PK Fire, and Minecart armors through his defensive spacing tools.',
        neutralKeys: [
          'Mine behind walls to force Lucas to approach with physical normals.',
          'Anti-air Lucas short-hop aerials with Frame 4 Up-Tilt.'
        ],
        advantageTips: [
          'Drop Anvil off-stage to contest Lucas PK Thunder recovery launch.',
          'Place TNT on ledge to cover Lucas tether reel-in.'
        ],
        disadvantageTips: [
          'Lucas PSI Magnet absorbs TNT explosions; place traps thoughtfully.',
          'DI away from PK Freeze to avoid horizontal screen-kill vectors.'
        ]
      },
      sonic: {
        ratio: 'Even',
        summary: 'Sonic speed tests Steve defense, but blocks restrict his Spin Dash approach lanes.',
        neutralKeys: [
          'Build block walls to halt Sonic Spin Dash momentum on the ground.',
          'Use Up-Tilt out of shield on Frame 4 when Sonic attacks your shield.'
        ],
        advantageTips: [
          'Block off the ledge lip to force Sonic to recover high with Spring.',
          'TNT ledge traps cover Sonic aggressive Spring ledge getup.'
        ],
        disadvantageTips: [
          'Sonic can camp and time you out if you lose stock lead; stay proactive with Minecart.',
          'SDI outward against Sonic Up-Air ladder combos.'
        ]
      }
    }
};