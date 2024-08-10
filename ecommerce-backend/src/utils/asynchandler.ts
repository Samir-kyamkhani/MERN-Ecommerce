import { Request, Response, NextFunction } from "express";
import { AsyncRequestHandler } from "../types/types.js";

const asynchandler =
  (requestHandler: AsyncRequestHandler) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error: any) =>
      next(error.message),
    );
  };

export default asynchandler;
