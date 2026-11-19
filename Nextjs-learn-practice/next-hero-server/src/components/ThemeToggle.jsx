"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@gravity-ui/icons";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
    >
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb>
            {mounted && (isDark ? <Moon /> : <Sun />)}
          </Switch.Thumb>
        </Switch.Control>
      </Switch.Content>
    </Switch>
  );
}