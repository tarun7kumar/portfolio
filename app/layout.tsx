import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lexend, Cormorant, Space_Grotesk, Montserrat, Poppins, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import "devicon/devicon.min.css";

import CursorGlow from "@/components/CursorGlow";
// import HeroBackground from "@/components/HeroBackground"; // Removing old background
import LiquidEther from "@/components/LiquidEther";
import { PointerProvider } from "@/components/ui/ios-pointer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["900"], // Black
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarun Kumar | Portfolio",
  description: "Electronics, Web Dev & ML Portfolio of Tarun Kumar",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${lexend.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${montserrat.variable} ${poppins.variable} ${inter.variable} ${dmSans.variable} antialiased text-white`}
      >
        <PointerProvider>
          {/* Replaced existing background elements with LiquidEther */}
          <LiquidEther
            className="fixed inset-0 -z-10"
            colors={['#E84A33', '#ff6a3d', '#ff3d2e']} // Updated colors
            mouseForce={20}
            cursorSize={100}
            isViscous={true}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10 }}
          />
          <CursorGlow />

          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </PointerProvider>
      </body>
    </html>
  );
}
