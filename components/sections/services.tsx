'use client'

import { motion } from '@/lib/motion-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const services = [
  {
    title: "Portfolio Websites",
    description:
      "Modern developer portfolios built with Next.js and Tailwind to showcase projects and case studies."
  },
  {
    title: "Business Websites",
    description:
      "Clean and responsive websites for startups, personal brands, and small businesses."
  },
  {
    title: "Web Development",
    description:
      "Frontend and full-stack development using modern technologies like React and Next.js."
  },
  {
    title: "UI / UX Design",
    description:
      "Designing intuitive and user-focused interfaces for web and mobile applications."
  },
  {
    title: "Canva Templates",
    description:
      "Custom social media, event, and branding templates designed for quick digital use."
  },
  {
    title: "Custom Artwork",
    description:
      "Handmade creative work including mandala art, doodles, and customized decorative pieces."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">

        <SectionTitle
          title="Services"
          subtitle="Ways I can help bring your ideas and projects to life"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border bg-background hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}