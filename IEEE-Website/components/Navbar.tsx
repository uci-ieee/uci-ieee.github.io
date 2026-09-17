"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type NavSubItem = {
  name: string;
  href: string;
  external?: boolean;
};

type NavLink = {
  name: string;
  href: string;
  highlight?: boolean;
  dropdown?: boolean;
  submenu?: NavSubItem[];
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/", highlight: true },
  {
    name: "About Us",
    href: "/mission",
    dropdown: true,
    submenu: [
      { name: "Our Mission", href: "/mission" },
      { name: "Officers", href: "/officers" },
      { name: "Lab", href: "/lab" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    dropdown: true,
    submenu: [
      { name: "Open Project Space", href: "/ops" },
      { name: "Micromouse", href: "/Micromouse" },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Get Involved!", href: "/get-involved" },
  { name: "Our Sponsors", href: "/sponsors" },
];

const navVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-ieee-gray shadow-sm">
      <div className="container flex items-center justify-between py-3 px-2 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <Link href="/">
            <Image
              src="/logo/logoName.png"
              alt="IEEE Logo"
              width={140}
              height={140}
              className="inline-block"
              priority
            />
          </Link>
        </motion.div>
        {/* Desktop Nav */}
        <motion.ul
          className="hidden md:flex gap-10 items-center"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`${link.highlight ? "text-ieee-blue font-semibold" : "text-ieee-slate font-semibold"} hover:bg-ieee-light hover:text-ieee-blue focus:bg-ieee-light focus:text-ieee-blue transition-colors px-3 py-2 rounded-md font-heading text-base inline-flex items-center gap-0.5`}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    className={`w-4 h-4 opacity-70 transition-transform ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2 w-56 z-50"
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-ieee-gray py-2">
                      {link.submenu?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-ieee-slate font-semibold hover:bg-ieee-light hover:text-ieee-blue transition-colors"
                          {...(subItem.external && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-ieee-light focus:bg-ieee-light transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-ieee-blue">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-white border-b border-ieee-gray shadow-sm"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants} initial="hidden" animate="visible" exit="hidden">
                <Link
                  href={link.href}
                  className={`block w-full ${link.highlight ? "text-ieee-blue font-semibold" : "text-ieee-slate font-semibold"} hover:bg-ieee-light hover:text-ieee-blue focus:bg-ieee-light focus:text-ieee-blue transition-colors px-3 py-2 rounded-md font-heading text-base inline-flex items-center gap-1`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 opacity-70 shrink-0" />}
                </Link>
                {link.dropdown && link.submenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block w-full text-ieee-slate font-semibold hover:bg-ieee-light hover:text-ieee-blue transition-colors px-3 py-2 rounded-md font-heading text-sm"
                        onClick={() => setMenuOpen(false)}
                        {...(subItem.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
