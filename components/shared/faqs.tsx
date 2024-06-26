import { Section, Container } from "@/components/craft";
import { Balancer } from "react-wrap-balancer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <Section>
      <Container>
        <div className="flex justify-center items-center gap-2 flex-col">
          <h3 className="text-center scroll-m-20 text-4xl sm:text-5xl lg:text-6xl/none font-bold tracking-tight">
            <Balancer>Frequently Asked Questions</Balancer>
          </h3>
          <h4 className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            <Balancer>
              Have a question? We've got answers. If you can't find what you're
              looking for, feel free to reach out to us.
            </Balancer>
          </h4>
          <div className="mt-4 md:mt-8 not-prose flex flex-col mx-auto gap-4 w-full md:w-3/4">
            <Accordion type="single" collapsible>
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  );
}

const FAQS = [
  {
    question: "How can I contact someone I like?",
    answer:
      "If you find a profile you like, you can send a request to connect. If the other person accepts, you will receive their contact information. You can then proceed to contact them.",
  },
  {
    question: "How can I request someone's pictures?",
    answer:
      "After you contact someone, you can request pictures from them directly. We do not store or display pictures on our platform.",
  },
  {
    question: "Do sisters need a wali (guardian)?",
    answer:
      "Yes, sisters are required to provide the contact information of their wali with their permission to be able to use our platform.",
  },
  {
    question: "Can I use this platform for dating?",
    answer:
      "No, this platform is strictly for marriage purposes only. Any misuse of the platform will result in a permanent ban.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, you can delete your account at any time. All your data will be permanently removed from our servers.",
  },
];
