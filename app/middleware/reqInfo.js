module.exports = () => {
	async (ctx, next) {
		let startTime = new Date().getTime();
        await next();
        let endTime = new Date().getTime();
        let time = endTime - startTime;
		console.log(`${ctx.url} ${time}ms`)
	}
}