const Router = require('koa-router')

const Auth = require('../../../middlewares/auth')

const router = new Router({
    prefix: '/goods'
})

router.get('/test', new Auth(8).m, async (ctx, next) => {
    ctx.body = ctx.auth.id
})


module.exports = router