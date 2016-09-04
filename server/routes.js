import { baseApi } from './config'
// Export a function that takes the router
export default router => {
  // Set a prefix of our api, in this case locations
  // const api = 'locations'
  router.prefix('/' + baseApi);

  return router;
}
