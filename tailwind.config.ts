import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myPink: "#F8AEAE",
      },
      fontFamily: {
        Roxborough: ['var(--font-roxb)'],
        HelveticaNeue: ['var(--font-helvetica)']
      },
      fontSize: {
        normalText: "1.25rem",
      },
      backgroundImage: {
        'noise': "url('/noise.gif')",
      },
    },
  },
  plugins: [],
} satisfies Config;
