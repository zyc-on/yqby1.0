const { Sequelize, Model } = require('sequelize')
const bcrypt = require('bcryptjs')
const { UserVerifyException } = require('../core/http-exception')
const { sequelize } = require('../core/db')

class User extends Model {
    static async verifyUser(account, password) {
        const user = await User.findOne({ where: { account } })
        if (!user) {
            throw new UserVerifyException()
        }
        const correct = bcrypt.compareSync(password, user.password)
        if (!correct) {
            throw new UserVerifyException()
        }
        return user
    }
}

User.init({

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    account: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        set(val) {
            const salt = bcrypt.genSaltSync(10)
            const pwd = bcrypt.hashSync(val, salt)
            this.setDataValue('password', pwd)
        }
    },
    username: Sequelize.STRING,
    sex: Sequelize.BOOLEAN,
    avatar: Sequelize.STRING,
    school: Sequelize.STRING,
    location: Sequelize.STRING,
    motto: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User

