"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const containerMotion = {
    init: {
        padding: "0rem",
    },
    hover: {
        padding: "0.5rem",
    },
};

const divMotion = {
    init: {
        backgroundColor: "white",
        borderRadius: "0px",
    },
    hover: {
        backgroundColor: "black",
        borderRadius: "10px 10px 0px 0px",
        color: "white",
    },
};

const linkMotion = {
    init: {
        y: "3rem",
    },
    hover: {
        y: "0rem",
    },
};

const textMotion = {
    init: {
        color: "black",
    },
    hover: {
        color: "white",
    },
};

const WorkItem = ({
    img,
    title,
    tint,
    surface,
    description,
    link,
}: {
    img: string;
    title: string;
    tint: string;
    surface: string;
    description: string;
    link: string;
}) => {
    return (
        <motion.div
            className="w-full flex flex-row items-stretch border-[1px] border-black"
            initial={{ y: "5rem" }}
            whileInView={{ y: "0px" }}
            viewport={{ once: true }}
        >
            <div className="w-2/3 p-4 aspect-[3/2]">
                <Image
                    src={img}
                    alt="Work 1"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                />
            </div>

            <motion.div
                className="flex flex-col w-1/3 justify-between border-l-[1px] border-black"
                initial="init"
                whileHover="hover"
            >
                <motion.div
                    className="w-full h-full flex items-center justify-center"
                    variants={containerMotion}
                >
                    <motion.div
                        className="w-full h-full flex flex-col justify-between overflow-hidden"
                        variants={divMotion}
                    >
                        <motion.h3
                            className="text-2xl font-bold mb-2 p-4"
                            variants={textMotion}
                        >
                            {title}
                        </motion.h3>
                        <motion.div
                            className="flex flex-col justify-between"
                            variants={linkMotion}
                        >
                            <motion.p
                                className="text-lg text-balance py-2 px-4"
                                variants={textMotion}
                            >
                                Tinta: {tint}
                            </motion.p>
                            <motion.p
                                className="text-lg text-balance py-2 px-4"
                                variants={textMotion}
                            >
                                Superficie: {surface}
                            </motion.p>
                            <motion.a
                                className="text-lg text-center w-full h-12 font-anton p-4 border-t border-t-white relative  group"
                                href={link}
                                variants={textMotion}
                            >
                                <p className="z-40 text-white top-2 absolute left-1/2 transform -translate-x-1/2">
                                    Ver Proyecto
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-[0%] group-hover:h-[100%] transition-all duration-300 ease-in-out z-0 bg-pinky"></div>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WorkItem;
