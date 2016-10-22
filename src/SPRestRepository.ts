import { SPBaseExecution } from './base/SPBaseExecution'
import { ISPRestRepository } from './interface/ISPRestRepository'

/**
 * @namespace
 */
export class SPRestRepository extends SPBaseExecution implements ISPRestRepository {
    ListTitle: string;
    ListRelativeUrl: string;

    /** @constructor
     * inicializa o repositório para a Lista informada;
     * @param {string} listTitle - Título da lista que deseja recuperar informações;
     * @param {string} relativeUrl - URL relativa de onde se encontra a lista. Caso seja passado  'null' então é considerado o root do portal;
     */
    constructor(listTitle: string, relativeUrl: string) {
        super(listTitle, relativeUrl);
    }

    helloWorld() {
        console.log('hi there');
    }
}