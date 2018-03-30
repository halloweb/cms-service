
const Router = require('koa-router')
const controller = require('../controller')
const home = new Router();
home.get('/', controller.index());

const router = new Router();
router.use('/', home.routes(), home.allowedMethods())

module.exports = router