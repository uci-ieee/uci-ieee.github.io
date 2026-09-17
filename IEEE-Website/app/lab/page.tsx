"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Wrench } from "lucide-react";
import Image from "next/image";

export default function LabPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-ieee-blue text-white py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
          >
            IEEE Lab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Your space to study, collaborate, and build amazing projects
          </motion.p>
          <div className="w-24 h-1 bg-ieee-accent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-6">
                  Come Join us in the IEEE Lab!
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-ieee-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-ieee-slate mb-2">Location: ICS 225</p>
                      <p>
                        Our lab room is located at ICS 225 and will be open as long as there&apos;s an officer there!
                        You can check if there&apos;s an officer on our discord channel &quot;room-status&quot;, which will let you know
                        when the IEEE room is open!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-ieee-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-ieee-slate mb-2">What We Do</p>
                      <p>
                        The IEEE Room is a place to study, hang out, and work on projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Wrench className="w-6 h-6 text-ieee-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-ieee-slate mb-2">Getting There</p>
                      <p>
                        Follow the map to the right to get to our room! We&apos;re also on Google Maps, but if you&apos;re still
                        unable to find the room, feel free to contact us through email or discord and an officer will help you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-ieee-light rounded-lg p-4 border border-ieee-gray"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-ieee-blue" />
                    <h3 className="font-semibold text-ieee-slate">Hours</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Open when officers are present. Check Discord &quot;room-status&quot; for real-time updates.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-ieee-light rounded-lg p-4 border border-ieee-gray"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-ieee-blue" />
                    <h3 className="font-semibold text-ieee-slate">Location</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    ICS Building, Room 225. Follow the map for directions.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Map Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg border border-ieee-gray p-6">
                <h3 className="font-heading text-xl font-bold text-ieee-slate mb-4 text-center">
                  How to Find Us
                </h3>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/ieee-map.jpg"
                    alt="IEEE Lab Location Map - ICS 225"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-ieee-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    IEEE Lab - ICS 225
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Follow this map to locate our lab room in the ICS building
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-ieee-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-6">
              Ready to Visit?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Join us in the lab for study sessions, project collaboration, and connecting with fellow engineers. 
              Check our Discord for real-time room availability!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="/get-involved/"
                  className="bg-ieee-blue hover:bg-ieee-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Involved!
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://discord.com/invite/vmZNBcRFeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Join the IEEE Discord!
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
