import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const productTypes = [
  "Stand-Up Pouches",
  "Flat Pouches",
  "Rollstock",
  "Sachets & Stick Packs",
  "High-Barrier Packaging",
  "Recyclable Packaging",
  "Other / Not Sure",
];

const volumeRanges = [
  "Less than 10,000 units",
  "10,000 - 50,000 units",
  "50,000 - 100,000 units",
  "100,000 - 500,000 units",
  "500,000+ units",
  "Not sure yet",
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
      description: "We'll get back to you within 1-2 business days.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      productType: "",
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
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Request a Quote
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Tell us about your packaging needs. Our team will respond within 1-2 business days with material recommendations, pricing, and lead time estimates.
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
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productType">Product Type *</Label>
                    <select
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select product type</option>
                      {productTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Estimated Volume *</Label>
                    <select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select volume range</option>
                      {volumeRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your product, packaging requirements, target dimensions, material preferences, and any specific features needed..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
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
            <div className="space-y-8">
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <a
                        href="mailto:info@flexpackpro.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@flexpackpro.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Address</p>
                      <p className="text-muted-foreground">
                        123 Packaging Way<br />
                        Industrial District, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Business Hours</p>
                      <p className="text-muted-foreground">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Response within 1-2 business days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Initial consultation call if needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Detailed quote with material options
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Sample recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
