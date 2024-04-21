import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if a user has completed onboarding
  // If yes, redirect them to /
  if (auth().sessionClaims?.metadata.onboardingComplete === true) {
    redirect("/");
  }

  return <>{children}</>;
}
