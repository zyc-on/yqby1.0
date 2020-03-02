const requireDir = require('require-directory')
const Router = require('koa-router')

class InitManager {

    static initCore(app) {
        InitManager.app = app
        InitManager.loadRouters()
        // InitManager.loadConfig()
    }

    static loadRouters() {
        const dir = `${process.cwd()}/app/api`
        requireDir(module, dir, { visit: whenLoadModule })

        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }

    // static loadConfig() {
    //     const dir = process.cwd() + '/config/config.js'
    //     const config = require(dir)
    //     global.config = config
    // }
}

module.exports = InitManager