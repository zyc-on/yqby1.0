const Router = require('koa-router')

const router = new Router()

router.get('/goods', async (ctx, next) => {
    ctx.body = {
        key: 'goods'
    }
})

module.exports = router