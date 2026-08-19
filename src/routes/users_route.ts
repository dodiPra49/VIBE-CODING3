import { Elysia } from "elysia";
import { registerUser } from "../services/users-service";

export const usersRoute = new Elysia().post("/api/users", async ({ body, set }) => {
  try {
    const payload = body as any;
    if (!payload || !payload.name || !payload.email || !payload.password) {
      set.status = 400;
      return { error: "Name, email, and password are required" };
    }

    await registerUser(payload);
    
    return { data: "OK" };
  } catch (error: any) {
    set.status = 400;
    return { error: error.message };
  }
});
