import categorySchema from './schema/categorySchema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handlers/createCategoryHandler.handler`,
  events: [
    {
      http: {
        method: 'post',
        path: 'category',
        request: {
          schemas: {
            'application/json': categorySchema,
          },
        },
      },
    },
  ],
};
