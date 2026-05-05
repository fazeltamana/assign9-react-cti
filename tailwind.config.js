// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",

        bg: "var(--bg)",
        paper: "var(--paper)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        divider: "var(--divider)",
      },

      // Global typography system
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },

      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
      },

      borderRadius: {
        xl2: "16px",
      },
    },
  },

  plugins: [],
};