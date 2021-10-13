const BuhBuh = require('../schemas/buhbuh');

module.exports = {
    addAction: async (req, res) => {
        const username = req.body.username;
        const name = req.body.name;
        const country_code = req.body.country_code;
        const start_date = req.body.start_date;


        BuhBuh.findOne({username}).exec((error, rawUser) => {
            if (error) {
                return res.status(405).json(error)
            }

            if (rawUser) {
                const newActions = rawUser.actions;
                newActions.push({date: req.body.date, action: req.body.action});

                rawUser.actions = newActions;

                rawUser.save( (saveError, updatedUser) => {
                    if (saveError) {
                        return res.status(405).json(saveError)
                    }

                    updatedUser = updatedUser.toJSON();

                    return res.status(200).json(updatedUser)
                });
            }
            else {
                const newUser = {
                    username,
                    name
                    country_code,
                    start_date: req.body.date,
                    actions: [{date: req.body.date, action: req.body.action}]
                }

                BuhBuh.create(newUser, (error, createdUser) => {
                    if (error) {
                        return res.status(405).json(error);
                    }
                    return res.status(201).json(createdUser);
                })
            }
        })
    }
}
