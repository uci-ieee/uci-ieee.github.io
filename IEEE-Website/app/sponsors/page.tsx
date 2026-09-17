"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

type Sponsor = {
  name: string;
  logo: string; // Path to logo image in /public folder
  website?: string; // Optional website URL
};

type SponsorTier = {
  name: string;
  level: "silicon" | "silver" | "bronze";
  sponsors: Sponsor[];
};

const sponsorTiers: SponsorTier[] = [
  {
    name: "Silicon Tier",
    level: "silicon",
    sponsors: [
      {
        name: "Skyworks",
        logo: "/sponsors/skyworks.png", // Replace with actual logo path
        website: "https://www.skyworksinc.com",
      },
      {
        name: "Rhode and Schwarz",
        logo: "/sponsors/rhode-schwarz.png", // Replace with actual logo path
        website: "https://www.rohde-schwarz.com",
      },
    ],
  },
  {
    name: "Silver Tier",
    level: "silver",
    sponsors: [
      {
        name: "Microchip",
        logo: "/sponsors/microchip.png", // Replace with actual logo path
        website: "https://www.microchip.com",
      },
      {
        name: "DigiKey",
        logo: "/sponsors/digikey.png", // Replace with actual logo path
        website: "https://www.digikey.com",
      },
    ],
  },
  {
    name: "Bronze Tier",
    level: "bronze",
    sponsors: [
      {
        name: "Medtronic",
        logo: "/sponsors/medtronic.png", // Replace with actual logo path
        website: "https://www.medtronic.com",
      },
      {
        name: "Northrop Grumman",
        logo: "/sponsors/northrop-grumman.png", // Replace with actual logo path
        website: "https://www.northropgrumman.com",
      },
    ],
  },
];

// Helper function to get tier styling
const getTierStyles = (level: "silicon" | "silver" | "bronze") => {
  switch (level) {
    case "silicon":
      return {
        badge: "bg-gradient-to-r from-gray-800 to-gray-600 text-white",
        border: "border-2 border-gray-700",
        bg: "bg-gradient-to-br from-gray-50 to-gray-100",
      };
    case "silver":
      return {
        badge: "bg-gradient-to-r from-gray-400 to-gray-300 text-gray-900",
        border: "border-2 border-gray-400",
        bg: "bg-gradient-to-br from-gray-50 to-gray-100",
      };
    case "bronze":
      return {
        badge: "bg-gradient-to-r from-amber-700 to-amber-600 text-white",
        border: "border-2 border-amber-600",
        bg: "bg-gradient-to-br from-gray-50 to-gray-100",
      };
  }
};

function SponsorCard({ sponsor, tierLevel }: { sponsor: Sponsor; tierLevel: "silicon" | "silver" | "bronze" }) {
  const tierStyles = getTierStyles(tierLevel);
  
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`${tierStyles.bg} ${tierStyles.border} rounded-xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]`}
    >
      <div className="relative w-full h-32 mb-4 flex items-center justify-center">
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          width={300}
          height={120}
          className="max-w-full max-h-full object-contain filter drop-shadow-md"
          onError={(e) => {
            // Fallback if image doesn't exist
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            if (target.parentElement) {
              const fallback = document.createElement("div");
              fallback.className = "text-gray-400 text-xl font-semibold";
              fallback.textContent = sponsor.name;
              target.parentElement.appendChild(fallback);
            }
          }}
        />
      </div>
      <h3 className="font-heading text-xl font-bold text-ieee-slate text-center">
        {sponsor.name}
      </h3>
    </motion.div>
  );

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default function SponsorsPage() {
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
            Our Sponsors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          >
            We are grateful to our sponsors for their generous support. Their contributions help us provide valuable experiences and opportunities to our members.
          </motion.p>
          <div className="w-24 h-1 bg-ieee-accent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* Sponsors Tiers Section */}
      <section className="py-16 bg-ieee-gray">
        <div className="container">
          {sponsorTiers.map((tier, tierIndex) => {
            const tierStyles = getTierStyles(tier.level);
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: tierIndex * 0.1 }}
                className="mb-16 last:mb-0"
              >
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <span className={`inline-block ${tierStyles.badge} px-6 py-2 rounded-full font-heading font-bold text-lg mb-4 shadow-lg`}>
                    {tier.name}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate">
                    {tier.name} Sponsors
                  </h2>
                </div>

                {/* Sponsors Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {tier.sponsors.map((sponsor) => (
                    <SponsorCard
                      key={sponsor.name}
                      sponsor={sponsor}
                      tierLevel={tier.level}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
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
              Interested in Becoming a Sponsor?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Support IEEE at UCI and help us provide valuable experiences to engineering students. 
              Get in touch with us to learn more about sponsorship opportunities!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/get-involved/"
                className="bg-ieee-blue hover:bg-ieee-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Get Involved
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

