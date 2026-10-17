import type { CharacterProfile } from '../../types/matchup.js';

export const sonic: CharacterProfile = {
  characterId: 'sonic',
  displayName: 'Sonic',
  iconPath: '/icons/sonic.png',
  archetype: 'Hit-and-Run / Speedster',
  fastestOOS: 'Back Air (Frame 8), Up-B (Frame 4 Invulnerable)',
  matchups: {
    toon_link: {
      ratio: '+2 (Major Advantage)',
      summary: 'Overwhelming speed invalidates Toon Link projectile setups and punishes bomb pulls on reaction.',
      neutralKeys: [
        'Use Spin Dash to weave through Boomerangs and punish bomb-pull animations on reaction.',
        'Cross up Toon Link shield with Spin Dash jump-cancel Bair to avoid Up-B out of shield.'
      ],
      advantageTips: [
        'Drop Spring off-stage directly above Toon Link to gimp his vertical Spin Attack recovery.',
        'Ledge-trap with Bair to swat Toon Link floaty jump getup.'
      ],
      disadvantageTips: [
        'Do not auto-pilot Spin Dash into shielded bombs.',
        'DI outward against Toon Link bomb-to-Fair combos at high percent.'
      ]
    },
    roy: {
      ratio: 'Even',
      summary: 'Speed duel where Sonic controls pace and whiff-punishes Roy sword swings with Spin Dash.',
      neutralKeys: [
        'Bait Roy Forward-Tilt and sword swings with dash-dance retreats, then punish with Spin Dash.',
        'Use Up-B (Frame 4) to escape Roy aggressive shield pressure resets.'
      ],
      advantageTips: [
        'Drop Spring off-stage to invalidate Roy linear Blazer recovery trajectory.',
        'Ledge-trap with repeated short-hop Bair to cover neutral getup and roll.'
      ],
      disadvantageTips: [
        'Roy sweetspot Forward-Tilt swats Sonic cleanly out of Spin Dash charge; mix up timing.',
        'Hold hard DI away on Roy Jab at ledge to escape Bair kill confirms.'
      ]
    },
    fox: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Sonic out-speeds Fox on the ground, controls stage space, and edgeguards linear Fire Fox recoveries easily.',
      neutralKeys: [
        'Use Spin Dash and Spin Charge to out-maneuver Fox dash-dance lanes.',
        'Whiff-punish Fox Dash Attack with running Bair or Spin Dash combos.'
      ],
      advantageTips: [
        'Run off-stage and drop Spring on Fox Fire Fox startup for free gimp kills.',
        'Ledge-trap with Dash Attack to catch Fox recovery snap frames.'
      ],
      disadvantageTips: [
        'Fox Blaster chips away at health if you camp too passively; force engagements.',
        'Never DI inward against Fox Up-Tilt strings.'
      ]
    },
    lucina: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Hit-and-run mobility frustrates Lucina fundamentals and punishes her sword landing lag.',
      neutralKeys: [
        'Bait Lucina Fair with dash-in retreats, then punish landing frames with Spin Dash.',
        'Use Up-B out of shield (Frame 4) to break free from Lucina shield pressure.'
      ],
      advantageTips: [
        'Swat Lucina floaty descent with high-altitude Up-Air ladders into Bair.',
        'Drop Spring off-stage to disrupt Lucina recovery drift.'
      ],
      disadvantageTips: [
        'Lucina Down-Tilt and low Fair contest Spin Dash approaches on the ground; jump cancel smartly.',
        'Do not drop shield early against Lucina Dolphin Slash reversals.'
      ]
    },
    donkey_kong: {
      ratio: '+2 (Major Advantage)',
      summary: 'Heavily winning matchup. Run circles around DK, combo his massive hurtbox, and gimp his recovery.',
      neutralKeys: [
        'Hit DK with Spin Dash into Up-Air ladders; his huge hurtbox allows extended 0-to-50% loops.',
        'Space Bair to poke at DK shield safely outside his Frame 4 grounded Up-B range.'
      ],
      advantageTips: [
        'Drop Spring directly on top of DK Spinning Kong recovery for instant gimp stocks.',
        'Ledge-trap with Bair to catch DK giant hurtbox on all getup options.'
      ],
      disadvantageTips: [
        'Avoid 65%–80% grab ranges to eliminate Cargo Throw Ding-Dong kill setups.',
        'Respect DK Frame 4 grounded Up-B out of shield when crossing up.'
      ]
    },
    pyra_mythra: {
      ratio: 'Even',
      summary: 'Match Mythra speed in neutral, then exploit both characters poor recoveries with off-stage Spring gimps.',
      neutralKeys: [
        'Bait Mythra dash-ins with Spin Dash retreats and whiff-punish with Bair.',
        'Camp Pyra patiently from distance; her slow ground speed cannot catch Sonic.'
      ],
      advantageTips: [
        'Drop Spring off-stage to delete both Pyra and Mythra vertical recoveries.',
        'Up-Air ladders carry both characters to top blast zones reliably.'
      ],
      disadvantageTips: [
        'Mythra Foresight slows down Spin Dash and triggers heavy counter combos.',
        'Never challenge Pyra smash attacks head-on.'
      ]
    },
    pokemon_trainer: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Sonic mobility out-paces all three Pokémon, while off-stage Spring edgeguards exploit Ivysaur and Charizard.',
      neutralKeys: [
        'Punish Pokémon Switch cooldown on reaction with Spin Dash into Up-Air.',
        'Use Bair to swat Squirtle low-profile approach angles.'
      ],
      advantageTips: [
        'Drop Spring on Ivysaur tether grapple to detach him from the ledge.',
        'Bair stage-spikes Charizard wide hurtbox off-stage.'
      ],
      disadvantageTips: [
        'Watch out for Charizard super-armor Up-B out of shield.',
        'DI away from Ivysaur Down-Tilt to avoid Up-Air kill confirms.'
      ]
    },
    lucas: {
      ratio: '+1 (Slight Advantage)',
      summary: 'Sonic speed invalidates Lucas PK Fire zoning and punishes his floaty jump descent.',
      neutralKeys: [
        'Jump over PK Fire with Spin Dash jump cancels and punish Lucas endlag.',
        'Use Frame 4 Up-B out of shield to escape Lucas pressure.'
      ],
      advantageTips: [
        'Drop Spring on Lucas during PK Thunder recovery to cancel his launch rocket.',
        'Ledge-trap with short-hop Bair to cover Lucas tether reel-in.'
      ],
      disadvantageTips: [
        'Never tech toward Lucas at ledge to avoid Down-Smash multi-hits.',
        'DI away from PK Freeze to avoid horizontal screen-kill vectors.'
      ]
    },
    steve: {
      ratio: 'Even',
      summary: 'Patience is critical. Restrict Steve mining lanes without running recklessly into block walls and Minecart.',
      neutralKeys: [
        'Jump over block walls with Spin Dash jump cancels to swat Steve while mining.',
        'Bait Minecart bursts with dash retreats and punish with Bair.'
      ],
      advantageTips: [
        'Drop Spring off-stage to disrupt Steve Elytra flight glide.',
        'Up-Air ladders catch Steve if he tries to stall on high block towers.'
      ],
      disadvantageTips: [
        'Never shield Anvil above 80%; roll away to avoid shield break.',
        'Tech roll away from TNT pressure plates immediately.'
      ]
    }
  }
};