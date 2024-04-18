import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
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
  AvatarIcon,
  HamburgerMenuIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <header className="max-w-full z-10 sticky top-0 bg-background flex justify-between h-14 items-center gap-4 border-b px-4">
        <div className="hidden md:flex gap-4 items-center">
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
          </Link>
          <Link
            href="/profile"
            className="flex items-center text-muted-foreground hover:text-foreground"
          >
            Profile
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            Matchmaker <Badge>Pro</Badge>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="shrink-0">
              <HamburgerMenuIcon className="w-[1.2rem] h-[1.2rem]" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <SheetHeader>
                <div className="flex flex-row items-center justify-center gap-2 mb-2 text-xl">
                  <Image
                    src="/favicon.png"
                    alt="MarriageResume"
                    width={28}
                    height={28}
                  />
                  MarriageResume
                </div>
              </SheetHeader>
              <Link
                href="/home"
                className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <HomeIcon className="w-6 h-6" />
                Home
              </Link>
              {/* TODO: Update link after adding matchmaking */}
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
                Matchmaker <Badge>Pro</Badge>
              </Link>
              <Link
                href="/profile"
                className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <AvatarIcon className="w-6 h-6" />
                Profile
              </Link>
            </nav>
            <SignedIn>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Get unlimited access to our matchmaking service!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SignedIn>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <ModeToggle variant="ghost" />
          <SignedIn>
            <UserButton />
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
  );
}
