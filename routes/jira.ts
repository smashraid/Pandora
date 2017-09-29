// Import only what we need from express
import { Router, Request, Response } from 'express';
import { JiraController } from "../controllers/jira";

import * as fs from "fs";
import * as readline from "readline";
import * as path from "path";

const pp: string = path.join(__dirname, 'data.txt');
const aa: string = path.resolve('..\\data.txt');
const options: readline.ReadLineOptions = {
    input: fs.createReadStream(pp)
};
const rl: readline.ReadLine = readline.createInterface(options);

const dpto = [];

rl.on('line', (line: string) => {
    console.log(`Line from file: ${line}`);
    let d: Array<string> = line.split('/').filter((el) => { return el.trim().length != 0 && el != undefined });
    dpto.push(addNode(d));
    console.log(dpto);
});

let addNode = (text: string[]): void => {
    for (var i = 0; i < text.length; i++) {
        let n = dpto.indexOf(text[i].trim());
        if (n == -1) {
            dpto.push(text[i].trim());
        }
    }
}

// Assign router to the express.Router() instance
const router: Router = Router();
const jira = new JiraController();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});

router.get('/:name', jira.get);

// Export the express.Router() instance to be used by server.ts
export const JiraRoute: Router = router;