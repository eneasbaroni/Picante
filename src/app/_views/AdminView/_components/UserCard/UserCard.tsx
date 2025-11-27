import { User } from "../../types";
import { ROLE_COLORS, ROLE_LABELS } from "../../constants";
import { motion } from "framer-motion";
import { navContainer, navLinks } from "@/lib/anims";
import { useState } from "react";
import { Modal } from "../Modal";

export const UserCard = ({
  user,
  onUserUpdate,
}: {
  user: User;
  onUserUpdate: (user: User) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<"grant" | "revoke">("grant");
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = (action: "grant" | "revoke") => {
    setModalAction(action);
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const newRole = modalAction === "grant" ? "premium" : "user";

      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          role: newRole,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar el rol del usuario");
      }

      const data = await res.json();
      onUserUpdate(data.user);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al actualizar el rol del usuario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="border border-black bg-white relative pb-0 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-full h-[5px] ${
            ROLE_COLORS[user.role]
          }`}
        ></div>

        <div className="p-4 space-y-3">
          <div>
            <p className="text-xs text-gray-600">Nombre</p>
            <p className="font-semibold">{user.name}</p>
          </div>

          <div>
            <p className="text-xs text-gray-600">Email</p>
            <p className="text-sm break-all">{user.email}</p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-600">Rol</p>
              <span
                className={`inline-block px-3 py-1 rounded text-xs mt-1 ${
                  ROLE_COLORS[user.role]
                }`}
              >
                {ROLE_LABELS[user.role]}
              </span>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-600">Registro</p>
              <p className="text-sm">
                {new Date(user.createdAt).toLocaleDateString("es-ES")}
              </p>
            </div>
          </div>
        </div>

        {(user.role === "premium" || user.role === "user") && (
          <motion.div
            className={`relative w-full h-12 flex items-center justify-center cursor-pointer ${
              user.role === "premium" ? "bg-pinky" : "bg-greeny"
            }`}
            variants={navContainer}
            initial="init"
            whileHover="animate"
            onClick={() =>
              handleOpenModal(user.role === "premium" ? "revoke" : "grant")
            }
          >
            <p className="z-20 text-sm text-white">
              {user.role === "premium" ? "Quitar Acceso" : "Dar Acceso"}
            </p>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0 flex z-10 bg-black"
              variants={navLinks}
            ></motion.div>
          </motion.div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        user={user}
        action={modalAction}
        isLoading={isLoading}
      />
    </>
  );
};
