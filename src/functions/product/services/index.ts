import createDynamoDBClient from "../../../database/db";
import ProductService from "./productService";

const { PRODUCTS_TABLE } = process.env;

const productService = new ProductService(createDynamoDBClient(), PRODUCTS_TABLE);

export default productService;