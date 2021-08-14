const Users = require('../schemas/users');
const bcrypt = require('bcrypt');
const { getToken } = require('../../jwt');

module.exports = {
    authenticateUser: async (req, res) => {
        const login = req.body.login;
        const password = req.body.password

        Users.findOne({login}).exec((error, rawUser) => {
            if (error) {
                return res.status(405).json(error)
            }

            const user = rawUser.toJSON();

            bcrypt.compare(password, user.encryptedPassword, (err, result) => {
                if (result) {
                    const token = getToken(user.login)
                    user.token = token;
                    return res.status(200).json(user);
                }
                else {
                    return res.status(403).json('Wrong password');
                }
            })
        })
    }
}