"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface IWork {
    src: string;
    superficie: string;
    tecnica: string;
}

const WorkCard = ({ work, index }: { work: IWork; index: number }) => {
    const infoRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: infoRef,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0.5, 1], ["1", "1.3"]);
    const padding = useTransform(scrollYProgress, [0.5, 1], ["0rem", "0.7rem"]);

    return (
        <div ref={infoRef} className=" w-[calc(33.5%-0.5rem)]">
            <motion.div className="border border-black/25 p-4">
                <div className="overflow-hidden">
                    <motion.img
                        src={work.src}
                        alt="work"
                        className="w-full"
                        style={{ scale }}
                    />
                </div>
            </motion.div>
            <div className="workInfo">
                <h3 className="text-2xl tablet:text-lg mobile:text-xl">
                    {work.superficie}
                </h3>
                <p className="text-lg tablet:text-base mobile:text-sm">
                    {work.tecnica}
                </p>
            </div>
        </div>
    );
};
export default WorkCard;
