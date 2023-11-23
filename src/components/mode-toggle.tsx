import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    setTheme(isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <div onClick={() => setIsDark(!isDark)}>{isDark ? <Moon /> : <Sun />}</div>
  );
}
