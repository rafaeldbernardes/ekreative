import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/deleteProductHandler.handler`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'product/{productId}'
      }
    }
  ]
};
