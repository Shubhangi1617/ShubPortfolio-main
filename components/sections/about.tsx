'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from '@/lib/motion-wrapper';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import profile from '@/public/profile.jpg';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my journey and what drives me"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl"
          >
            <Image
              src={profile}
              alt="Shubhangi Tathe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Designer & Developer crafting thoughtful digital experiences
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I design clean, user-focused interfaces and transform them into 
                structured, working systems. My work blends creativity with 
                technical precision.
              </p>
              
              <p>
                I enjoy building modern web applications using technologies 
                like React, Next.js, and TypeScript, while continuously exploring 
                AI-powered systems and intelligent workflows.
              </p>
              
              <p>
                My goal is simple — create digital products that feel intuitive, 
                purposeful, and impactful.
              </p>
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <a
                href="/ShubhangiTathe_Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full" variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}