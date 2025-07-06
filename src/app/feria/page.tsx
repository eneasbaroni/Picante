"use client";
import dataBase from "@/db/database";
import Grill from "../(index)/_components/grill/Grill";
import Image from "next/image";
import Link from "next/link";

const Feria = () => {
    return (
        <main className="px-40 tablet:px-20 pb-20 mobile:px-10 flex flex-col items-center mt-[6vw]">
            <Grill />
            <h2 className="mobile:mt-12">
                FERIA{" "}
                <span
                    className="font-anton text-6xl tablet:text-4xl mobile:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    style={{
                        WebkitTextStroke: "1px black",
                        WebkitTextFillColor: "white",
                    }}
                >
                    PICANTE
                </span>
            </h2>
            <div className="w-full flex flex-row gap-2 flex-wrap items-center mt-8">
                {dataBase.feria.map((obra, i) => (
                    <div
                        className="w-[calc(100%/2-0.3rem)] mobile:w-full"
                        key={i}
                    >
                        <Image
                            src={`/Images/feria/${obra.src}`}
                            objectFit="cover"
                            height={800}
                            width={600}
                            alt={obra.src}
                            className="w-full h-auto object-cover border-[1px] border-black cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

            <div className="w-full m-auto mt-10 text-center">
                <p className="font-anton text-6xl tablet:text-4xl mobile:text-2xl leading-tight">
                    <span
                        className="font-anton text-6xl tablet:text-4xl mobile:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        style={{
                            WebkitTextStroke: "1px black",
                            WebkitTextFillColor: "white",
                        }}
                    >
                        QUERES PARTICIPAR DE LA FERIA?
                    </span>
                    <br />
                    COMPLETÁ EL FORMULARIO DE PARTICIPACION PARA QUE NOS PODAMOS
                    PONER EN CONTACTO CON VOS
                </p>
            </div>

            <Link
                href="/presupuesto"
                className="w-1/4 mobile:w-1/2 h-12 m-auto border border-black p-4 mt-10 text-center relative group"
            >
                <p className="absolute w-full font-anton top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    IR A FOMULARIO
                </p>
                <div className="absolute left-0 bottom-0 w-full h-[0%] bg-pinky group-hover:h-full group-hover:top-0 transition-all duration-300 z-0"></div>
            </Link>
            <Link
                href="/"
                className="w-1/4 mobile:w-1/2 h-12 m-auto border border-black p-4 mt-4 text-center relative group"
            >
                <p className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-anton">
                    BACK TO HOME
                </p>
                <div className="absolute left-0 bottom-0  w-full h-[0%] bg-pinky group-hover:h-full group-hover:top-0 transition-all duration-300 z-0"></div>
            </Link>
        </main>
    );
};
export default Feria;
