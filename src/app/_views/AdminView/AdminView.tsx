"use client";
import React, { useState } from "react";
import { UsersView, BudgetsView } from "./_components";

type Tab = "usuarios" | "presupuestos";

export const AdminView = () => {
    const [tab, setTab] = useState<Tab>("usuarios");

    return (
        <div className="my-[6vw] flex flex-col items-center px-40 tablet:px-20 mobile:px-10">
            <h2 className="mb-6">PANEL ADMINISTRADOR</h2>

            <div className="w-full flex border-b border-black mb-6">
                <button
                    onClick={() => setTab("usuarios")}
                    className={`px-4 py-2 text-sm font-semibold transition ${
                        tab === "usuarios"
                            ? "border-b-2 border-black -mb-[1px]"
                            : "text-gray-500 hover:text-black"
                    }`}
                >
                    Usuarios
                </button>
                <button
                    onClick={() => setTab("presupuestos")}
                    className={`px-4 py-2 text-sm font-semibold transition ${
                        tab === "presupuestos"
                            ? "border-b-2 border-black -mb-[1px]"
                            : "text-gray-500 hover:text-black"
                    }`}
                >
                    Presupuestos
                </button>
            </div>

            {tab === "usuarios" ? <UsersView /> : <BudgetsView />}
        </div>
    );
};
