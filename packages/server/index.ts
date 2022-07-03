import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import morgan from "morgan";
import cors from "cors";
import { createContext } from "./context";
import { appRouter } from "./routers";

const app = express();
const port = 8080;

app.use(cors());
app.use(morgan("tiny"));
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
        // send to bug reporting
        console.error("Something went wrong", error);
      }
    },
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is listening on: http://localhost:${port}`);
});
