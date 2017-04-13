import { Request, Response } from "express";
import * as requestHttp from "request";

export class JiraController {
    get(req: Request, res: Response): void {
        let name: string = req.params.name;
        let user: string = "STsuchida";
        let message: string = "";
        requestHttp({
            uri: "https://jira.cignium.com/rest/api/2/search",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic c3RzdWNoaWRhOlJ5dVQwJDQxcjAyNQ=="
            },
            body: {
                jql: `assignee = ${user} AND status != Accepted  AND resolution = Unresolved  order by updated DESC`,
                fields: ["summary"]
            },
            followAllRedirects: true,
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                for (let x of body.issues) {
                    message += `${x.key} - ${x.fields.summary} \r\n`;
                }
                res.json({
                    color: "green",
                    message: message,
                    notify: false,
                    message_format: "text"
                });
            } else {
                res.json({
                    color: "red",
                    message: error,
                    notify: false,
                    message_format: "text"
                });
            }
        });

    }
}

