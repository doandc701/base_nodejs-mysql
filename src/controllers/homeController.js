import connection from '../config/database.js';
import { getAllUsersServices, getUsersByIdServices, updateUsersByIdServices, deleteUsersByIdServices } from '../services/CRUD.services.js';

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
    return res.render('./home/edit.ejs', {
        userEdit: inforUser
    });
};

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    const sqlQuery = `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`;
    const [rows, fields] = await connection.query(sqlQuery, [email, name, city]);
    return res.redirect('/');
};

const putUpdateUser = async (req, res) => {
    const { email, name, city } = req.body;
    const { userId } = req.params;
    const sqlQuery = `UPDATE Users SET email= ?, name= ?, city= ? WHERE id= ?`;
    const resultEdit = await updateUsersByIdServices(sqlQuery, [email, name, city, userId]);
    return res.redirect('/');
};

const deleteUser = async (req, res) => {
    const { userId } = req.params;
    const sqlQuery = `DELETE FROM Users WHERE id= ?`;
    const resultDelete = await deleteUsersByIdServices(sqlQuery, [userId]);
    return res.redirect('/');
};

export { getHomePage, getCreateUserPage, getUpdateUserPage, postCreateUser, putUpdateUser, deleteUser }; // Export the getHomePage function to be used in src/routes/web.js
