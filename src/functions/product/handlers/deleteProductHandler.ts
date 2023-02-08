import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import productService from "../services";
import { middyfy } from "@libs/lambda";

const product: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const productId: string = event.pathParameters.productId;

  try {
    const product = await productService.deleteProduct(productId);

    return formatJSONResponse(201, product);
  } catch (err) {
    return formatJSONResponse(400, err);
  }
};

export const handler = middyfy(product);