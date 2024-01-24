import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { SignUpButton } from "@clerk/nextjs"

export default function Component() {
  return (
      <section className="min-h-screen w-screen p-10 md:px-24 flex flex-col items-center justify-center bg-gradient-to-br from-transparent via-primary from-75% via-85% to-95% to-transparent">
          <div className="max-w-7xl">
            <Badge variant="secondary">NEW</Badge>
            <span className="ml-2 text-sm">AI-powered profile suggestions 🎉</span>
            <h3 className="max-w-md md:max-w-3xl mt-4 text-xl md:text-3xl lg:text-4xl tracking-tight leading-tight text-muted-foreground">
              Say <i>Salam</i> to the modern way for Muslims to share their profiles with marriage aunties.
            </h3>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              Create your beautiful, personalized profile to <span className="text-primary">stand out</span> now!
            </h1>
            <div className="mt-6 md:mt-10 flex items-center duration-300">
              <p className="pr-1 pl-2 h-9 font-mono text-lg flex items-center rounded-l-full bg-primary font-medium text-background dark:text-foreground">marriageresu.me/</p>
              <div className="flex items-center space-x-2 text-center">
                <Input className="bg-background text-lg h-9 border-l-0 rounded-l-none p-2 w-32 md:w-56" placeholder="Saad"/>
                <SignUpButton>
                  <Button className="flex gap-2 items-center">Claim <ArrowTopRightIcon /></Button>
                </SignUpButton>
              </div>
            </div>
          </div>
      </section>
  )
}

