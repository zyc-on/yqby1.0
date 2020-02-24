const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    pics: [{ type: String }],
    oprice: { type: Number },
    price: { type: Number },
    rate: { type: Number },
    description: { type: String },
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    uid: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
})
module.exports = mongoose.model('Goods', schema)