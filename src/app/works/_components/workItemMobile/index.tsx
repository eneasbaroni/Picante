"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const WorkItemMobile = ({
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
            className="w-full flex flex-col border-[1px] border-black"
            initial={{ y: "5rem" }}
            whileInView={{ y: "0px" }}
            viewport={{ once: true }}
        >
            <div className="w-full p-2">
                <Image src={img} alt="Work 1" width={800} height={600} />
            </div>

            <div className="flex flex-col w-full justify-between border-t-[1px] border-black">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-black">
                        <h3 className="text-lg font-bold p-4 text-white">
                            {title}
                        </h3>
                        <div className="flex flex-col h-1/3 justify-between [&>*]:text-white ">
                            <p className="text-sm text-balance py-1 px-4">
                                Tinta: {tint}
                            </p>
                            <p className="text-sm text-balance py-1 px-4">
                                Superficie: {surface}
                            </p>
                            <a
                                className="text-sm text-center h-12 font-anton flex justify-center items-center border-t border-t-white bg-pinky"
                                href={link}
                            >
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default WorkItemMobile;
