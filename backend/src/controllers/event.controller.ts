import * as express from 'express';
import { EventService } from '../service/event.service';
import { Request, Response } from "express";
import { IResponse } from '../types/response';
import { BaseService } from '../common/base.service';


export class EventController extends BaseService {

    public fetchAllEvents = async (req: Request, res: Response) => {
        try {
            const { query } = req;
            const response: IResponse = await new EventService().processGetAllEvents(query);
            return this.controllerResponseHandler(response, res)
        } catch (error) {
            return this.controllerErrorHandler(req, res, error)
        }
    }
}


//ROUTE

export const eventRouter = express.Router();

eventRouter.get(
    '/event',
    new EventController().fetchAllEvents
);