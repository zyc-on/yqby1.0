const Router = require('koa-router')
const Body = require('koa-body')
const { User, Category, SubCategory, Goods } = require('../../../core/db')
const Auth = require('../../../middlewares/auth')

const router = new Router({
    prefix: '/goods'
})

router.use(Body({
    multipart: true,
    formidable: {
        uploadDir: process.cwd() + '/static/images/goods',
        keepExtensions: true
    }

}))


router.post('/add/images', async (ctx) => {

    const url = ctx.request.files.file.path.split('static')[1].split("\\").join('/')

    ctx.body = url

    // console.log(ctx.request.files.file.path);

    // ctx.body = {
    //     url: ctx.request.files.file.path.split('static')[1],
    //     url2: "http://localhost:3000/avatar/112.jpg",
    // }


})


router.get('/test', new Auth(8).m, async (ctx, next) => {
    ctx.body = ctx.auth.id
})

router.post('/add', async (ctx) => {
    let goods = ctx.request.body
    // const res = await Goods.create(goods)
    ctx.body = res
})


module.exports = router