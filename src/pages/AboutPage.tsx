import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Zap, Globe, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "1990s",
    title: "Foundation",
    description: "Started as a small flexible packaging supplier with a vision to innovate in the industry.",
  },
  {
    year: "2000s",
    title: "Expansion",
    description: "Invested in state-of-the-art manufacturing technology and expanded to serve global markets.",
  },
  {
    year: "2010s",
    title: "Innovation",
    description: "Pioneered sustainable packaging solutions and became an industry leader in eco-friendly materials.",
  },
  {
    year: "Present",
    title: "Excellence",
    description: "Continue to deliver exceptional quality and customer service to 200+ global customers.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in manufacturing, with rigorous quality control at every stage of production.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously invest in cutting-edge technology and processes to stay ahead of industry trends.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers worldwide with reliable logistics and local support across all major markets.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices and developing recyclable packaging solutions.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "Your success is our priority. We work closely with customers to develop customized solutions.",
  },
  {
    icon: Users,
    title: "Team Expertise",
    description: "Our team brings decades of combined experience in flexible packaging and advanced manufacturing.",
  },
];

const stats = [
  { number: "30+", label: "Years in Business" },
  { number: "200+", label: "Global Customers" },
  { number: "8B+", label: "Pouches Produced" },
  { number: "500+", label: "Tons Monthly Capacity" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            About FormaPac
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-200 mb-8"
          >
            Leading the flexible packaging industry with innovation, quality, and sustainability
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-4">
                To deliver exceptional flexible packaging solutions that exceed customer expectations while advancing sustainability in the industry.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We believe that quality packaging is not just about protecting products—it's about creating value for our customers, their end-users, and the planet.
              </p>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#122e54]/10 to-[#122e54]/5 rounded-lg p-8"
            >
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "We're more than just a packaging manufacturer. We're a partner in your success, committed to delivering innovative solutions that help your business grow while protecting the environment."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-slate-900 mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-slate-900 mb-12"
          >
            Our Journey
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#122e54] text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900">{item.year}</h3>
                  <p className="text-lg text-accent font-medium">{item.title}</p>
                  <p className="text-slate-600 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-6"
          >
            Expert Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-600 mb-8"
          >
            Our experienced team brings decades of expertise in flexible packaging, manufacturing excellence, and customer satisfaction. With combined knowledge across all aspects of the industry, we're equipped to solve your most challenging packaging needs.
          </motion.p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Committed to Sustainability</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <span className="text-slate-700">Developing recyclable mono-material packaging solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <span className="text-slate-700">Reducing manufacturing waste and energy consumption</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <span className="text-slate-700">Supporting circular economy initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white mt-1">
                    ✓
                  </div>
                  <span className="text-slate-700">Partnering with suppliers committed to environmental responsibility</span>
                </li>
              </ul>
              <Link to="/sustainability">
                <Button className="mt-8 bg-green-600 hover:bg-green-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 border border-green-200"
            >
              <p className="text-slate-700 text-lg mb-4">
                Sustainability isn't just a buzzword for us—it's embedded in everything we do. We believe that responsible manufacturing practices are essential for long-term success and a healthier planet.
              </p>
              <p className="text-slate-700 text-lg">
                Our commitment goes beyond compliance. We actively invest in innovative technologies and materials that minimize environmental impact while maintaining the highest quality standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-3xl sm:text-4xl font-bold mb-6"
>
  Ready to Partner With Us?
</motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how FormaPac can help you achieve your packaging goals while delivering exceptional value and quality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/products">
              <Button
  className="bg-[#f0b61b] hover:bg-[#f0b61b]/90 text-white px-8 py-3 text-lg"
>
  View Our Products
</Button>


            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
