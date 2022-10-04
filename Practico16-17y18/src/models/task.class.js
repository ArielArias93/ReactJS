import { level } from "./levels.enum";

export class task {

    name = '';
    description = '';
    completed = false;
    level = level.Normal;

    constructor (name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }
}