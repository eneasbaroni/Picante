export interface User {
  _id: string;
  email: string;
  name: string;
  role: "user" | "vip" | "premium" | "admin";
  image?: string;
  createdAt: string;
  updatedAt: string;
}