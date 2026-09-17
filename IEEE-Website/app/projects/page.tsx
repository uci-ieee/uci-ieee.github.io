"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code } from "lucide-react";
import { ieeeProjects } from "@/lib/projects";

const projectIcons = {
  ops: Code,
  micromouse: Bot,
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-ieee-blue text-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            IEEE at UCI runs hands-on programs that help students build real engineering skills
            through projects, lectures, and competition.
          </motion.p>
          <div className="w-24 h-1 bg-ieee-accent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      <section className="py-16 bg-ieee-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {ieeeProjects.map((project, index) => {
              const Icon = projectIcons[project.slug];

              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg border border-ieee-gray overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={`${project.title} header`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="rounded-lg bg-white/20 backdrop-blur-sm p-2 text-ieee-accent">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-white">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                      {"applicationHref" in project && project.applicationHref && (
                        <a
                          href={project.applicationHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-ieee-accent px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-ieee-dark"
                        >
                          Apply for {project.shortTitle}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                      <Link
                        href={project.href}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-ieee-blue px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-ieee-dark"
                      >
                        Learn more about {project.shortTitle}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
