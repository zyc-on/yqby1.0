const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())

const router = new Router()

router.post('/test/:id/detail', async (ctx, next) => {
    const id = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body

    console.log(id,query,headers,body);
    

})
app.use(router.routes())

app.listen(3000)
