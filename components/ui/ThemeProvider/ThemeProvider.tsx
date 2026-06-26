"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GluestackUIProvider, ModeType, ThemeFlavor } from "../gluestack-ui-provider";
import { useToast } from "../toast";

interface ThemeContextType {
  mode: ModeType;
  flavor: ThemeFlavor;
  toggleMode: () => void;
  setFlavor: (flavor: ThemeFlavor) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ModeType>("light");
  const [flavor, setFlavorState] = useState<ThemeFlavor>("green");
  const toast = useToast();

  useEffect(() => {
    (async () => {
      const [savedMode, savedFlavor] = await Promise.all([
        AsyncStorage.getItem("theme_mode"),
        AsyncStorage.getItem("theme_flavor"),
      ]);

      if (savedMode) setMode(savedMode as ModeType);
      if (savedFlavor) setFlavorState(savedFlavor as ThemeFlavor);
    })();
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    AsyncStorage.setItem("theme_mode", newMode);
  };

  const setFlavor = (newFlavor: ThemeFlavor) => {
    setFlavorState(newFlavor);
    AsyncStorage.setItem("theme_flavor", newFlavor);
  };

  return (
    <ThemeContext.Provider value={{ mode, flavor, toggleMode, setFlavor }}>
      <GluestackUIProvider mode={mode} flavor={flavor}>
        {children}
      </GluestackUIProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};