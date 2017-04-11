import { Request, Response } from "express";
 
export class JiraController {
    get(req: Request, res: Response): void {
        let name: string = req.params.name;
        res.json({
            message: `Hello ${name}`
        });
    }
}

