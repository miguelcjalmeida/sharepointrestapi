
/**
 *@namespace
 */
var SPRestRepository = (function () {
    /**
     * @type {string}
     */
    var _listTitle, _relativeUrl = undefined;
    /**
     * @type {boolean}
     * @defaultValue
     */
    var _rootWeb = true

    // constructor
    /**
     * @constructor
     * @param {String} listTitle - Título da Lista
     * @param {String} relativeUrl - URL relativa de onde a Lista se encontra no portal. O parametro pode ser nulo caso a lista estiver localizada em na raíz do portal;
     */
    var SPRestRepository = function (listTitle, relativeUrl) {
        _listTitle = listTitle;
        _relativeUrl = relativeUrl || '';
        _rootWeb = _relativeUrl == '';
    }
    /// functions
    /**
     * Obtem todos os itens da Lista especificada
     * @return "SPListItemCollection"
     */
    sp_restapi.prototype.get_allitems = function () {
        console.log('retrieving data from list \'' + _listTitle + '\'');
    }
    /**
     * Get item by ID
     * @param {int} itemid
     * return {SPListItem}
     */
    sp_restapi.prototype.get_byid = function (itemid) {
        console.log('retrieving item...');
    }

    return sp_restapi;
})()


