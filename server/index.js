import 'babel-polyfill';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import Router from 'koa-router';
import { port, mongodbUri } from './config'
import routing from './routes';
import Koa from 'koa';

// Connect to Mongodb
mongoose.connect(mongodbUri);
mongoose.connection.on('error', console.error);

// Applies all routes to router
const router = routing(Router());
// Create the app
var app = new Koa();

app
  .use(logger()) // Logger middleware
  .use(bodyParser()) // Parse JSON body request
	.use(async function(ctx, next) { // Print ctx in any request
    console.log(ctx);
    return await next();
  })
	.use(router.routes()) // Assigns routes
	.use(router.allowedMethods())

	// Response
	app.use(ctx => {
	  ctx.body = 'RESTful API server running...';
	});

app.listen(port, () => console.log('The server is running at port ' + port))
