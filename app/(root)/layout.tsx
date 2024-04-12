import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/shared/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header>{children}</Header>
    </ThemeProvider>
  );
}
