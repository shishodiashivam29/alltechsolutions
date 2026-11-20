import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { 
title: "AllTechSolutions | All Tech Solutions",

description:
  "AllTechSolutions (All Tech Solutions) provides laptop and desktop repairs, motherboard-level repair, software and hardware troubleshooting, performance upgrades, and affordable refurbished computers with warranty.",

applicationName: "AllTechSolutions",

metadataBase: new URL("https://alltechsolutions.in"),

alternates: {
  canonical: "/",
},

robots: {
  index: true,
  follow: true,
},

};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
