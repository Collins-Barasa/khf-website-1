import { getClub } from '../data.js';

/* ==========================================================================
 * One squad list, two derived leaderboards.
 * Keeping a single source means a player can never show up as a top scorer
 * and a best goalkeeper at the same time, and the clubs are guaranteed to be
 * real entries from data.js instead of invented team names.
 * ========================================================================== */
const squad = [
  { name: 'Amos Okwako',        club: 'daystar-men', position: 'Left Back',   goals: 87 },
  { name: 'Mwathi Andrew Kibe', club: 'gsu-men',     position: 'Right Back',  goals: 79 },
  { name: 'Andrew Makwa',       club: 'ulinzi-men',  position: 'Centre Back', goals: 68 },
  { name: 'Collins Simiyu',     club: 'ncpb-men',    position: 'Goalkeeper',  savePct: 42 },
  { name: 'Brandon Barasa',     club: 'kisiwa-men',  position: 'Goalkeeper',  savePct: 39 },
];

const topScorers = squad.filter((p) => p.goals != null).sort((a, b) => b.goals - a.goals);
const topKeepers = squad.filter((p) => p.savePct != null).sort((a, b) => b.savePct - a.savePct);

const clubName = (slug) => getClub(slug)?.short ?? slug;

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export default function statistics() {
  return `
  <section class="page-hero">
    <div class="relative container-x">
      <h1 class="font-head text-4xl md:text-6xl uppercase">Statistics</h1>
      <p class="text-slate-300 mt-2">Top scorers, goalkeepers and player leaderboards.</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container-x grid gap-6 md:grid-cols-2">
      <div class="panel">
        <h2 class="section-title mb-4">Top Scorers</h2>
        <table class="w-full table-mini">
          <thead><tr><th>#</th><th>Player</th><th>Club</th><th>Goals</th></tr></thead>
          <tbody>
            ${topScorers
              .map(
                (p, i) => `
              <tr>
                <td class="font-bold">${i + 1}</td>
                <td class="font-medium">${esc(p.name)}</td>
                <td class="text-slate-500">${esc(clubName(p.club))}</td>
                <td class="font-bold">${p.goals}</td>
              </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
      <div class="panel">
        <h2 class="section-title mb-4">Best Goalkeepers</h2>
        <table class="w-full table-mini">
          <thead><tr><th>#</th><th>Player</th><th>Club</th><th>Save %</th></tr></thead>
          <tbody>
            ${topKeepers
              .map(
                (p, i) => `
              <tr>
                <td class="font-bold">${i + 1}</td>
                <td class="font-medium">${esc(p.name)}</td>
                <td class="text-slate-500">${esc(clubName(p.club))}</td>
                <td class="font-bold">${p.savePct}%</td>
              </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}
