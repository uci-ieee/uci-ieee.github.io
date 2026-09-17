"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const membershipOptions = [
  {
    title: "General Membership",
    description: "Membership is as simple as showing up! Whether it's participating in one of our projects, attending a workshop, or just hanging out at a social, getting involved with us makes you a part of IEEE at UCI.",
    details: "Regardless of your major or how often you attend events, you're always welcome to join us!",
    icon: "👥",
    color: "bg-ieee-light",
    textColor: "text-ieee-blue"
  },
  {
    title: "Member++",
    description: "Member++ is a paid membership ($15/year) which grants you access to some special perks, including access to our 3D printers, ICs/MCUs, Reflow Ovens, and more.",
    details: "It also comes with a T-Shirt and a 15% DigiKey discount!",
    icon: "⭐",
    color: "bg-ieee-blue",
    textColor: "text-white"
  }
];

const benefits = [
  { icon: "🔧", title: "Access to Equipment", description: "3D printers, ICs/MCUs, Reflow Ovens" },
  { icon: "👕", title: "IEEE T-Shirt", description: "Exclusive member merchandise" },
  { icon: "💰", title: "DigiKey Discount", description: "15% off on electronic components" },
  { icon: "🌐", title: "Global Network", description: "Connect with 427,000+ members worldwide" },
  { icon: "📚", title: "Learning Resources", description: "Access to 200+ journals and publications" },
  { icon: "🎯", title: "Career Development", description: "Conferences and professional opportunities" }
];

const waysToGetInvolved = [
  {
    title: "Attend Workshops",
    description: "Learn new skills in electronics, programming, and engineering",
    icon: "⚡"
  },
  {
    title: "Join Projects",
    description: "Work on exciting technical projects with fellow members",
    icon: "🚀"
  },
  {
    title: "Participate in Events",
    description: "Social events, hackathons, and networking opportunities",
    icon: "🎉"
  },
  {
    title: "Volunteer",
    description: "Help organize events and contribute to the community",
    icon: "🤝"
  }
];

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-ieee-blue text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              How Can I Get Involved?
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
              It&apos;s Super Easy!
            </p>
            <div className="w-24 h-1 bg-ieee-accent mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-20 bg-ieee-gray">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {membershipOptions.map((option) => (
              <motion.div
                key={option.title}
                variants={fadeInUp}
                className={`${option.color} ${option.textColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-lg mb-4 opacity-90">{option.description}</p>
                <p className="font-semibold">{option.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-ieee-slate mb-4">
              Member++ Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock exclusive perks and resources with our premium membership
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-ieee-light"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-ieee-slate mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-ieee-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-ieee-slate mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              There are many ways to participate and contribute to our community
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {waysToGetInvolved.map((way) => (
              <motion.div
                key={way.title}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{way.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-ieee-slate mb-3">
                  {way.title}
                </h3>
                <p className="text-gray-600">{way.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IEEE Global Organization */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl font-bold text-ieee-slate mb-6">
                IEEE Global Organization
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                IEEE at UCI is a student branch of the Institute of Electrical and Electronics Engineers,
                the world&apos;s largest professional society for all things electrical engineering.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-ieee-accent rounded-full"></div>
                  <span className="text-gray-700">Over <strong>427,000 members</strong> throughout 190 countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-ieee-accent rounded-full"></div>
                  <span className="text-gray-700">Over <strong>145,000 student members</strong> worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-ieee-accent rounded-full"></div>
                  <span className="text-gray-700">Publishes over <strong>200 transactions, journals, and magazines</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-ieee-accent rounded-full"></div>
                  <span className="text-gray-700">Organizes <strong>thousands of conferences</strong> every year</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mt-6">
                Getting involved with the Global Organization can help you to learn a great deal and kick start your career.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8"
              >
                <Link 
                  href="https://www.ieee.org" 
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 bg-ieee-blue text-white font-semibold rounded-lg hover:bg-ieee-dark transition-colors duration-300"
                >
                  Visit Global IEEE Website
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-ieee-blue to-ieee-dark p-8 rounded-2xl text-white">
                <h3 className="font-heading text-2xl font-bold mb-4">Global Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Members Worldwide</span>
                    <span className="font-bold text-2xl">427K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Countries</span>
                    <span className="font-bold text-2xl">190</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Student Members</span>
                    <span className="font-bold text-2xl">145K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Publications</span>
                    <span className="font-bold text-2xl">200+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-ieee-light text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl font-bold mb-6 text-ieee-accent">
              Ready to Join IEEE at UCI?
            </h2>
            <p className="text-xl mb-8 text-black max-w-2xl mx-auto">
              Start your journey with us today and become part of a global community of engineers and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScsQWpFR74ijsvdM_kt2EA0JJUl6KOeLOMN_31FqXYQoqFGzA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-ieee-accent text-white font-semibold rounded-lg hover:bg-white hover:text-ieee-blue transition-all duration-300 text-center"
              >
                Join General Membership
              </motion.a>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfsWOkaM8t_Ko4Lo_8SKBNz-ppUAss7ULQdaeygjbxZgRT2_w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-ieee-blue font-semibold rounded-lg hover:bg-ieee-light transition-all duration-300 text-center"
              >
                Upgrade to Member++
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
