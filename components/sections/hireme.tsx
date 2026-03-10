'use client';

import { motion } from '@/lib/motion-wrapper';
import { Button } from '@/components/ui/button';

export default function HireMe() {

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="hireme" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Something Together
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            I help individuals and businesses build modern websites,
            design user experiences, and create digital products.
            If you have an idea or project in mind, let's work together.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Button
              type="button"
              size="lg"
              className="rounded-full px-8"
              onClick={scrollToContact}
            >
              Work With Me
            </Button>

            <Button
              type="button"
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}