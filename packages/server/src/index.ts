import express, { Express, Request, Response } from "express";
import TestController from "./testController";

const app: Express = express();
const port = 8000;
const testController = new TestController();

app.get("/", testController.sendMessage, (req: Request, res: Response) => {
  res.send(res.locals.message);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
