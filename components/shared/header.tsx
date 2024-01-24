import Link from "next/link"
import { ModeToggle } from "../ui/mode-toggle"
import { Button } from "../ui/button"
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"

const Header = () => {
  return (
    <header className="fixed bg-background/80 z-10 self-center w-full rounded-lg border-b-2 flex items-center justify-between gap-2 p-4">
      <Link href="/" className="flex gap-2 items-center justify-center">
          <Image src="/favicon.png" alt="Marriage Resume" width={24} height={24}/>
          <p className="font-bold tracking-tight">MarriageResume</p>
      </Link>
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <SignedIn>
          <Button variant="ghost" size="icon">
            <UserButton afterSignOutUrl="/"/>
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