import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import "./index.css"

export const metadata = {
  title: "CMS",
  description: "CMS for e-commerce",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
