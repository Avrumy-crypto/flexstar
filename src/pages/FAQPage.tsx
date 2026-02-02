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
        answer: "MOQs depend on the product type and printing method. For digitally printed pouches, we can offer as low as 1,000 units for sampling. For rotogravure printing, typical MOQs start at 20,000-50,000 pieces to justify cylinder costs. We'll provide specific MOQs based on your exact specifications during quoting.",
      },
      {
        question: "How does pricing work for custom packaging?",
        answer: "Pricing is based on several factors: material structure (number of layers, film types), pouch size, print complexity (number of colors, finishes), closure features, and order volume. We provide detailed quotes with cost breakdowns so you understand the drivers. Larger volumes typically achieve better unit economics.",
      },
      {
        question: "What payment terms do you offer?",
        answer: "Standard terms are 30% deposit on order confirmation, 70% before shipment. For established customers, we offer net 30/60 terms based on credit evaluation. We accept wire transfer, letter of credit, and major credit cards for smaller orders.",
      },
      {
        question: "Can I get samples before placing a production order?",
        answer: "Yes, we strongly encourage sampling before production. We offer blank stock samples for material evaluation (typically free) and printed samples for design approval. Printed sample costs depend on whether we use digital printing (lower cost) or need to produce plates/cylinders.",
      },
    ],
  },
  {
    name: "Lead Times & Logistics",
    questions: [
      {
        question: "What are typical lead times for custom orders?",
        answer: "Lead times vary by product complexity: Stock pouches with digital printing: 2-3 weeks. Custom pouches with flexographic printing: 4-6 weeks. Rotogravure printed pouches: 6-8 weeks. Lead times start after artwork approval and deposit. We provide specific timelines during quoting.",
      },
      {
        question: "Do you handle shipping and logistics?",
        answer: "Yes, we manage end-to-end logistics. For international orders, we coordinate with freight forwarders, handle export documentation, and can ship FOB, CIF, or DDP depending on your preference. We provide tracking and can coordinate with your customs broker.",
      },
      {
        question: "Can you hold inventory for scheduled releases?",
        answer: "Yes, we offer inventory management programs. You can place a larger production order and schedule releases to your facility. This helps with cash flow and reduces storage needs on your end. Storage fees may apply for extended periods.",
      },
      {
        question: "What if I need rush orders?",
        answer: "We understand urgent needs arise. Rush orders may be possible depending on production schedules and material availability. Rush fees typically apply. Contact us with your timeline and we'll do our best to accommodate or provide alternatives.",
      },
    ],
  },
  {
    name: "Materials & Customization",
    questions: [
      {
        question: "Can you match specific barrier requirements?",
        answer: "Yes, we design structures to meet specific OTR (oxygen transmission rate) and WVTR (moisture vapor transmission rate) targets. Provide your product's shelf life requirements and storage conditions, and we'll recommend appropriate material structures.",
      },
      {
        question: "What print files do you need?",
        answer: "We require high-resolution artwork files (300 DPI minimum) with all fonts outlined. Preferred formats are Adobe Illustrator (.ai) or PDF with embedded images. We provide dieline templates for accurate sizing. Our prepress team can assist with file preparation if needed.",
      },
      {
        question: "Can you create custom pouch sizes?",
        answer: "Absolutely. While we have standard sizes that may offer cost advantages, we regularly produce custom dimensions. Provide your product weight/volume and desired package dimensions, and we'll confirm feasibility and any tooling requirements.",
      },
      {
        question: "Do you offer sustainable packaging options?",
        answer: "Yes, we offer mono-material recyclable structures, PCR content films, and paper-based options where appropriate. However, we're honest about limitations—we'll recommend sustainable options only where they make sense for your product and market. See our Sustainability page for details.",
      },
    ],
  },
  {
    name: "Quality & Compliance",
    questions: [
      {
        question: "What quality certifications do your suppliers have?",
        answer: "We work with ISO 9001 and ISO 22000 certified facilities. For food packaging, we require FSSC 22000 or equivalent food safety certifications. We can provide certificates, COAs, and audit reports upon request.",
      },
      {
        question: "Is your packaging food-grade compliant?",
        answer: "Yes, our food packaging meets FDA and EU food contact regulations. We provide FDA compliance letters, migration testing reports, and declarations of compliance as needed. Specific certifications depend on your target markets.",
      },
      {
        question: "How do you ensure quality on imported products?",
        answer: "We implement pre-shipment inspections, in-process quality checks, and have established relationships with trusted manufacturing partners. We can also arrange third-party inspections if required. Quality issues are rare but covered under our warranty.",
      },
      {
        question: "Can you support regulatory submissions?",
        answer: "We provide technical data sheets, material specifications, and compliance documentation to support your regulatory needs. For specific claims or certifications, we work with you to ensure packaging meets requirements.",
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
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
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
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Answers to common questions about ordering, materials, lead times, and working with us. Can't find what you need? Contact us directly.
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
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                <div className="bg-card rounded-xl border border-border p-6">
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
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Our team is ready to discuss your specific requirements and provide detailed answers.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
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
