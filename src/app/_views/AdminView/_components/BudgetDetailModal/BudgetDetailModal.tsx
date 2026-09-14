import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Presupuesto } from "../../types";
import { ESTADO_COLORS } from "../../constants";

const ESTADOS: Presupuesto["estado"][] = [
  "Recibido",
  "Enviado",
  "Cancelado",
  "Aceptado",
];

interface BudgetDetailModalProps {
  presupuesto: Presupuesto;
  onClose: () => void;
  onUpdate: (presupuesto: Presupuesto) => void;
}

export const BudgetDetailModal = ({
  presupuesto,
  onClose,
  onUpdate,
}: BudgetDetailModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEstadoChange = async (estado: Presupuesto["estado"]) => {
    if (estado === presupuesto.estado || isLoading) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/presupuesto", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: presupuesto._id, estado }),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar el estado del presupuesto");
      }

      const data = await res.json();
      onUpdate(data.presupuesto);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al actualizar el estado del presupuesto");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-50 px-4">
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white border border-black w-full max-w-[500px] max-h-[85vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="p-6 mobile:p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-gray-500 uppercase">
                  Presupuesto
                </p>
                <h3 className="text-xl font-bold">
                  {presupuesto.nombre} {presupuesto.apellido}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(presupuesto.createdAt).toLocaleDateString(
                    "es-ES"
                  )}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-4xl leading-none hover:opacity-60 transition px-2"
                aria-label="Cerrar"
              >
                &times;
              </button>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-600 mb-2">Estado</p>
              <div className="flex gap-2 flex-wrap">
                {ESTADOS.map((estado) => (
                  <button
                    key={estado}
                    disabled={isLoading}
                    onClick={() => handleEstadoChange(estado)}
                    className={`px-3 py-1.5 text-sm border transition disabled:opacity-50 disabled:cursor-not-allowed ${
                      presupuesto.estado === estado
                        ? `${ESTADO_COLORS[estado]} border-transparent font-semibold`
                        : "border-gray-300 text-gray-500 hover:border-black"
                    }`}
                  >
                    {estado}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <div className="col-span-2">
                <p className="text-xs text-gray-600">Teléfono</p>
                <p>{presupuesto.telefono}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-gray-600">Email</p>
                <p className="break-all">{presupuesto.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Soporte</p>
                <p>{presupuesto.soporte}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Medida</p>
                <p>{presupuesto.medida} cm</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Cantidad de colores</p>
                <p>{presupuesto.cantidadColores}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Cantidad de copias</p>
                <p>{presupuesto.cantidad}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-600">Descripción</p>
              <p className="text-sm">{presupuesto.descripcion}</p>
            </div>
          </div>

          <div className="border-t border-black">
            <button
              onClick={onClose}
              className="w-full py-3 hover:bg-gray-100 transition mobile:text-sm"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
