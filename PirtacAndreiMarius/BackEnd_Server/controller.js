const { json } = require('express');

function connectToDataBase() {
    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'parolapaw',
        database: 'paw'
    });
    
    con.connect((err) => {
        if (err) {
            console.log('Eroare la conectare: ', err);
            return;
        }
        console.log('M-am conectat, poggers!');
          
    });

    return con;
}

function getWishListFromUser(_req, res) {
    const con = connectToDataBase();
    

    con.query('SELECT * FROM wishlist', (err, rows) => {
        if (err) console.log("Eroare la select: ", err);
        var objs = [];
        for (var i = 0;i < rows.length; i++) {
            objs.push({user: rows[i].user, game: rows[i].game, id: rows[i].id});
        }
       
        res.send(JSON.stringify(objs));
    });

    con.end((err) => { if (err) console.log("Eroare la inchidere: ",err)});
}


function editItemFromUser(req, res) {
    const con = connectToDataBase();

    const { id } = req.params;
    const { game } = req.params;

    con.query(`UPDATE wishlist SET game='${game}' WHERE id=${id};`, (err, rows) => {
        if (err) console.log("Eroare la select: ",err);
        res.send(rows);
    });
}

module.exports = { getWishListFromUser, editItemFromUser};