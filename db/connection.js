var mysql = require('mysql');

var connection = mysql.createPool({

  host:'localhost',
  user:'root',
  password:'',
  database:'scraper',
  port: 3306

});

module.exports = connection;
