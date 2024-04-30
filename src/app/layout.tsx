import type { Metadata } from "next";
import { Titillium_Web, Anton } from "next/font/google";
import "./globals.css";
import './(index)/Home.css'
import './(index)/_components/Galerias/Galerias.css'
import './galeria/Galeria.css'
import './presupuesto/Presupuesto.css'
import './nosotros/Nosotros.css'
import './curso/Curso.css'
import './profile/Profile.css'
import './_components/Header/Header.css';
import './_components/Navbar/Navbar.css'
import './_components/Footer/Footer.css'
import './_components/Loader/Loader.css'
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import {Providers} from "./Providers";

export const titilium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titilium",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Picante Serigrafía",
  description: "Picante es un emprendimiento de serigrafía de Córdoba que ademas tambien funciona como marca de indumentaria con diseños personalizados, únicos, singulares y puros. Nos caracterizamos por la calidad y la creatividad",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${titilium.variable}`}>
        <Providers>
          <Header/>
            {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
