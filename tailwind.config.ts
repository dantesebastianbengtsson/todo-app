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
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.5s ease-out",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
