import "./globals.css";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import { DarkModeProvider } from "@/components/providers/DarkModeContext";
import { Roboto_Slab, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-slab",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://trevorthewebdeveloper.com"),
  title: "Trevor Brown: Copy + Code",
  description:
    "Investigative journalist turned developer. Building thoughtful digital experiences with editorial precision and technical expertise.",
  openGraph: {
    title: "Trevor Brown: Copy + Code",
    description:
      "Investigative journalist turned developer. Building thoughtful digital experiences with editorial precision and technical expertise.",
    url: "https://trevorthewebdeveloper.com",
    siteName: "Trevor Brown Portfolio",
    images: [
      {
        url: "/images/Aug17desktopview.png",
        width: 1200,
        height: 630,
        alt: "Trevor Brown Portfolio - Copy + Code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trevor Brown: Copy + Code",
    description:
      "Investigative journalist turned developer. Building thoughtful digital experiences with editorial precision and technical expertise.",
    images: ["/images/Aug17desktopview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
        <html
          className={`scroll-smooth ${roboto_slab.variable} ${montserrat.variable}`}
          lang="en"
        >
          <body>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-800 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
            >
              Skip to main content
            </a>
            <div className="text-blue-950 dark:bg-black dark:text-neutral-200">
              <Header />
              {children}
              <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
          </body>
        </html>
      </DarkModeProvider>
  );
}
