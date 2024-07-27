import connection from '../config/database.js';

const getHomePage = (req, res) => {
    // let users = [];
    // connection.query('SELECT * FROM Users', (err, rows) => {
    //     if (err) {
    //         console.log('Error: ', err);
    //         return;
    //     }
    //     console.log('Data received from Db:');
    //     console.log(rows);
    //     users = rows;
    //     res.send(JSON.stringify(users));
    // });
    return res.render('./layouts/navbar.ejs');
};

const createUser = (req, res) => {
    console.log('req.body: ', req.body);
    let { email, name, city } = req.body;
    connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city], (err, results) => {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        console.log('Data inserted to Db:');
        console.log(results);
        res.redirect('/');
    });
};

export { getHomePage, createUser }; // Export the getHomePage function to be used in src/routes/web.js
