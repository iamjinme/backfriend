import 'babel-polyfill';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import { port, mongodbUri } from './config'
import Koa from 'koa';

// Connect to Mongodb
mongoose.connect(mongodbUri);
mongoose.connection.on('error', console.error);

var app = new Koa();

app
  .use(logger())
  .use(bodyParser())

	// Response
	app.use(ctx => {
	  ctx.body = 'Hello Koa';
	});

app.listen(port, () => console.log('The server is running at port ' + port))
