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
        <main className=" px-40 tablet:px-20 mobile:px-10 flex flex-col items-center mt-[6vw]">
            <Grill />
            <h2>
                EQUIPO
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
            <div className="equipoInfo" ref={infoRef}>
                <h3 className="text-center text-4xl mb-4">
                    ARTE MAGIA Y COLABORACION
                </h3>
                <p className="font-inter text-xl tablet:text-lg mobile:text-sm text-center text-balance w-1/2 tablet:w-3/4 m-auto">
                    Hola, mi nombre es Eva, creadora de Picante ; desde el año
                    2016 donde comenzaron a surgir las primeras
                    estampas/impresiones soy la encargada de la gestión y
                    producción del proyecto.
                    <br />
                    Estudié algunas carreras que me llevaron a explorar sobre la
                    comunicación visual y sus formas de expresión; aprendí el
                    oficio de manera autodidacta, luego necesité perfeccionar la
                    técnica y realicé algunos cursos específicos sobre este
                    sistema de impresión.
                    <br />
                    En la actualidad contamos con colaboradores que trabajan en
                    los diferentes sectores y tareas del taller; gracias a su
                    ayuda logramos mejorar los niveles de producción y podemos
                    llegar más lejos.
                    <br />
                    Creemos que cada proyecto es único e irrepetible, por eso
                    deseamos brindarte la mejor experiencia ♥
                </p>
            </div>
            <div className="w-full m-auto">
                <div className="w-1/2 mobile:w-full aspect-[3/2] p-4 tablet:p-2 m-auto">
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
        </main>
    );
};

export default Nosotros;
