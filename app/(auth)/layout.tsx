import { ThemeProvider } from "@/components/theme-provider";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <main className="flex flex-col items-center justify-center min-h-screen w-screen">
        {children}
      </main>
    </ThemeProvider>
  );
}
