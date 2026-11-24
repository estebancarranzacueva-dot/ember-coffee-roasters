import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "How fresh is the coffee when it arrives?",
    answer:
      "Very fresh. We roast in small batches in Bengaluru and only roast what we can ship quickly, so your bag leaves us within days of roasting.",
  },
  {
    question: "Which coffee should I choose?",
    answer:
      "For something rich and chocolatey, try Monsoon Malabar. For an easy, sweet everyday cup, choose Chikmagalur Estate. If you like bright, fruity coffee, Araku Valley is the one.",
  },
  {
    question: "Where do your beans come from?",
    answer:
      "All of our coffee is single-origin, bought from growers we know by name. Our current coffees come from the Malabar coast, Karnataka and Andhra Pradesh.",
  },
  {
    question: "How should I store my beans?",
    answer:
      "Keep them in an airtight container, away from light, heat and moisture. Avoid the fridge. For the best flavour, use them within a month or so of the roast date.",
  },
  {
    question: "Do you ship across India?",
    answer:
      "Yes, we ship to addresses across India. Your order is packed and sent within days of roasting, and delivery time depends on where you live.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="text-[.85rem] font-semibold uppercase tracking-[.14em] text-primary">
        Questions
      </div>
      <h2 className="mt-3 max-w-[20ch] font-serif text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.05] font-normal tracking-[-.02em]">
        Before you order
      </h2>
      <Accordion className="mt-10 border-t border-muted/30" defaultValue={[]}>
        {questions.map((q) => (
          <AccordionItem key={q.question} value={q.question}>
            <AccordionTrigger>{q.question}</AccordionTrigger>
            <AccordionContent>{q.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
