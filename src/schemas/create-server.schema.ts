import { z } from "zod";

export const createServerSchema = z.object({
  name: z.string().min(1, { message: "Server name is required" }),
  serverAvatar: z.string().min(1, { message: "Server avatar is required" }),
});

export type CreateServerSchema = z.infer<typeof createServerSchema>;
