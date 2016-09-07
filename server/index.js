import 'babel-polyfill';
import koaBody from 'koa-body';
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

app
	// Logger middleware
  .use(logger())
	// Parse JSON body request
	.use(koaBody({ multipart: true, formidable:{ uploadDir: __dirname + '/uploads', multiples: false }}))
	// Print ctx in any request
	.use(async function(ctx, next) { 
    console.log(ctx);
    return await next();
  })
	// Serve static files (images uploaded)
	.use(serve(__dirname + '/uploads'))
	// JSON Web Tokens (Auth Bearer, except path urls)
	.use(jwt({ secret: secretKey }).unless({ path: ['/api/signin', '/api/signup', '/', new RegExp('/uploads.*/', 'i')] }))
	// Assigns routes
	.use(router.routes())
	.use(router.allowedMethods())

	// Response
	app.use(ctx => {
	  ctx.body = 'RESTful API server running...';
	});

app.listen(port, () => console.log('The server is running at port ' + port))
