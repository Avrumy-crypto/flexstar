import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    name: "Ordering & Pricing",
    questions: [
      {
        question: "What are your minimum order quantities (MOQs)?",
        answer: "MOQs depend on product type and printing method. For digitally printed pouches, we offer as low as 500 units for prototyping. Flexographic printing typically starts at 20,000+ pieces, while rotogravure starts at 50,000+ to justify cylinder investment. We provide specific MOQs based on your exact specifications.",
      },
      {
        question: "How does pricing work for custom packaging?",
        answer: "Pricing depends on: material structure (layers, film types), dimensions, print complexity (colors, finishes), closure features, and volume. We provide detailed quotes with cost breakdowns. Larger volumes achieve better unit economics through tooling amortization and material efficiency.",
      },
      {
        question: "What payment terms do you offer?",
        answer: "Standard terms are 30% deposit on order confirmation, 70% before shipment. For established customers with credit approval, we offer NET 30/60 terms. We accept wire transfer, letter of credit, and major credit cards for smaller orders.",
      },
      {
        question: "Can I get samples before production?",
        answer: "Absolutely—we encourage sampling. Blank stock samples for material evaluation are typically provided at no charge. Printed samples depend on whether we use digital (lower cost) or need plates/cylinders. Sample costs are credited against production orders.",
      },
    ],
  },
  {
    name: "Lead Times & Logistics",
    questions: [
      {
        question: "What are typical lead times?",
        answer: "Lead times vary by complexity: Stock items with digital print: 2-3 weeks. Custom structures with flexo: 4-6 weeks. Rotogravure printed: 6-8 weeks. First orders may take longer for tooling and approval. Lead times begin after artwork approval and deposit.",
      },
      {
        question: "Do you handle shipping and logistics?",
        answer: "Yes, we manage complete logistics. For domestic orders, we ship via common carriers with tracking. For international, we coordinate freight forwarding, documentation, and can deliver FOB, CIF, or DDP. We maintain relationships with reliable logistics partners.",
      },
      {
        question: "Can you hold inventory for scheduled releases?",
        answer: "Yes, we offer blanket order and inventory management programs. Produce larger quantities for volume pricing and schedule releases to your facility as needed. This improves cash flow and reduces your storage requirements. Storage fees may apply for extended periods.",
      },
      {
        question: "How do you handle rush orders?",
        answer: "Rush orders may be accommodated depending on production schedules and material availability. Rush fees typically apply. Contact us with your timeline requirements—we often find creative solutions to meet urgent needs.",
      },
    ],
  },
  {
    name: "Technical & Materials",
    questions: [
      {
        question: "Can you meet specific barrier requirements?",
        answer: "Yes, we engineer structures to target OTR and WVTR specifications. Provide your product's shelf life requirements and storage conditions, and we'll recommend appropriate material structures with verification testing available.",
      },
      {
        question: "What artwork files do you need?",
        answer: "We require high-resolution files (300 DPI minimum) with fonts outlined and images embedded. Preferred formats: Adobe Illustrator (.ai) or PDF/X-4. We provide dieline templates for accurate sizing. Our prepress team assists with file preparation as needed.",
      },
      {
        question: "Can you create custom sizes?",
        answer: "Absolutely. While standard sizes may offer cost advantages, we routinely produce custom dimensions. Provide target product volume and preferred package dimensions—we'll confirm feasibility and tooling requirements.",
      },
      {
        question: "Do you offer recyclable packaging options?",
        answer: "Yes, we offer mono-material PE and PP structures, PCR content films, and paper-based options where appropriate. We're transparent about real-world recyclability—recommending sustainable options only where they make sense for your product and target markets.",
      },
    ],
  },
  {
    name: "Quality & Compliance",
    questions: [
      {
        question: "What quality certifications do you maintain?",
        answer: "Our facilities are ISO 9001:2015 and FSSC 22000 certified. We also hold SQF certification for food safety. We can provide certificates, COAs, and audit reports upon request. Additional certifications available for specific market requirements.",
      },
      {
        question: "Is your packaging FDA compliant?",
        answer: "Yes, our food contact packaging meets FDA 21 CFR requirements and EU food contact regulations. We provide FDA compliance letters, migration testing reports, and declarations of compliance. Specific certifications depend on target markets and applications.",
      },
      {
        question: "How do you ensure consistent quality?",
        answer: "Quality is built into every stage: incoming material verification, in-process monitoring with statistical controls, 100% final inspection, and comprehensive documentation. We maintain batch traceability and retain samples from every production run.",
      },
      {
        question: "Can you support regulatory submissions?",
        answer: "We provide technical data sheets, material specifications, and compliance documentation to support your regulatory needs. For specific claims or certifications, we work collaboratively to ensure packaging meets all requirements.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-accent shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Resources</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Answers to common questions about ordering, materials, lead times, and quality. Can't find what you need? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-black mb-6 industrial-border pl-4">{category.name}</h2>
                <div className="bg-card rounded-lg border border-border p-6">
                  {category.questions.map((item) => (
                    <FAQItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container-wide">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/70 mb-6">
              Our team is ready to discuss your specific requirements and provide detailed answers.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
