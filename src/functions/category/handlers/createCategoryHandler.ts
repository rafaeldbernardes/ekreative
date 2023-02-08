import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import categoryService from "../../category/services";
import CreateCategory from "@functions/category/schema/categorySchema";
import { middyfy } from "@libs/lambda";
import * as uuid from "uuid";

const category: ValidatedEventAPIGatewayProxyEvent<typeof CreateCategory> = async (event) => {
  const { name, description, price } = event.body;

  try {
    const categoryId: string = uuid.v4();

    const category = await categoryService.createCategory({
      categoryId,
      name,
      description,
      price,
      images: ''
    });

    return formatJSONResponse(201, category);
  } catch (err) {
    return formatJSONResponse(400, err);
  }
};

export const handler = middyfy(category);