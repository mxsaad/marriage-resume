import { Badge } from "@/components/ui/badge"
import { CounterClockwiseClockIcon, LightningBoltIcon, LockClosedIcon } from "@radix-ui/react-icons"
import FeatureCard from "@/components/shared/feature-card"
import ClaimUsername from "@/components/shared/claim-username"
import PhoneMockup from "@/components/shared/phone-mockup"

export default function Component() {
  return (
    <main>
      <section className="min-h-screen w-full px-10 md:px-24 flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Typography & CTA */}
        <div className="mt-32 lg:mt-0 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <Badge variant="secondary" className="pl-0.5 flex gap-2 w-fit">
            <Badge>NEW</Badge> AI-powered profile suggestions 🎉
          </Badge>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl tracking-tight leading-tight text-muted-foreground">
            Say <i>Salam</i> to the modern way for Muslims to share their profiles with marriage aunties.
          </p>
          <h1 className="mt-4 font-bold tracking-tighter text-4xl sm:text-5xl lg:text-6xl/none">
            Create your beautiful profile to <span className="text-primary">stand out</span> now!
          </h1>
          <ClaimUsername />
        </div>
        <PhoneMockup />
      </section>

      {/* Features */}
      <section className="w-full px-10 bg-transparent py-12 md:py-24 flex flex-col items-center justify-center">
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
            icon={<CounterClockwiseClockIcon className="w-6 h-6 text-foreground" />}
            title="Rapid Setup"
            description="Create a beautiful profile in minutes, so you can focus on what matters."
          />
          <FeatureCard
            icon={<LockClosedIcon className="w-6 h-6 text-foreground" />}
            title="Private & Secure"
            description="We take privacy and security very seriously. Your data is safe with us."
          />
          <FeatureCard
            icon={<LightningBoltIcon className="w-6 h-6 text-foreground" />}
            title="AI-Powered Suggestions"
            description="Our profile suggestions help you create a profile that stands out."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full mt-12 mb-24 md:mb-36 px-10 md:px-24 flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl lg:text-6xl/none">
            Get started today. <br /> Get married tomorrow.
          </h1>
          <ClaimUsername />
        </div>
      </section>
    </main>
  )
}
