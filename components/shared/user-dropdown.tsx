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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  AvatarIcon,
  PersonIcon,
  Pencil2Icon,
  EyeOpenIcon,
  ExitIcon
} from "@radix-ui/react-icons"
import { SignOutButton, currentUser } from "@clerk/nextjs"
import Link from "next/link"

export default async function UserDropdown() {
  const user = await currentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user?.imageUrl} alt="User profile image" />
            <AvatarFallback>
              <AvatarIcon />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{`@${user?.username}`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/account" className="flex gap-2 items-center justify-center">
            <PersonIcon /> My Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/edit" className="flex gap-2 items-center justify-center">
            <Pencil2Icon /> Edit Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/@${user?.username}`} className="flex gap-2 items-center justify-center">
            <EyeOpenIcon />Preview Profile
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