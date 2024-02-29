import { Request, Response } from "./http";

export interface Controller {
  handle(request: Request<unknown, unknown, unknown>): Promise<Response>;
}