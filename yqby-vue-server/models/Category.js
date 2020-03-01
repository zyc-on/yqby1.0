const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    sub: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'SubCategory' }],
})
module.exports = mongoose.model('Category', schema)