import mysql from "mysql";
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password",
  database: "cat_to_be_adopted",
});

const sql = con.connect(function (err) {
  if (err) throw err;
  console.log("Successfully connected to the mysql database.");
});

export { sql, con };
