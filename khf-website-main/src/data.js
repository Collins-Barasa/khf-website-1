
// KHF data layer


export const competitions = [
  { slug: 'premier-men',   name: 'Premier League Men',   type: 'league', gender: 'men',   tier: 1 },
  { slug: 'premier-women', name: 'Premier League Women', type: 'league', gender: 'women', tier: 1 },
  { slug: 'national-men',  name: 'National League Men',  type: 'league', gender: 'men',   tier: 2 },
];

// ----------------------------------------------------------------------------
// CLUBS — 23 entries (13 men, 10 women)
// ----------------------------------------------------------------------------
export const clubs = [
  // ---------------------------------- Men ----------------------------------
  { id: 1,  slug: 'ncpb-men',         name: 'NCPB Men',            short: 'NCPB',      fullName: 'National Cereals & Produce Board',            location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 2,  slug: 'equity-men',       name: 'Equity Bank',         short: 'Equity',    fullName: 'Equity Bank Handball Club',                   location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 3,  slug: 'ulinzi-men',       name: 'Ulinzi',              short: 'Ulinzi',    fullName: 'Ulinzi Handball Club (Kenya Defence Forces)',  location: 'Langata',  category: 'Senior Men', league: 'premier-men' },
  { id: 4,  slug: 'Strathmore-men',   name: 'Strathmore Tornadoes', short: 'Tornadoes', fullName: 'Strathmore University Tornadoes',             location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 5,  slug: 'GSU-men',          name: 'GSU',                 short: 'GSU',       fullName: 'General Service Unit',                        location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 6,  slug: 'Black-mamba-men',  name: 'Black Mamba',         short: 'Mamba',     fullName: 'Black Mamba HC',                              location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 7,  slug: 'kisiwa-men',       name: 'Kisiwa NP Men',       short: 'Kisiwa',    fullName: 'Kisiwa National Polytechnic Men',             location: 'Bungoma',  category: 'Senior Men', league: 'premier-men' },
  { id: 8,  slug: 'lions-men',        name: 'Lions HC',            short: 'Lions',     fullName: 'Lions Handball Club',                         location: '',         category: 'Senior Men', league: 'premier-men' }, // TODO: location
  { id: 9,  slug: 'ku-men',           name: 'Kenyatta University', short: 'KU',        fullName: 'Kenyatta University',                         location: 'Nairobi',  category: 'Senior Men', league: 'premier-men' },
  { id: 10, slug: 'Daystar-men',      name: 'Daystar Falcons',     short: 'Daystar',   fullName: 'Daystar University',                          location: 'Machakos', category: 'Senior Men', league: 'premier-men' },
  { id: 11, slug: 'Rangers-men',      name: 'Rangers HC',          short: 'Rangers',   fullName: 'Rangers Handball Club',                       location: '',         category: 'Senior Men', league: 'premier-men' }, // TODO: location
  { id: 12, slug: 'Thika-men',        name: 'Thika Engineers',     short: 'Thika',     fullName: 'Thika Engineers',                             location: 'Thika',    category: 'Senior Men', league: 'premier-men' },
 
  { id: 14, slug: 'nairobi-water',    name: 'Nairobi Water Queens', short: 'Nairobi Water', fullName: 'Nairobi Water',                        location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 15, slug: 'ncpb-women',       name: 'NCPB Women',           short: 'NCPB W',   fullName: 'National Cereals & Produce Board',           location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 16, slug: 'ku-ladies',        name: 'KU Ladies',            short: 'KU Ladies', fullName: 'Kenyatta University (KU Ladies)',           location: 'Nairobi',  category: 'Senior Women', league: 'premier-women' },
  { id: 17, slug: 'daystar-women',    name: 'Daystar Falcons Women', short: 'Daystar W', fullName: 'Daystar University',                        location: 'Machakos', category: 'Senior Women', league: 'premier-women' },
  { id: 18, slug: 'kisiwa-women',     name: 'Kisiwa NP Women',      short: 'Kisiwa W',  fullName: 'Kisiwa National Polytechnic Women',          location: 'Bungoma',  category: 'Senior Women', league: 'premier-women' },
  { id: 19, slug: 'nys-women',        name: 'NYS',                  short: 'NYS',       fullName: 'National Youth Service',                     location: 'Nairobi',         category: 'Senior Women', league: 'premier-women' }, // TODO: location
  { id: 20, slug: 'amazon-women',     name: 'Amazon HC',            short: 'Amazon',    fullName: 'Amazon Handball Club',                       location: 'Nairobi',         category: 'Senior Women', league: 'premier-women' }, // TODO: location
  { id: 21, slug: 'desert-scorpions', name: 'Desert Scorpions',     short: 'Scorpions', fullName: 'Desert Scorpion Women',                      location: 'Thika',         category: 'Senior Women', league: 'premier-women' }, // TODO: location
  { id: 22, slug: 'jkuat-women',      name: 'JKUAT',                short: 'JKUAT',     fullName: 'Jomo Kenyatta University of Agriculture & Technology', location: 'Juja', category: 'Senior Women', league: 'premier-women' },
  { id: 23, slug: 'mountain-queens',  name: 'Mountain Queens',      short: 'M. Queens', fullName: 'Mountain Queens',                            location: 'Machakos',         category: 'Senior Women', league: 'premier-women' }, // TODO: location
];

// ----------------------------------------------------------------------------
// FIXTURES
// `comp` is a competition slug. `home` / `away` are club slugs ('TBD' = not set).
// ----------------------------------------------------------------------------
export const fixtures = [
  { id: 'KHF-001', comp: 'premier-women',  round: 'First leg', home: 'DAYSTAR W',     away: 'JKUAT W', date: '2026-11-28', time: '15:30', venue: 'KALOLENI', status: 'Scheduled' }, /
  { id: 'KHF-001', comp: 'premier-men',  round: 'First leg', home: 'DAYSTAR',     away: 'ULINZI SHOOTERS', date: '2026-11-28', time: '15:00', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-002', comp: 'premier-men',  round: 'First leg', home: 'GSU',     away: 'STRATHMORE',     date: '2026-11-28', time: '16:30', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-003', comp: 'national-men', round: 'First leg', home: 'JKUAT',     away: 'NYS',   date: '2026-11-29', time: '09:00', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-004', comp: 'premier-men',  round: 'First leg', home: 'DAYSTAR',     away: 'KU',  date: '2026-11-29', time: '13:30', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-005', comp: 'premier-men',  round: 'First leg', home: 'KU',     away: 'DAYSTAR',      date: '2026-11-29', time: '15:00', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
  { id: 'KHF-006', comp: 'premier-men', round: 'First leg',  home: 'EQUITY',     away: 'STRATHMORE', date: '2026-11-29', time: '16:30', venue: 'KALOLENI', status: 'Scheduled' }, // TODO: confirm home team
];

// ----------------------------------------------------------------------------
// NEWS---------------------------------------------------------------
export const news = [
  { id: 1, title: 'Matchday 12 round-up: Top of the table tightens', category: 'Premier League Men', tag: 'tag-league', date: '2026-11-14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lIM7HVc7FQO8Fr5y1nbLWlDgJY0pJA9mKYGjT76-aw&s=10', excerpt: 'Four teams remain within two points at the summit after a dramatic weekend of handball.' },
  { id: 2, title: "Women's league reaches record participation", category: 'Premier League Women', tag: 'tag-women', date: '2026-11-13', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxCp-iS3fWijEeDwnw7PFUdLbHQfqtzOXdDhAUhJtxg&s=10', excerpt: "New clubs join the fast-growing women's competition across the country." },
  { id: 3, title: 'Kenya names provisional squad for regional qualifiers', category: 'National Teams', tag: 'tag-national', date: '2026-11-12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJEoGw_XnCC_qZRfwYnQPi9c30g1peakDZbBQDn-KRQ&s=10', excerpt: 'Twenty-four players called up for the upcoming international window.' },
  { id: 4, title: 'School handball programme expands to 12 counties', category: 'Development', tag: 'tag-dev', date: '2026-11-11', img: '', excerpt: 'KHF and partners bring handball to thousands of new students.' },
];

// ----------------------------------------------------------------------------
// PLAYERS
// `club` is a club slug.
// ----------------------------------------------------------------------------
export const players = [
  { id: 1, name: 'Brian',        position: 'Left Back',  club: 'daystar-men', goals: 87,   stat: 'Top Scorer', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLjSNWWwvWpeZu3I_JH7fGsgPWIywOV4oRoYn15UHggVLTeeP9rCvZSc&s=10' },
  { id: 2, name: 'Collins Barasa', position: 'Goalkeeper', club: 'daystar-men', savePct: 42, stat: 'Best GK',   img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
];

// ----------------------------------------------------------------------------
// STANDINGS — keyed by competition slug
// `club` is the club slug; `team` is the label shown in the table.
// ----------------------------------------------------------------------------
export const standings = {
  'premier-men': [
    { pos: 1,  club: 'Daystar',          team: 'NCPB',       p: 8,  w: 8, d: 0, l: 0, gf: 386, ga: 161, gd: 225,  pts: 16 },
{ pos: 2,  club: 'equity-men',        team: 'Equity',     p: 6,  w: 6, d: 0, l: 0, gf: 228, ga: 104, gd: 124,  pts: 12 },
{ pos: 3,  club: 'ulinzi-men',        team: 'Ulinzi',     p: 6,  w: 6, d: 0, l: 0, gf: 227, ga: 107, gd: 120,  pts: 12 },
{ pos: 4,  club: 'black-mamba-men',   team: 'Black Mamba',p: 6,  w: 4, d: 0, l: 2, gf: 195, ga: 147, gd: 48,   pts: 8  },
{ pos: 5,  club: 'strathmore-men',    team: 'Strathmore', p: 5,  w: 4, d: 0, l: 1, gf: 124, ga: 111, gd: 13,   pts: 8  },
{ pos: 6,  club: 'hunters-men',       team: 'Hunters',    p: 12, w: 4, d: 0, l: 8, gf: 309, ga: 402, gd: -93,  pts: 8  },
{ pos: 7,  club: 'gsu-men',           team: 'GSU',        p: 3,  w: 3, d: 0, l: 0, gf: 99,  ga: 65,  gd: 34,   pts: 6  },
{ pos: 8,  club: 'lions-hc-men',      team: 'Lions HC',   p: 4,  w: 3, d: 0, l: 1, gf: 153, ga: 128, gd: 25,   pts: 6  },
{ pos: 9,  club: 'thika-men',         team: 'Thika',      p: 6,  w: 3, d: 0, l: 3, gf: 200, ga: 212, gd: -12,  pts: 6  },
{ pos: 10, club: 'kisiwa-tti-men',    team: 'Kisiwa TTI', p: 7,  w: 3, d: 0, l: 4, gf: 209, ga: 243, gd: -34,  pts: 6  },
  ],
  'premier-women': [
    { pos: 1,  club: 'nairobi-water-women',   team: 'Nairobi Water',   p: 12, w: 12, d: 0, l: 0, gf: 496, ga: 190, gd: 306,  pts: 24 },
{ pos: 2,  club: 'ncpb-women',            team: 'NCPB',            p: 13, w: 11, d: 0, l: 2, gf: 507, ga: 278, gd: 229,  pts: 22 },
{ pos: 3,  club: 'ulinzi-sharks-women',   team: 'Ulinzi Sharks',   p: 10, w: 9,  d: 0, l: 1, gf: 423, ga: 181, gd: 242,  pts: 18 },
{ pos: 4,  club: 'nys-women',             team: 'NYS',             p: 16, w: 6,  d: 2, l: 8, gf: 387, ga: 502, gd: -115, pts: 14 },
{ pos: 5,  club: 'ku-women',              team: 'KU',              p: 9,  w: 6,  d: 0, l: 3, gf: 258, ga: 234, gd: 24,   pts: 12 },
{ pos: 6,  club: 'mountain-queens-women', team: 'Mountain Queens', p: 13, w: 5,  d: 0, l: 8, gf: 240, ga: 428, gd: -188, pts: 10 },
{ pos: 7,  club: 'rising-star-women',     team: 'Rising Star',     p: 13, w: 4,  d: 1, l: 8, gf: 384, ga: 424, gd: -40,  pts: 9  },
{ pos: 8,  club: 'amazon-women',          team: 'Amazon',          p: 9,  w: 4,  d: 1, l: 4, gf: 230, ga: 292, gd: -62,  pts: 9  },
{ pos: 9,  club: 'daystar-women',         team: 'Daystar',         p: 15, w: 3,  d: 2, l: 10, gf: 360, ga: 484, gd: -124, pts: 8 },
{ pos: 10, club: 'jkuat-women',           team: 'J.K.U.A.T',       p: 11, w: 1,  d: 0, l: 10, gf: 233, ga: 338, gd: -105, pts: 2 },
{ pos: 11, club: 'new-hope-women',        team: 'New Hope',        p: 11, w: 0,  d: 0, l: 11, gf: 179, ga: 406, gd: -227, pts: 0 },
  ],
  'national-men': [
    { pos: 1, club: '', team: 'Kenya',   p: 10, w: 8, d: 0, l: 2, gf: 250, ga: 220, gd: 30, pts: 24 },
    { pos: 2, club: '', team: 'Rwanda',  p: 10, w: 7, d: 1, l: 2, gf: 240, ga: 215, gd: 25, pts: 22 },
    { pos: 3, club: '', team: 'Tunisia', p: 10, w: 5, d: 2, l: 3, gf: 225, ga: 210, gd: 15, pts: 17 },
  ],
};

// ----------------------------------------------------------------------------
// NATIONAL TEAMS
// ----------------------------------------------------------------------------
export const nationalTeams = [
  { slug: 'senior-men',   name: 'Kenya Senior Men',   img: '', desc: "The national men's handball team representing Kenya in international competitions." }, // TODO: add image
  { slug: 'senior-women', name: 'Kenya Senior Women', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgeHYcxip_V17GjYB5k_QiJeK8mWOrLtfTTiM4GOkNkw&s=10', desc: "The national women's handball team representing Kenya in international competitions." },
  { slug: 'junior',       name: 'Junior & Youth',     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXEg2iMHFZ6JR-WroGnBaAuAx4DNjit-CbBIC8tUopg&s=10.' },
];

export const partners = [
  { name: 'Sponsor A', tier: 'Official Partner' },
  { name: 'Sponsor B', tier: 'Corporate Sponsor' },
  { name: 'Sponsor C', tier: 'Development Partner' },
  { name: 'Sponsor D', tier: 'Media Partner' },
  { name: 'Sponsor E', tier: 'Equipment Partner' },
];

// NOTE: the third gallery entry is a news article page, not an image file.
export const gallery = [
  'https://www.michezoafrika.com/newsimages/GSU-VS-THIKA-.JPG',
  'https://www.michezoafrika.com/newsimages/COACH-MWATHI-2.JPG',
];

// ============================================================================
// HELPERS — use these in components instead of comparing names
// ============================================================================
export const clubBySlug = Object.fromEntries(clubs.map((c) => [c.slug, c]));
export const competitionBySlug = Object.fromEntries(competitions.map((c) => [c.slug, c]));

export const getClub = (slug) => clubBySlug[slug] ?? null;
export const getCompetition = (slug) => competitionBySlug[slug] ?? null;
export const getClubsByLeague = (slug) => clubs.filter((c) => c.league === slug);
export const getStandings = (slug) => standings[slug] ?? [];
export const getFixturesByComp = (slug) => fixtures.filter((f) => f.comp === slug);
