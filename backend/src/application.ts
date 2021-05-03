import * as express from "express";
import { eventRouter } from "./controllers/event.controller";
import { pingController } from "./controllers/ping";
import * as cors from "cors";

const app = express();

app.use(express.static('public'));
app.use(cors());

app.use(pingController);
app.use(eventRouter);

export default app;
