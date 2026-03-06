'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from '@/lib/motion-wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/components/sections/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export default function ProjectCard({
  project,
  index,
  inView,
}: ProjectCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg transition"
    >

      <div className="relative h-52">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        {project.image === '/confidential.png' && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm text-center px-6">
            Confidential Project <br /> Screenshots unavailable
          </div>
        )}

      </div>

      <div className="p-6 flex flex-col gap-4">

        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}

        </div>

        {project.caseStudyUrl && (

          <Button asChild className="mt-3 w-fit">

            <Link href={project.caseStudyUrl}>
              View Case Study
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>

          </Button>

        )}

      </div>

    </motion.div>
  );
}