import { Request, Response } from "express";
import * as requestService from "request";
 
export class JiraController {
    get(req: Request, res: Response): void {
        let name: string = req.params.name;
        let user: string = "STsuchida";
        requestService({
            uri: "https://jira.cignium.com/rest/api/2/search",
            method: "POST",
            headers: {            
                "Content-Type": "application/json",
                "Authorization":"Basic c3RzdWNoaWRhOlJ5dVQwJDQxcjAyNQ==",
                "body": JSON.stringify({
                    jql: `assignee = ${user} AND status != Accepted  AND resolution = Unresolved  order by updated DESC`,
                    fields: ["summary"]
                })
            }
        })
        res.json({
            message: `Hello ${name}`
        });
    }
}

