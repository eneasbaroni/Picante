import { User } from "../../types";
import { ROLE_COLORS, ROLE_LABELS } from "../../constants";
import { motion } from "framer-motion";
import { navContainer, navLinks } from "@/lib/anims";
import { useState } from "react";
import { Modal } from "../Modal";

export const UserRow = ({
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
      <tr key={user._id} className="hover:bg-gray-100">
        <td className="p-0 border border-black relative">
          <div className="p-3">{user.name}</div>
          <div
            className={`absolute bottom-0 left-0 w-full h-[5px] ${
              ROLE_COLORS[user.role]
            }`}
          ></div>
        </td>
        <td className="p-3 border border-black">{user.email}</td>
        <td
          className={`p-3 border border-black text-center text-xs ${
            ROLE_COLORS[user.role]
          }`}
        >
          {ROLE_LABELS[user.role]}
        </td>
        <td className="p-3 border border-black">
          {new Date(user.createdAt).toLocaleDateString("es-ES")}
        </td>
        <td
          className={`p-0 border border-black h-full ${
            user.role === "premium"
              ? "bg-pinky"
              : user.role === "user"
              ? "bg-greeny"
              : "bg-black"
          }`}
        >
          {user.role === "premium" && (
            <motion.div
              className="relative w-full h-full min-h-[3rem] flex items-center justify-center cursor-pointer py-3"
              variants={navContainer}
              initial="init"
              whileHover="animate"
              onClick={() => handleOpenModal("revoke")}
            >
              <p className="z-20 text-sm text-white">Quitar Acceso</p>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0 flex z-10 bg-black"
                variants={navLinks}
              ></motion.div>
            </motion.div>
          )}
          {user.role === "user" && (
            <motion.div
              className="relative w-full h-full min-h-[3rem] flex items-center justify-center cursor-pointer py-3"
              variants={navContainer}
              initial="init"
              whileHover="animate"
              onClick={() => handleOpenModal("grant")}
            >
              <p className="z-20 text-sm text-white">Dar Acceso</p>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0 flex z-10 bg-black"
                variants={navLinks}
              ></motion.div>
            </motion.div>
          )}
        </td>
      </tr>

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
