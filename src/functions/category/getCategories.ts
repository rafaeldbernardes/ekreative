import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/getCategoriesHandler.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'categories'
      }
    }
  ]
};
