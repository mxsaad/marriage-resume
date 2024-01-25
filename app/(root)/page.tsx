import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon, CounterClockwiseClockIcon, LightningBoltIcon, LockClosedIcon } from "@radix-ui/react-icons"
import { SignUpButton } from "@clerk/nextjs"
import FeatureCard from "@/components/shared/feature-card"

export default function Component() {
  return (
    <>
      <section className="min-h-screen w-screen px-10 md:px-24 flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Typography & CTA */}
        <div className="mt-32 lg:mt-0 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <Badge variant="secondary" className="pl-0.5 flex gap-2 w-fit">
            <Badge>NEW</Badge> AI-powered profile suggestions 🎉
          </Badge>
          <h3 className="mt-4 text-lg sm:text-xl md:text-2xl xl:text-4xl tracking-tight leading-tight text-muted-foreground">
            Say <i>Salam</i> to the modern way for Muslims to share their profiles with marriage aunties.
          </h3>
          <h1 className="mt-4 text-3xl sm:text-4xl  md:text-5xl xl:text-7xl font-bold tracking-tight leading-none">
            Create your beautiful, personalized profile to <span className="text-primary">stand out</span> now!
          </h1>
          <div className="mt-6 md:mt-10 flex flex-col md:flex-row items-center gap-2">
            <div className="flex items-center">
              <p className="pr-1 pl-2 h-9 font-mono text-base sm:text-lg flex items-center bg-secondary rounded-l-md font-medium text-foreground">marriageresu.me/@</p>
              <Input className="bg-background font-mono text-base sm:text-lg h-9 border-l-0 rounded-l-none w-full md:w-56" placeholder="saad"/>
            </div>
            <SignUpButton>
              <Button className="flex w-full md:w-auto gap-2 items-center">Claim <ArrowTopRightIcon /></Button>
            </SignUpButton>
          </div>
        </div>
        {/* Phone Mockup */}
        <div className="relative mx-auto border-black bg-black border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-md shadow-muted">
          <div className="w-[148px] h-[18px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-black absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px bg-black">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-[272px] h-[572px]" alt="Light theme phone mockup" />
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="Dark theme phone mockup" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-screen px-10 bg-transparent py-12 lg:pb-32 xl:pb-48 flex flex-col items-center justify-center">
        <div className="max-w-xs sm:max-w-sm md:max-w-max mb-8 flex flex-col items-center justify-center text-center gap-2 md:gap-4">
          <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl lg:text-6xl/none">
            Discover Our Unique Features
          </h1>
          <p className="leading-7 text-muted-foreground">
            Designed from the ground up to be the easiest way for you to share your profile.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <FeatureCard
            icon={<CounterClockwiseClockIcon className="w-6 h-6 text-foreground"/>} 
            title="Rapid Setup"
            description="Create a beautiful profile in minutes, so you can focus on what matters."
          />
          <FeatureCard 
            icon={<LockClosedIcon className="w-6 h-6 text-foreground"/>} 
            title="Private & Secure"
            description="We take privacy and security very seriously. Your data is safe with us."
          />
          <FeatureCard
            icon={<LightningBoltIcon className="w-6 h-6 text-foreground"/>} 
            title="AI-Powered Suggestions"
            description="Our profile suggestions help you create a profile that stands out."
          />
        </div>
      </section>
    </>
  )
}