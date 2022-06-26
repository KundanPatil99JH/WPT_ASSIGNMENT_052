const express = require('express');
const app = express();
const mysql = require('mysql2');
app.use(express.static('sf'));

let dbConnect = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'shirpur',
    port: 3306
};

const conn = mysql.createConnection(dbConnect);
console.log('Lets do some adventures');

app.get("/accountBalance", (req, resp) => {
    let accntno = req.query.input;
    console.log(accntno);
    let output = { status: false, accntdetails: { accntno: 0, bal: 0 } };
    conn.query('select balance from passbook where accountno=?', [accntno],
        (error, rows) => {
            console.log(rows);
            if (error) {
                console, log('error in fetching data from database');
            } else {
                if (rows.affectedRows > 0) {
                    output.status = true;
                    output.accntdetails = rows[0];
                }
                console.log(output);
                resp.send(rows);
            }
            console.log('output send');

        });

});

app.listen(9090, () => {
    console.log('server is listening at 9090...');
});