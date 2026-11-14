import type { CharacterProfile } from '../../types/matchup.js';

export const toonLink: CharacterProfile = {
  characterId: 'toon_link',
  displayName: 'Toon Link',
  iconPath: '/icons/toon_link.png',
  archetype: 'Zoner / Trapper',
  fastestOOS: 'Up-B (Frame 6)',
  archetypeNotes: {
    'Zoner / Trapper': {
      ratio: 'Even',
      summary: 'Use superior air mobility and Bomb pulls to out-maneuver static zoners while Zair pokes through projectile trades.',
      neutralKeys: [
        'Pull a Bomb safely on platforms and approach behind Zair (Frame 8) to clank with rival projectiles.',
        'Angle Boomerang upward to catch opponents jumping over horizontal projectile walls.',
      ],
      advantageTips: [
        'Use Z-dropped Bombs at ledge to cover neutral getup and roll simultaneously.',
        'Confirm Bomb hits into Fair or Up-Air for reliable stock closures around 100%.',
      ],
      disadvantageTips: [
        'Parry incoming projectiles instead of holding shield so Frame 6 Up-B OOS stays unpoked.',
        'Use Tether Zair to snap to the ledge from awkward angles and bypass ledge traps.',
      ],
    },
    'Rushdown / Burst': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Limit slow Boomerang commitments at mid-range; rely on retreating Fair/Zair walls and Frame 6 grounded Up-B OOS.',
      neutralKeys: [
        'Space retreating short-hop Fair and Zair to swat burst dash-ins before they enter grab range.',
        'Hold a Bomb in hand to interrupt combo starters on hit or shield pressure.',
        'Buffer Frame 6 grounded Spin Attack (Up-B) whenever rushdown aerials cross up your shield.',
      ],
      advantageTips: [
        'Intercept linear rushdown recoveries off-stage with angled Boomerang and Z-dropped Bombs.',
        'Hold center stage and punish panic double-jumps with rising Up-Air.',
      ],
      disadvantageTips: [
        'SDI outward on multi-hit ladder combos to escape early top-blast-zone kills.',
        'Drift toward the ledge rather than burning your double-jump directly above aggressive pursuers.',
      ],
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Force swordfighters to jump over Boomerang and Bomb arcs, then punish unspaced landings with Up-B OOS.',
      neutralKeys: [
        'Use Zair to contest mid-range sword spacing without extending a vulnerable hurtbox.',
        'Throw downward-angled Bombs to trip approaches and force predictable short-hop aerials.',
      ],
      advantageTips: [
        'Snipe floaty sword recoveries off-stage with Boomerang before they enter Up-B snap range.',
        'Trap ledge getups with Z-dropped Bomb into D-tilt or Grab.',
      ],
      disadvantageTips: [
        'Never challenge disjointed sword Up-Airs from directly below; drift to the ledge with Zair.',
        'Mix up tether snap timing to avoid getting 2-framed by low sword tilts.',
      ],
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Suffocate giant hurtboxes with layered Boomerang and Bomb zoning while converting stray hits into Bomb-Fair kills.',
      neutralKeys: [
        'Maintain a half-stage buffer with Boomerang and Zair to stay completely outside command grab range.',
        'Anti-air giant jump approaches with retreating Fair or upward Boomerang.',
      ],
      advantageTips: [
        'Confirm Bomb hits into Fair or Up-Air to close heavy stocks around 95–115%.',
        'Edgeguard linear heavy recoveries relentlessly with Z-dropped Bombs and angled Boomerang.',
      ],
      disadvantageTips: [
        'Respect mid-percent cargo and command grab kill setups; spot-dodge or jump out of corner pressure.',
        'Do not challenge super-armor recovery moves head-on without a Bomb trade.',
      ],
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Keep a Bomb in hand to stuff agility entries and punish slow power-stance startups on reaction.',
      neutralKeys: [
        'Zone power stances aggressively with Boomerang and Arrows while keeping Zair ready for agility dashes.',
        'Punish unsafe stance swaps or resource charges with burst Bomb throws into Dash Attack.',
      ],
      advantageTips: [
        'Drop Bombs off-stage to exploit vulnerable vertical recoveries common to stance fighters.',
        'Ledge-trap with lingering Bomb hitboxes before they can cycle back to defensive forms.',
      ],
      disadvantageTips: [
        'Watch for evasion counters (like Foresight) when throwing predictable linear projectiles.',
        'Keep shield healthy to punish multi-hit landings with Frame 6 Up-B OOS.',
      ],
    },
    'Hit-and-Run / Speedster': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Hold center stage with stationary Z-dropped Bombs to block burst dash lanes instead of chasing speedsters into corners.',
      neutralKeys: [
        'Set Z-dropped Bombs at stage center to force speedsters into predictable aerial jumps.',
        'Use retreating Nair and Frame 6 Up-B OOS to punish cross-up spin approaches.',
      ],
      advantageTips: [
        'Contest high recovery arcs with rising Up-Air and angled Boomerang.',
        'Cover ledge rolls with grounded Spin Attack when trapping speedsters in the corner.',
      ],
      disadvantageTips: [
        'Avoid panic rolls when pressured; speedsters possess the ground speed to tech-chase on reaction.',
        'Save your double-jump to escape high-altitude aerial juggle strings.',
      ],
    },
  },
  matchups: {
    fox: {
      ratio: 'Even',
      summary: 'High-velocity match. Keep Fox out with grounded projectiles; avoid throwing raw boomerangs at mid-range.',
      neutralKeys: [
        'Use Bombs and grounded Boomerangs to wall out dash-ins.',
        'Bait Fox Shine with empty short-hops prior to projectile commitments.',
        'Space Fair/Nair carefully to avoid Fox Up-Tilt anti-airs.'
      ],
      advantageTips: [
        'Exploit linear Fire Fox angles with dropped bombs or timed Dair at the ledge.',
        'Up-B out of shield punishes unspaced landing aerials.'
      ],
      disadvantageTips: [
        'Avoid teching in place against Fox near ledge due to Up-Smash kill confirms.',
        'Mix up landing timing using bomb pulls to disrupt juggle chains.'
      ]
    },
    donkey_kong: {
      ratio: 'Even',
      summary: 'DK is a heavy-hitting threat. Use projectiles to keep him at bay and punish his laggy moves.',
      neutralKeys: [
        'Establish double-bomb setups to control space and limit DK\'s approach options.',
        'Use Zair and short-hop Fair to swat away giant aerial approches.',
        'Never roll backward into the corner; DK dash attack covers backward evasions.'
      ],
      advantageTips: [
        'Exploit Spinning Kong horizontally: dropped bombs and tether Zair disrupt super-armor spin effortlessly.',
        'Ledge-trap using remote bomb placement on the ledge roll distance and down-smash the regular getup.'
      ],
      disadvantageTips: [
        'Respect 60%–85% grab range to avoid dying to Cargo Throw into Up-Air setups on platforms.',
        'Do not challenge DK landing Dair directly below him without bomb armor absorption.'
      ],
      stageNotes: [
        'Preferred: Final Destination (denies platform Ding-Dong extensions).',
        'Avoid: Smashville (center platform enables early cargo kill confirms).'
      ]
    },
    roy: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'High-pressure matchup. Roy closes space rapidly and punishes slow bomb pulls with unreactable dash-in bursts.',
      neutralKeys: [
        'Pull bombs only when Roy is fully reset across half-stage or in tumble.',
        'Space retreating Fair to clip Roy sweetspot approach angles before his sword reaches hilt range.',
        'Rely on fast Nair out of shield rather than slow rolls against Roy shield pressure.'
      ],
      advantageTips: [
        'Roy recovery has minimal vertical snap: intercept Blazer with falling bombs or timed Dair.',
        'Maintain ledge pressure with Boomerang angled downward to catch low recovery lines.'
      ],
      disadvantageTips: [
        'Roy Jab into Bair kills at 80% at the ledge; hold defensive SDI outward and avoid shield drops.',
        'Never challenge Roy when juggled directly above him; drift to corner ledge instead.'
      ],
      stageNotes: [
        'Preferred: Battlefield (tri-platforms provide escape routes from rushdown pressure).',
        'Avoid: Small Battlefield (cramped neutral facilitates Roy burst range).'
      ]
    },
    steve: {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Steve builds walls to mine diamonds while Toon Link projectiles get blocked by wooden and dirt blocks.',
      neutralKeys: [
        'Use Boomerang angled upward over block walls to harass Steve while mining.',
        'Save bombs specifically to detonate Minecart approaches on reaction.',
        'Avoid grounded commitments that let Steve trap you with pressure near blocks.'
      ],
      advantageTips: [
        'Exploit Elytra recovery angles by dropping bombs off-stage into his flight path.',
        'Punish Steve block-building ledge stalls with down-air spikes through thin blocks.'
      ],
      disadvantageTips: [
        'Do not shield Anvil above 90%; roll off or parry to prevent instant shield break.',
        'Tech away from TNT pads to prevent footstool pickaxe death setups.'
      ]
    }
    }

};