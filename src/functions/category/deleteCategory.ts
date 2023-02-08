import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/deleteCategoryHandler.handler`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'category/{categoryId}'
      }
    }
  ]
};
