import { Main } from "@/components/craft";
import HomeHeader from "@/components/shared/home-header";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Stats from "@/components/shared/stats";
import Features from "@/components/shared/features";
import Pricing from "@/components/shared/pricing";
import FAQs from "@/components/shared/faqs";
import CTA from "@/components/shared/cta";

export default function Component() {
  return (
    <Main className="min-h-screen w-full flex flex-col gap-6">
      <HomeHeader />
      <Hero />
      <Stats />
      {/* TODO: Add testimonials */}
      <Features />
      <Pricing />
      <FAQs />
      <CTA />
      <Footer />
    </Main>
  );
}
