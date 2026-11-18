import { readdirSync } from "node:fs";
import { join } from "node:path";
import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

function eventPosterPaths() {
  const posters = new Map<string, string>();

  function scan(directory: string, url: string) {
    const entries = readdirSync(directory, { withFileTypes: true });
    entries.sort((a, b) => a.name.localeCompare(b.name, "en"));

    for (const entry of entries) {
      if (entry.isFile() && !posters.has(entry.name)) {
        posters.set(entry.name, `${url}/${encodeURIComponent(entry.name)}`);
      }
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        scan(join(directory, entry.name), `${url}/${encodeURIComponent(entry.name)}`);
      }
    }
  }

  scan(join(process.cwd(), "public", "Events"), "/Events");
  return Object.fromEntries(posters);
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    EVENT_POSTER_PATHS: JSON.stringify(eventPosterPaths()),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "drive.google.com", pathname: "/uc" },
    ],
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
