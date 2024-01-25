import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex flex-col min-h-screen bg-dotted-spacing-4 bg-dotted-primary/40">
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}