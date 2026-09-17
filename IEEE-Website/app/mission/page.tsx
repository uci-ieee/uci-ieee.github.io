"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award, Star, Calendar } from "lucide-react";

export default function MissionPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We want every engineer to hone new skills that are fundamental to developing cutting edge technology while simultaneously sparking their love for electronics."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Our goal is to bring the Electronics community together as one strong and supportive community, so that we can help each other as friends, classmates, and teammates."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description: "We want our members to feel safe trying, failing, and succeeding at building, developing, and creating new things, under the guidance/advice of other engineers and the support of our lab."
    }
  ];

  const awards = [
    { year: "2024", awards: ["IEEE Darrel Chong Student Activity Award"] },
    { 
      year: "2023", 
      awards: [
        "Outstanding Large Student Branch, Region 6",
        "IEEE Darrel Chong Student Activity Award",
        "IEEE Regional Exemplary Student Branch Award",
        "Engineering Student Council Best Program for Open Project Space"
      ]
    }
  ];

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
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          >
            Fostering technological innovation and aiding blossoming engineers on their journey to becoming an integral part of society and industry.
          </motion.p>
          <div className="w-24 h-1 bg-ieee-accent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="container">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
             className="max-w-4xl mx-auto text-center"
           >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-8">
              Our Core Purpose
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The Institute of Electrical and Electronics Engineers (IEEE) at the University of California, Irvine, (UCI) is a student chapter of the international non-profit IEEE.
              </p>
              <p>
                IEEE at UCI&apos;s core purpose is to foster technological innovation, and to aid blossoming engineers on their journey to becoming an integral part of society and industry. As an organization at a University with a large engineering department, we recognize the importance of equipping students with more than just academic knowledge.
              </p>
              <p className="text-ieee-blue font-semibold">
                We aim to further the growth of our student members as they become professionals in industry, research, and government.
              </p>
              <p>
                We, at UCI, strive to promote the advancement of technology and professionalism to our members.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values and Culture Section */}
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
              Our Values and Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our most recent events, workshops, projects, and more!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl border border-ieee-gray p-8 transition-all duration-300"
              >
                <div className="text-ieee-blue mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-ieee-slate mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-ieee-blue" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate">
                Awards & Recognition
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our achievements and excellence in engineering education and community building.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {awards.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-8 last:mb-0"
              >
                 <div className="bg-gradient-to-r from-ieee-blue to-ieee-accent text-black rounded-xl p-8 shadow-lg">
                   <div className="flex items-center gap-3 mb-6">
                     <Calendar className="w-6 h-6" />
                     <h3 className="font-heading text-2xl font-bold">
                       {yearData.year}
                     </h3>
                   </div>
                   <div className="space-y-3">
                     {yearData.awards.map((award, awardIndex) => (
                       <motion.div
                         key={awardIndex}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.4, delay: awardIndex * 0.1 }}
                         className="flex items-start gap-3"
                       >
                         <Star className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                         <p className="text-lg opacity-90">{award}</p>
                       </motion.div>
                     ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-ieee-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Be part of a community that&apos;s shaping the future of technology and engineering.
              Whether you&apos;re a student looking to grow, an industry professional wanting to give back,
              or someone passionate about innovation, there&apos;s a place for you in IEEE at UCI.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/get-involved/"
                className="bg-ieee-blue hover:bg-ieee-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Involved Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
