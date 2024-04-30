import type { Metadata } from "next";
import { League_Spartan, Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "./components/common/footer";
import LayoutProvider from "./provider";
import GlobalProvider from "@/context/GlobalProvider";

export const leagueSpartan = League_Spartan({ subsets: ["latin"] });
export const quicksand = Quicksand({ subsets: ["latin"] }) as any;

export const metadata: Metadata = {
  title: "Disruptor: Comparte Fotos, Videos y Textos",
  description:
    "Comparte tus momentos favoritos en Disruptor. Sube fotos, videos y textos y únete a nuestra comunidad.",
  keywords:
    "compartir fotos, compartir videos, plataforma social, comunidad en línea",
  authors: [
    {
      url: "https://portafolio-nullises.vercel.app/",
      name: "Ulises Vargas De Sousa",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={quicksand.className}>
        <main>
          <GlobalProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </GlobalProvider>
        </main>
        <div className="flex justify-center">
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
