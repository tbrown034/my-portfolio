import "./globals.css";
import Footer from "./Components/UI/footer";
import Header from "./Components/UI/header";
import { DarkModeProvider } from "./utilities/DarkModeContext.jsx";
import {
  Inter,
  Roboto_Mono,
  Shadows_Into_Light,
  Major_Mono_Display,
  Patrick_Hand,
  Playfair_Display,
  Lato,
  Montserrat,
  Open_Sans,
  Poppins,
  Nunito,
  Raleway,
  Roboto,
  Fira_Code,
  Bree_Serif,
  Alegreya_Sans,
  Josefin_Sans,
  Josefin_Slab,
  Roboto_Slab,
  Nunito_Sans,
} from "next/font/google";

const bree_serif = Bree_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bree-serif",
});

const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-alegreya-sans",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-josefin-sans",
});

const josefin_slab = Josefin_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-josefin-slab",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-roboto-slab",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-nunito-sans",
});

const hand = Patrick_Hand({
  subsets: ["latin"],
  display: "swap",
  weight: "400",

  variable: "--font-patrick-hand",
});

const bree = Bree_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",

  variable: "--font-patrick-hand",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const shadows_into_light = Shadows_Into_Light({
  subsets: ["latin"],
  display: "swap",
  weight: "400",

  variable: "--font-shadows-into-light",
});

const major_mono_display = Major_Mono_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-major-mono-display",
  weight: "400",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-playfair-display",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-montserrat",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-open-sans",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",

  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",

  variable: "--font-roboto",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Trevor Brown: Copy + Code",
  description: "Generated by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html
        className={`  scroll-smooth

      ${inter.variable} ${roboto_mono.variable} ${hand.variable} ${shadows_into_light.variable}
       ${major_mono_display.variable} ${playfair_display.variable}
      ${lato.variable} ${montserrat.variable} ${open_sans.variable} ${poppins.variable}
      ${nunito.variable} ${raleway.variable} ${roboto.variable} ${firaCode.variable} ${bree_serif.variable}
      ${alegreya_sans.variable} ${josefin_sans.variable} ${josefin_slab.variable} ${roboto_slab.variable} ${nunito_sans.variable}
    `}
        lang="en"
      >
        <body>
          <div className="text-blue-950 bg-blue-50 dark:bg-blue-900 dark:text-blue-100 scroll-smooth ">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </DarkModeProvider>
  );
}
