
const Router = require('koa-router')


const { HttpException, ParameterException, Success } = require('../../../core/http-exception')
const { PositiveIntValidator, LoginValidator, RegisterValidator } = require('../../validators/validator')
const User = require('../../../models/User')

const router = new Router({
    prefix: '/user'
})


router.post('/login', async (ctx, next) => {

    const v = await new LoginValidator().validate(ctx)
    const res = await login(v.get('body.account'),v.get('body.password'))
    ctx.body = {
        token: '2333'
    }
})
const login = async (account, password) => {
    const user = await User.verifyUser(account, password)
}

router.post('/register', async (ctx) => {

    const v = await new RegisterValidator().validate(ctx)

    const user = {
        account: v.get('body.account'),
        password: v.get('body.password')
    }

    const r = await User.create(user)
    throw new Success('注册成功')
})


// router.get('/test', async (ctx, next) => {
//     const error = new ParameterException()
//     throw error

//     ctx.body = {
//         key: 'user'
//     }

// })

// router.post(':id/detail', async (ctx, next) => {
//     const v = await new PositiveIntValidator().validate(ctx)
//     console.log(v.get('path.id'));
//     console.log(v.get('path.id'), parsed = false);
//     console.log(v.get('header'));
//     ctx.body = 'success'

// })

module.exports = router