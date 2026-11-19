import {
  news,
  fixtures,
  standings,
  players,
  nationalTeams,
  partners,
  getClub,
  getCompetition,
} from '../data.js';

/* ==========================================================================
 * helpers
 * Everything that used to compare display names ("Premier League men" vs
 * "premier league Men") now works on slugs, so lookups can never miss.
 * ========================================================================== */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function fmtDate(iso) {
  const [y, m, d] = String(iso ?? '').split('-').map(Number);
  if (!y || !m || !d) return String(iso ?? '');
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

const compName = (slug) => getCompetition(slug)?.name ?? String(slug ?? '');

/** club slug -> short label; passes through plain names and 'TBD' */
function teamLabel(ref) {
  if (!ref || ref === 'TBD') return 'TBD';
  const club = getClub(ref);
  return club ? club.short : String(ref);
}

const clubHref = (ref) => {
  const club = getClub(ref);
  return club ? `#/club?id=${encodeURIComponent(club.slug)}` : null;
};

const isImageUrl = (url) =>
  typeof url === 'string' &&
  /^https?:\/\//i.test(url) &&
  /\.(jpe?g|png|webp|avif|gif)(\?.*)?$/i.test(url);

/** background-image value that degrades to a gradient instead of a broken photo */
function bg(url, angle = 135) {
  const fallback = `linear-gradient(${angle}deg,#0b0b0b,#3b3b3b)`;
  return isImageUrl(url) ? `url('${url}'), ${fallback}` : fallback;
}

const initials = (str, n = 2) => {
  const out = String(str ?? '')
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, n)
    .toUpperCase();
  return out || 'KHF';
};

/** one side of a fixture; renders a muted TBD instead of a fake club */
function side(ref) {
  const label = teamLabel(ref);
  if (label === 'TBD') {
    return `<span class="font-semibold text-sm text-slate-400 italic">TBD</span>`;
  }
  const href = clubHref(ref);
  return href
    ? `<a href="${href}" class="font-semibold text-sm hover:text-khf-red">${esc(label)}</a>`
    : `<span class="font-semibold text-sm">${esc(label)}</span>`;
}

/** image area with a deliberate-looking fallback instead of a broken <img> */
function mediaBox(url, label = 'KHF') {
  const ok = isImageUrl(url);
  return `<div class="w-full aspect-video bg-cover bg-center relative" style="background-image:${bg(url)}">
      ${ok ? '' : `<span class="absolute inset-0 grid place-items-center text-white/25 font-head text-xl uppercase tracking-[4px]">${esc(label)}</span>`}
    </div>`;
}

const playerBlurb = (p) => {
  if (p.goals != null) return `${p.stat ?? 'Scorer'} · ${p.goals} goals`;
  if (p.savePct != null) return `${p.stat ?? 'Goalkeeper'} · ${p.savePct}% save rate`;
  return p.stat ?? '';
};

const byDateAsc = (a, b) => String(a.date).localeCompare(String(b.date));
const byDateDesc = (a, b) => String(b.date).localeCompare(String(a.date));

/* ==========================================================================
 * page
 * ========================================================================== */
export default function home() {
  const upcoming = fixtures.filter((f) => f.status === 'Scheduled').sort(byDateAsc).slice(0, 3);
  const results = fixtures.filter((f) => f.status === 'Completed').sort(byDateDesc).slice(0, 3);
  const top5 = standings['premier-men'] ?? [];

  // table leaders come from standings, not from hand-typed cards
  const leaders = ['premier-men', 'premier-women']
    .map((slug) => ({ slug, comp: getCompetition(slug), row: (standings[slug] ?? [])[0] }))
    .filter((x) => x.row);

  const featuredPlayers = players.slice(0, 2);

  return `
  <!-- HERO -->
  <section class="relative min-h-[85vh] flex items-center overflow-hidden">
    <div class="absolute inset-0">
      <div class="hero-slide absolute inset-0 bg-cover bg-center opacity-100 transition-opacity duration-1000" style="background-image:url('https://www.google.com/imgres?q=kenya%20handball%20federation&imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D4019247549078972613&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fp%2FDfHPFnbNijF%2F&docid=9TNk_LIS_gPc3M&tbnid=WhzJrOmOXZsmpM&vet=12ahUKEwi0q8Dlg5SYAxWa_rsIHfAwB44QnPAOegQIMhAA..i&w=1080&h=1080&hcb=2&itg=1&ved=2ahUKEwi0q8Dlg5SYAxWa_rsIHfAwB44QnPAOegQIMhAA')"></div>
      <div class="hero-slide absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000" style="background-image:url('https://www.google.com/imgres?q=kenya%20handball%20federation%20daystar&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1703986281195835&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fkenyahandballfederation%2Fposts%2Fdaystar-vs-lions-men%2F1703988627862267%2F&docid=8X1HCHWXUe6TDM&tbnid=vIvo71pLmlWVeM&vet=12ahUKEwjboJKjhpSYAxUVnf0HHc8AA0IQnPAOegUImwEQAA..i&w=1600&h=1066&hcb=2&itg=1&ved=2ahUKEwjboJKjhpSYAxUVnf0HHc8AA0IQnPAOegUImwEQAA')"></div>
      <div class="hero-slide absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000" style="background-image:url('https://www.alamy.com/stock-photo/joan-akinyi-kenya-handball-federation-national-women-league.html')"></div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-khf-black/95 via-khf-black/65 to-khf-black/20"></div>
    <div class="relative container-x text-white py-16 max-w-3xl">
      <p class="text-khf-gold font-bold uppercase tracking-[3px] text-xs mb-4">Kenya Handball Federation</p>
      <h1 class="font-head text-5xl md:text-7xl uppercase leading-none mb-5">Passion. Performance. Pride.</h1>
      <p class="text-lg text-slate-300 max-w-xl mb-8">The official digital home of handball in Kenya — competitions, national teams, clubs, players and development.</p>
      <div class="flex flex-wrap gap-3">
        <a href="#/fixtures" class="btn-ghost">📅 Fixtures</a>
        <a href="#/fixtures" class="btn-ghost">🏆 Results</a>
        <a href="#/standings" class="btn-ghost">📊 Standings</a>
      </div>
    </div>
  </section>

  <!-- NEWS -->
  <section class="py-16">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Latest News</h2>
        <a href="#/news" class="text-khf-red font-bold text-sm">All news →</a>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        ${news
          .map(
            (n, i) => `
          <article class="card ${i === 0 ? 'lg:col-span-2' : ''}">
            <a href="#/article?id=${encodeURIComponent(n.id)}" class="block overflow-hidden">${mediaBox(n.img, 'KHF News')}</a>
            <div class="p-5 space-y-2">
              <span class="${esc(n.tag)}">${esc(n.category)}</span>
              <h3 class="text-base font-semibold leading-snug"><a href="#/article?id=${encodeURIComponent(n.id)}" class="hover:text-khf-red">${esc(n.title)}</a></h3>
              <p class="text-sm text-slate-500">${esc(n.excerpt)}</p>
              <time class="text-xs text-slate-400" datetime="${esc(n.date)}">${fmtDate(n.date)}</time>
            </div>
          </article>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- MATCH CENTRE -->
  <section class="py-16 bg-khf-light">
    <div class="container-x grid gap-6 lg:grid-cols-3">
      <!-- Fixtures -->
      <div class="panel">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-head text-2xl uppercase">Upcoming Fixtures</h2>
          <a href="#/fixtures" class="text-khf-red text-sm font-bold">All →</a>
        </div>
        <ul class="space-y-3">
          ${
            upcoming.length
              ? upcoming
                  .map(
                    (f) => `
            <li class="fixture">
              <div class="flex gap-3 text-[11px] text-slate-500 uppercase">
                <span class="font-bold text-khf-red">${esc(compName(f.comp))}</span><span>${esc(f.round)}</span>
              </div>
              <div class="flex items-center justify-between gap-2">
                ${side(f.home)}
                <span class="text-xs text-slate-400">vs</span>
                ${side(f.away)}
              </div>
              <div class="text-xs text-slate-500 flex flex-col gap-0.5">
                <span>📅 ${fmtDate(f.date)} · ${esc(f.time)}</span><span>📍 ${esc(f.venue)}</span>
              </div>
              <span class="status-scheduled">${esc(f.status)}</span>
            </li>`
                  )
                  .join('')
              : '<li class="text-sm text-slate-500">No fixtures scheduled yet.</li>'
          }
        </ul>
      </div>

      <!-- Results -->
      <div class="panel">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-head text-2xl uppercase">Latest Results</h2>
          <a href="#/fixtures" class="text-khf-red text-sm font-bold">All →</a>
        </div>
        <ul class="space-y-3">
          ${
            results.length
              ? results
                  .map(
                    (f) => `
            <li class="fixture">
              <div class="text-[11px] font-bold text-khf-red uppercase">${esc(compName(f.comp))}</div>
              <div class="flex items-center justify-between gap-2">
                ${side(f.home)}
                <span class="font-head text-xl font-bold bg-khf-black text-white px-3 py-0.5 rounded">${f.homeScore ?? 0} – ${f.awayScore ?? 0}</span>
                ${side(f.away)}
              </div>
              <span class="status-completed">Full Time · ${fmtDate(f.date)}</span>
            </li>`
                  )
                  .join('')
              : '<li class="text-sm text-slate-500">No results yet.</li>'
          }
        </ul>
      </div>

      <!-- Standings -->
      <div class="panel">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-head text-2xl uppercase">PL Men — Top 5</h2>
          <a href="#/standings" class="text-khf-red text-sm font-bold">Full →</a>
        </div>
        <table class="w-full table-mini">
          <thead><tr><th>#</th><th>Team</th><th>P</th><th>GD</th><th>PTS</th></tr></thead>
          <tbody>
            ${top5
              .map((t) => {
                const href = t.club ? `#/club?id=${encodeURIComponent(t.club)}` : null;
                const name = href
                  ? `<a href="${href}" class="hover:text-khf-red font-medium">${esc(t.team)}</a>`
                  : `<span class="font-medium">${esc(t.team)}</span>`;
                return `
              <tr>
                <td class="font-bold">${t.pos}</td>
                <td>${name}</td>
                <td>${t.p}</td>
                <td>${t.gd > 0 ? '+' : ''}${t.gd}</td>
                <td class="font-bold">${t.pts}</td>
              </tr>`;
              })
              .join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- FEATURED -->
  <section class="py-16">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Featured Teams & Players</h2>
        <a href="#/statistics" class="text-khf-red font-bold text-sm">Statistics →</a>
      </div>
      <div class="grid gap-6 grid-cols-2 md:grid-cols-4">
        ${featuredPlayers
          .map((p) => {
            const club = getClub(p.club);
            const avatar = isImageUrl(p.img)
              ? `<div class="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-3" style="background-image:url('${p.img}')"></div>`
              : `<div class="w-20 h-20 rounded-full bg-khf-black text-white font-head text-2xl font-bold grid place-items-center mx-auto mb-3">${initials(p.name)}</div>`;
            return `
        <div class="card p-5 text-center">
          ${avatar}
          <h3 class="font-semibold">${esc(p.name)}</h3>
          <p class="text-xs text-slate-500">${esc(p.position)} · ${esc(club ? club.name : p.club)}</p>
          <p class="text-sm font-bold text-khf-red mt-1">${esc(playerBlurb(p))}</p>
        </div>`;
          })
          .join('')}
        ${leaders
          .map(
            (l, i) => `
        <div class="card p-5 text-center">
          <div class="w-20 h-20 rounded-full ${i % 2 === 0 ? 'bg-khf-red' : 'bg-khf-green'} text-white font-head text-2xl font-bold grid place-items-center mx-auto mb-3">${initials(l.row.club ? (getClub(l.row.club)?.name ?? l.row.team) : l.row.team)}</div>
          <h3 class="font-semibold">${esc(l.row.club ? (getClub(l.row.club)?.name ?? l.row.team) : l.row.team)}</h3>
          <p class="text-xs text-slate-500">${esc(l.comp ? l.comp.name : l.slug)}</p>
          <p class="text-sm font-bold text-khf-red mt-1">Leaders · ${l.row.pts} pts</p>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- NATIONAL TEAMS -->
  <section class="py-16 bg-khf-black text-white">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title text-white">National Teams</h2>
        <a href="#/national-teams" class="text-khf-red font-bold text-sm">Explore →</a>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        ${nationalTeams
          .map(
            (t) => `
          <a href="#/national-team?team=${encodeURIComponent(t.slug)}" class="relative h-56 rounded-xl overflow-hidden group">
            <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style="background-image:${bg(t.img)}"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-khf-black via-khf-black/50 to-transparent"></div>
            <div class="absolute bottom-0 p-5">
              <h3 class="font-head text-2xl uppercase">${esc(t.name)}</h3>
              <p class="text-xs text-slate-300">Fixtures · Squad · Results</p>
            </div>
          </a>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- MEDIA -->
  <section class="py-16">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Video & Media</h2>
        <a href="#/gallery" class="text-khf-red font-bold text-sm">Gallery →</a>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        ${[
          { img: 'https://www.michezoafrika.com/newsimages/COACH-MWATHI-2.JPG', t: 'Match Highlights: GSU vs Ulinzi' },
          { img: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&q=80', t: "Interview: Coach on Women's League Growth" },
          { img: 'https://www.michezoafrika.com/newsimages/GSU-VS-THIKA-.JPG', t: 'Grassroots: School Handball Festival' },
        ]
          .map(
            (m) => `
          <div class="group cursor-pointer">
            <div class="relative aspect-video rounded-xl overflow-hidden bg-cover bg-center" style="background-image:${bg(m.img)}">
              <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition grid place-items-center">
                <span class="w-14 h-14 rounded-full bg-white/90 text-khf-red text-2xl grid place-items-center shadow-lg">▶</span>
              </div>
            </div>
            <h3 class="mt-3 font-semibold text-sm">${esc(m.t)}</h3>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- SPONSORS -->
  <section class="py-16 bg-khf-light">
    <div class="container-x">
      <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
        <h2 class="section-title">Partners & Sponsors</h2>
        <a href="#/partners" class="text-khf-red font-bold text-sm">Become a partner →</a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        ${partners
          .map(
            (p) => `
          <div class="h-20 bg-white rounded-lg shadow grid place-items-center px-2 text-center">
            <span class="font-head text-lg tracking-widest text-slate-500 uppercase">${esc(p.name)}</span>
            <span class="text-[10px] uppercase tracking-wider text-slate-400">${esc(p.tier)}</span>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="bg-khf-red text-white py-12">
    <div class="container-x flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 class="font-head text-3xl uppercase">Stay in the game</h2>
        <p class="text-white/90 text-sm mt-1">Get fixtures, results and federation news in your inbox.</p>
      </div>
      <form id="newsletter-form" class="flex gap-2 w-full md:w-auto" novalidate>
        <input type="email" name="email" required placeholder="Your email address" aria-label="Email address" class="px-4 py-3 rounded-lg text-khf-black w-full md:w-72 outline-none"/>
        <button type="button" data-newsletter-submit class="bg-khf-black text-white font-bold px-5 rounded-lg hover:bg-khf-dark">Subscribe</button>
      </form>
    </div>
  </section>`;
}
