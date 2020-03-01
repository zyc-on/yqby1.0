const config = require("../yqby-vue-server/config");
const mongoose = require("mongoose");

const CategoryModel = require('./models/Category')

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    CategoryModel.insertMany([{ name: '书籍' }, { name: '手机' }], (err, docs) => {
        console.log(err);
        console.log(docs);
    })
})



