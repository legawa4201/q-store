import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import v1Router from "./routes/v1/index"

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(`/api/v1`, v1Router);

export default app;