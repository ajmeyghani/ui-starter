import React, {useState, createContext} from "react";

const themes = {
  dark: {
    name: "dark",
    foreground: "#fff",
    background: "#000",
  },
  light: {
    name: "light",
    foreground: "#000",
    background: "#fff",
  },
};

const defaultTheme = themes.dark;
const ThemeContext = createContext();

function ThemeProvider(props) {
  const [activeTheme, setActiveTheme] = useState(
    props.theme ? props.theme : defaultTheme
  );

  const toggleTheme = () => {
    setActiveTheme(prev => prev.name === "light" ?
      themes.dark : themes.light
    );
  };

  const themeCtxValue = {
    activeTheme,
    toggle: toggleTheme,
  };

  return (
    <div>
      <ThemeContext.Provider value={themeCtxValue}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export {
  ThemeProvider,
  themes,
  ThemeContext,
};
