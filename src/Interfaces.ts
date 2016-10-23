
export interface ISPRestRepository {
}

export interface ISPBaseExecution {
    get_all(): any;
    update_item(): any;
    delete_item(): any;
    get_byId(itemId: number): any;
    get_by(query: string, sort: string): any;
}