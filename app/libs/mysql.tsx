import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,

})

pool.on('acquire', function (connection) {
    console.log('Connection %d acquired', connection.threadId);
  });
  
  pool.on('enqueue', function () {
    console.log('Waiting for available connection slot');
  });
  
  pool.on('release', function (connection) {
    console.log('Connection %d released', connection.threadId);
  });

export default pool