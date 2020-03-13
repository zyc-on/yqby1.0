const Koa = require('Koa')
const cors = require('@koa/cors')
const static = require('koa-static')

const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')



const app = new Koa()
app.use(cors())
app.use(static(__dirname + '/static'))

app.use(catchError)

InitManager.initCore(app)

app.listen(3000)






