const mysql = require("mysql2/promise");

exports.GetUser = async (req, res) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bootcamp",
  });
  let [rows] = await connection.execute("SELECT * FROM users ");
  res.json(rows);
};

exports.GetUser = async (req, res) => {
    let {id}=req.params;
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bootcamp",
  });
  let [rows] = await connection.execute("SELECT * FROM users  where id = ?", [id]);
  res.json(rows);
};

exports.GetUserByFilter = async (req, res) => {
    let {name}= req.params
    const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bootcamp",
  });
  let [rows] = await connection.execute("SELECT * FROM users where name = ?", [name]);
  res.json(rows);
};
