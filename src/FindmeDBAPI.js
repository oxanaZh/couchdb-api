/**
 * Created by Oxana Zhurakovskaya on 31.05.16.
 * couchDB API for Findme-priject
 */
function FindmeDBAPI(){
    this.db = new DatabaseService();

    function open(){
        var successful = false;
        db.open();
        return successful;
    }

    function close(){
        var successful = false;
        db.close();
        return successful;
    }

    function configure(){
        var successful = false;
        db.configure();
        return successful;
    }

    /********************************************
    * Table User
    ********************************************/
    function  findAllUsers(){
        var users;
        var table = db.findTable();
        return users;
    }

    function findUsersByRights(rights){
         var users;
        var table = db.findTable();
        return users;
    }

    function findUserById(id){
        var user;

        return user;
    }

    function findUserByLoginname(loginname){
        var user;

        return user;
    }

    function createUser(userobj){
        var user;

        return user;
    }

    function removeUserById(id){
        var successful = false;

        return successful;
    }

    function updateUser(userobj){
        var user;

        return user;
    }

    function insertUsers(users){
        var successful = false;

        return successful;
    }

    /********************************************
     * Table Profile
     ********************************************/
    function findAllProfiles(){
        var profiles;

        return profiles;
    }

    function findProfileById(id){
        var profile;

        return profile;
    }

    function findProfileByUserId(userid){
        var profile;

        return profile;
    }

    function getProfileByEmail(email){
        var profile;

        return profile;
    }



    function createProfile(profile){
        var successful = false;

        return successful;
    }

    function updateProfile(profile){
        var successful = false;

        return successful;
    }

    function findProfilesByEntry(entry, value){
        var profiles;

        return profiles;
    }
    function findProfilesByKeyword(keyword){
        var profiles;

        return profiles;
    }

}