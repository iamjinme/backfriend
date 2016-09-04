import 'babel-polyfill';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import Koa from 'koa';

var app = new Koa();

app
  .use(logger())
  .use(bodyParser())

	// Response
	app.use(ctx => {
	  ctx.body = 'Hello Koa';
	});

app.listen(3000);
