import mysql from 'mysql'

const DB_CONNECTION = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '0000',
    database: 'dbxadrez'
})

DB_CONNECTION.connect()

export default DB_CONNECTION