import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handlers/getProductHandler.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'product/{productId}'
      }
    }
  ]
};
