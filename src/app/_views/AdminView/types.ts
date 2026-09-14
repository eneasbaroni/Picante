export interface User {
  _id: string;
  email: string;
  name: string;
  role: "user" | "vip" | "premium" | "admin";
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Presupuesto {
  _id: string;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  soporte: string;
  medida: string;
  cantidadColores: string;
  cantidad: string;
  descripcion: string;
  estado: "Recibido" | "Enviado" | "Cancelado" | "Aceptado";
  createdAt: string;
  updatedAt: string;
}