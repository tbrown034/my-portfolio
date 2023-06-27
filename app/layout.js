import "./globals.css";
import Footer from "./Components/UI/footer";
import Header from "./Components/UI/header";
import { DarkModeProvider } from "./Components/utilities/DarkModeContext";

export const metadata = {
  title: "Trevor Brown: Copy + Code",
  description: "Generated by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html lang="en">
        <body>
          <div className="text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </DarkModeProvider>
  );
}
