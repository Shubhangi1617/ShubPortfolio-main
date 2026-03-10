'use client'

import { motion } from '@/lib/motion-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const products = [
  {
    title: "Canva Templates",
    description:
      "Event templates, flyers, business cards, and wedding or engagement designs created using Canva.",
    image: "/products/templates.png"
  },
  {
    title: "Portfolio & Business Websites",
    description:
      "Modern responsive websites built using Next.js, Tailwind, and modern frontend tools.",
    image: "/products/websites.png"
  },
  {
    title: "Web Applications",
    description:
      "Custom web apps and startup MVP interfaces designed and developed for real-world use.",
    image: "/products/webapp.png"
  },
  {
    title: "Mandala Artwork",
    description:
      "Handmade mandala art pieces designed for decoration and gifting.",
    image: "/products/mandala.png"
  },
  {
    title: "Fridge Magnets",
    description:
      "Creative handcrafted magnets designed using artistic patterns and colors.",
    image: "/products/magnet.png"
  },
  {
    title: "Canvas Paintings",
    description:
      "Hand-painted canvas artwork including doodles, lippen art, and decorative paintings.",
    image: "/products/canvas.png"
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 scroll-mt-32">
      <div className="container px-4 md:px-6">

        <SectionTitle
          title="Products & Creative Work"
          subtitle="Digital templates, web projects, and handmade artwork I create"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-background overflow-hidden hover:shadow-lg transition"
            >

              <div className="h-40 bg-muted flex items-center justify-center text-sm text-muted-foreground">
                Image Placeholder
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {product.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}