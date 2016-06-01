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

    function readConfig(){
        var successful = false;

        return successful;
    }

    function setConfigPath(path){
        var successful = false;

        return successful;
    }
    function configureDBAccess(dbconfigObj){
        var successful = false;

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


}