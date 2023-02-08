import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handlers/getProductsHandler.handler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products'
      }
    }
  ]
};
