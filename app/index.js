const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'node_db'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

let sql = `insert into peoples(name) values('Jeferson Almeida');`;
connection.query(sql);

sql = "select * from peoples";
let result = null;
connection.query(sql, (err, data) => result = data);
connection.end();

app.get('/', (req, res) => {
    let li = '';
    result.forEach(element => {
        li += `<li>Nome: ${element.name}</li>`;
    });

    res.send(`<h1>Full Cycle Rocks!</h1><ul>${li}</ul>`);
})
app.listen(port, () => console.log(`Rodando na porta ${port}`));