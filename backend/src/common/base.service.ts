import { IResponse } from "../types/response"
import { Request, Response } from "express";


export class BaseService {

  protected failureResponse = async (message?: string, data?: any): Promise<IResponse> => {
    return { statusCode: 400, status: false, message: message || "failed", data: data || null }
  }

  protected preconditionFailed = async (message?: string, data?: any): Promise<IResponse> => {
    return { statusCode: 412, status: false, message: message || "failed", data: data || null }
  }

  protected successResponse = async (message?: string, data?: any): Promise<IResponse> => {
    return { statusCode: 200, status: true, message: message || "Success", data: data || null }
  }

  protected serviceErrorHandler = async (error: any) => {
    return { statusCode: 500, status: false, message: "Internal server error", data: error }
  }

  protected controllerErrorHandler = (req: Request, res: Response, error: any) => {
    const { originalUrl, method, ip } = req;
    // logger.log('warn', `URL:${originalUrl} - METHOD:${method} - IP:${ip || api} - ERROR:${error}`);
    console.log('warn', `URL:${originalUrl} - METHOD:${method} - IP:${ip} - ERROR:${error}`);
    return res.status(500).json({ status: false, message: "Internal server error", data: error });
  }

  protected controllerResponseHandler = async (response: any, res: Response): Promise<any> => {
    const { statusCode, status, message, data } = response;
    return res.status(statusCode).json({ status, message, data });
  }

}