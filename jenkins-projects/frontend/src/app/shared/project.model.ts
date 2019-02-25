export class Project {
    name: string;
    created: Date;
    builders: string[];
    
    constructor(name, created, builders) {
        this.name = name;
        this.created = created;
        this.builders = builders;
    }
}