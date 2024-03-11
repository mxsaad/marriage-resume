import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  GearIcon,
  PersonIcon,
  ExitIcon,
  HamburgerMenuIcon
} from "@radix-ui/react-icons"
import { SignOutButton, currentUser } from "@clerk/nextjs"
import Link from "next/link"

export default async function UserDropdown() {
  const user = await currentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{`@${user?.username}`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/account" className="flex gap-2 items-center justify-center">
            <GearIcon /> Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/profile" className="flex gap-2 items-center justify-center">
            <PersonIcon /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <SignOutButton>
          <DropdownMenuItem className="flex gap-2 items-center">
            <ExitIcon /> Sign Out
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
