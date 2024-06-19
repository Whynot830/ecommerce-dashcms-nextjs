"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/button"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="m-auto py-3 px-6 sm:px-8 md:px-14 flex max-w-[1440px]  justify-between">
        <Button onClick={toggleTheme} variant="ghost">
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
    </header>
  )
}

export default Header
