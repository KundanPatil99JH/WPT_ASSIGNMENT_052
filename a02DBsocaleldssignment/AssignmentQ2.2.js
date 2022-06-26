const url = "";
let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'shirpur',
    port: 3306
}; // change port to 3306 that may be the port mostly.
const mysql = require('mysql2');
const connection = mysql.createConnection(dbparams);
console.log("db started");


let itemno = '3';
let price = '20';
let category = 'for signature';

connection.query('update item set category=?,price=? where itemno=?', [category, price, itemno],
    (err, res1) => {
        if (err) {
            console.log(err);
        } else {
            if (res1.affectedRows === 0) {
                console.log("update failed");
            }
            else
                console.log("update suceeded");

        }
    }
);