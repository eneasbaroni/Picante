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

const titilium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titilium",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Picante Serigrafía. Taller de serigrafía en Córdoba",
  description: "Descubre la magia de la serigrafía en Picante, un taller creativo en Córdoba. Ofrecemos servicios de producción, estampado y cursos para todos los niveles. Aprende a crear tus propios diseños y estamparlos en camisetas, bolsos, posters y más. ¡Visítanos y da vida a tus ideas!",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["serigrafía, taller de serigrafía, serigrafia cordoba, Córdoba, taller creativo, estampado, personalizado, cursos de serigrafía, diseño de serigrafía, impresión en serigrafía, camisetas estampadas, bolsos estampados, posters personalizados, producción de serigrafía, eventos con serigrafía, regalos personalizados, arte, decoración con serigrafía, arte urbano, expresión artística, creatividad, Córdoba Argentina"],
  authors: [{ name: "Eneas Baroni", url: "https://www.eneasbaroni.com.ar/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
