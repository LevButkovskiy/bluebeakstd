const mongoose = require('mongoose');

const buhbuhSchema = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String},
    country_code: {type: String},
    start_date: {type: Number},
    actions: [{date: String, action: String}],
})

module.exports = mongoose.model('BuhBuh', buhbuhSchema);
