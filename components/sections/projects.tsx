'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@/components/ui/section-title';
import ProjectCard from '@/components/ui/project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category?: 'frontend' | 'backend' | 'fullstack' | 'mobile'
  githubUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  featured?: boolean
}

export default function Projects() {

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentCategory, setCurrentCategory] = useState('all');

  const projects: Project[] = [
{
  id: 1,
  title: "Portfolio Website",
  description:
    "A modern developer portfolio built with Next.js and Tailwind showcasing projects, case studies, and technical experience.",
  image: "/homepage_portfolio.png",
  technologies: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
  category: "frontend",
  caseStudyUrl: "/projects/portfolio",
  featured: true,
},

    {
      id: 2,
      title: 'PubX – Social Hangout Platform',
      description:
        'A social discovery platform designed to connect people through real-world hangouts and venue experiences.',
      image: '/pubxhomepage.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'frontend',
      caseStudyUrl: '/projects/pubx',
      featured: true,
    },

    {
      id: 3,
      title: 'EduCheck – AI Evaluation System',
      description:
        'AI-powered system that evaluates student answers using NLP and semantic similarity models.',
      image: '/confidential.png',
      technologies: ['Python', 'Flask', 'Machine Learning', 'NLP'],
      category: 'fullstack',
      featured: false,
    },

    {
      id: 4,
      title: 'RFQ Logistics Platform',
      description:
        'Quotation management system for agents and shippers to manage logistics workflows and requests.',
      image: '/confidential.png',
      technologies: ['FlutterFlow', 'Firebase', 'No-Code'],
      category: 'mobile',
      featured: false,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects =
    currentCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === currentCategory);

  return (
    <section
      id="projects"
      className="py-20 md:py-32"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Selected Projects"
          subtitle="A collection of real-world products, experiments, and client work"
        />

        <div className="mt-12">

          <Tabs
            defaultValue="all"
            onValueChange={(value) => setCurrentCategory(value)}
            className="w-full"
          >

            <div className="flex justify-center mb-10">

              <TabsList className="grid grid-cols-2 md:grid-cols-5">

                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value}>
                    {cat.label}
                  </TabsTrigger>
                ))}

              </TabsList>

            </div>

            <TabsContent value={currentCategory}>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    inView={sectionInView}
                  />
                ))}

              </div>

            </TabsContent>

          </Tabs>

        </div>
      </div>
    </section>
  );
}