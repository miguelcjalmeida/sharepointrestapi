export class SPBaseExecution {
    ListTitle: string;
    RelativeUrl: string;

    /** @constructor */
    constructor(listTitle: string, relativeUrl: string) {
        this.ListTitle = listTitle;
        this.RelativeUrl = relativeUrl;
    }

    execute() {
        console.log('executing...')
    }
}