'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function TemplatesPage() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImage = (src: string) => {
    setSelectedImage(src)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sample Work
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl">
          Showing glimpse of my work
        </p>

      </div>

      {/* Business Card */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Business Card Template
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/products/businesscard-front.png")}
          >
            <Image
              src="/products/businesscard-front.png"
              alt="Business card front"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/products/businesscard-back.png")}
          >
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

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/products/flyer-front.png")}
          >
            <Image
              src="/products/flyer-front.png"
              alt="Flyer front"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/products/flyer-back.png")}
          >
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


      {/* Fridge Magnets */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Fridge Magnets
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/products/magnet1.jpeg")}
          >
            <Image
              src="/products/magnet1.jpeg"
              alt="Magnet design 1"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/products/magnet2.jpeg")}
          >
            <Image
              src="/products/magnet2.jpeg"
              alt="Magnet design 2"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </section>


      {/* Art Samples */}
      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Art Design Samples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/art/art1.jpeg")}
          >
            <Image
              src="/art/art1.jpeg"
              alt="Art design 1"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/art/art2.jpeg")}
          >
            <Image
              src="/art/art2.jpeg"
              alt="Art design 2"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/art/art3.jpeg")}
          >
            <Image
              src="/art/art3.jpeg"
              alt="Art design 3"
              width={1200}
              height={800}
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div
            className="overflow-hidden rounded-xl border cursor-pointer"
            onClick={() => openImage("/art/art4.jpeg")}
          >
            <Image
              src="/art/art4.jpeg"
              alt="Art design 4"
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


      {/* FULLSCREEN IMAGE PREVIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          onClick={closeImage}
        >
          <Image
            src={selectedImage}
            alt="Preview"
            width={1600}
            height={1200}
            className="max-h-[90vh] w-auto rounded-lg"
          />
        </div>
      )}

    </div>
  )
}