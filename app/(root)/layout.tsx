import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/shared/header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex flex-col min-h-screen">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  )
}