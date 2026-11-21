// Central config — reads from Vite env with safe fallbacks
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'http://localhost:5173';
export const IS_DEV = import.meta.env.DEV;
export const IS_PROD = import.meta.env.PROD;

// Helper for building absolute URLs (useful for social share links)
export function absoluteUrl(path = '') {
  const clean = path.replace(/^#?\/?/, '');
  return `${SITE_URL}/#/${clean}`;
}module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        khf: {
          black: "#0f172a",
          red: "#dc2626",
          green: "#15803d",
        },
      },
      fontFamily: {
        head: ["Oswald", "Bebas Neue", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
