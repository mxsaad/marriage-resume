import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import UserDropdown from "@/components/shared/user-dropdown"

const Header = () => {
  return (
    <header className="fixed bg-background/95 z-10 self-center w-screen rounded-b-md border-b-2 flex items-center justify-between gap-2 py-2">
      <Link href="/" className="flex gap-2 items-center justify-center pl-4">
        <Image src="/favicon.png" alt="Marriage Resume" width={24} height={24} />
        <p className="font-bold tracking-tight">MarriageResume</p>
      </Link>
      <div className="flex items-center justify-center gap-2 pr-4">
        <ModeToggle />
        <SignedIn>
          <UserDropdown />
        </SignedIn>
        <SignedOut>
          <Link href="/auth">
            <Button>Sign In</Button>
          </Link>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header