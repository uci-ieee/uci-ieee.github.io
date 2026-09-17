"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Mail, Camera } from "lucide-react";
import Image from "next/image"; // Added Image import

type Officer = {
  name: string;
  role: string;
  email?: string;
  discord?: string;
  image: string; // Added image property
};

type BoardSection = {
  title: string;
  officers: Officer[];
};

const PLACEHOLDER_IMAGE = "/logo/logoAntEater.PNG";

const boardSections: BoardSection[] = [
  {
    title: "Executive Board Members",
    officers: [
      { name: "Sahil Dhaktode", role: "President", email: "dhaktods@uci.edu", discord: "cat.attac", image: "/officerpics/Sahil.jpg" },
      { name: "Enoch Jin", role: "Vice President", email: "enochkj@uci.edu", discord: "ag719boi", image: "/officerpics/Enoch.jpg" },
      { name: "Carolynn Nguyen", role: "Secretary", email: "carolypn@uci.edu", discord: "Nunipetunia", image: "/officerpics/Carolynn.jpg" },
      { name: "Vy Huynh", role: "Treasurer", email: "vynh2@uci.edu", discord: "victory4964", image: "/officerpics/Vy.JPG" },
      { name: "Vincent Vo", role: "Internal Chair", email: "vtvo3@uci.edu", discord: "notdynosalt2223", image: "/officerpics/Vincent.jpg" },
      { name: "Chloe Nguyen", role: "External Chair", email: "huyenchn@uci.edu", discord: "itz.chloyo", image: "/officerpics/Chloe.jpg" },
    ]
  },
  {
    title: "Board Members",
    officers: [
      { name: "Braden Fahey", role: "Outreach Coordinator", email: "bjfahey@uci.edu", discord: "baydn", image: PLACEHOLDER_IMAGE },
      { name: "Medha Nalakonda", role: "Outreach Coordinator", email: "mnalakon@uci.edu", discord: "shoe9010", image: PLACEHOLDER_IMAGE },
      { name: "Lainey Tran", role: "Outreach Coordinator", email: "laineyt@uci.edu", discord: "laineytran", image: "/officerpics/Lainey.jpg" },
      { name: "Amogh Thiagarajan", role: "Outreach Coordinator", email: "thiagaa1@uci.edu", discord: "amogh0396", image: PLACEHOLDER_IMAGE },
      { name: "Arianna Sotudeh", role: "Outreach Coordinator", email: "asotudeh@uci.edu", discord: "elecengnr", image: PLACEHOLDER_IMAGE },
      { name: "German Cervantes", role: "Lab Manager", email: "germac1@uci.edu", discord: "German9949", image: "/officerpics/German.jpg" },
      { name: "Eaton Huang", role: "Lab Manager", email: "eatonsh@uci.edu", discord: "eatatonh (h4d3s)", image: "/officerpics/Eaton.jpg" },
      { name: "Reza Bagheri", role: "Lab Manager", email: "rbagher1@uci.edu", discord: "rezq__", image: "/officerpics/Reza.jpg" },
      { name: "Neet Patel", role: "Webmaster", email: "neetp1@uci.edu", discord: "chhes", image: PLACEHOLDER_IMAGE },
      { name: "Angelina Castro", role: "Media Coordinator", email: "amcastr4@uci.edu", discord: "idkangel_", image: "/officerpics/Angelina.jpg" },
      { name: "Phoebe Chang", role: "Media Coordinator", image: PLACEHOLDER_IMAGE },
      { name: "Natalie Hoang", role: "Media Coordinator", email: "nlhoang1@uci.edu", discord: "astro.nat", image: "/officerpics/Natalie.jpg" },
      { name: "Stephanie Slade", role: "Media Coord Intern", email: "sslade@uci.edu", discord: "stephsl", image: PLACEHOLDER_IMAGE },
      { name: "Zicong Yu", role: "Event Coordinator", email: "zicongy1@uci.edu", discord: "kintamashii", image: "/officerpics/Zicong.jpg" },
      { name: "Dominic Hubschmitt", role: "Event Coordinator", email: "dhubschm@uci.edu", discord: "dalekdom", image: PLACEHOLDER_IMAGE },
      { name: "Francisco Palomera", role: "Event Coordinator", email: "fpalomer@uci.edu", discord: "oop_8273", image: PLACEHOLDER_IMAGE },
      { name: "Milk Sun", role: "iFamilEEE Lead", email: "willis7@uci.edu", discord: "ChoconillaShake", image: "/officerpics/Milk.jpg" },
      { name: "Gina LeRow", role: "iFamilEEE Lead", email: "glerow@uci.edu", discord: "mistyy0_0", image: "/officerpics/Gina.jpg" },
    ]
  },
  {
    title: "Projects Board Members",
    officers: [
      { name: "Jonathan Lin", role: "Project Coordinator", email: "jonatl41@uci.edu", discord: "shefujonny", image: "/officerpics/Jonny.jpg" },
      { name: "Dylan Vo", role: "Project Coordinator", email: "dylantv1@uci.edu", discord: "vo6112", image: PLACEHOLDER_IMAGE },
      { name: "Varaprasad Nibhanupudi", role: "Project Coordinator", email: "vnibhanu@uci.edu", discord: "chalkbored", image: PLACEHOLDER_IMAGE },
    ]
  },
  {
    title: "Micromouse Board Members",
    officers: [
      { name: "Thea Tan", role: "Micromouse Lead", email: "xirant1@uci.edu", discord: "theatan77", image: PLACEHOLDER_IMAGE },
      { name: "Maahi Vidyarthi", role: "Micromouse Lead", email: "mvidyart@uci.edu", discord: "maahi6413", image: PLACEHOLDER_IMAGE },
      { name: "Elizabeth Yang", role: "Micromouse Staff", email: "elizaby3@uci.edu", discord: "cloud.wandering", image: PLACEHOLDER_IMAGE },
      { name: "Justin Chen", role: "Micromouse Staff", email: "chenjc5@uci.edu", discord: "_fake.item.box", image: PLACEHOLDER_IMAGE },
      { name: "Mason Luu", role: "Micromouse Staff", email: "masonkl@uci.edu", discord: "Perfectalpaca.", image: PLACEHOLDER_IMAGE },
      { name: "Jeffrey Frederick", role: "Micromouse Staff", email: "jkfreder@uci.edu", discord: "jfrederick2005", image: PLACEHOLDER_IMAGE },
    ]
  },
  {
    title: "OPS Board Members",
    officers: [
      { name: "Marvin Nguyen", role: "OPS Lead", email: "marvintn@uci.edu", discord: "marvidanoodle", image: "/officerpics/Marvin.jpg" },
      { name: "Abishek Vinujudson", role: "OPS Lead", email: "asvinuju@uci.edu", discord: "sovereign001", image: "/officerpics/Abishek.jpg" },
      { name: "Anika Saha", role: "OPS Lab Supervisor", email: "asaha6@uci.edu", discord: "artellite", image: "/officerpics/Anika.jpg" },
      { name: "Radin Jafari", role: "OPS Lab Instructor", email: "rjafari1@uci.edu", discord: "radin71536", image: PLACEHOLDER_IMAGE },
      { name: "Doan (Jackson) Nguyen", role: "OPS Lab Instructor", email: "jacksn2@uci.edu", discord: "jkvpm", image: PLACEHOLDER_IMAGE },
      { name: "Harsha Ganta", role: "OPS Lab Instructor", email: "hganta@uci.edu", discord: "uchiramen", image: PLACEHOLDER_IMAGE },
      { name: "Ashley Pock", role: "OPS Lab Instructor", email: "apock@uci.edu", discord: "bored_4_life", image: PLACEHOLDER_IMAGE },
      { name: "Steven Kuzhipala", role: "OPS Lab Instructor", email: "skuzhipa@uci.edu", discord: "steven08163", image: PLACEHOLDER_IMAGE },
      { name: "Shashank Sanigepalli", role: "OPS Lab Instructor", email: "sanigeps@uci.edu", discord: "indiangiraffe", image: PLACEHOLDER_IMAGE },
      { name: "Anderson Kwon", role: "OPS Lab Instructor", email: "andersyk@uci.edu", discord: "cd_kds", image: PLACEHOLDER_IMAGE },
      { name: "Hengjun Pei", role: "OPS Lab Instructor", image: PLACEHOLDER_IMAGE },
    ]
  }
];

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg border-[0.25px] border-ieee-gray p-3 transition-all duration-300"
    >
      <div className="text-center">
        <div className="w-full aspect-square rounded-lg mb-3 overflow-hidden relative bg-ieee-gray">
          <Image
            src={officer.image}
            alt={officer.name}
            width={192}
            height={192}
            className={`w-full h-full rounded-lg ${officer.image === PLACEHOLDER_IMAGE ? "object-contain p-4" : "object-cover"}`}
          />
        </div>
        <h3 className="font-heading text-xl font-bold text-ieee-slate mb-2">{officer.name}</h3>
        <p className="text-ieee-blue font-semibold mb-4">{officer.role}</p>

        {(officer.email || officer.discord) && (
          <div className="space-y-3">
            {officer.email && (
              <a
                href={`mailto:${officer.email}`}
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-ieee-blue transition-colors"
              >
                <Mail size={16} className="text-ieee-blue" />
                <span className="text-sm">{officer.email}</span>
              </a>
            )}
            {officer.discord && (
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <div className="w-4 h-4 bg-[#5865F2] rounded-sm flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0027-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </div>
                <span className="text-sm">{officer.discord}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function OfficersPage() {
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
            className="font-heading text-5xl md:text-6xl font-bold mb-4"
          >
            Meet the Officers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-6"
          >
            IEEE at UCI&apos;s officers for the 2026-2027 school year!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-ieee-light"
          >
            <Camera size={20} />
            <span className="text-sm">Photographed by Eric Hsiao</span>
          </motion.div>
          <div className="w-24 h-1 bg-ieee-accent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* Officers Grid */}
      <section className="py-16 bg-ieee-gray">
        <div className="container">
          {boardSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="font-heading text-3xl font-bold text-ieee-slate text-center mb-12">
                {section.title}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {section.officers.map((officer) => (
                  <OfficerCard key={officer.name} officer={officer} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
