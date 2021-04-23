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

app.get('/', (req, res) => {

    const connection = mysql.createConnection(config);
    connection.query(`insert into peoples(name) values('Jeferson Almeida');`);

    let ul = '';
    let li = '';

    const result = connection.query("select * from peoples", (err, data) => {
        console.log(data);
        if (data && data.length) {
            data.map(element => {
                li += `<li>${element.id} - ${element.name}</li>`;
            });
            ul = `<ul>${li}</ul>`;
        }
        res.send(`<h1>Full Cycle Rocks!</h1>${ul}`);
    });
    connection.end();

});

app.listen(port, () => console.log(`Rodando na porta ${port}`));