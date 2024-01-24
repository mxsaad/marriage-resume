import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { SignUpButton } from "@clerk/nextjs"

export default function Component() {
  return (
    <section>
      <div className="absolute -z-10 w-screen h-screen pattern-dots pattern-gray-500 pattern-bg-background pattern-size-4 pattern-opacity-20" />
      <div className="min-h-screen w-screen p-10 md:px-24 flex flex-col items-center justify-center bg-gradient-to-br from-transparent via-primary from-75% via-85% to-95% to-transparent">
          <div className="max-w-7xl">
            <Badge variant="secondary">NEW</Badge>
            <span className="ml-2 text-sm">AI-powered profile suggestions</span>
            <h3 className="mt-4 text-xl md:text-3xl lg:text-4xl leading-tight text-muted-foreground">
              Say <i>Salam</i> to the modern way of sharing your profile with marriage aunties.
            </h3>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
              Create your beautiful, personalized profile to <span className="text-primary">stand out</span> now!
            </h1>
            <div className="mt-6 md:mt-10 flex items-center duration-300">
              <p className="px-2 py-1 md:text-lg rounded-l-full bg-primary text-background dark:text-foreground">marriageresu.me/</p>
              <div className="flex items-center space-x-2 text-center">
                <Input className="bg-background md:text-lg border-l-0 rounded-l-none p-2 w-32 md:w-56" placeholder="saad"/>
                <SignUpButton>
                  <Button className="flex gap-2 items-center">Claim <ArrowTopRightIcon /></Button>
                </SignUpButton>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

