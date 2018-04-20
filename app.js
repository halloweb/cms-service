const Koa = require('koa')
const app = new Koa()
const router = require('./app/router')
const colors = require('colors')
const logger = require('koa-logger')
const reqInfo = require('./app/middleware/reqInfo')
const config = require('./config')
const bodyparser = require('koa-bodyparser')
const views = require('koa-views')
const onerror = require('koa-onerror')
const session = require('koa-session');
// const RedisStore = require('koa2-session-redis');
// error handler
app.keys = ['some secret hurr'];
onerror(app)
// 加载路由中间件
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(require('koa-static')(__dirname + '/app/public'))
// app.use(views(__dirname + '/app/views', {
//     extension: 'ejs'
//   }))
app.use(reqInfo())
//session
app.use(session(config.SESSION, app))
// app.use(logger())
app.use((ctx, next) => {
    if (ctx.path === '/favicon.ico') return;
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    next()
})
//router
app.use(router.routes()).use(router.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });
  
app.listen(config.dev_port)
console.log(`service is starting at port ${config.dev_port}`.green)