// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Maxima@2005..",
  database: "burgers_db"
});
// Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting:" + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
