import auth from 'basic-auth';
import User from './models/user';
import { baseApi } from './config';
// Export a function that takes the router
export default router => {
  // Set a prefix of our api, in this case api
  router.prefix('/' + baseApi);

  // POST Sign Up (register).
  router.post('/signup', async (ctx, next) =>
    ctx.body = await new User(ctx.request.body).save());

  // GET Sign In (login).
  router.get('/signin', async(ctx) => {
    const credentials = auth(ctx);
    if (!credentials || credentials.name !== 'john' || credentials.pass !== 'secret') {
      ctx.status = 401
      ctx.response.set('WWW-Authenticate', 'Basic realm="backfriend"')
      ctx.body = { error: true, message: 'Access denied' };
    } else {
      ctx.body = { success: true, message: 'Access granted' };
    }
  });

  // GET /api/user
  router.get('/user', async(ctx) =>
    ctx.body = await User.find());

  return router;
}
