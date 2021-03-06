const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
});


connection.connect((err) => {
    if (err) {
        console.error(`Error connecting to DB: ${err.stack}`);
        return;
    }
    console.log(`Connected to DB with ID ${connection.threadId}`);
});


module.exports = connection;