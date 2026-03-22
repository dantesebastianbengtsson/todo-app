import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#faf8ff",
          dim: "#d8d9e6",
          bright: "#faf8ff",
          variant: "#e1e1ee",
          container: {
            DEFAULT: "#ecedfa",
            low: "#f2f3ff",
            high: "#e7e7f4",
            highest: "#e1e1ee",
            lowest: "#ffffff",
          },
        },
        primary: {
          DEFAULT: "#004bca",
          dim: "#003ea8",
          container: "#0061ff",
          fixed: { DEFAULT: "#dbe1ff", dim: "#b4c5ff" },
        },
        "on-surface": {
          DEFAULT: "#191b24",
          variant: "#424656",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#f1f2ff",
        },
        outline: {
          DEFAULT: "#737687",
          variant: "#c2c6d9",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        secondary: {
          DEFAULT: "#435ba2",
          container: "#99b1fe",
        },
      },
    },
  },
  plugins: [],
};

export default config;
