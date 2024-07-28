import mysql from 'mysql2/promise';

// test connection
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: process.env.DB_POOL_WAIT_FOR_CONNECTIONS,
    connectionLimit: process.env.DB_POOLCONNECTION_LIMIT,
    queueLimit: process.env.DB_POOL_QUEUE_LIMIT
});

export default connection;
