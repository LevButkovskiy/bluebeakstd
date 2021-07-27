const User = require('../schemas/user');
const bcrypt = require('bcrypt');

module.exports = {
    getUsers: async (req, res) => {
        await User.find({}, '-encryptedPassword').exec((error, users) => {
            if (error) {
                return res.status(405).json(error)
            }
            return res.status(200).json(users)
        })
    },
    createUser: async (req, res) => {
        let user = {
            login: req.body.login,
            encryptedPassword: await bcrypt.hash(req.body.password, 10),
            email: req.body.email,
            photoPath: req.body.photoPath,
            role: req.body.role,
        }

         User.create(user, (error, createdUser) => {
            if (error) {
                return res.status(405).json(error)
            }
            return res.status(201).json(createdUser)
        })
    },
    updateUser: async (req, res) => {
        let id = req.params.id;

        User.findById(id).exec((error, user) => {
            if (error) {
                return res.status(405).json(error)
            }

            if (!user) {
                return res.status(404).json(error)
            }

            user.email = req.body.email || user.email;
            user.role = req.body.role || user.role;

            user.save( (saveError, updatedUser) => {
                if (saveError) {
                    return res.status(405).json(saveError)
                }
                return res.status(200).json(updatedUser)
            });

        })
    }
}