import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#293b36", sage: "#627d70", cream: "#f6f3eb", clay: "#bf7257" } } },
  plugins: [],
};
export default config;
