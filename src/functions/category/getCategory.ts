import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handlers/getCategoryHandler.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'category/{categoryId}'
      }
    }
  ]
};
