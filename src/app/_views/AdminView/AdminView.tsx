"use client";
import React, { useEffect, useState } from "react";
import { User } from "./types";
import { UserCard, UserRow } from "./_components";

export const AdminView = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) {
          throw new Error("Error al cargar usuarios");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const updateUser = (updatedUser: User) => {
    setUsers(users.map((u) => (u._id === updatedUser._id ? updatedUser : u)));
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="my-[6vw] flex flex-col items-center">
        <h2>CARGANDO USUARIOS...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-[6vw] flex flex-col items-center">
        <h2>ERROR</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="my-[6vw] flex flex-col items-center px-4">
      <h2 className="mb-6">PANEL ADMINISTRADOR</h2>
      <div className="w-full max-w-6xl">
        <div className="mb-4 flex mobile:flex-col mobile:gap-4 items-center justify-between">
          <h3 className="text-xl">
            Usuarios listados ({filteredUsers.length})
          </h3>
          <input
            type="text"
            placeholder="Buscar por email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black mobile:w-full"
          />
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto mobile:hidden">
          <table className="w-full border-collapse border border-black">
            <thead>
              <tr>
                <th className="text-left p-3 border border-black">Nombre</th>
                <th className="text-left p-3 border border-black">Email</th>
                <th className="text-left p-3 border border-black">Rol</th>
                <th className="text-left p-3 border border-black">
                  Fecha de registro
                </th>
                <th className="text-left p-3 border border-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <UserRow key={user._id} user={user} onUserUpdate={updateUser} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user._id} user={user} onUserUpdate={updateUser} />
          ))}
        </div>
      </div>
    </div>
  );
};
