import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/data/company";
import "./globals.css";
const montserrat = localFont({
  src: [
    { path: "../public/fonts/montserrat-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/montserrat-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/montserrat-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/montserrat-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: `Vietnamese Coffee for Global Markets | ${company.name}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Explore Vietnamese green coffee beans, roasted coffee and ground coffee for international roasters, importers and distributors. Request a tailored quotation.",
  icons: { icon: company.logo, apple: company.logo },
  ...(company.siteUrl ? { metadataBase: new URL(company.siteUrl) } : {}),
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Browser-injected root attributes (e.g. mdl-js) are outside app control.
    // Keep this exception on <html>; descendants still get hydration checks.
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={montserrat.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
