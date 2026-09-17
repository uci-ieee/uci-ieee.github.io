"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const REDIRECT_DELAY_MS = 2500;

type ExternalRedirectProps = {
  title: string;
  description: string;
  destination: string;
};

export default function ExternalRedirect({
  title,
  description,
  destination,
}: ExternalRedirectProps) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const cancelledRef = useRef(false);

  const cancelRedirect = () => {
    cancelledRef.current = true;
  };

  const goHome = () => {
    cancelRedirect();
    router.push("/");
  };

  useEffect(() => {
    const start = Date.now();
    let frameId = 0;
    const redirectTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      if (!cancelledRef.current) {
        window.location.replace(destination);
      }
    }, REDIRECT_DELAY_MS);

    const tick = () => {
      if (cancelledRef.current) return;

      const elapsed = Date.now() - start;
      const nextProgress = Math.min((elapsed / REDIRECT_DELAY_MS) * 100, 100);
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(redirectTimeout);
    };
  }, [destination]);

  const handleContinue = () => {
    if (!cancelledRef.current) {
      window.location.replace(destination);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-ieee-light"
          >
            <ExternalLink className="h-8 w-8 text-ieee-blue" />
          </motion.div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-ieee-slate mb-3">
            {title}
          </h1>
          <p className="text-ieee-slate/80 mb-8 leading-relaxed">{description}</p>

          <div className="mb-6">
            <div className="h-2 w-full overflow-hidden rounded-full bg-ieee-gray">
              <div
                className="h-full rounded-full bg-ieee-blue transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-ieee-slate/70">
              Redirecting in a moment...
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex items-center gap-2 rounded-lg bg-ieee-blue px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-ieee-dark"
            >
              Continue now
              <ExternalLink className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goHome}
              className="inline-flex items-center gap-2 rounded-lg border border-ieee-gray px-6 py-3 font-heading font-semibold text-ieee-slate transition-colors hover:bg-ieee-light hover:text-ieee-blue"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
