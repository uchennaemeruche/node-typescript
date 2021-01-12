import { Completable } from "./completable";
import { Entity } from "./entity";

export class Task extends Entity implements Completable{
    private _completed!: boolean;
    private _priority!: number;

    get completed(): boolean{
        return this._completed;
    }

    set completed(isComplete: boolean) {
        this._completed = isComplete;
    }

    get priority(): number{
        return this._priority;
    }

    set priority(value: number) {
        this._priority = value;
    }

}