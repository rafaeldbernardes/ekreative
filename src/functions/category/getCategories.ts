import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handlers/getCategoriesHandler.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'categories'
      }
    }
  ]
};
