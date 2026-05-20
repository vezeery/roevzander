/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'noise-1': 'noise-1 1s infinite steps(30)',
        'noise-2': 'noise-2 1s infinite steps(30)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      font: {
        neue: ["NeueStance", "sans-serif"],
        atmospheric: ["Atmospheric", "sans-serif"],
        jura: ["Jura", "sans-serif"],
      },
      keyframes: {
        'noise-1': {
          '0%, 100%': { clipPath: 'inset(10px 0 20px 0)' },
          '10%': { clipPath: 'inset(30px 0 50px 0)' },
          '20%': { clipPath: 'inset(5px 0 80px 0)' },
          '30%': { clipPath: 'inset(25px 0 40px 0)' },
          '40%': { clipPath: 'inset(15px 0 60px 0)' },
          '50%': { clipPath: 'inset(35px 0 30px 0)' },
          '60%': { clipPath: 'inset(20px 0 50px 0)' },
          '70%': { clipPath: 'inset(40px 0 10px 0)' },
          '80%': { clipPath: 'inset(30px 0 20px 0)' },
          '90%': { clipPath: 'inset(10px 0 40px 0)' },
        },
        'noise-2': {
          '0%, 100%': { clipPath: 'inset(15px 0 25px 0)' },
          '10%': { clipPath: 'inset(35px 0 45px 0)' },
          '20%': { clipPath: 'inset(10px 0 70px 0)' },
          '30%': { clipPath: 'inset(30px 0 30px 0)' },
          '40%': { clipPath: 'inset(20px 0 50px 0)' },
          '50%': { clipPath: 'inset(40px 0 20px 0)' },
          '60%': { clipPath: 'inset(25px 0 40px 0)' },
          '70%': { clipPath: 'inset(50px 0 15px 0)' },
          '80%': { clipPath: 'inset(20px 0 30px 0)' },
          '90%': { clipPath: 'inset(5px 0 50px 0)' },
        },
      },
    },
  },
  plugins: [],
};
