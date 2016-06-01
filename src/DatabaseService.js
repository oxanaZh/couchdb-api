/**
 * Created by Oxana Zhurakovskaya on 31.05.16.
 * DatabaseService for Findme-priject
 */
function DatabaseService(){
    this.confPath = "dbaccess-config.json";
    this.dbConfig;
    this.currentTable;

    function DBConfig(url, login, password, dbname ){
        this.dbURL = url;
        this.dbLoginname = login;
        this.dbPassword = password;
        this.dbName = dbname;
    }
/*
*function readConfig
* reads the JSON config file tha is placed under confPath
* and initialize dbConfig-Object with content of this file
* config file must be properly formated
* returns true is read was successful, else returns false
 */
    function readConfig(){
        var successful = false;
        $.getJSON(confPath, function(result){
            this.dbConfig = new DBConfig(result.dbURL, result.dbLoginname, result.dbPassword, result.dbName);
        });

        return successful;
    }

    function setConfigPath(path){
        var successful = false;

        return successful;
    }
    function configureDBAccess(dbconfigObj){
        var successful = false;

        this.dbConfig = new DBConfig(dbconfigObj.dbURL, dbconfigObj.dbLoginname, dbconfigObj.dbPassword, dbconfigObj.dbName);
        return successful;
    }
    function saveConfig(){

    }

    function connect(){
        var successful = false;

        return successful;
    }
    function close(){

    }

    function findTable(tableName){
        var table;

        return table;
    }
    function updateTable(tableName, document){
        var successful = false;

        return successful;
    }
    function createTable(tableName){
        var successful = false;

        return successful;
    }
    function removeTable(tableName){
        var successful = false;

        return successful;
    }
}



function TableDAO(tableName){
    this.tabel = tableName;

    function findById(id){
        var obj;

        return obj;

    }
    function findAll(){
        var objects;

        return objects;
    }

    function findAllByKeyValue(key, value){
        var objects;

        return objects;
    }
    function insertEntries(objects){
        var successful = false;

        return successful;
    }
    function insert(object){
        var object;

        return object;
    }
    function update(object){
        var object;

        return object;
    }
    function removeById(id){
        var object;

        return object;
    }

}