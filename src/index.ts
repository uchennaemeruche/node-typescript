import dotenv from "dotenv";
import express from "express";
import LogRocket from 'logrocket';
import { exit } from "process";

import { Task } from "./items/task";
import { Completable } from "./items/completable"


dotenv.config();

if (!process.env.PORT) {
    exit(1);
}

const PORT:number= parseInt(process.env.PORT as string,10,)
LogRocket.init('7oil8o/csv-api');
const app = express();

function sendCompletionmail(completable: Completable) {
    if(!completable.completed){
        console.error(`please complete ${completable.title} before sending email`);
        return;
    }
    console.log(`Sending email about ${completable.title}`);

}

let bugFix = new Task(1, 'Another banger');
sendCompletionmail(bugFix);
bugFix.completed = true;
sendCompletionmail(bugFix);

const server = app.listen(PORT, () => {
    console.log("App is running on  port:", PORT);
})
