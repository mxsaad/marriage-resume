import { Section, Container } from "@/components/craft";
import { Balancer } from "react-wrap-balancer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  CheckCircledIcon,
  LightningBoltIcon,
  LockClosedIcon,
  HeartIcon,
} from "@radix-ui/react-icons";

export default function Features() {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-center scroll-m-20 text-4xl sm:text-5xl lg:text-6xl/none font-bold tracking-tight">
            <Balancer>Unique Features</Balancer>
          </h3>
          <h4 className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-center">
            <Balancer>
              We've built a platform that is tailored to the needs of Muslims
              looking to get married. Here are some of the features we offer.
            </Balancer>
          </h4>
          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {feaures.map((feature, index) => (
              <Card key={index} className="shadow-lg shadow-secondary">
                <CardHeader className="space-y-3">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const feaures = [
  {
    icon: <CheckCircledIcon className="w-6 h-6 text-foreground" />,
    title: "100% Halal",
    description:
      "No pictures, no free mixing, no haram. Matchmaking done right.",
  },
  {
    icon: <LightningBoltIcon className="w-6 h-6 text-foreground" />,
    title: "Rapid Setup",
    description:
      "Create a beautiful profile in minutes, so you can focus on what matters.",
  },
  {
    icon: <LockClosedIcon className="w-6 h-6 text-foreground" />,
    title: "Private & Secure",
    description:
      "Your data is safe with us. We take privacy and security very seriously.",
  },
  {
    icon: <HeartIcon className="w-6 h-6 text-foreground" />,
    title: "Great Filters",
    description:
      "Use our extensive list of filters to find your perfect match easily.",
  },
];
