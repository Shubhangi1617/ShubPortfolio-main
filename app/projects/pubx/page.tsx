export default function PubxPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

      {/* HERO */}
      <section className="space-y-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          PubX – Social Hangout Platform
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A social discovery platform designed to connect people through
          real-world hangouts, instant matches and venue experiences.
        </p>

        <img
          src="/pubxhomepage.png"
          alt="PubX Homepage"
          className="rounded-xl shadow-xl mt-10"
        />
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="font-semibold mb-2">Role</h3>
          <p className="text-muted-foreground">
            Product Design + Frontend Development
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Tech Stack</h3>
          <p className="text-muted-foreground">
            HTML • CSS • JavaScript • Bootstrap
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Category</h3>
          <p className="text-muted-foreground">
            Social / Dating Platform
          </p>
        </div>

      </section>

      {/* PROBLEM */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Problem</h2>

        <p className="text-muted-foreground max-w-3xl">
          Most dating apps focus only on swiping. Users often struggle
          to build real connections or meet people in meaningful
          environments. There is little integration between online
          matching and real-world experiences.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Solution</h2>

        <p className="text-muted-foreground max-w-3xl">
          PubX bridges digital discovery and real-world interaction.
          Users can match with people nearby and explore hangout venues,
          events and experiences together.
        </p>
      </section>

      {/* SCREENSHOTS */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">
          Interface Screens
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="/pubxregisterpage.png"
            alt="Register Page"
            className="rounded-xl shadow-md"
          />

          <img
            src="/pubxfeaturepage.png"
            alt="Features Page"
            className="rounded-xl shadow-md"
          />

          <img
            src="/pubxaboutpage.png"
            alt="User Profile"
            className="rounded-xl shadow-md"
          />

          <img
            src="/pubxfooterpage.png"
            alt="Footer"
            className="rounded-xl shadow-md"
          />

        </div>
      </section>

      {/* FEATURES */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Key Features</h2>

        <ul className="grid md:grid-cols-2 gap-6 text-muted-foreground">

          <li>Real-world hangout discovery</li>

          <li>Instant match interaction</li>

          <li>Venue-based social meetups</li>

          <li>Clean and responsive UI</li>

        </ul>
      </section>

    </div>
  );
}