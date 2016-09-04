import 'babel-polyfill';
import Koa from 'koa';

var app = new Koa();

app.use(async (ctx, next) => {
	// Called before calling the next middleware 
	console.log('going down');	
	await next();

	// Called after calling the next middleware
	console.log('going more up');
});

app.use(async (ctx, next) => {
	// Called before calling the next middleware 
	console.log('going more down');
	await next();

	// Called after calling the next middleware
	console.log('going up');
});

app.use(async (ctx) => {
	// no more next(); 
	// head back up the stack
	ctx.body = 'Hello world';
});

app.listen(3000);
