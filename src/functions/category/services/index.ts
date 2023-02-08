import createDynamoDBClient from "../../../database/db";
import CategoryService from "./categoryService";

const { CATEGORIES_TABLE } = process.env;

const categoryService = new CategoryService(createDynamoDBClient(), CATEGORIES_TABLE);

export default categoryService;