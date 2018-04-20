const createModel = require('../model/create')
module.exports = {
	index() {
       return async (ctx, next) => {
		       ctx.body = "hello koa"
		        await createModel();
       			
       	}
	}
}











