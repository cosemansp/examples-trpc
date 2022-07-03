import * as trpc from "@trpc/server";
import type { Context } from "../context";
import { z } from "zod";
import { createRouter } from "../createRouter";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type User = z.infer<typeof UserSchema>;

let users: User[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Dirk" },
  { id: 4, name: "Paul" },
];

export const userRouter = createRouter()
  .query("byId", {
    input: z.number(),
    output: UserSchema,
    resolve({ input }) {
      const user = users.find((user) => user.id === input);
      if (!user) {
        throw new trpc.TRPCError({
          code: "BAD_REQUEST",
          message: `could not find user with id ${input}`,
        });
      }
      return user;
    },
  })
  .query("all", {
    output: z.array(UserSchema),
    resolve() {
      return users;
    },
  })
  .mutation("create", {
    input: z.object({ name: z.string().min(2) }),
    resolve({ input, ctx }) {
      console.log("ctx", ctx);
      return users.push({
        ...input,
        id: users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1,
      });
    },
  })
  .mutation("delete", {
    input: z.object({ id: z.number() }),
    output: z.string(),
    async resolve(req) {
      users = users.filter((user) => user.id !== req.input.id);
      return "success";
    },
  });
