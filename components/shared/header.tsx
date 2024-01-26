import Link from "next/link"
import { ModeToggle } from "../ui/mode-toggle"
import { Button } from "../ui/button"
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"

const Header = () => {
  return (
    <header className="fixed bg-background/95 z-10 self-center w-screen rounded-b-md border-b-2 flex items-center justify-between gap-2 py-4">
      <Link href="/" className="flex gap-2 items-center justify-center pl-4">
          <Image src="/favicon.png" alt="Marriage Resume" width={24} height={24}/>
          <p className="font-bold tracking-tight">MarriageResume</p>
      </Link>
      <div className="flex items-center justify-center gap-2 pr-4">
        <ModeToggle />
        <SignedIn>
          <Button variant="ghost" size="icon">
            <UserButton 
              afterSignOutUrl="/"
              userProfileMode="navigation"
              userProfileUrl="/account"
            />
          </Button>
        </SignedIn>
        <SignedOut>
          <SignUpButton>
            <Button>Sign In</Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header