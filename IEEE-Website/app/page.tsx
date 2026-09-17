"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Users, 
  Wrench, 
  Lightbulb,
  Mail,
  MessageCircle, 
  Instagram, 
  ExternalLink,
  Calendar,
  Code,
  Bot,
  ChevronDown
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Explore the field of engineering",
      description: "Dive deep into various engineering disciplines and discover your passion."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Hone new skills",
      description: "Develop fundamental skills essential for state-of-the-art technology."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Kindle a passion for electronics",
      description: "Ignite your curiosity and love for electrical and electronic systems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborate with fellow engineers",
      description: "Work with peers and professionals to build amazing projects together."
    }
  ];

  const connectMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Join Our Newsletter",
      description: "Subscribe to our IEEE Newsletter! This newsletter includes IEEE events, workshops, lectures, and resources.",
      action: "Subscribe",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScsQWpFR74ijsvdM_kt2EA0JJUl6KOeLOMN_31FqXYQoqFGzA/viewform",
      external: true
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discord Server",
      description: "Join our Discord server and meet our officers and members!",
      action: "Join Discord",
      href: "https://discord.gg/S4uGRbWsBt",
      external: true
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "Find more information about events, and to see our members be involved with projects, workshops, and socials!",
      action: "Follow Us",
      href: "https://www.instagram.com/ieee_uci/?hl=en",
      external: true
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "IEEE Carrd",
      description: "Use this Carrd to find all of IEEE's important links, including directions to the Lab, and social media links!",
      action: "Visit Carrd",
      href: "https://ieeeuci.carrd.co/?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      external: true
    }
  ];

  const projects = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Project Space",
      description: "OPS is a year long program where students get to build 7 projects in embedded programming and circuit design + 1 capstone project. Each project will be preceded by a lecture giving technical background on subjects pertaining to the upcoming project.",
      href: "/ops/",
      image: "/ops_header.webp"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Micromouse",
      description: "Micromouse is a robotics competition hosted by IEEE in which students design, develop, and program a robotic mouse to autonomously navigate a maze. While it sounds like an easy task, it will require your minds to perform at an extraordinary level as you start to apply the knowledge you acquire from coursework to the real test!",
      href: "/Micromouse/",
      image: "/mm_header.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Full Screen */}
      <section className="relative bg-ieee-blue text-white min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10 flex-1 flex flex-col justify-start pt-60">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0"
            >
              <Image
                src="/logo/logoAntEater.PNG"
                alt="IEEE UCI Anteater Logo"
                width={200}
                height={200}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Institute of Electrical and Electronics Engineers at UC Irvine
              </h1>
              <div className="w-24 h-1 bg-ieee-accent mx-auto lg:mx-0 rounded-full" />
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <span className="text-base mb-3 font-semibold tracking-wide">Scroll to explore</span>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
              <ChevronDown className="w-8 h-8" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome & Organization Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-6">
                  Welcome to IEEE@UCI!
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  IEEE at UC Irvine is a student organization dedicated to providing students opportunities 
                  to gain hands-on experience with projects in preparation for the real-world.
                </p>
                
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-ieee-slate mb-6">
                  Through our organization, students will be able to...
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We are dedicated to helping students become the successful engineers they envision themselves to be 
                  so that they can advance technology for humanity in their own passion.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="bg-ieee-gray rounded-lg p-4 border border-ieee-blue/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-ieee-blue flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-ieee-slate mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg border border-ieee-gray p-6">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/welcome.jpg"
                    alt="IEEE UCI Welcome - Students working on projects"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect with Us Section */}
      <section className="py-16 bg-ieee-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-4">
              Connect with Us!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our most recent events, workshops, projects, and more!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {connectMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-ieee-gray p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-ieee-blue flex-shrink-0 mt-1">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-ieee-slate mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      <a
                        href={method.href}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                          method.external
                            ? "bg-gray-700 hover:bg-gray-800 text-white"
                            : "bg-ieee-blue hover:bg-ieee-dark text-white"
                        }`}
                        {...(method.external && {
                          target: "_blank",
                          rel: "noopener noreferrer"
                        })}
                      >
                        {method.action}
                        {method.external && <ExternalLink className="w-4 h-4" />}
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-4">
              Our Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our flagship programs and learn how to get involved.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-ieee-gray overflow-hidden transition-all duration-300"
              >
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} Header`}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-ieee-accent bg-white/20 backdrop-blur-sm rounded-lg p-2">
                        {project.icon}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <a
                      href={project.href}
                      className="inline-flex items-center gap-2 bg-ieee-blue hover:bg-ieee-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-ieee-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-ieee-blue" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate">
                Take a Look at Our Upcoming Events!
              </h2>
            </div>
            
            {/* Google Calendar Embed */}
            <div className="bg-white rounded-xl shadow-lg border border-ieee-gray p-4 md:p-8 mb-8 overflow-hidden">
              <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden" style={{ aspectRatio: "4/3", minHeight: "400px" }}>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=b6283054a7de24f6276d8485ab60aef8d8b660a501b9400d8f48418a97527ada%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                  className="w-full h-full border-0"
                  allowFullScreen
                  title="IEEE UCI Events Calendar"
                />
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/events/"
                className="bg-ieee-blue hover:bg-ieee-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                View All Events
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
