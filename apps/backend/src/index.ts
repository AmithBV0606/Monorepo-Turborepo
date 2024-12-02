import express, { Express, Request, Response } from "express";
import { BACKEND_URL } from "@repo/common";

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Express + TypeScript Server Backend url : ${BACKEND_URL}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});