import type { NextConfig } from "next";

// Attempt to remove the broken localStorage proxy from the environment
try {
  if (typeof globalThis.localStorage !== "undefined") {
    // @ts-ignore
    delete globalThis.localStorage;
    console.log("Successfully deleted broken localStorage from global scope");
  }
} catch (e) {
  console.warn("Failed to delete localStorage:", e);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
