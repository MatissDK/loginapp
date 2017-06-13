var db = require('../db/connection');


var Cases = {

    getCaseByName: (name, callback) =>
    {
        return db.query('SELECT id, apsudzetais,laiks FROM kriminalprocess WHERE apsudzetais LIKE ?',[name], callback);
    },

};

module.exports = Cases;