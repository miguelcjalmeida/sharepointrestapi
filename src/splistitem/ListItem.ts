import { SPBaseExecution } from '../SPBaseExecution'

export class ListItem extends SPBaseExecution {
    private _listTitle: string;
    private _relativeUrl: string;

    /** @constructor */
    constructor(listTitle: string, relativeUrl: string) {
        super(listTitle, relativeUrl);
        this._listTitle = listTitle;
        this._relativeUrl = relativeUrl;
    }
}