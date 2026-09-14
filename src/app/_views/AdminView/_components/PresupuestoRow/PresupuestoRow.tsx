import { Presupuesto } from "../../types";
import { ESTADO_COLORS } from "../../constants";

export const PresupuestoRow = ({
  presupuesto,
  onClick,
}: {
  presupuesto: Presupuesto;
  onClick: () => void;
}) => {
  return (
    <tr
      className="hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <td className="p-3 border border-black">
        {presupuesto.nombre} {presupuesto.apellido}
      </td>
      <td className="p-3 border border-black">{presupuesto.email}</td>
      <td className="p-3 border border-black">{presupuesto.soporte}</td>
      <td className="p-3 border border-black text-center">
        {presupuesto.cantidadColores}
      </td>
      <td className="p-3 border border-black text-center">
        {presupuesto.cantidad}
      </td>
      <td className="p-3 border border-black">
        {new Date(presupuesto.createdAt).toLocaleDateString("es-ES")}
      </td>
      <td className="p-3 border border-black text-center text-xs">
        <span
          className={`inline-block px-3 py-1 rounded ${
            ESTADO_COLORS[presupuesto.estado]
          }`}
        >
          {presupuesto.estado}
        </span>
      </td>
    </tr>
  );
};
