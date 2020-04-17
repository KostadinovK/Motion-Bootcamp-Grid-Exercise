module.exports = {
    development: {
        port: process.env.PORT || 5000,
        connectionString: 'mongodb://localhost:27017/grid',
        secret: 'super hidden and awesome secret',
        jwtExpiringTime: '1h',
        authCookieName: 'auth_cookie'
    },
    production: {}
};