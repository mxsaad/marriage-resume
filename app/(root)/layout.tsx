import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex flex-col min-h-screen">
        <div className="absolute -z-10 w-screen h-full pattern-dots pattern-gray-500 pattern-bg-background pattern-size-4 pattern-opacity-20" />
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}