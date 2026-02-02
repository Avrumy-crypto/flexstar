import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Factory, Award } from "lucide-react";

const productTypes = [
  "Thermoform Film",
  "Shrink Bands & Sleeves",
  "Pouches",
  "Roll Stock",
  "Lidding Film",
  "High-Barrier Laminates",
  "Custom Solution",
];

const volumeRanges = [
  "Prototype / Sampling",
  "10,000 - 50,000 units",
  "50,000 - 250,000 units",
  "250,000 - 1,000,000 units",
  "1,000,000+ units",
];

const industries = [
  "Food & Beverage",
  "Meat & Protein",
  "Dairy & Cheese",
  "Pet Food",
  "Medical & Pharma",
  "Industrial",
  "Other",
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productType: "",
    industry: "",
    volume: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted",
      description: "Our team will contact you within 24 business hours.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      productType: "",
      industry: "",
      volume: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Get Started</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6">
              Request a Quote
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Tell us about your packaging requirements. Our engineering team will respond within 24 hours with recommendations and preliminary pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your company"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productType" className="text-xs font-bold uppercase tracking-wider">Product Type *</Label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      required
                      className="flex h-12 w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select type</option>
                      {productTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-wider">Industry *</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="flex h-12 w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume" className="text-xs font-bold uppercase tracking-wider">Est. Volume *</Label>
                    <select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      required
                      className="flex h-12 w-full rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select volume</option>
                      {volumeRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your product, packaging dimensions, barrier requirements, print specifications, and any specific features needed..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-primary rounded-lg p-6 text-primary-foreground">
                <h2 className="text-lg font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a
                        href="mailto:sales@laminapackaging.com"
                        className="text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        sales@laminapackaging.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Headquarters</p>
                      <p className="text-primary-foreground/70">
                        1234 Industrial Blvd<br />
                        Manufacturing District, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Business Hours</p>
                      <p className="text-primary-foreground/70">
                        Mon - Fri: 7:00 AM - 5:00 PM<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Factory className="h-6 w-6 text-accent" />
                  <h3 className="font-bold">Manufacturing Facility</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  200,000+ sq ft facility with state-of-the-art extrusion, lamination, printing, and converting equipment.
                </p>
                <p className="text-sm font-medium">Facility tours available by appointment.</p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-accent" />
                  <h3 className="font-bold">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["ISO 9001:2015", "FDA Compliant", "FSSC 22000", "SQF"].map((cert) => (
                    <span key={cert} className="text-xs px-2 py-1 rounded bg-card font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
