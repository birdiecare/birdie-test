import * as express from "express";
import * as cors from "cors";
import "./db/db";
import { pingController } from "./controllers/ping";
import { moodController } from "./controllers/mood";

const app = express();

app.use(pingController);
app.use(moodController);
app.use(cors());

export default app;
