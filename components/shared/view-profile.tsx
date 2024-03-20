import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Document, WithId } from "mongodb";

export default function ViewProfile({ user }: { user: WithId<Document> }) {
  return (
    <div className="flex flex-col items-center text-left gap-4">
      {/* Bio */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
        <div className="flex flex-col">
          <h1 className="text-wrap scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {user.name}
          </h1>
          <p className="text-sm text-muted-foreground">{`@${user.username}`}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge>{user.status}</Badge>
            <Badge>{user.gender}</Badge>
            <Badge>
              {new Date().getFullYear() - new Date(user.dob).getFullYear()}
            </Badge>
            <Badge>{`${user.location.state}, ${user.location.country}`}</Badge>
          </div>
          <p className="mt-2 text-muted-foreground break-words">{user.bio}</p>
        </div>
      </div>

      {/* Religion */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Religion</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>{user.religion.aqeedah}</Badge>
          <Badge>{user.religion.madhab}</Badge>
        </div>
        <Separator />
        <div className="w-full flex flex-col md:flex-row justify-evenly gap-4">
          <div>
            <h3 className="text-xl font-bold">Practice</h3>
            <p className="text-muted-foreground break-words">
              {user.religion.practice}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Knowledge</h3>
            <p className="text-muted-foreground break-words">
              {user.religion.knowledge}
            </p>
          </div>
        </div>
      </section>

      {/* Appearance */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Appearance</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>{user.appearance.height}</Badge>
          <Badge>{`${user.appearance.weight} lbs`}</Badge>
          <Badge>{user.appearance.build}</Badge>
          <Badge>{user.appearance.complexion}</Badge>
        </div>
        <Separator />
        <p className="text-muted-foreground break-words">
          {user.appearance.description}
        </p>
      </section>

      {/* Occupation */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Occupation</h2>
        <div className="flex flex-wrap gap-2">
          {user.occupation.tags.map((tag: string) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Separator />
        <p className="text-muted-foreground break-words">
          {user.occupation.description}
        </p>
      </section>

      {/* Goals */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Goals</h2>
        <Separator />
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="-mt-2"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold">
              Short-Term
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                {user.goals.shortTerm.map((goal: string) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-bold">
              Long-Term
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                {user.goals.longTerm.map((goal: string) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Family */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Family</h2>
        <Separator />
        <h2 className="text-xl font-bold">Background</h2>
        <ul className="list-decimal flex flex-col gap-2 text-muted-foreground">
          <li className="flex gap-2 items-center">
            Countries:
            {user.family.countries.map((country: string) => (
              <Badge key={country}>{country}</Badge>
            ))}
          </li>
          <li className="flex gap-2 items-center">
            Languages:
            {user.family.languages.map((country: string) => (
              <Badge key={country}>{country}</Badge>
            ))}
          </li>
        </ul>
        <h2 className="text-xl font-bold">Description</h2>
        <p className="text-muted-foreground break-words">
          {user.family.description}
        </p>
      </section>

      {/* My Ideal Spouse */}
      <section className="w-full flex flex-col gap-2 border-2 border-primary rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">My Ideal Spouse</h2>
        <div className="flex flex-wrap gap-2">
          {user.spouse.tags.map((tag: string) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Separator />
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="-mt-2"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold">
              Qualities
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                {user.spouse.qualities.map((quality: string) => (
                  <li key={quality}>{quality}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-bold">
              Deal-Breakers
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                {user.spouse.dealBreakers.map((dealBreaker: string) => (
                  <li key={dealBreaker}>{dealBreaker}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
