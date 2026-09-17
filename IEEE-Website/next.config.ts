import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default function config(phase: string): NextConfig {
  const origin = process.env.IEEE_PROGRAM_ORIGIN;
  if (phase === PHASE_DEVELOPMENT_SERVER && origin) {
    return {
      ...nextConfig,
      output: undefined,
      async rewrites() {
        return {
          afterFiles: [
            { source: "/micromouse/:path*", destination: `${origin}/micromouse/:path*` },
            { source: "/ops-program/:path*", destination: `${origin}/ops-program/:path*` },
          ],
        };
      },
    };
  }
  return nextConfig;
}
