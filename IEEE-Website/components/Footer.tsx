"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-ieee-blue text-white py-6"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logoName.png"
            alt="IEEE Logo"
            width={80}
            height={80}
            className="inline-block"
            priority
          />
          <span className="font-heading text-lg font-bold tracking-tight select-none">
            IEEE at UC Irvine
          </span>
        </div>
        <div className="font-sans text-sm opacity-80 text-center md:text-right text-gray-200">
          &copy; {new Date().getFullYear()} Institute of Electrical and Electronics Engineers at UC Irvine. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
} 