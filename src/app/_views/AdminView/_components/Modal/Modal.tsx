import { motion, AnimatePresence } from "framer-motion";
import { User } from "../../types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  user: User;
  action: "grant" | "revoke";
  isLoading?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  user,
  action,
  isLoading = false,
}: ModalProps) => {
  const message =
    action === "grant"
      ? `¿Estás seguro de dar acceso premium a ${user.name}?`
      : `¿Estás seguro de quitar el acceso premium a ${user.name}?`;

  const confirmText = action === "grant" ? "Dar Acceso" : "Quitar Acceso";
  const confirmColor = action === "grant" ? "bg-greeny" : "bg-pinky";

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative bg-white border border-black w-full max-w-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="p-6 mobile:p-4">
              <h3 className="text-xl font-bold mb-4 mobile:text-lg">
                Confirmar Acción
              </h3>
              <p className="mb-6 mobile:text-sm">{message}</p>
              <p className="text-sm text-gray-600 mb-6 break-all mobile:text-xs">
                Email: {user.email}
              </p>
            </div>

            <div className="flex w-full border-t border-black">
              <button
                onClick={onClose}
                className="w-1/2 py-3 border-r border-black hover:bg-gray-100 transition mobile:text-sm"
                disabled={isLoading}
              >
                Cancelar
              </button>
              <button
                onClick={onConfirm}
                className={`w-1/2 py-3 text-white border-black ${confirmColor} hover:opacity-80 transition disabled:opacity-50 disabled:cursor-not-allowed mobile:text-sm`}
                disabled={isLoading}
              >
                {isLoading ? "Procesando..." : confirmText}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
