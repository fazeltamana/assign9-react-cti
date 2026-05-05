import { lightTheme, darkTheme } from "./token";

export function applyTheme(mode) {
  const theme = mode === "dark" ? darkTheme : lightTheme;

  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
}