import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

export default function ClaimUsername() {
  return (
    <div className="mt-6 md:mt-10 flex flex-col md:flex-row items-center gap-2">
      <div className="flex items-center">
        <p className="px-2 h-9 font-mono text-base sm:text-lg flex items-center bg-secondary rounded-l-md font-medium text-foreground">
          marriageresu.me/@
        </p>
        <Input
          className="bg-background font-mono text-base sm:text-lg h-9 border-l-0 rounded-l-none w-full md:w-56"
          placeholder="saad"
        />
      </div>
      <SignUpButton>
        <Button className="flex w-full md:w-auto gap-2 items-center">
          Claim <ArrowTopRightIcon />
        </Button>
      </SignUpButton>
    </div>
  );
}
