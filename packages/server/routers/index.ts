import { createRouter } from "../createRouter";
import { userRouter } from "./users";

export const appRouter = createRouter()
  /**
   * Add a health check endpoint to be called with `/trpc/alive`
   */
  .query("alive", {
    async resolve() {
      return "yay!";
    },
  })
  /**
   * Merge `userRouter` under `user.`
   */
  .merge("user.", userRouter);

export type AppRouter = typeof appRouter;
