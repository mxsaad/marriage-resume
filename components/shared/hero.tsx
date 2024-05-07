import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Balancer } from "react-wrap-balancer";
import ClaimUsername from "@/components/shared/claim-username";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex items-center flex-col text-center gap-4">
          <Badge className="px-1" variant="secondary">
            <Badge className="mr-2">NEW</Badge> Public beta now available! 🎉
          </Badge>
          <h3 className="text-muted-foreground scroll-m-20 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            <Balancer>
              Say <i>Salam</i> to the modern way for Muslims to share their
              profiles with marriage aunties.
            </Balancer>
          </h3>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl/none mb-4">
            <Balancer>
              Create your beautiful profile to{" "}
              <span className="text-primary">stand out</span> now!
            </Balancer>
          </h1>
          <ClaimUsername />
          <div className="my-6 h-96 w-full overflow-hidden shadow-lg shadow-primary border rounded-lg md:rounded-xl md:h-[480px]">
          {/* TODO: Replace image with profile screenshot */}
            <Image
              className="h-full not-prose w-full object-cover object-bottom"
              src="https://papers.co/wallpaper/papers.co-vv24-map-curves-dark-pattern-background-bw-25-wallpaper.jpg"
              width={1920}
              height={1080}
              alt="MarriageResume profile screenshot"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
