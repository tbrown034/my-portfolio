import "./globals.css";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import { DarkModeProvider } from "@/components/providers/DarkModeContext";
import { Roboto_Slab, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
          <div className="text-blue-950 dark:bg-blue-950 dark:text-slate-100">
            <Header />
            {children}
            <Footer />
          </div>
          <Analytics />
        </body>
      </html>
    </DarkModeProvider>
  );
}
