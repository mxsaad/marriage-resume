import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

export default function Footer() {
  return (
    <footer className="py-2 px-4 flex items-center justify-between border-t-2">
        <p className="text-sm">© 2024 Muhammad Saad</p>
        <Button size="icon" variant="outline">
            <Link href="https://github.com/mxsaad/marriage-resume">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Link>
        </Button>
    </footer>
  )
}