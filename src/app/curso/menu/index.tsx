import { motion } from "framer-motion";
import { navContainer, navLinks } from "@/lib/anims";
import Link from "next/link";

const links = [
    { href: "#herramientas", label: "HERRAMIENTAS" },
    { href: "#action", label: "PASAR A LA ACCION" },
    { href: "#hans", label: "MANOS A LA OBRA" },
    { href: "#crear", label: "MOMENTO CREAR" },
    { href: "#iluminar", label: "MOMENTO ILUMINAR" },
    { href: "#magico", label: "MOMENTO MÁGICO" },
    { href: "#tinta", label: "MOMENTO TINTA" },
    { href: "#recuperar", label: "RECUPERAR/LAVAR" },
];

const Menu = () => {
    return (
        <div id="indice" className="w-full pb-10">
            <h3>INDICE</h3>
            <div className="flex flex-col items-center gap-3">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className="w-1/2 tablet:w-full"
                    >
                        <motion.div
                            className="relative w-full h-full flex justify-center items-center"
                            variants={navContainer}
                            initial="init"
                            whileHover="animate"
                        >
                            <button className="text-white hover:text-white text-5xl mobile:text-3xl border border-white/60 w-full py-2 z-20">
                                <a
                                    className="text-white hover:text-white text-5xl mobile:text-3xl"
                                    href={href}
                                >
                                    {label}
                                </a>
                            </button>

                            {/* standard for hover */}
                            <div className="absolute top-0 left-0 w-full h-full flex z-10  bg-main"></div>

                            {/* background for hover */}
                            <motion.div
                                className="absolute bottom-0 left-0 w-full h-0 flex z-10  bg-pinky"
                                variants={navLinks}
                            ></motion.div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Menu;
