import { Completable } from "./completable";
import { Entity } from "./entity";
import { Task } from "./task";

export class Story extends Entity implements Completable{

    private _completed: boolean = false;
    private _responsible!: string;
    private _tasks: Array<Task> = [];


    get completed(): boolean{
        return this._completed;
    }

    set completed(isComplete:boolean){
        this._completed = isComplete;
    }
    get responsible(): string{
        return this._responsible;
    }
    set responsible(value: string) {
         this._responsible = value;
    }

    public addTask(task: Task) {
        this._tasks.push(task);
    }

    get tasks(): Array<Task>{
        return this._tasks;
    }

    public removeTask(task: Task) {
        let taskPosition = this._tasks.indexOf(task);
        this._tasks.splice(taskPosition, 2);

    }



}