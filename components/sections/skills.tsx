'use client';

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@/components/ui/section-title';
import { skills } from '@/data/skills';

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="Core Skills"
          subtitle="Tools and capabilities I use to build thoughtful digital systems"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="
                group
                relative
                p-6
                rounded-2xl
                border
                bg-card
                hover:shadow-xl
                transition-all duration-300
                overflow-hidden
              "
            >
              <h3 className="font-medium text-base group-hover:-translate-y-2 transition-transform duration-300">
                {skill.name}
              </h3>

              <p
                className="
                  text-sm text-muted-foreground mt-3
                  opacity-0 translate-y-4
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all duration-300
                "
              >
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}