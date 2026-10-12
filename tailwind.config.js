/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "PaperSolve Blue" - Professional, Academic, Trustworthy
        brand: {
          primary: "#2563EB",    // Core brand color
          secondary: "#1E40AF",   // Deeper shade for hover/active
          accent: "#F59E0B",      // Amber for highlights/marks
          soft: "#EFF6FF",        // Very light blue for backgrounds
        },
        // Neutrals based on "Paper" and "Ink"
        surface: {
          background: "#FDFDFD", // Slightly off-white (Paper feel)
          card: "#FFFFFF",        // Pure white
          border: "#E2E8F0",      // Soft slate border
        },
        text: {
          heading: "#0F172A",     // Deep slate (Ink feel)
          body: "#334155",        // Medium slate
          muted: "#64748B",       // Muted slate
        }
      },
      fontFamily: {
        // Modern, readable pairing
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'paper': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'paper-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
