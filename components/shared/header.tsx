import Link from "next/link"
import { ModeToggle } from "../ui/mode-toggle"
import { Button } from "../ui/button"
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-2 p-4">
      <Link href="/">Logo Here</Link>
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <SignedIn>
          <UserButton afterSignOutUrl="/"/>
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