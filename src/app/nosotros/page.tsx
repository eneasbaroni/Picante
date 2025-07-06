"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Grill from "../(index)/_components/grill/Grill";
import { useRef } from "react";

const Nosotros = () => {
    const infoRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: infoRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.2"]);
    return (
        <main className="px-40 tablet:px-20 pb-20 mobile:px-10 flex flex-col items-center mt-[6vw]">
            <Grill />
            <h2 className="mobile:mt-12">
                EQUIPO{" "}
                <span
                    className="font-anton text-6xl tablet:text-4xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    style={{
                        WebkitTextStroke: "1px black",
                        WebkitTextFillColor: "white",
                    }}
                >
                    PICANTE
                </span>
            </h2>
            <div className="flex flex-row tablet:flex-col items-center justify-center gap-4 mt-8">
                <div className="equipoInfo w-1/2 tablet:w-full" ref={infoRef}>
                    <h3 className="text-left text-4xl mb-4">MISIÓN</h3>
                    <p className="font-inter text-xl tablet:text-lg mobile:text-sm text-left text-balance w-full">
                        Empoderar la creatividad a través de la serigrafía. En
                        Picante Serigrafía, nuestra misión es ser el punto de
                        encuentro para artistas, emprendedores y entusiastas del
                        diseño, ofreciendo un espacio inspirador y formativo
                        donde la técnica y la creatividad se fusionan. Nos
                        dedicamos a transformar ideas en creaciones vibrantes y
                        originales, fomentando la innovación y la expresión
                        personal en cada proyecto.
                    </p>
                    <h3 className="text-left text-4xl my-4">VALORES</h3>
                    <p className="font-inter text-xl tablet:text-lg mobile:text-sm text-left text-balance w-full">
                        Creatividad: Fomentamos la imaginación y la innovación.
                        <br />
                        Calidad: Buscamos resultados excepcionales en cada
                        detalle.
                        <br />
                        Capacitación: Empoderamos a través del aprendizaje
                        práctico.
                        <br />
                        Comunidad: Colaboramos y creamos juntos.
                        <br />
                        Pasión: Trabajamos con entusiasmo y autenticidad
                    </p>
                </div>
                <div className="w-1/2 tablet:w-full m-auto">
                    <div className="h-full w-full mobile:w-full aspect-[3/2] m-auto">
                        <div className="w-full h-full rounded-3xl overflow-hidden  border-main p-2 bg-greeny relative">
                            <div className="w-full h-full rounded-2xl overflow-hidden ">
                                <motion.div
                                    className="w-full h-full"
                                    style={{ scale }}
                                >
                                    <img
                                        src="/Images/Eve_02.jpg"
                                        alt="Home Banner"
                                        className="w-full h-full object-cover scale-125"
                                    ></img>
                                </motion.div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/Images/Noise/noise.jpg')] bg-cover bg-center mix-blend-screen opacity-20 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Nosotros;
