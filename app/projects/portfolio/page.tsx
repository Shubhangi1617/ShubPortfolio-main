import Image from "next/image";
import Link from "next/link";

export default function PortfolioCaseStudy() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Developer Portfolio
        </h1>

        <p className="text-muted-foreground text-lg max-w-3xl">
          A modern developer portfolio built with Next.js and Tailwind to
          showcase projects, case studies, and technical experience with a
          clean and minimal interface.
        </p>

        <div className="flex gap-2 mt-6 flex-wrap">
          <span className="px-3 py-1 text-sm bg-muted rounded">Next.js</span>
          <span className="px-3 py-1 text-sm bg-muted rounded">TypeScript</span>
          <span className="px-3 py-1 text-sm bg-muted rounded">Tailwind</span>
          <span className="px-3 py-1 text-sm bg-muted rounded">Vercel</span>
        </div>
      </div>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>

        <p className="text-muted-foreground leading-relaxed">
          Many developer portfolios either focus too much on design aesthetics
          or present projects in a cluttered way. I wanted to create a portfolio
          that balances clean design with clear storytelling of projects,
          technical skills, and experience.
        </p>
      </section>

      {/* Solution */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-3">Solution</h2>

        <p className="text-muted-foreground leading-relaxed">
          The portfolio was designed with a structured layout including project
          showcases, case studies, resume details, and contact features. The
          goal was to keep the interface minimal while highlighting real work.
          The site supports dark mode and responsive layouts for all devices.
        </p>
      </section>

      {/* Interface */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Interface Design
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-sm text-muted-foreground mb-1">Homepage</p>
            <Image
              src="/homepage_portfolio.png"
              alt="Portfolio homepage"
              width={1400}
              height={800}
              className="rounded-lg border"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">About Section</p>
            <Image
              src="/about_portfolio.png"
              alt="About section"
              width={1400}
              height={800}
              className="rounded-lg border"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Education Timeline</p>
            <Image
              src="/education_portfolio.png"
              alt="Education"
              width={1400}
              height={800}
              className="rounded-lg border"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Experience Section</p>
            <Image
              src="/experience_portfolio.png"
              alt="Experience"
              width={1400}
              height={800}
              className="rounded-lg border"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Contact Section</p>
            <Image
              src="/contact_portfolio.png"
              alt="Contact"
              width={1400}
              height={800}
              className="rounded-lg border"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Dark Mode UI</p>
            <Image
              src="/darkmodeDemo_portfolio.png"
              alt="Dark mode"
              width={1400}
              height={800}
              className="rounded-lg border"
            />
          </div>

        </div>
      </section>

      {/* Mobile */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Mobile Experience
        </h2>

        <div className="flex justify-center">
          <Image
            src="/mobile_project_portfolio.png"
            alt="Mobile portfolio"
            width={380}
            height={700}
            className="rounded-lg border"
          />
        </div>
      </section>

      {/* Learnings */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-3">
          Key Learnings
        </h2>

        <ul className="list-disc ml-6 text-muted-foreground space-y-1">
          <li>Designing minimal developer focused interfaces</li>
          <li>Building responsive layouts using Tailwind CSS</li>
          <li>Structuring scalable Next.js projects</li>
          <li>Creating reusable UI components</li>
        </ul>
      </section>

      {/* Back */}
      <Link
        href="/"
        className="text-sm text-primary hover:underline"
      >
        ← Back to Portfolio
      </Link>

    </div>
  );
}