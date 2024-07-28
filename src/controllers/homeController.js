import connection from '../config/database.js';
import { getAllUsersServices, getUsersByIdServices } from '../services/CRUD.services.js';

const getHomePage = async (req, res) => {
    const sqlQuery = 'SELECT * FROM Users';
    const results = await getAllUsersServices(sqlQuery);
    return res.render('./home/main.ejs', {
        listUsers: results
    });
};

const getCreateUserPage = (req, res) => {
    return res.render('./home/create.ejs');
};

const getUpdateUserPage = async (req, res) => {
    const { userId } = req.params;
    const sqlQuery = `SELECT * FROM Users WHERE id = ?`;
    const results = await getUsersByIdServices(sqlQuery, [userId]);
    const inforUser = results && results.length > 0 ? results[0] : null;
    console.log('User ID: ', inforUser);
    return res.render('./home/edit.ejs', {
        userEdit: inforUser
    });
};

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    const sqlQuery = `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`;
    const [rows, fields] = await connection.query(sqlQuery, [email, name, city]);
    console.log('Data inserted to Db:');
    console.log(rows);
    return res.redirect('/');
};

export { getHomePage, getCreateUserPage, getUpdateUserPage, postCreateUser }; // Export the getHomePage function to be used in src/routes/web.js
