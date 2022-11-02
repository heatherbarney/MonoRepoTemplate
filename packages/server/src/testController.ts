import { Request, Response, NextFunction } from "express";

export default class TestController {
    sendMessage(req : Request, res: Response, next: NextFunction) {
        res.locals.message = "Express + Typescript Server";
        next();
    }
};
