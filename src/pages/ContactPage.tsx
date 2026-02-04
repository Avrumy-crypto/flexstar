import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Factory, Award, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

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

    // Prepare payload
    const payload = {
      to: "avrumy@fivestarcorr.com",
      subject: `Quote Request from ${formData.company || formData.name}`,
      formData,
    };

    try {
      // Try sending to a backend endpoint first (/api/send-email)
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast({ title: "Request Submitted", description: "Email sent successfully." });
        setFormData({ name: "", company: "", email: "", phone: "", productType: "", industry: "", volume: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      // If server responded but not OK, fall through to mailto fallback
      throw new Error("Server error");
    } catch (err) {
      // Fallback: open user's email client with prefilled message (mailto)
      const subject = encodeURIComponent(payload.subject);
      const bodyLines = [
        `Name: ${formData.name}`,
        `Company: ${formData.company}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Product Type: ${formData.productType}`,
        `Industry: ${formData.industry}`,
        `Estimated Volume: ${formData.volume}`,
        "",
        "Message:",
        formData.message,
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));
      const mailto = `mailto:avrumy@fivestarcorr.com?subject=${subject}&body=${body}`;

      // Open mail client (user must send manually)
      window.location.href = mailto;
      toast({ title: "Email Client Opened", description: "Please review and send the email to complete your request." });

      setIsSubmitting(false);
    }
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
      <section className="relative py-28 lg:py-36 bg-primary">
        <div className="container-wide">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Get Started</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8">
              Request a Quote
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              Tell us about your packaging requirements. Our engineering team will respond within 24 hours with recommendations and preliminary pricing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-3">Tell Us About Your Project</h2>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
              </FadeIn>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="h-14 text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your company"
                      className="h-14 text-base"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="h-14 text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="h-14 text-base"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="productType" className="text-xs font-bold uppercase tracking-wider">Product Type *</Label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      required
                      className="flex h-14 w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select type</option>
                      {productTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-wider">Industry *</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="flex h-14 w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="volume" className="text-xs font-bold uppercase tracking-wider">Est. Volume *</Label>
                    <select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      required
                      className="flex h-14 w-full rounded-md border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your product, packaging dimensions, barrier requirements, print specifications, and any specific features needed..."
                    rows={6}
                    className="text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-full"
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
            <FadeIn delay={0.2} className="space-y-8">
              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h2 className="text-xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:sales@laminapackaging.com"
                        className="text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        sales@fivestarcorr.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+7188750022"
                        className="text-primary-foreground/70 hover:text-accent transition-colors"
                      >
                        +1 (718) 875-0022
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-primary-foreground/70">
                        175 Classon Ave<br />
                        Brooklyn, NY 11205
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-primary-foreground/70">
                        Mon - Thur: 9:00 AM - 5:00 PM<br />
                        Fri: 9:00 AM - 1:00 PM<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["ISO 9001:2015", "FDA Compliant", "FSSC 22000", "SQF"].map((cert) => (
                    <span key={cert} className="text-sm px-4 py-2 rounded-full bg-secondary font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Link to Locations */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="container-wide">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Global Presence</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Visit Our Locations
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              With facilities across North America, Europe, and Asia Pacific, we're positioned to serve you wherever you are.
            </p>
            <Link to="/contact/locations">
              <Button size="lg" className="rounded-full">
                View All Locations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
