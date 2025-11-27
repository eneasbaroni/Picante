export const ROLE_COLORS = {
  admin: "bg-red-200 text-red-800",
  premium: "bg-yellow-200 text-yellow-800",
  vip: "bg-purple-200 text-purple-800",
  user: "bg-gray-200 text-gray-800",
} as const;

export const ROLE_LABELS = {
  admin: "ADMIN",
  premium: "PREMIUM",
  vip: "VIP",
  user: "USER",
} as const;

export type Role = keyof typeof ROLE_COLORS;
