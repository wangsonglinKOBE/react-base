const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', { //遇见/api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000', //请求转发给谁
            changeOrigin: true, //控制服务器收到的请求头中Host字段的值 Host=>查看请求发出者
            pathRewrite: { '^/api1': '' } //重写请求路径（必须）
        })
    )
}


//注意：这里用的是CommonJS,所以要使用CommonJS的语法：即const proxy = require('http-proxy-middleware')
