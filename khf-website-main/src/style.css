/* ==================================================
   KHF DESIGN SYSTEM  ·  Tailwind v3 (Vite)
   Full replacement for src/style.css
   ================================================== */

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --khf-black: #0f172a;
  --khf-dark: #111827;
  --khf-red: #dc2626;
  --khf-green: #15803d;
  --khf-surface: #f8fafc;

  --khf-border: #e2e8f0;
  --khf-muted: #64748b;

  --khf-shadow-sm: 0 2px 8px rgb(15 23 42 / 4%);
  --khf-shadow-md: 0 8px 24px rgb(15 23 42 / 6%), 0 2px 6px rgb(15 23 42 / 3%);
  --khf-shadow-lg: 0 18px 40px rgb(15 23 42 / 10%), 0 4px 12px rgb(15 23 42 / 4%);
}

/* ---------- BASE ---------- */

@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
    background-color: var(--khf-surface);
    color: var(--khf-black);
    font-family: 'Times New Roman', Times, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    min-height: 100vh;
    line-height: 1.65;
    background-image: radial-gradient(ellipse at top right, rgb(21 128 61 / 4%), transparent 45%);
  }

  h1,
  h2,
  h3,
  h4,
  .font-head {
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 0.025em;
    line-height: 1.15;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  ::selection {
    color: #fff;
    background: var(--khf-red);
  }

  :focus-visible {
    outline: 3px solid var(--khf-green);
    outline-offset: 4px;
  }
}

/* ---------- COMPONENTS ---------- */

@layer components {
  /* Kenyan flag accent */
  .kenya-flag-bar {
    @apply grid w-full grid-cols-12 h-[5px];
  }

  .kenya-flag-bar .flag-black {
    @apply col-span-4 bg-slate-950;
  }

  .kenya-flag-bar .flag-white-1,
  .kenya-flag-bar .flag-white-2 {
    @apply col-span-1 bg-white;
  }

  .kenya-flag-bar .flag-red {
    @apply col-span-3 bg-red-600;
  }

  .kenya-flag-bar .flag-green {
    @apply col-span-3 bg-green-700;
  }

  /* Utility bar */
  .top-utility-bar {
    @apply text-xs text-slate-300 border-b border-slate-800;
    background: linear-gradient(110deg, #020617, #172033);
  }

  .top-utility-bar a {
    transition: color 180ms ease;
  }

  .top-utility-bar a:hover {
    color: #fff;
  }

  /* Sticky header */
  .main-header {
    @apply sticky top-0 z-40;
    color: hsl(0, 81%, 69%);
    background: linear-gradient(110deg,
      #020617 0%, #020617 32%,
      #fff 32%, #fff 33%,
      var(--khf-red) 33%, var(--khf-red) 66%,
      #fff 66%, #fff 67%,
      var(--khf-green) 67%, var(--khf-green) 100%);
    border-bottom: 4px solid var(--khf-green);
    box-shadow: 0 5px 20px rgb(15 23 42 / 15%);
  }

  /* Keep navigation readable over each Kenyan flag colour. */
  .main-header a,
  .main-header nav a,
  .main-header h1,
  .main-header h2,
  .main-header h3,
  .main-header button {
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    text-shadow: 0 1px 3px rgb(0 0 0 / 75%);
  }

  .main-header nav a {
    border-radius: 0.5rem;
    transition: background-color 180ms ease;
  }

  .main-header nav a:hover,
  .main-header nav a[aria-current="page"],
  .main-header nav a.active {
    color: #fff;
    background-color: rgb(2 6 23 / 65%);
  }

  .main-header :focus-visible {
    outline-color: #fff;
  }

  /* Shared container */
  .container-x {
    @apply mx-auto w-[92%] max-w-[1280px];
  }

  /* Section headings */
  .section-title {
    @apply relative pl-5 font-bold uppercase text-slate-900;
    font-family: 'Times New Roman', Times, serif;
    font-size: clamp(1.5rem, 1.15rem + 1vw, 2.15rem);
    letter-spacing: 0.035em;
    line-height: 1.2;
  }

  .section-title::before {
    content: '';
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 0;
    width: 5px;
    border-radius: 999px;
    background: linear-gradient(180deg, #ef4444, var(--khf-red));
    box-shadow: 0 3px 10px rgb(220 38 38 / 20%);
  }

  /* Buttons */
  .btn {
    @apply inline-flex items-center justify-center gap-2;
    min-height: 44px;
    padding: 0.75rem 1.4rem;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: 0.015em;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: transform 200ms ease, background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
  }

  .btn-primary {
    @apply btn text-white;
    background: linear-gradient(135deg, #ef4444, #b91c1c);
    box-shadow: 0 5px 14px rgb(220 38 38 / 20%);
  }

  .btn-primary:hover {
    background: linear-gradient(135deg, #dc2626, #991b1b);
    box-shadow: 0 8px 22px rgb(220 38 38 / 30%);
  }

  .btn-dark {
    @apply btn text-white;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    box-shadow: 0 5px 14px rgb(15 23 42 / 15%);
  }

  .btn-dark:hover {
    background: linear-gradient(135deg, #0f172a, #020617);
    box-shadow: 0 8px 22px rgb(15 23 42 / 24%);
  }

  .btn-ghost {
    @apply btn text-white;
    background: rgb(255 255 255 / 8%);
    border-color: rgb(255 255 255 / 35%);
  }

  .btn-ghost:hover {
    background: var(--khf-red);
    border-color: var(--khf-red);
    box-shadow: 0 6px 18px rgb(220 38 38 / 20%);
  }

  .btn:hover,
  .btn-primary:hover,
  .btn-dark:hover,
  .btn-ghost:hover {
    transform: translateY(-2px);
  }

  .btn:active,
  .btn-primary:active,
  .btn-dark:active,
  .btn-ghost:active {
    transform: translateY(0);
  }

  .btn:disabled,
  .btn-primary:disabled,
  .btn-dark:disabled,
  .btn-ghost:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* Cards and panels */
  .card {
    @apply overflow-hidden bg-white;
    border: 1px solid rgb(226 232 240 / 85%);
    border-radius: 1rem;
    box-shadow: var(--khf-shadow-md);
    transition: transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease;
  }

  .card:hover {
    transform: translateY(-4px);
    border-color: #cbd5e1;
    box-shadow: var(--khf-shadow-lg);
  }

  .panel {
    @apply bg-white;
    padding: clamp(1.1rem, 2vw, 1.6rem);
    border: 1px solid rgb(226 232 240 / 85%);
    border-radius: 1rem;
    box-shadow: var(--khf-shadow-sm);
  }

  /* Category tags */
  .tag {
    @apply inline-block font-bold uppercase;
    padding: 0.3rem 0.65rem;
    border: 1px solid transparent;
    border-radius: 0.45rem;
    font-size: 0.625rem;
    line-height: 1.4;
    letter-spacing: 0.075em;
  }

  .tag-league {
    @apply tag border-sky-200 bg-sky-50 text-sky-800;
  }

  .tag-women {
    @apply tag border-pink-200 bg-pink-50 text-pink-800;
  }

  .tag-national {
    @apply tag border-emerald-200 bg-emerald-50 text-emerald-800;
  }

  .tag-dev {
    @apply tag border-amber-200 bg-amber-50 text-amber-800;
  }

  /* Fixture cards */
  .fixture {
    @apply space-y-1.5 bg-white;
    padding: 1rem;
    border: 1px solid var(--khf-border);
    border-radius: 0.85rem;
    box-shadow: var(--khf-shadow-sm);
    transition: border-color 200ms ease, background-color 200ms ease, box-shadow 200ms ease;
  }

  .fixture:hover {
    background-color: #fcfdfc;
    border-color: rgb(21 128 61 / 35%);
    box-shadow: 0 5px 16px rgb(15 23 42 / 6%);
  }

  /* Match status pills */
  .status-scheduled,
  .status-live,
  .status-completed,
  .status-postponed,
  .status-cancelled {
    @apply inline-flex items-center gap-1.5 font-bold uppercase;
    padding: 0.3rem 0.65rem;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 0.625rem;
    line-height: 1.4;
    letter-spacing: 0.055em;
    white-space: nowrap;
  }

  .status-scheduled {
    @apply border-sky-200 bg-sky-50 text-sky-800;
  }

  .status-live {
    color: #fff;
    background: var(--khf-red);
    box-shadow: 0 2px 8px rgb(220 38 38 / 20%);
  }

  .status-live::before {
    content: '';
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #fff;
    animation: khf-live-dot 1.6s ease-in-out infinite;
  }

  .status-completed {
    @apply bg-slate-100 text-slate-700;
  }

  .status-postponed {
    @apply bg-amber-100 text-amber-800;
  }

  .status-cancelled {
    @apply bg-red-100 text-red-800;
  }

  /* Standings tables */
  .table-mini {
    @apply w-full border-collapse;
  }

  .table-mini th {
    padding: 0.75rem 0.6rem;
    border-bottom: 2px solid var(--khf-border);
    color: var(--khf-muted);
    background: #f8fafc;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-align: left;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .table-mini td {
    padding: 0.85rem 0.6rem;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
    font-size: 0.8125rem;
    font-variant-numeric: tabular-nums;
    transition: background-color 180ms ease;
  }

  .table-mini tbody tr:nth-child(even) td {
    background: #fbfcfe;
  }

  .table-mini tbody tr:hover td {
    background: #f0fdf4;
  }

  .table-mini tbody tr:last-child td {
    border-bottom: 0;
  }

  .table-scroll {
    overflow-x: auto;
    overscroll-behavior-x: contain;
  }

  /* Page hero */
  .page-hero {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding-top: clamp(3.5rem, 7vw, 6rem);
    padding-bottom: clamp(3.5rem, 7vw, 6rem);
    color: #fff;
    background-color: #020617;
    border-bottom: 4px solid var(--khf-red);
  }

  .page-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    pointer-events: none;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9TCDEBzFOXjBTAzjq5gZZKlQ17sAyXnTanYvuMzIBw&s=10');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
  }

  .page-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image: radial-gradient(ellipse at bottom right, rgb(21 128 61 / 22%), transparent 55%), linear-gradient(100deg, rgb(2 6 23 / 95%) 0%, rgb(2 6 23 / 70%) 50%, rgb(2 6 23 / 35%) 100%);
  }

  .page-hero > * {
    position: relative;
    z-index: 1;
  }

  .page-hero h1 {
    max-width: 18ch;
    font-size: clamp(2.5rem, 1.5rem + 4vw, 5rem);
    line-height: 1.05;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 4px 20px rgb(0 0 0 / 20%);
  }

  .page-hero p {
    max-width: 62ch;
    color: #e2e8f0;
    font-size: clamp(0.95rem, 0.9rem + 0.25vw, 1.125rem);
    line-height: 1.8;
  }
}

/* ---------- KEYFRAMES ---------- */

@keyframes khf-live-dot {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

/* ---------- RESPONSIVE ---------- */

@media (min-width: 640px) {
  .btn,
  .btn-primary,
  .btn-dark,
  .btn-ghost {
    font-size: 0.875rem;
  }
}

@media (max-width: 560px) {
  .container-x {
    width: 94%;
  }

  .table-mini th,
  .table-mini td {
    padding-left: 0.45rem;
    padding-right: 0.45rem;
  }
}

@media (hover: none) {
  .card:hover,
  .btn:hover,
  .btn-primary:hover,
  .btn-dark:hover,
  .btn-ghost:hover {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .card,
  .fixture,
  .btn,
  .btn-primary,
  .btn-dark,
  .btn-ghost,
  .table-mini td,
  .top-utility-bar a {
    transition: none;
  }

  .card:hover,
  .btn:hover,
  .btn-primary:hover,
  .btn-dark:hover,
  .btn-ghost:hover {
    transform: none;
  }

  .status-live::before {
    animation: none;
  }
}
