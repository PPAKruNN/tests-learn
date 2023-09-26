import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("OK!");
});

const port = 6000;

export default app;
