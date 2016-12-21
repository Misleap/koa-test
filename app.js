// var koa = require('koa');
// var app = koa();

const Koa = require('koa');

//注意返回的是函数
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());
app.use(async(ctx, next) => {
	await next();	//next 是koa传入的将要处理的下一个异步函数
	// ctx.response.type = 'text/html';
	// ctx.response.body = '<h2>Hello, KOA2</h2>'
	console.log(`${ctx.request.method} ${ctx.request.url}`);
	console.log(`${ctx.response.status}`);
});

router.get('/', async(ctx, next) => {
	ctx.response.body = `<h1>login panel</h1>
		<form action="/login" method="POST">
			username:<input type="text" name="username"></input><br>
			password:<input type="password" name="password"></input><br>
			<input type="submit" value="Submit"></input>
		</form>
	`;
});

router.post('/login', async(ctx, next) => {
	var name = ctx.request.body.username || '',
		password = ctx.request.body.password || '';
	console.log(`login with name:${name}, password:${password}`);
	if (name === 'koa' && password === '123') {
		ctx.response.body = `<h2>welcome, ${name}</h2>`;
	} else {
		ctx.response.body = `<h2>login failed!</h2>
		<p><a href="/">Try Again</a></p>`;
	}
});



app.use(router.routes());	//add router middleware

app.listen(3000);
console.log('app started at port 3000...');