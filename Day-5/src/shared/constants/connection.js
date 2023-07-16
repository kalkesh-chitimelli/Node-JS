import mysql from "mysql2";

export var con = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "mobmac12",
    database: "office",
  })
  .promise();
