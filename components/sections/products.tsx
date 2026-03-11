'use client'

import Link from 'next/link'
import { motion } from '@/lib/motion-wrapper'
import { SectionTitle } from '@/components/ui/section-title'

const products = [
  {
    title: "Canva Templates",
    description:
      "Event templates, flyers, business cards, and wedding or engagement designs created using Canva.",
    image: "/products/businesscard-back.png"
  },
  {
    title: "Artwork",
    description:
      "Handmade mandala art pieces designed for decoration and gifting.",
    image: "/art/artpreview.jpeg"
  },
  {
    title: "Fridge Magnets",
    description:
      "Creative handcrafted magnets designed using artistic patterns.",
    image: "/products/magnetpreview.png"
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 scroll-mt-32">
      <div className="container px-4 md:px-6">

        <SectionTitle
          title="Products & Creative Work"
          subtitle="Digital templates, web projects, and handmade artwork I create"
        />

        {/* Cards */}
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

              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
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

        {/* Single Button */}
        <div className="flex justify-center mt-12">

          <Link
            href="/products/templates"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Explore My Work
          </Link>

        </div>

      </div>
    </section>
  )
}