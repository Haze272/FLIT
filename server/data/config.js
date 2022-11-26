const mysql = require("mysql2");
let dbuser = require('./dbuser.json');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: dbuser.user,
    database: "flit_db",
    password: dbuser.password
});

module.exports = pool;
