import "./globals.css";

import { M_PLUS_2 } from "next/font/google";

import { ViewTransitionProvider } from "../components/animated-link/view-transition-provider";
import { Footer } from "./footer";
import { Header } from "./header";
import { ThemeProvider } from "./theme-provider";

export { metadata, viewport } from "./metadata";

const font = M_PLUS_2({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitionProvider>
      <html
        lang="en"
        className="dark"
        // For next-theme
        suppressHydrationWarning
      >
        <body className={font.className}>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitionProvider>
  );
}
