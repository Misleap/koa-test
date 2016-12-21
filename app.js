// var koa = require('koa');
// var app = koa();

// app.use('/test', function);
const Koa = require('koa');

const app = new Koa();

app.use(async(ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h2>Hello, KOA2</h2>'
	console.log(`${ctx.request.method} ${ctx.request.url}`);
	console.log(`${ctx.response.status}`);
	// console.log('${ctx.request.method} ${ctx.request.url}');

});

//next 是koa传入的将要处理的下一个异步函数

app.listen(3000);
console.log('app started at port 3000...');