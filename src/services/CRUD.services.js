import connection from '../config/database.js';

const getAllUsersServices = async (sqlQuery) => {
    const [rows, fields] = await connection.execute(sqlQuery);
    return rows;
};

const getUsersByIdServices = async (sqlQuery, values) => {
    const [rows, fields] = await connection.execute(sqlQuery, values);
    return rows;
};

export { getAllUsersServices, getUsersByIdServices }; // Export the getAllUsers function to be used in src/services/CRUD.services.js
