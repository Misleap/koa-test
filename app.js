// var koa = require('koa');
// var app = koa();

const Koa = require('koa');

//注意返回的是函数
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const controller = require('./controller');


app.use(bodyParser());

app.use(controller());



app.listen(3000);
console.log('app started at port 3000...');