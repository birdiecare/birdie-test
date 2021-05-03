export interface IResponse {
    status: boolean;
    message: string;
    data: any;
    responseCode?: string;
    statusCode: number;
    responseDescription?: string
  }
  