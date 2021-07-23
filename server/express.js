import path from "path";
import express from "express";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import Template from "./../template";
import { customErrorHandler, unknownApiEndpoint } from "./utils/middleware";

import devBundle from "./devBundle";

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

devBundle.compile(app);

/** configure Express */
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());

app.use(express.static(path.join(CURRENT_WORKING_DIR, "dist")));
// mount routes

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

app.use(unknownApiEndpoint);
app.use(customErrorHandler);

export default app;
