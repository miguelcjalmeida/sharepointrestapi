import { ISPBaseExecution } from './Interfaces';

export class SPBaseExecution implements ISPBaseExecution {
    /** @constructor */
    constructor(listTitle: string, relativeUrl: string) {

    }

    
    get_all(): any { };
    update_item(): any { };
    delete_item(): any { };
    get_byId(itemId: number): any { };
    get_by(query: string, sort: string): any { };

    private execute(url: string, method: string, data: JSON, headers: JSON): any {
        console.log('executing...')
    }
}