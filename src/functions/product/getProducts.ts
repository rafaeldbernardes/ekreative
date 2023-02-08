import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/getProductsHandler.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products'
      }
    }
  ]
};
