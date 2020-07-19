const mysql = require('mysql');
const config = {
  host: "dbserver.engr.scu.edu",
  user: "",
  password: "",
  database: "sdb_"
};
//it takes a while for the page to load the old session when refreshing
exports.addTodo = function (sessionId, todo, callback) {
  const con = mysql.createConnection(config);
  con.connect(err => {
    if (err) {
      return callback(err);
    }
    const sql = "INSERT INTO Todos (description, sessionId) VALUES (?, ?)";
    con.query(sql, [todo, sessionId], err => {
      callback(err);
      con.end();
    });
  });
};
exports.getTodos = function (sessionId, callback) {
  const con = mysql.createConnection(config);
  con.connect(err => {
    if (err) {
      return callback(err);
    }
    const sql = 'SELECT * FROM Todos WHERE sessionId = ?';
    con.query(sql, [sessionId], (err, results, fields) => {
      callback(err, results);
      con.end();
    });
  });
};