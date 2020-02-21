let Message = {}
Message.install = function (Vue, options) {
    let opts = {
        type: 'success',
        duration: '1500'
    }

    for (let prop in options) {
        opts[prop] = options[prop]
    }

    Vue.prototype.$message = (message, type) => {
        if (type) {
            opts.type = type
        }

        let msgTemplate = Vue.extend({
            template: `<div class="vue-message message-${opts.type}"></div>`
        })
        let tpl = new msgTemplate().$mount().$el
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild(tpl)
        }, opts.duration)
    }

    ['success', 'warning', 'error'].forEach(type => {
        Vue.prototype.$message[type] = (message=>{
            return Vue.prototype.$message(message,type)
        })
    })

}
export {
    Message
}