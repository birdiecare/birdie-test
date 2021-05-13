import * as express from "express";
import { connection } from "../db/db";
import { COUNT_DISTINCT_QUERY, GET_TOP_20 } from "../constants/queries";

export const moodController = express.Router();

interface IEventCount {
  count: number;
  event_type: string;
}

moodController.get("/mood", (_, res) => {
  connection.query(COUNT_DISTINCT_QUERY, (err: any, rows: IEventCount) => {
    if (err) throw err;
    res.status(200).json({
      events: rows,
    });
  });
});

moodController.get("/mood/all", (_, res) => {
  connection.query(GET_TOP_20, (err: any, rows: any) => {
    if (err) throw err;
    res.status(200).json({
      events: rows,
    });
  });
});
