import { Entity } from "./entity";
import { Story } from "./story";

export class Project extends Entity{

    private _released: boolean = false;
    private _stories: Array<Story> = [];

    get released(): boolean{
        return this._released;
    }

    set released(isReleased: boolean) {
        this._released = isReleased;
    }

    public addStory(story: Story) {
        this._stories.push(story);
    }

    get stories(): Array<Story>{
        return this._stories;
    }

    public removeStory(story: Story) {
        let storyIndex = this._stories.indexOf(story);
        this.stories.splice(storyIndex, 1);
    }




}