import * as express from "express";
import { eventRouter } from "./controllers/event.controller";
import { pingController } from "./controllers/ping";
import * as cors from "cors";
import * as path from "path";
import * as dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(cors());

app.use(pingController);
app.use(eventRouter);
app.use(express.static(path.join(__dirname, "../../front-end/build")));

export default app;
