import { Presupuesto } from "../../types";
import { ESTADO_COLORS } from "../../constants";

export const PresupuestoCard = ({
  presupuesto,
  onClick,
}: {
  presupuesto: Presupuesto;
  onClick: () => void;
}) => {
  return (
    <div
      className="border border-black bg-white p-4 space-y-3 cursor-pointer active:bg-gray-100"
      onClick={onClick}
    >
      <div className="flex justify-between items-start gap-2">
        <p className="font-semibold">
          {presupuesto.nombre} {presupuesto.apellido}
        </p>
        <span
          className={`inline-block px-3 py-1 rounded text-xs shrink-0 ${
            ESTADO_COLORS[presupuesto.estado]
          }`}
        >
          {presupuesto.estado}
        </span>
      </div>

      <div>
        <p className="text-xs text-gray-600">Email</p>
        <p className="text-sm break-all">{presupuesto.email}</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-600">Soporte</p>
          <p className="text-sm">{presupuesto.soporte}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-600">Fecha</p>
          <p className="text-sm">
            {new Date(presupuesto.createdAt).toLocaleDateString("es-ES")}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-600">Colores</p>
          <p className="text-sm">{presupuesto.cantidadColores}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-600">Copias</p>
          <p className="text-sm">{presupuesto.cantidad}</p>
        </div>
      </div>
    </div>
  );
};
