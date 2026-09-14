"use client";
import React, { useEffect, useState } from "react";
import { Presupuesto } from "../../types";
import { ESTADO_COLORS } from "../../constants";
import { PresupuestoRow } from "../PresupuestoRow";
import { PresupuestoCard } from "../PresupuestoCard";
import { BudgetDetailModal } from "../BudgetDetailModal";

const ESTADO_FILTERS: (Presupuesto["estado"] | "Todos")[] = [
    "Todos",
    "Recibido",
    "Enviado",
    "Cancelado",
    "Aceptado",
];

export const BudgetsView = () => {
    const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [estadoFilter, setEstadoFilter] = useState<
        Presupuesto["estado"] | "Todos"
    >("Todos");
    const [selected, setSelected] = useState<Presupuesto | null>(null);

    useEffect(() => {
        const fetchPresupuestos = async () => {
            try {
                const res = await fetch("/api/presupuestos");
                if (!res.ok) {
                    throw new Error("Error al cargar presupuestos");
                }
                const data = await res.json();
                setPresupuestos(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPresupuestos();
    }, []);

    const updatePresupuesto = (updated: Presupuesto) => {
        setPresupuestos((prev) =>
            prev.map((p) => (p._id === updated._id ? updated : p))
        );
        setSelected((prev) =>
            prev && prev._id === updated._id ? updated : prev
        );
    };

    const filteredPresupuestos = presupuestos.filter((p) => {
        const matchesSearch =
            p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            `${p.nombre} ${p.apellido}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        const matchesEstado =
            estadoFilter === "Todos" || p.estado === estadoFilter;
        return matchesSearch && matchesEstado;
    });

    if (loading) {
        return (
            <div className="flex flex-col items-center py-10">
                <h3>CARGANDO PRESUPUESTOS...</h3>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center py-10">
                <h3>ERROR</h3>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="mb-4 flex mobile:flex-col mobile:gap-4 items-center justify-between">
                <h3 className="text-xl">
                    Presupuestos recibidos ({filteredPresupuestos.length})
                </h3>
                <input
                    type="text"
                    placeholder="Buscar por nombre o email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black mobile:w-full"
                />
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
                {ESTADO_FILTERS.map((estado) => (
                    <button
                        key={estado}
                        onClick={() => setEstadoFilter(estado)}
                        className={`px-3 py-1.5 text-sm border transition ${
                            estadoFilter === estado
                                ? estado === "Todos"
                                    ? "bg-black text-white border-black"
                                    : `${ESTADO_COLORS[estado]} border-transparent font-semibold`
                                : "bg-white border-gray-300 text-gray-500 hover:border-black"
                        }`}
                    >
                        {estado}
                    </button>
                ))}
            </div>

            {/* Desktop Table */}
            <div className="w-full overflow-x-auto mobile:hidden">
                <table className="w-full border-collapse border border-black bg-white">
                    <thead>
                        <tr>
                            <th className="text-left p-3 border border-black">
                                Cliente
                            </th>
                            <th className="text-left p-3 border border-black">
                                Email
                            </th>
                            <th className="text-left p-3 border border-black">
                                Soporte
                            </th>
                            <th className="text-left p-3 border border-black">
                                Fecha
                            </th>
                            <th className="text-left p-3 border border-black">
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPresupuestos.map((p) => (
                            <PresupuestoRow
                                key={p._id}
                                presupuesto={p}
                                onClick={() => setSelected(p)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden flex flex-col gap-4">
                {filteredPresupuestos.map((p) => (
                    <PresupuestoCard
                        key={p._id}
                        presupuesto={p}
                        onClick={() => setSelected(p)}
                    />
                ))}
            </div>

            {selected && (
                <BudgetDetailModal
                    presupuesto={selected}
                    onClose={() => setSelected(null)}
                    onUpdate={updatePresupuesto}
                />
            )}
        </div>
    );
};
