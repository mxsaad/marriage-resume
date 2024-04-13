import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ExitIcon,
  GearIcon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block h-screen sticky top-0 left-0">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 font-semibold"
            >
              <Image
                src="/favicon.png"
                alt="MarriageResume"
                width={24}
                height={24}
              />
              MarriageResume
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {/* TODO: Replace link when matchmaker is implemented (don't link in sheet, too) */}
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
                Matchmaker
              </Link>
              <Link
                href="/account"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <GearIcon className="w-6 h-6" />
                Account
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <PersonIcon className="w-6 h-6" />
                Profile
              </Link>
            </nav>
          </div>
          <div className="p-4 pb-2 mt-auto">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock the matchmaker and find unlimited matches.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                {/* TODO: Link to pricing page when implemented */}
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center gap-2 p-4 pt-0">
            <SignedIn>
              <SignOutButton>
                <Button variant="secondary" size="icon">
                  <ExitIcon className="w-[1.2rem] h-[1.2rem]" />
                </Button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignUpButton>
                <Button variant="secondary">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <ModeToggle variant="secondary" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex justify-between h-14 md:hidden items-center gap-4 border-b bg-muted/40 px-4">
          <SignedOut>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/favicon.png"
                alt="MarriageResume"
                width={24}
                height={24}
              />
              <span className="font-bold tracking-tight">MarriageResume</span>
            </Link>
          </SignedOut>
          <SignedIn>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0">
                  <HamburgerMenuIcon className="w-[1.2rem] h-[1.2rem]" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <SheetHeader>
                    <Link
                      href="/"
                      className="flex flex-row items-center justify-center gap-2 mb-2 text-xl"
                    >
                      <Image
                        src="/favicon.png"
                        alt="MarriageResume"
                        width={28}
                        height={28}
                      />
                      MarriageResume
                    </Link>
                  </SheetHeader>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <MagnifyingGlassIcon className="w-6 h-6" />
                    Matchmaker
                  </Link>
                  <Link
                    href="/account"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <GearIcon className="w-6 h-6" />
                    Account
                  </Link>
                  <Link
                    href="/profile"
                    className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <PersonIcon className="w-6 h-6" />
                    Profile
                  </Link>
                </nav>
                <div className="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </SheetContent>
            </Sheet>
          </SignedIn>
          <div className="flex items-center gap-2">
            <SignedIn>
              <ModeToggle variant="outline" />
            </SignedIn>
            <SignedOut>
              <ModeToggle variant="ghost" />
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <Button variant="outline" size="icon">
                  <ExitIcon className="w-[1.2rem] h-[1.2rem]" />
                </Button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </header>
        <main className="h-min flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
