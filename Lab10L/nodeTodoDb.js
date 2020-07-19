const mysql = require('mysql');

// fill in your db credentials
const config = {
  host: "dbserver.engr.scu.edu",
  user: "",
  password: "",
  database: "sdb_"
};

exports.addTodo = function (sessionId, todo, callback) {
  const con = mysql.createConnection(config);
  // call con.connect();
};

exports.getTodos = function (sessionId, callback) {
  const con = mysql.createConnection(config);
  // call con.connect();  
};