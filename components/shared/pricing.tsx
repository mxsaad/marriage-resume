import { Section, Container } from "@/components/craft";
import { Balancer } from "react-wrap-balancer";
import {
  CheckIcon as Check,
  ArrowRightIcon as MoveRight,
} from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

export default function Pricing() {
  return (
    <Section>
      <Container>
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <h3 className="text-center scroll-m-20 text-4xl sm:text-5xl lg:text-6xl/none font-bold tracking-tight">
              <Balancer>Affordable Pricing</Balancer>
            </h3>
            <h4 className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              <Balancer>
                Getting married is already expensive enough nowadays. We hope to
                make the process easier for you.
              </Balancer>
            </h4>
          </div>
          <div className="columns-1 md:columns-2 justify-center items-center text-left w-full gap-8 space-y-6">
            <Card className="rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Free
                  </span>
                </CardTitle>
                <CardDescription>
                  Get started now at no cost. No credit card required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$0</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Make a beautiful profile</p>
                        <p className="text-muted-foreground text-sm">
                          Stand out from the crowd.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Claim your unique link</p>
                        <p className="text-muted-foreground text-sm">
                          Share your profile with anyone.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Accept match requests</p>
                        <p className="text-muted-foreground text-sm">
                          Only pay if you want to connect.
                        </p>
                      </div>
                    </div>
                  </div>
                  <SignUpButton>
                    <Button variant="secondary" className="gap-2 uppercase">
                      Get started <MoveRight className="w-4 h-4" />
                    </Button>
                  </SignUpButton>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg shadow-primary rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Pro
                  </span>
                </CardTitle>
                <CardDescription>
                  Premium matchmaking for the price of a coffee.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$7.49</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Search for matches</p>
                        <p className="text-muted-foreground text-sm">
                          Get access to the matchmaker.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Filter through profiles</p>
                        <p className="text-muted-foreground text-sm">
                          Ignore incompatible matches.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited match requests</p>
                        <p className="text-muted-foreground text-sm">
                          Connect with infinite profiles.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* TODO: Redirect to checkout */}
                  <Button className="gap-4 uppercase">
                    Upgrade <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
