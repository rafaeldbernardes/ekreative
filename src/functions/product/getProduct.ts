import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/getProductHandler.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'product/{productId}'
      }
    }
  ]
};
