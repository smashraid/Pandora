import { Request, Response } from "express";
 
export class JiraController {
    get(req: Request, res: Response): void {
        res.json({
            message: 'Hello World!'
        });
    }
}

