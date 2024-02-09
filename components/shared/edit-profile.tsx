import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SummaryForm from "../forms/summary-form"
import ReligionForm from "../forms/religion-form"
import AppearanceForm from "../forms/appearance-form"

export default function EditProfile() {
  return (
    <div className="flex flex-col items-center text-left gap-4">
      <Accordion type="single" collapsible defaultValue="summary" className="w-full">
        {/* Summary */}
        <AccordionItem value="summary">
          <AccordionTrigger className="text-xl font-bold">
            Summary
          </AccordionTrigger>
          <AccordionContent>
            <SummaryForm />
          </AccordionContent>
        </AccordionItem>
        {/* Religion */}
        <AccordionItem value="religion">
          <AccordionTrigger className="text-xl font-bold">
            Religion
          </AccordionTrigger>
          <AccordionContent>
            <ReligionForm />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="appearance">
          <AccordionTrigger className="text-xl font-bold">
            Appearance
          </AccordionTrigger>
          <AccordionContent>
            <AppearanceForm />
          </AccordionContent>
        </AccordionItem>
        {/* Occupation */}
        <AccordionItem value="occupation">
          <AccordionTrigger className="text-xl font-bold">
            Occupation
          </AccordionTrigger>
          <AccordionContent>
            Form Here
          </AccordionContent>
        </AccordionItem>
        {/* Goals */}
        <AccordionItem value="goals">
          <AccordionTrigger className="text-xl font-bold">
            Goals
          </AccordionTrigger>
          <AccordionContent>
            Form Here
          </AccordionContent>
        </AccordionItem>
        {/* Family */}
        <AccordionItem value="family">
          <AccordionTrigger className="text-xl font-bold">
            Family
          </AccordionTrigger>
          <AccordionContent>
            Form Here
          </AccordionContent>
        </AccordionItem>
        {/* My Ideal Spouse */}
        <AccordionItem value="spouse">
          <AccordionTrigger className="text-xl font-bold">
            My Ideal Spouse
          </AccordionTrigger>
          <AccordionContent>
            Form Here
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
