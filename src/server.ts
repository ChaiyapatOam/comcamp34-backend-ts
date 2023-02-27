import express, { Express, Request, Response } from "express";
import admin from "firebase-admin";
import helmet from "helmet";
import cors from "cors";

import { indexRouter } from "@/routes";
const app: Express = express();
const port = process.env.PORT || 8080;

app.use(helmet());
app.use(cors());

// Initial Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert("firebase-secret.json"),
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express TypeScript Server is Running");
});

app.use(indexRouter);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
