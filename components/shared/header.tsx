import Link from "next/link"
import { ModeToggle } from "../ui/mode-toggle"
import { Button } from "../ui/button"
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { HeartFilledIcon } from "@radix-ui/react-icons"

const Header = () => {
  return (
    <header className="fixed w-screen bg-background rounded-b-lg border-b-2 flex items-center justify-between gap-2 p-4">
      <Link href="/">
        <Button variant="outline" className="flex gap-2 pl-3">
          <HeartFilledIcon />MarriageResume
        </Button>
      </Link>
      <div className="flex items-center justify-center gap-2">
        <ModeToggle />
        <SignedIn>
          <Button variant="outline" size="icon">
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