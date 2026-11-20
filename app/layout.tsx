import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'AllTechSolutions | Laptop & Desktop Repairs, Refurbished Computers',
  description: 'Expert laptop and desktop repairs, software troubleshooting, motherboard-level diagnostics, PC upgrades, old computer buying and affordable refurbished computers with warranty. Contact AllTechSolutions.',
  keywords: ['AllTechSolutions','laptop repair','desktop repair','motherboard repair','refurbished laptops','sell old laptop','computer troubleshooting'],
  openGraph: { title: 'AllTechSolutions — Tech problems? Solved.', description: 'Repair. Upgrade. Sell. Buy refurbished. Your complete computer solution.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
