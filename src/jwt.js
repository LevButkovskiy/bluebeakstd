const jwt = require('jsonwebtoken');

const AUTH_SECRET = 'secret';

const getToken = (login) => {
    return jwt.sign({login: login}, AUTH_SECRET, { expiresIn: '1h' })
}

const verifyToken = (token) => new Promise((resolve, reject) => {
    if (!token) {
        reject({code: "ERROR_TOKEN_MISSING", message: 'No token'});
    }

    try {
        const decoded = jwt.verify(token, AUTH_SECRET);
        if (decoded) {
            resolve(true);
        }
        else {
            reject({code: "ERROR_JWT", message: 'Token has expired'});
        }
    }
    catch (jwtError) {
        reject({code: "ERROR_JWT", message: jwtError.message})
    }
});

module.exports = {
    getToken,
    verifyToken
}
