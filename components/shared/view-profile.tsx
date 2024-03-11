import { Badge } from "@/components/ui/badge"
import { Separator } from "../ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ViewProfile() {
  return (
    <div className="flex flex-col items-center text-left gap-4">
      {/* Bio */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
        <div className="flex flex-col">
          <h1 className="text-wrap scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Full Name
          </h1>
          <p className="text-sm text-muted-foreground">
            @username
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge>Tag 1</Badge>
            <Badge>Tag 2</Badge>
            <Badge>Tag 3</Badge>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Summary</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Age</Badge>
          <Badge>Gender</Badge>
          <Badge>Location</Badge>
          <Badge>Status</Badge>
        </div>
        <Separator />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui
          eget mi ultrices vehicula. Nam eget nisl auctor, tincidunt elit vitae,
          fermentum mi. Nulla nec dui eget mi ultrices vehicula. Nam eget nisl
          auctor, tincidunt elit vitae, fermentum mi.
        </p>
      </section>

      {/* Religion */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Religion</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Aqeedah</Badge>
          <Badge>Madhab</Badge>
        </div>
        <Separator />
        <div className="w-full flex flex-col md:flex-row justify-evenly gap-4">
          <div>
            <h3 className="text-xl font-bold">Practice</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui
              eget mi ultrices vehicula. Nam eget nisl auctor, tincidunt elit vitae,
              fermentum mi. Nulla nec dui eget mi ultrices vehicula. Nam eget nisl
              auctor, tincidunt elit vitae, fermentum mi.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Knowledge</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui
              eget mi ultrices vehicula. Nam eget nisl auctor, tincidunt elit vitae,
              fermentum mi. Nulla nec dui eget mi ultrices vehicula. Nam eget nisl
              auctor, tincidunt elit vitae, fermentum mi.
            </p>
          </div>
        </div>
      </section>

      {/* Appearance */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Appearance</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Height</Badge>
          <Badge>Weight</Badge>
          <Badge>Build</Badge>
          <Badge>Complexion</Badge>
        </div>
        <Separator />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui
          eget mi ultrices vehicula. Nam eget nisl auctor, tincidunt elit vitae,
          fermentum mi. Nulla nec dui eget mi ultrices vehicula. Nam eget nisl
          auctor, tincidunt elit vitae, fermentum mi.
        </p>
      </section>

      {/* Occupation */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Occupation</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Tag 1</Badge>
          <Badge>Tag 2</Badge>
          <Badge>Tag 3</Badge>
        </div>
        <Separator />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui
          eget mi ultrices vehicula. Nam eget nisl auctor, tincidunt elit vitae,
          fermentum mi. Nulla nec dui eget mi ultrices vehicula. Nam eget nisl
          auctor, tincidunt elit vitae, fermentum mi.
        </p>
      </section>

      {/* Goals */}
      <section className="w-full flex flex-col gap-2 border-2 rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">Goals</h2>
        <Separator />
        <Accordion type="single" defaultValue="item-1" collapsible className="-mt-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold">Short-Term</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                <li>Memorize Quran</li>
                <li>Become Fluent in Arabic</li>
                <li>Become a Sigma Male</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-bold">Long-Term</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                <li>Raise Scholars</li>
                <li>Perform Hijrah</li>
                <li>Enter Jannah</li>
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
            <Badge>Pakistan</Badge>
            <Badge>Bosnia</Badge>
          </li>
          <li className="flex gap-2 items-center">
            Languages:
            <Badge>Urdu</Badge>
            <Badge>English</Badge>
            <Badge>Arabic</Badge>
          </li>
        </ul>
        <h2 className="text-xl font-bold">Description</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui
          eget mi ultrices vehicula. Nam eget nisl auctor, tincidunt elit vitae,
          fermentum mi. Nulla nec dui eget mi ultrices vehicula. Nam eget nisl
          auctor, tincidunt elit vitae, fermentum mi.
        </p>
      </section>

      {/* My Ideal Spouse */}
      <section className="w-full flex flex-col gap-2 border-2 border-primary rounded-[--radius] p-4">
        <h2 className="text-2xl font-bold">My Ideal Spouse</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Rich</Badge>
          <Badge>Super Rich</Badge>
        </div>
        <Separator />
        <Accordion type="single" defaultValue="item-1" collapsible className="-mt-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold">Qualities</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                <li>Sigma Male</li>
                <li>Willing to Give 100K + House for Mehr</li>
                <li>Rich</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-bold">Deal-Breakers</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
                <li>Dayooth</li>
                <li>Beta Male</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
