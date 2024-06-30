const jwt = require('jsonwebtoken');

const generateTokenSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_KEY, {
        expiresIn: '15d'
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevents XSS attacks
        secure: process.env.NODE_ENV !== 'developement',
        sameSite: 'strict' // prevents CSRF attacks
    })
}

module.exports = generateTokenSetCookie;