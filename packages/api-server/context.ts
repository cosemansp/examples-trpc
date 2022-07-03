import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    // empty context
    userId: "1234",
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
