import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import productService from "../services";
import { middyfy } from "@libs/lambda";

const product: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  try {
    const products = await productService.getAllProducts();

    return formatJSONResponse(201, products);
  } catch (err) {
    return formatJSONResponse(400, err);
  }
};

export const handler = middyfy(product);