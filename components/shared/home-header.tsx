import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeHeader() {
  return (
    <header className="z-10 sticky top-0 border-b bg-background px-4 md:px-6">
      <nav className="flex items-center justify-between px-6">
        <div className="flex h-14 items-center lg:h-[60px]">
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
        <Link
          href="/profile"
          className="text-foreground transition-colors hover:text-foreground"
        >
          <Button className="uppercase">Go To App</Button>
        </Link>
      </nav>
    </header>
  );
}
