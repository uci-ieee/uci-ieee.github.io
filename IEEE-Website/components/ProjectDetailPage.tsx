"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ieeeProjects } from "@/lib/projects";

type ProjectDetailPageProps = {
  projectSlug: "ops" | "micromouse";
};

export default function ProjectDetailPage({ projectSlug }: ProjectDetailPageProps) {
  const project = ieeeProjects.find((item) => item.slug === projectSlug);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-ieee-blue text-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-ieee-accent font-semibold mb-3">IEEE Projects</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              {project.summary}
            </p>
            <div className="w-24 h-1 bg-ieee-accent mt-8 rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl font-bold text-ieee-slate mb-4">
                  About the Program
                </h2>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-ieee-slate mb-4">
                  What You&apos;ll Gain
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-ieee-blue mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {"award" in project && project.award && (
                <div className="rounded-xl bg-ieee-light border border-ieee-gray p-6">
                  <p className="font-heading font-semibold text-ieee-slate mb-1">Recognition</p>
                  <p className="text-gray-700">{project.award}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {"applicationHref" in project && project.applicationHref && (
                  <a
                    href={project.applicationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ieee-accent px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-ieee-dark"
                  >
                    Apply for {project.shortTitle}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <Link
                  href={project.visitHref}
                  replace
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-ieee-blue px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-ieee-dark"
                >
                  Visit full {project.shortTitle} site
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-ieee-gray px-6 py-3 font-heading font-semibold text-ieee-slate transition-colors hover:bg-ieee-light hover:text-ieee-blue"
                >
                  View all projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-72 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl border border-ieee-gray"
            >
              <Image
                src={project.image}
                alt={`${project.title} header`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
