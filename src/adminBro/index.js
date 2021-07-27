const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const bcrypt = require('bcrypt');

const User = require('../mongo/schemas/user');

const adminBro = new AdminBro({
    resources: [ User ],
    rootPath: '/admin',
    branding: {
        companyName: 'BlueBeak.std',
    },
});

module.exports = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    authenticate: async (login, password) => {
        const user = await User.findOne({login})
        if (user) {
            const matched = await bcrypt.compare(password, user.encryptedPassword)
            if (matched) {
                return user
            }
        }
        return false;
    },
    cookiePassword: 'session Key'
})
