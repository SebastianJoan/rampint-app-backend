module.exports = {
    api:{
        port:process.env.API_PORT || 8000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql:{
        host: process.env.MYSQL_HOST || '127.0.0.1',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || 'rampint-app',
    }
}