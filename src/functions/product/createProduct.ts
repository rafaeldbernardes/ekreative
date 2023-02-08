import productSchema from './schema/productSchema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handlers/createProductHandler.handler`,
  events: [
    {
      http: {
        method: 'post',
        path: 'product',
        request: {
          schemas: {
            'application/json': productSchema,
          },
        },
      },
    },
  ],
};
