import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import productService from "../services";
import CreateProduct from "@functions/product/schema/productSchema";
import { middyfy } from "@libs/lambda";
import * as uuid from "uuid";

const product: ValidatedEventAPIGatewayProxyEvent<typeof CreateProduct> = async (event) => {
  const { name, description, price } = event.body;

  try {
    const productId: string = uuid.v4();

    const product = await productService.createProduct({
      productId,
      name,
      description,
      price,
      images: ''
    });

    return formatJSONResponse(201, product);
  } catch (err) {
    return formatJSONResponse(400, err);
  }
};

export const handler = middyfy(product);