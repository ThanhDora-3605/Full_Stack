import mysql from "mysql2/promise";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dora_db",
  password: "306205",
  port: 3307,
});


// ORM: Object Relational Mapping
// ánh xạ giữa object và database