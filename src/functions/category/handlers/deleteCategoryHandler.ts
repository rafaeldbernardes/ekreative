import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import categoryService from "../../category/services";
import { middyfy } from "@libs/lambda";

const category: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const categoryId: string = event.pathParameters.categoryId;

  try {
    const category = await categoryService.deleteCategory(categoryId);

    return formatJSONResponse(201, category);
  } catch (err) {
    return formatJSONResponse(400, err);
  }
};

export const handler = middyfy(category);