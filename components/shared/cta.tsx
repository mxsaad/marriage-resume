import { Section, Container } from "@/components/craft";
import ClaimUsername from "@/components/shared/claim-username";

export default function CTA() {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-center scroll-m-20 text-4xl sm:text-5xl lg:text-6xl/none font-bold tracking-tight">
            Get started today. <br /> Get married tomorrow.
          </h3>
          <ClaimUsername />
        </div>
      </Container>
    </Section>
  );
}
