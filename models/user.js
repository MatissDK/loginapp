var db = require('../db/connection');
var bcrypt = require('bcryptjs');


var User = {

createUser: (newUser, callback) =>
{
     bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            return db.query('INSERT INTO login (name, email, username, password) VALUE (?, ?, ?, ?)',[newUser.name, newUser.email, newUser.username, newUser.password],
                callback);
        });
    });
},

getUserByUsername: (username, callback) =>
{
    return db.query('SELECT * FROM login WHERE username = ?', [username], callback);
},

getUserById:(id, callback)=>
{
    return db.query("SELECT * FROM login WHERE id = ? ",[id], callback);
},

comparePassword: (candidatePassword, hash, callback)=>
{
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
            if(err) throw err;
            callback(null, isMatch);
	    });
    },

    getCaseByName: (name, callback) =>
    {
        return db.query('SELECT * FROM kriminalprocess where apsudzetais = ?',[name], callback);
    },

};

module.exports = User;
