
const Router = require('koa-router')
const Body = require('koa-body')

const Auth = require('../../../middlewares/auth')
const { HttpException, ParameterException, Success } = require('../../../core/http-exception')
const { PositiveIntValidator, LoginValidator, RegisterValidator } = require('../../validators/validator')
const { User, Category, SubCategory } = require('../../../core/db')
const { generateToken } = require('../../lib/token')

const router = new Router({
    prefix: '/user'
})

router.use(Body({
    multipart: true,
    formidable: {
        uploadDir: process.cwd() + '/static/avatar',
        keepExtensions: true
    }
}))




router.post('/login', async (ctx, next) => {

    const v = await new LoginValidator().validate(ctx)
    const token = await login(v.get('body.account'), v.get('body.password'))
    ctx.body = {
        token
    }
})
const login = async (account, password) => {
    const user = await User.verifyUser(account, password)
    return generateToken(user.id, Auth.USER)
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


router.post('/test', async (ctx) => {
    // const res = await SubCategory.create({
    //     name: 'apple1',
    //     category_id: 1
    // })

    // const res = await Category.findAll({
    //     include: [{ model: SubCategory }]
    // })




    const sc = await SubCategory.create({
        name: '计算机2',
        categoryId: 1
    })


    ctx.body = sc

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