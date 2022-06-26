const url = "";
let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'shirpur',
    port: 3306
};
const mysql = require('mysql2');
const connection = mysql.createConnection(dbparams);
console.log("db started");


let itemno = '3';  //assume this came from http request
let itemname = 'pencil';
let price = '55';
let category = 'drawing';

connection.query('insert into item(itemno,itemname,price,category) values (?,?,?,?)', [itemno, itemname, price, category],
    (err, res1) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res1.affectedRows)

        }
    }
);