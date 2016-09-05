import 'babel-polyfill';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import serve from 'koa-static';
import Router from 'koa-router';
import jwt from 'koa-jwt';
import { port, mongodbUri, secretKey } from './config'
import routing from './routes';
import Koa from 'koa';

// Connect to Mongodb
mongoose.connect(mongodbUri);
mongoose.connection.on('error', console.error);

// Applies all routes to router
const router = routing(Router());
// Create the app
var app = new Koa();
console.log(__dirname);

app
  .use(logger()) // Logger middleware
  .use(bodyParser()) // Parse JSON body request
	.use(async function(ctx, next) { // Print ctx in any request
    console.log(ctx);
    return await next();
  })
	.use(serve(__dirname + '/uploads'))
	.use(jwt({ secret: secretKey }).unless({ path: ['/api/signin', '/api/signup', '/', new RegExp('/uploads.*/', 'i')] }))
	.use(router.routes()) // Assigns routes
	.use(router.allowedMethods())

	// Response
	app.use(ctx => {
	  ctx.body = 'RESTful API server running...';
	});

app.listen(port, () => console.log('The server is running at port ' + port))
