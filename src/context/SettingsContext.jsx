import { createContext, useReducer, useContext } from "react";
import { applyTheme } from "../theme/applyTheme";
const SettingsContext = createContext();

const initialState = {
  category: "all",
  query: "",
  sort: "featured",
  theme: localStorage.getItem("theme") || "light",
};

function settingsReducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    case "SET_QUERY":
      return { ...state, query: action.payload };

    case "SET_SORT":
      return { ...state, sort: action.payload };

    case "TOGGLE_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme); 
      return { ...state, theme: newTheme };
    }

    default:
      return state;
  }
}

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);
  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}

// custom hook
export const useSettings = () => useContext(SettingsContext);