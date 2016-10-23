import { ISPRestRepository } from './Interfaces'
import { ListItem } from './SPListItem/ListItem'

/**
 * @namespace
 */
export class SPRestRepository implements ISPRestRepository {

    private _listItem: ListItem = null;
    get ListItem(): ListItem {
        return this._listItem;
    }
    set ListItem(value: ListItem) {
        this._listItem = value;
    }

    /** @constructor
     * initialize the repostory to the list informed;
     * @param {string} listTitle - List Title or Documento Library url name;
     * @param {string} relativeUrl - Relative url for the list or document library. If this parameter is null, then the relative url is ROOT ( '/' );
     */
    constructor(listTitle: string, relativeUrl: string) {
        this.ListItem = new ListItem(listTitle, relativeUrl);
    }
}