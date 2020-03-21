const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const { UserVerifyException } = require('../core/http-exception')

class Admin extends Sequelize.Model {

    static async verifyAdmin(account, password) {
        const admin = await Admin.findOne({ where: { account } })
        if (!admin) {
            throw new UserVerifyException()
        }
        const correct = bcrypt.compareSync(password, admin.password)
        if (!correct) {
            throw new UserVerifyException()
        }
        return admin
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

            }, {
            sequelize,
            modelName: 'admin'
        }
        )
    }


}


module.exports = Admin