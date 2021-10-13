const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const bcrypt = require('bcrypt');

const Users = require('../mongo/schemas/users');
const BuhBuh = require('../mongo/schemas/buhbuh');

const adminBro = new AdminBro({
    resources: [ Users, BuhBuh ],
    rootPath: '/admin',
    branding: {
        companyName: 'BlueBeak.std',
    },
});

module.exports = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    authenticate: async (login, password) => {
        return true;
        const user = await Users.findOne({login})
        if (user) {
            const matched = await bcrypt.compare(password, user.encryptedPassword)
            if (matched) {
                return user
            }
            else {
                return user
            }
        }
        return false;
    },
    cookiePassword: 'session Key'
})
