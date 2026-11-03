// src/data/archetypeDefaults.ts
import type { CharacterArchetype, MatchupNote } from '../types/matchup.js';

export const archetypeDefaults: Record<CharacterArchetype, Record<CharacterArchetype, MatchupNote>> = {
  'Zoner / Trapper': {
    'Zoner / Trapper': {
      ratio: 'Even',
      summary: 'A tactical war of attrition. Prioritize stage control over throwing projectiles recklessly into trades.',
      neutralKeys: [
        'Avoid trading projectiles horizontally; angle shots or use items to claim stage center.',
        'Watch opponent projectile startup frames and advance behind your own lingering hitboxes.',
        'Do not rush down unless the opponent is trapped in end-lag or forced to shield.'
      ],
      advantageTips: [
        'Trap the ledge with lingering traps or bomb drops to cover both neutral getup and roll.',
        'Contest off-stage recoveries with projectile snipes rather than deep off-stage commitments.'
      ],
      disadvantageTips: [
        'Parry incoming projectiles rather than holding shield to prevent shield shrinkage.',
        'Use platforms to break line-of-sight and create room for defensive item pulls.'
      ]
    },
    'Rushdown / Burst': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Rushdown speed closes distance rapidly. Limit projectile commitments and rely on fast defensive normals.',
      neutralKeys: [
        'Never pull items or commit to slow projectiles at mid-range; rushdown burst options punish on reaction.',
        'Space retreating aerials and fast jabs to swat incoming dash-ins.',
        'Buffer your fastest Out-of-Shield option when rushdown fighters land aggressively on shield.'
      ],
      advantageTips: [
        'Keep them off-stage: rushdown recoveries tend to be linear and vulnerable to projectile intercepts.',
        'Ledge-trap patiently; do not overextend into their fast panic double-jumps.'
      ],
      disadvantageTips: [
        'SDI outward on multi-hit ladder combos to escape early kill confirms.',
        'Drift toward the ledge rather than burning your double-jump directly above aggressive pursuers.'
      ]
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Out-range their disjoints at full screen, but avoid trading blows at mid-range where sword hitboxes win clean.',
      neutralKeys: [
        'Force the swordfighter to approach through projectile arcs; do not enter their sword-tip threat radius.',
        'Whiff-punish long sword recovery frames with fast dash attacks or grab setups.',
        'Use lingering hitboxes to contest their short-hop aerial spacing.'
      ],
      advantageTips: [
        'Target their recovery angles off-stage before they reach snap range with projectile walls.',
        'Ledge-trap with low-angled hitboxes to hit swordfighters during 2-frame ledge snap vulnerability.'
      ],
      disadvantageTips: [
        'Never challenge disjointed sword aerials from below during disadvantage landings.',
        'Mix up recovery timing to prevent getting clipped by disjointed run-off aerial edgeguards.'
      ]
    },
    'Super Heavy / Grappler': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Heavily winning neutral dynamic. Suffocate their large hurtboxes with projectile walls while respecting grab ranges.',
      neutralKeys: [
        'Establish dual projectile layers; heavies lack the agility to navigate dense projectile screens.',
        'Stay strictly outside burst grab range; maintain a half-stage buffer at all times.',
        'Anti-air giant jump approaches with disjointed aerials or retreating projectiles.'
      ],
      advantageTips: [
        'Off-stage edgeguarding is paramount: disrupt heavy, linear recoveries with dropped items or aerial spikes.',
        'Ledge-trap relentlessly; their large collision boxes trigger traps easily on all getup options.'
      ],
      disadvantageTips: [
        'Respect high-percent grab and command grab kill setups; roll or spot-dodge grab attempts on read.',
        'Do not challenge super-armor recovery moves directly without invulnerability or item absorption.'
      ]
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Track the active stance or resource state. Zone speed forms defensively and rush down slower heavy stances.',
      neutralKeys: [
        'Against speed/agility forms: play tight defensive zoning with fast retreating normals.',
        'Against power/slow forms: expand projectile zoning and exploit their sluggish startup frames.',
        'Bait stance-switch or resource replenishment animations and punish with burst options.'
      ],
      advantageTips: [
        'Exploit vertical recovery weaknesses common to stance fighters with timed edgeguard drops.',
        'Ledge-trap aggressively before they can switch back to optimal defensive forms.'
      ],
      disadvantageTips: [
        'Watch for high-damage kill confirms when the opponent enters power/heavy stances.',
        'Do not drop shield early against multi-hit stance specials.'
      ]
    },
    'Hit-and-Run / Speedster': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Speedsters bypass projectile screens effortlessly. Hold center stage and punish overextensions.',
      neutralKeys: [
        'Do not chase them across stage; hold center position and force them to initiate.',
        'Place defensive hitboxes in front of you to intercept high-speed dash-in attempts.',
        'Pull items only when the speedster has retreated completely to the opposite blast zone.'
      ],
      advantageTips: [
        'Contest their recovery off-stage early before their high horizontal drift engages.',
        'Cover ledge-roll options; speedsters frequently roll through to regain neutral space.'
      ],
      disadvantageTips: [
        'Avoid panic rolls when pressured; speedsters possess the ground speed to tech-chase on reaction.',
        'Save your double-jump to escape high-altitude aerial juggle ladders.'
      ]
    }
  },

  'Rushdown / Burst': {
    'Zoner / Trapper': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Suffocate their setup time. Use burst ground speed to punish item pulls and force close-quarters scrambles.',
      neutralKeys: [
        'Dash-dance just outside their projectile reach and punish pulling or casting animations on reaction.',
        'Cross up shields with fast-falling aerials to invalidate their primary Out-of-Shield options.',
        'Use dash-shielding to close stage distance methodically without eating chip damage.'
      ],
      advantageTips: [
        'Exploit their floaty or multi-hit recoveries with early run-off aerials and stage spikes.',
        'Ledge-trap with down-tilts and fast jabs to catch vulnerable 2-frame ledge snaps.'
      ],
      disadvantageTips: [
        'Do not hold forward blindly into stationary traps or lingering bomb drops.',
        'DI outward against zoner combo confirms (e.g., bomb-to-aerial setups) to escape early kills.'
      ]
    },
    'Rushdown / Burst': {
      ratio: 'Even',
      summary: 'A volatile speed mirror. The player with cleaner whiff-punishing and shield safety dictates momentum.',
      neutralKeys: [
        'Focus on whiff-punishing aggressive dash-ins rather than committing to predictable burst options.',
        'Land aerials behind shields to avoid fast Out-of-Shield grab or up-B reversals.',
        'Utilize low-profile tilts to contest incoming dash attacks.'
      ],
      advantageTips: [
        'Tech-chase relentlessly on platforms; fast fallers can be reset into 0-to-death strings.',
        'Punish linear burst recoveries off-stage with well-timed counters or body-block gimps.'
      ],
      disadvantageTips: [
        'Hold strict survival DI on primary burst kill confirms (jabs, up-smashes, up-airs).',
        'Vary recovery timing and angles to avoid getting shine-gimped or spiked.'
      ]
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Get inside their sword-tip reach. Whiff-punish extended swings and exploit their slower landing frames.',
      neutralKeys: [
        'Bait out sword swings with dash-dancing retreats, then punish recovery frames with dash attacks.',
        'Cross up their shield to avoid fast disjointed Up-B Out-of-Shield options.',
        'Avoid jumping into their rising aerial walls; approach along the ground behind parries.'
      ],
      advantageTips: [
        'Edgeguard sword recoveries off-stage before their up-B snap reaches ledge invulnerability.',
        'Trap landing options on platforms with fast up-tilt juggle strings.'
      ],
      disadvantageTips: [
        'Never challenge disjointed sword moves directly from hitstun.',
        'Tech roll outward from corner pressure to escape low-tilt spacing traps.'
      ]
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'A heavily favored matchup. Exploit their massive hurtboxes with extended combo loops and edgeguards.',
      neutralKeys: [
        'Abuse fast-fall aerials and tilt starters: heavy hurtboxes allow continuous 0-to-60% combos.',
        'Bait out their Frame 3–6 Out-of-Shield reversals with empty hops and punish with full smashes.',
        'Maintain relentless pressure while respecting burst armor options and command grabs.'
      ],
      advantageTips: [
        'Carry heavies off-stage: their linear recoveries are easily gimped or spiked.',
        'Ledge-trap with active hitboxes to exploit their broad hurtbox on regular getup.'
      ],
      disadvantageTips: [
        'Avoid getting grabbed at mid-percents to eliminate early cargo or kill-throw setups.',
        'Do not contest landing aerials directly below them without invincible disjoints.'
      ]
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Overwhelm slower stances with rapid burst entries, and play patient bait-and-punish against speed stances.',
      neutralKeys: [
        'Contest their startup frames with fast jabs and buffered dash attacks before they establish momentum.',
        'Watch for evasion counters (like Foresight or shield swaps) when committing to multi-hit strings.',
        'Force engagements when they are caught in less optimal defensive forms.'
      ],
      advantageTips: [
        'Exploit vertical recovery paths with aggressive off-stage aerial intercepts.',
        'Ledge-trap with down-tilt to 2-frame vulnerable recovery snaps.'
      ],
      disadvantageTips: [
        'SDI outward against multi-hit stance combos to escape ladder kill setups.',
        'Do not challenge high-damage kill aerials head-on out of disadvantage.'
      ]
    },
    'Hit-and-Run / Speedster': {
      ratio: 'Even',
      summary: 'A high-speed neutral duel. Cut off their retreat lanes and punish predictable approach options.',
      neutralKeys: [
        'Hold center stage and avoid chasing them into stage corners where they turn and burn.',
        'Swat their burst dash entries with low-profile tilts or buffered rising aerials.',
        'Use dash-shield to absorb hit-and-run burst attacks and punish on shield stun.'
      ],
      advantageTips: [
        'Contest their recovery high before they deploy vertical rescue specials.',
        'Ledge-trap with back-air to swat fast jump getup escapes.'
      ],
      disadvantageTips: [
        'Avoid rolling predictably when crossed up on shield.',
        'SDI outward against vertical ladder juggle strings.'
      ]
    }
  },

  'Spacing / Swordie': {
    'Zoner / Trapper': {
      ratio: 'Even',
      summary: 'Disjointed sword hitboxes swat through projectiles. Close distance behind parries and control mid-range.',
      neutralKeys: [
        'Use short-hop aerials and forward-tilts to destroy incoming items and projectiles mid-air.',
        'Walk and parry behind shield to corner the zoner without committing to unsafe jumps.',
        'Punish zoner item pulls with retreating forward-airs spaced at maximum sword tip.'
      ],
      advantageTips: [
        'Edgeguard zoners off-stage with run-off disjointed aerials before they can deploy tethers.',
        'Down-B counter off-stage invalidates multi-hit vertical zoner recoveries.'
      ],
      disadvantageTips: [
        'Do not challenge dropped bombs or traps directly from underneath; drift to ledge instead.',
        'SDI outward against multi-hit Out-of-Shield spin attacks.'
      ]
    },
    'Rushdown / Burst': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Wall out aggressive burst approaches with disciplined sword spacing. Keep opponents at maximum reach.',
      neutralKeys: [
        'Keep rushdown fighters at max sword tip using retreating forward-airs and low-tilts.',
        'Punish aggressive dash-ins with buffered jabs or tilt pokes rather than rolling.',
        'Use invincible Up-B Out-of-Shield options to punish unspaced landing aerials.'
      ],
      advantageTips: [
        'Ledge-trap with timed down-tilts to 2-frame linear recovery snaps.',
        'Punish high recovery angles with full-hop back-air intercepts.'
      ],
      disadvantageTips: [
        'Never drop shield early against multi-hit rushdown specials or jab-lock setups.',
        'Avoid predictable recovery paths; mix up high drift and low ledge snaps.'
      ]
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'A pure spacing duel. The player with superior footwork, parries, and micro-spacing wins.',
      neutralKeys: [
        'Space every normal at maximum sword tip; avoid entering unspaced hilt proximity.',
        'Whiff-punish missed forward-airs with fast-falling forward-tilts during landing recovery.',
        'Parry predictably spaced aerials to take turn advantage on shield.'
      ],
      advantageTips: [
        'Down-tilt at ledge to contest the 2-frame ledge snap window.',
        'Counter off-stage to punish predictable vertical recovery trajectories.'
      ],
      disadvantageTips: [
        'Hold strict DI outward on forward-smash and up-b kill confirms near stage edges.',
        'Avoid challenging disjoints off-stage without counter protection.'
      ]
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Massively favored matchup. Safe disjoints wall out grapplers completely while shutting down recoveries.',
      neutralKeys: [
        'Space retreating forward-airs and down-tilts continuously; heavies cannot contest disjoints cleanly.',
        'Never land with unsafely spaced aerials on shield to avoid fast heavy Out-of-Shield grabs.',
        'Maintain mid-range spacing to remain outside command grab threat bubbles.'
      ],
      advantageTips: [
        'Counter off-stage completely beats heavy super-armor recoveries for early stocks.',
        'Run-off back-air continuously walls heavies away from the stage ledge.'
      ],
      disadvantageTips: [
        'Respect mid-percent grab kill confirms; avoid shielding predictably.',
        'DI away from low-tilt trip setups to prevent forward-smash followups.'
      ]
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Out-space power forms with superior frame speed, and match agility forms with disjointed reach.',
      neutralKeys: [
        'Use retreating sword aerials to contest aggressive dash-ins from agility stances.',
        'Bait out slow smash attacks from power stances and punish recovery frames.',
        'Maintain mid-stage control to restrict their stance-switching safety.'
      ],
      advantageTips: [
        'Down-tilt at ledge catches vulnerable vertical recoveries lacking hitboxes.',
        'Counter off-stage stops high-speed recovery lunges.'
      ],
      disadvantageTips: [
        'Avoid rolling predictably out of multi-hit ladder strings.',
        'DI away from high-priority kill smash attacks.'
      ]
    },
    'Hit-and-Run / Speedster': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Speedsters punish missed sword swings with ease. Restrict commitments and use low-risk tilt pokes.',
      neutralKeys: [
        'Use down-tilts and grounded jabs rather than high-commitment aerials to swat burst dashes.',
        'Hold center stage and avoid chasing them when they reset neutral.',
        'Use fast Out-of-Shield options when speedsters cross up shield with spin moves.'
      ],
      advantageTips: [
        'Swat floaty spring or high-altitude recovery escapes with full-hop aerials.',
        'Ledge-trap with jab into forward-tilt to cover regular getup.'
      ],
      disadvantageTips: [
        'Vary recovery drift to avoid getting stage-spiked by deep back-airs.',
        'SDI outward against vertical ladder juggle strings.'
      ]
    }
  },

  'Super Heavy / Grappler': {
    'Zoner / Trapper': {
      ratio: '-1 (Slight Disadvantage)',
      summary: 'Exercise extreme patience. Navigate projectile walls with parries and capitalize with explosive grab punishes.',
      neutralKeys: [
        'Parry incoming projectiles rather than shielding to maintain full shield health and mobility.',
        'Corner zoners using walking shield rather than jumping or rolling into traps.',
        'Use large back-airs to swat away incoming aerial pressure without over-committing to grab.'
      ],
      advantageTips: [
        'Execute cargo or off-stage throws into stage-spike setups at mid-percents.',
        'Use super-armor specials to power through defensive panic aerials at the ledge.'
      ],
      disadvantageTips: [
        'Save double-jump off-stage until the zoner commits to primary projectile drops.',
        'DI outward against projectile-into-smash combo setups to escape early death.'
      ]
    },
    'Rushdown / Burst': {
      ratio: '-2 (Major Disadvantage)',
      summary: 'Severe combo disadvantage. Rely on fast grounded Out-of-Shield reversals and cash in heavily on stock leads.',
      neutralKeys: [
        'Punish unsafely spaced landing aerials with your fastest grounded Out-of-Shield option.',
        'Space back-airs at maximum reach to keep rushdown fighters from dash-dancing directly in your face.',
        'Do not spot-dodge predictably; multi-hit burst options catch evasions easily.'
      ],
      advantageTips: [
        'Carry rushdown fighters off-stage: their recoveries are short and vulnerable to deep aerial gimps.',
        'Down-tilt at ledge to fish for trips into instant smash finishes.'
      ],
      disadvantageTips: [
        'Never recover high with specials into predictable off-stage counters.',
        'SDI multi-hit combos upward and outward to escape sweetspot kill knocks.'
      ]
    },
    'Spacing / Swordie': {
      ratio: '-2 (Major Disadvantage)',
      summary: 'Sword disjoints wall you out completely. Rely on parries, patient walking, and high-damage grab punishes.',
      neutralKeys: [
        'Walk and parry sword spacing rather than jumping into anti-air disjoints.',
        'Punish unspaced landing sword aerials with fast Out-of-Shield specials.',
        'Wait for swordfighters to overextend onto shield before committing to slow grab animations.'
      ],
      advantageTips: [
        'Throw swordfighters off-stage toward the blast zone to contest their horizontal drift.',
        'Down-tilt at ledge to fish for trips into charged forward-smash.'
      ],
      disadvantageTips: [
        'Never recover into predictable off-stage counters; vary recovery timing drastically.',
        'DI outward on high-altitude disjoint reversals to escape ceiling knockouts.'
      ]
    },
    'Super Heavy / Grappler': {
      ratio: 'Even',
      summary: 'A volatile slugfest. Matches are decided in few interactions; first player to secure grab advantage snowballs.',
      neutralKeys: [
        'Contest incoming approaches with armored normals and high-damage back-airs.',
        'Bait out slow command grabs and punish with full forward-smash combos.',
        'Prioritize stage center to maximize survival against heavy kill power.'
      ],
      advantageTips: [
        'Exploit the opponent large hurtbox with guaranteed cargo throws or off-stage spikes.',
        'Ledge-trap with down-smash to cover wide ledge-hang hurtboxes.'
      ],
      disadvantageTips: [
        'Hold survival DI on all heavy kill throws starting at 65%.',
        'Tech stage spikes off-stage consistently to survive early carry-offs.'
      ]
    },
    'Dynamic / Stance': {
      ratio: '-2 (Major Disadvantage)',
      summary: 'Agility forms combo heavies easily, while power forms kill exceptionally early. Punish weak recoveries.',
      neutralKeys: [
        'Use fast Out-of-Shield specials to break multi-hit shield pressure.',
        'Space back-airs to contest slower power normals.',
        'Look for openings when opponents execute stance swaps.'
      ],
      advantageTips: [
        'Throw opponents off-stage and stage-spike them; vertical recoveries struggle to tech cleanly.',
        'Down-tilt or down-smash at ledge covers vulnerable recovery snap frames.'
      ],
      disadvantageTips: [
        'Never challenge high-damage stance specials head-on.',
        'SDI outward against multi-hit stance combos.'
      ]
    },
    'Hit-and-Run / Speedster': {
      ratio: '-2 (Major Disadvantage)',
      summary: 'Speedsters run circles around heavies. Hold stage center and punish reckless approach entries.',
      neutralKeys: [
        'Hold center stage and swat burst dash approaches with low-spaced back-airs.',
        'Use fast Out-of-Shield options when speedsters cross up shield.',
        'Do not chase speedsters into corners; let them approach your shield.'
      ],
      advantageTips: [
        'Throw speedsters off-stage to force early special recovery commitments.',
        'Anti-air landing lag after high recovery escapes with up-smash.'
      ],
      disadvantageTips: [
        'Never chase speedsters off-stage; spring and aerial gimps kill heavy recoveries instantly.',
        'SDI outward against vertical ladder combos.'
      ]
    }
  },

  'Dynamic / Stance': {
    'Zoner / Trapper': {
      ratio: 'Even',
      summary: 'Leverage speed forms to bypass projectile walls, then switch to power forms to secure early stocks.',
      neutralKeys: [
        'Play neutral primarily in agility/speed forms to weave through projectiles with superior ground speed.',
        'Switch to power/kill stances once the zoner is in disadvantage or above 80%.',
        'Use form-specific evasion options (like Foresight) on predictable projectile setups.'
      ],
      advantageTips: [
        'Ledge-trap zoners with wide multi-hit specials to cover both neutral getup and roll.',
        'Exploit zoner floaty descents with fast-falling up-air ladders.'
      ],
      disadvantageTips: [
        'Save double-jump when recovering vertically against dropped bomb gimps.',
        'Do not challenge fast Out-of-Shield options with unspaced landing aerials.'
      ]
    },
    'Rushdown / Burst': {
      ratio: 'Even',
      summary: 'Match burst speed with agility forms, and use disjointed power forms to wall out direct dash-ins.',
      neutralKeys: [
        'Contest rushdown burst dash-ins with fast nairs and buffered jabs in agility forms.',
        'Swap to power forms to out-range unspaced dash attacks with longer disjoints.',
        'Bait out aggressive approaches with dash retreats and punish with combo starters.'
      ],
      advantageTips: [
        'Ledge-trap with down-tilt into smash confirms to catch linear recovery angles.',
        'Off-stage counters or lingering specials disrupt rushdown vertical recoveries.'
      ],
      disadvantageTips: [
        'SDI outward against multi-hit ladder strings.',
        'Vary recovery timing to prevent getting gimped by fast off-stage aerials.'
      ]
    },
    'Spacing / Swordie': {
      ratio: 'Even',
      summary: 'Out-speed swordfighters with agility forms in neutral, and match their range with heavy disjoint forms.',
      neutralKeys: [
        'Use superior agility to bait sword swings and punish landing frames with dash attacks.',
        'Switch to power forms to contest defensive swatting with high-priority hitboxes.',
        'Avoid predictable aerial entries into disjointed anti-airs.'
      ],
      advantageTips: [
        'Lingering specials at the ledge cover floaty sword recovery drift.',
        'Trap swordfighters on platforms with wide multi-hit specials.'
      ],
      disadvantageTips: [
        'Be cautious recovering low: disjointed counters off-stage secure stocks early.',
        'Do not drop shield early against fast Out-of-Shield sword reversals.'
      ]
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Heavily favored matchup. Agility forms combo heavies freely, and power forms kill under 70%.',
      neutralKeys: [
        'Use agility forms to execute 0-to-60% uninterrupted combo loops on giant hurtboxes.',
        'Switch to power forms at 70% to kill with down-tilt into smash confirms.',
        'Respect fast grounded Out-of-Shield options when pressing buttons close to their shield.'
      ],
      advantageTips: [
        'Ledge-trap heavies with lingering specials to cover all getup options simultaneously.',
        'Spike wide super-armor recoveries with timed down-airs off-stage.'
      ],
      disadvantageTips: [
        'Avoid mid-percent grab ranges to eliminate early cargo or kill-throw setups.',
        'Do not contest heavy armored moves directly without invulnerability.'
      ]
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'A strategic mirror. Adapt stance choices dynamically to counter the opponent active form.',
      neutralKeys: [
        'Identify opponent active stance and select the counter-form (speed beats power, power beats defense).',
        'Contest stance-switching recovery frames when opponents swap unsafely in neutral.',
        'Hold center stage and control platform space.'
      ],
      advantageTips: [
        'Down-tilt at ledge catches vulnerable vertical recoveries lacking hitboxes.',
        'Ledge-trap aggressively before opponents can swap back to defensive stances.'
      ],
      disadvantageTips: [
        'Avoid predictable recovery paths off-stage.',
        'SDI outward against multi-hit stance combos.'
      ]
    },
    'Hit-and-Run / Speedster': {
      ratio: 'Even',
      summary: 'Agility forms match speedster pace, while form-specific evasion options punish predictable burst entries.',
      neutralKeys: [
        'Use evasion mechanics or parries to counter burst dash approaches on reaction.',
        'Hold center stage and avoid chasing speedsters when they reset neutral.',
        'Swap to power forms only during confirmed advantage states or off-stage traps.'
      ],
      advantageTips: [
        'Lingering specials at the ledge restrict high-altitude spring escapes.',
        'Up-air ladders catch speedsters landing out of recovery specials.'
      ],
      disadvantageTips: [
        'Mix up recovery drift to avoid getting stage-spiked by deep back-airs.',
        'SDI outward against vertical ladder combos.'
      ]
    }
  },

  'Hit-and-Run / Speedster': {
    'Zoner / Trapper': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Superior mobility invalidates slow projectile setups. Weave through screens and punish item pulls on reaction.',
      neutralKeys: [
        'Use high ground speed to weave through projectiles and punish pulling animations on reaction.',
        'Cross up shields with jump-cancel aerials to avoid fast Out-of-Shield reversals.',
        'Do not run blindly into stationary traps or shielded bombs.'
      ],
      advantageTips: [
        'Drop off-stage specials or fast aerials above zoners to gimp vertical recoveries.',
        'Ledge-trap with back-air to swat floaty jump getup options.'
      ],
      disadvantageTips: [
        'DI outward against zoner bomb-to-aerial confirms at high percent.',
        'Do not auto-pilot burst dashes into shielded items.'
      ]
    },
    'Rushdown / Burst': {
      ratio: 'Even',
      summary: 'Speed duel where you control engagement pace. Whiff-punish aggressive burst entries with dash-away retreats.',
      neutralKeys: [
        'Bait out burst dash attacks with dash-dance retreats, then punish with fast combo starters.',
        'Use fast invulnerable specials to escape aggressive shield pressure resets.',
        'Control neutral pace; force rushdown opponents to overextend across stage.'
      ],
      advantageTips: [
        'Drop off-stage specials or deep aerials to invalidate linear recovery paths.',
        'Ledge-trap with repeated short-hop aerials to cover regular getup and roll.'
      ],
      disadvantageTips: [
        'Avoid rolling predictably when opponents cross up your shield.',
        'Hold survival DI on sweetspot jab and burst kill confirms at ledge.'
      ]
    },
    'Spacing / Swordie': {
      ratio: '+1 (Slight Advantage)',
      summary: 'Mobility frustrates sword fundamentals. Bait out long sword swings and punish landing frames with ease.',
      neutralKeys: [
        'Bait sword aerials with dash-in retreats, then punish landing lag with burst dash attacks.',
        'Use fast Out-of-Shield specials to break free from tight sword shield pressure.',
        'Avoid challenging sword disjoints head-on in mid-air.'
      ],
      advantageTips: [
        'Swat floaty sword descents with high-altitude up-air ladders into back-airs.',
        'Disrupt sword recoveries off-stage before their up-B snap engages.'
      ],
      disadvantageTips: [
        'Contest grounded tilt spacing carefully; do not dash into low-profile pokes.',
        'Do not drop shield early against fast Out-of-Shield sword reversals.'
      ]
    },
    'Super Heavy / Grappler': {
      ratio: '+2 (Major Advantage)',
      summary: 'Heavily favored matchup. Run circles around heavies, combo their massive hurtboxes, and gimp recoveries.',
      neutralKeys: [
        'Hit heavies with burst entries into up-air ladders: giant hurtboxes allow extended loops.',
        'Space aerial pokes safely outside their fast grounded Out-of-Shield reversals.',
        'Stay strictly outside command grab range; reset to neutral if cornered.'
      ],
      advantageTips: [
        'Drop off-stage specials directly onto heavy recoveries for instant gimp stocks.',
        'Ledge-trap with back-air to catch broad hurtboxes on all getup options.'
      ],
      disadvantageTips: [
        'Avoid mid-percent grab ranges to eliminate early cargo or kill-throw setups.',
        'Respect fast armored Out-of-Shield specials when crossing up.'
      ]
    },
    'Dynamic / Stance': {
      ratio: 'Even',
      summary: 'Match agility forms in neutral, and exploit sluggish power forms with relentless hit-and-run tactics.',
      neutralKeys: [
        'Bait agility stance dash-ins with dash retreats and whiff-punish with aerials.',
        'Camp power stances patiently from distance; slower ground speeds cannot catch you.',
        'Contest stance swap animations with fast burst attacks.'
      ],
      advantageTips: [
        'Drop off-stage specials to contest poor vertical recovery snaps.',
        'Up-air ladders carry lighter stance fighters to top blast zones reliably.'
      ],
      disadvantageTips: [
        'Watch for evasion counters (like Foresight) slowing down burst approaches.',
        'Never challenge high-damage kill aerials or smashes head-on.'
      ]
    },
    'Hit-and-Run / Speedster': {
      ratio: 'Even',
      summary: 'A high-speed positional chess match. Whiff-punishing and stage position dictate the winner.',
      neutralKeys: [
        'Hold center stage and avoid committing to predictable high-speed burst paths.',
        'Whiff-punish dash attacks with buffered rising aerials or tilt strings.',
        'Use dash-shield to absorb incoming burst hits and take turn advantage.'
      ],
      advantageTips: [
        'Contest high-altitude recovery escapes with full-hop aerials.',
        'Ledge-trap with back-air to cover jump and regular getups.'
      ],
      disadvantageTips: [
        'Vary recovery timing and angles to prevent getting stage-spiked.',
        'SDI outward against vertical juggle ladders.'
      ]
    }
  }
};