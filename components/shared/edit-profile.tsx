import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SummaryForm from "../forms/summary-form";
import ReligionForm from "../forms/religion-form";
import AppearanceForm from "../forms/appearance-form";
import OccupationForm from "../forms/occupation-form";
import FamilyForm from "../forms/family-form";
import GoalsForm from "../forms/goals-form";
import SpouseForm from "../forms/spouse-form";
import ContactForm from "../forms/contact-form";
import { auth } from "@clerk/nextjs";
import type { WithId, Document } from "mongodb";

export default function EditProfile({ user }: { user: WithId<Document> }) {
  const { sessionClaims } = auth();
  const clerkId = sessionClaims?.id as string;

  return (
    <div className="flex flex-col items-center text-left gap-4">
      <Accordion
        type="single"
        collapsible
        defaultValue="summary"
        className="w-full"
      >
        {/* Summary */}
        <AccordionItem value="summary">
          <AccordionTrigger className="text-xl font-bold">
            Summary
          </AccordionTrigger>
          <AccordionContent>
            <SummaryForm user={user} />
          </AccordionContent>
        </AccordionItem>
        {/* Religion */}
        <AccordionItem value="religion">
          <AccordionTrigger className="text-xl font-bold">
            Religion
          </AccordionTrigger>
          <AccordionContent>
            <ReligionForm user={user} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="appearance">
          <AccordionTrigger className="text-xl font-bold">
            Appearance
          </AccordionTrigger>
          <AccordionContent>
            <AppearanceForm user={user} />
          </AccordionContent>
        </AccordionItem>
        {/* Occupation */}
        <AccordionItem value="occupation">
          <AccordionTrigger className="text-xl font-bold">
            Occupation
          </AccordionTrigger>
          <AccordionContent>
            <OccupationForm user={user} />
          </AccordionContent>
        </AccordionItem>
        {/* Goals */}
        <AccordionItem value="goals">
          <AccordionTrigger className="text-xl font-bold">
            Goals
          </AccordionTrigger>
          <AccordionContent>
            <GoalsForm user={user} />
          </AccordionContent>
        </AccordionItem>
        {/* Family */}
        <AccordionItem value="family">
          <AccordionTrigger className="text-xl font-bold">
            Family
          </AccordionTrigger>
          <AccordionContent>
            <FamilyForm user={user} />
          </AccordionContent>
        </AccordionItem>
        {/* My Ideal Spouse */}
        <AccordionItem value="spouse">
          <AccordionTrigger className="text-xl font-bold">
            My Ideal Spouse
          </AccordionTrigger>
          <AccordionContent>
            <SpouseForm user={user} />
          </AccordionContent>
        </AccordionItem>
        {/* Contact Information */}
        <AccordionItem value="contact">
          <AccordionTrigger className="text-xl font-bold">
            Contact Information
          </AccordionTrigger>
          <AccordionContent>
            <ContactForm user={user} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
