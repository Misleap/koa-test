var fn_index = async(ctx, next) => {
	ctx.response.body = `<h1>login panel</h1>
		<form action="/login" method="POST">
			username:<input type="text" name="username"></input><br>
			password:<input type="password" name="password"></input><br>
			<input type="submit" value="Submit"></input>
		</form>
	`;
};

var fn_login = async(ctx, next) => {
	var name = ctx.request.body.username || '',
		password = ctx.request.body.password || '';
	console.log(`login with name:${name}, password:${password}`);
	if (name === 'koa' && password === '123') {
		ctx.response.body = `<h2>welcome, ${name}</h2>`;
	} else {
		ctx.response.body = `<h2>login failed!</h2>
		<p><a href="/">Try Again</a></p>`;
	}
};


module.exports = {
	'GET /': fn_index,
	'POST /login': fn_login
};