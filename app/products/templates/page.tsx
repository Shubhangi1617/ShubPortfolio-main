import Image from "next/image";
import Link from "next/link";

export default function TemplatesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Canva Templates
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl">
          A collection of customizable Canva templates including business
          cards, flyers, and promotional designs. These templates are created
          for both digital sharing and print use.
        </p>

      </div>

      {/* Business Card */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Business Card Template
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="overflow-hidden rounded-xl border">
            <Image
              src="/products/businesscard-front.png"
              alt="Business card front"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-xl border">
            <Image
              src="/products/businesscard-back.png"
              alt="Business card back"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </section>

      {/* Flyer */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Flyer Template
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="overflow-hidden rounded-xl border">
            <Image
              src="/products/flyer-front.png"
              alt="Flyer front"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-xl border">
            <Image
              src="/products/flyer-back.png"
              alt="Flyer back"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </section>

      {/* Back Button */}
      <div className="mt-12">

        <Link
          href="/"
          className="text-sm text-primary hover:underline"
        >
          ← Back to Portfolio
        </Link>

      </div>

    </div>
  );
}