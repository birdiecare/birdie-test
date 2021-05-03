import { BaseService } from "../common/base.service";
import * as eventModel from "../model/event.model"
import { IDatabase } from "../types/database";
import { IResponse } from "../types/response";
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "../util/helper";

export class EventService extends BaseService {
    public processGetAllEvents = async (query: any): Promise<IResponse> => {
        try {
            let { limit, page, id } = query;
            const response: IDatabase = await eventModel.findAll(page ?? DEFAULT_PAGE, limit ?? DEFAULT_PER_PAGE, id);
            if (!response.status) return this.failureResponse("Event not found", response.data)
            return this.successResponse("Events fetched", response.data)
        } catch (error) {
            return this.serviceErrorHandler(error);
        }
    }
}