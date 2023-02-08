import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Category from "../../../models/categoryModel";

class CategoryService {
  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getAllCategories(): Promise<Category[]> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Category[];
  }

  async getCategory(categoryId: string): Promise<Category> {
    const result = await this.docClient
      .get({
        TableName: this.tableName,
        Key: { categoryId },
      })
      .promise();

    return result.Item as Category;
  }

  async createCategory(category: Category): Promise<Category> {
    await this.docClient
      .put({
        TableName: this.tableName,
        Item: category,
      })
      .promise();

    return category;
  }

  async updateCategory(categoryId: string, partialCategory: Partial<Category>): Promise<Category> {
    const updated = await this.docClient
      .update({
        TableName: this.tableName,
        Key: { categoryId },
        UpdateExpression:
          "set #name = :name, description = :description",
        ExpressionAttributeNames: {
          "#name": "name",
        },
        ExpressionAttributeValues: {
          ":name": partialCategory.name,
          ":description": partialCategory.description
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return updated.Attributes as Category;
  }

  async deleteCategory(categoryId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { categoryId },
      })
      .promise();
  }
}

export default CategoryService;