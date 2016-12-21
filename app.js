// var koa = require('koa');
// var app = koa();

const Koa = require('koa');

//注意返回的是函数
const router = require('koa-router')();
// const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(async(ctx, next) => {
	await next();	//next 是koa传入的将要处理的下一个异步函数
	// ctx.response.type = 'text/html';
	// ctx.response.body = '<h2>Hello, KOA2</h2>'
	console.log(`${ctx.request.method} ${ctx.request.url}`);
	console.log(`${ctx.response.status}`);
});

router.get('/hello/:name', async(ctx, next) => {
	var name = ctx.params.name;
	ctx.response.body = `<h1>HELLO, ${name}</h1>`;
});

router.get('', async(ctx, next) => {
	ctx.response.body = `<h1>hello, man</h1>`;
});

app.use(router.routes());	//add router middleware

app.listen(3000);
console.log('app started at port 3000...');