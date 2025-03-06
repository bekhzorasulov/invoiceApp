import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

function SideBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
      html.classList.remove("dark");
    }
  }, [theme]);

  function handleClick() {
    const isDark = theme === "dark";
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className="bottom-0 left-0 right-0 top-0 z-[999] md:fixed md:h-full md:w-20">
      <div className="flex items-center justify-between bg-slate-800 shadow-md md:h-full md:flex-col md:rounded-r-3xl">
        <img src="/logo.png" alt="Invoice App Logo" />
        <div className="mr-5 flex items-center gap-8 md:mb-5 md:mr-0 md:flex-col">
          <Button
            onClick={handleClick}
            className="border-none"
            variant="icon"
            size="icon"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <img src="/avatar.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
