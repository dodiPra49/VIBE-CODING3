import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";

export const registerUser = async (payload: any) => {
  const { name, email, password } = payload;

  // Cek apakah email sudah terdaftar
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUsers.length > 0) {
    throw new Error("email sudah terdaftar");
  }

  // Hash password menggunakan Bun.password
  const hashedPassword = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10,
  });

  // Simpan data user ke database
  await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  });

  return true;
};
