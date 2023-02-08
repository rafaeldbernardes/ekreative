import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import categoryService from "../../category/services";
import { middyfy } from "@libs/lambda";

const category: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  try {
    const categories = await categoryService.getAllCategories();

    return formatJSONResponse(201, categories);
  } catch (err) {
    return formatJSONResponse(400, err);
  }
};

export const handler = middyfy(category);