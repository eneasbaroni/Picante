"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AdminView } from "../_views";
import { motion } from "framer-motion";
import { navContainer, navLinks } from "@/lib/anims";
import Grill from "../(index)/_components/grill/Grill";

const Admin = () => {
    const [loadSession, setLoadSession] = useState(true);
    const { data: session, status } = useSession();

    useEffect(() => {
        setTimeout(() => {
            setLoadSession(false);
        }, 500);
    }, [session]);
    return (
        <div>
            <Grill />
            {loadSession ? (
                <div>
                    <div className="titlesContainer">
                        <h2>CARGANDO....</h2>
                    </div>
                </div>
            ) : status === "authenticated" &&
              session &&
              session.user != null &&
              session.user != undefined &&
              session.user.role &&
              session.user!.role === "admin" ? (
                <AdminView />
            ) : status === "authenticated" && session ? (
                <div className="flex flex-col text-center my-[6vw]">
                    <div className="flex flex-col items-center gap-4">
                        <h2>ACCESO DENEGADO</h2>
                        <h3>No tienes permisos para acceder a esta página</h3>
                        <Link href="/">
                            <motion.div
                                className="relative w-full h-full border border-main flex items-center justify-center px-4"
                                variants={navContainer}
                                initial="init"
                                whileHover="animate"
                            >
                                <p className="font-anton z-20">
                                    VOLVER A INICIO
                                </p>
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0 flex z-10  bg-pinky"
                                    variants={navLinks}
                                ></motion.div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col text-center my-[6vw]">
                    <div className="flex flex-col items-center gap-4">
                        <h2>ACCESO DENEGADO</h2>
                        <h3>Inicia sesión para acceder a esta página</h3>
                        <Link href="/profile">
                            <motion.div
                                className="relative w-full h-full border border-main flex items-center justify-center px-4"
                                variants={navContainer}
                                initial="init"
                                whileHover="animate"
                            >
                                <p className="font-anton z-20">
                                    INICIAR SESIÓN
                                </p>
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0 flex z-10  bg-pinky"
                                    variants={navLinks}
                                ></motion.div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
