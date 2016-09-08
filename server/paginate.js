import User from './models/user';
import Post from './models/post';

// Pagination Middleware
export default async function (ctx, next) {
	// Detect GET method
	if (ctx.request.method === 'GET') {
		const models = {'user': User, 'post': Post};
		var model = null
		// Is any models in app?
		for (var i in models) {
			// Detect model in URL, can better
			if (ctx.request.url.indexOf(i) >= 0) {
				model = models[i];
			}
		}
		// Paginate model if exist, add to request
		if (model) {
			// Catch parameters on query
			var query = ctx.query;
			var limit = 10;
			var offset = 0;
			// Limit parameter
			if (query.hasOwnProperty('limit')) {
				limit = query.limit > 0 ? Number(query.limit) : limit;
				delete query.limit;
			}
			// Offset parameter
			if (query.hasOwnProperty('offset')) {
				offset = Number(query.offset);
				delete query.offset;
			}
			// Execute query and add as property to request
			const docs = await model.paginate(query, {limit: limit, offset: offset});
			ctx.request['paginate'] = docs;
		}
	}

	await next();
}
