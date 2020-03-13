const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const { UserVerifyException } = require('../core/http-exception')

class User extends Sequelize.Model {

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

    static associate(models){
        this.hasMany(models.Goods)
    }


    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },

                account: {
                    type: DataTypes.STRING,
                    unique: true
                },
                password: {
                    type: DataTypes.STRING,
                    set(val) {
                        const salt = bcrypt.genSaltSync(10)
                        const pwd = bcrypt.hashSync(val, salt)
                        this.setDataValue('password', pwd)
                    }
                },
                username: DataTypes.STRING,
                sex: DataTypes.BOOLEAN,
                avatar: DataTypes.STRING,
                school: DataTypes.STRING,
                location: DataTypes.STRING,
                motto: DataTypes.STRING,
            }, {
            sequelize,
            modelName: 'user'
        }
        )
    }


}


module.exports = User

