import type { AWS } from "@serverless/typescript";

import createProduct from '@functions/product/createProduct';

const serverlessConfiguration: AWS = {
  service: 'ekreative-test',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-dynamodb-local', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'us-east-2',
    timeout: 30,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      PRODUCTS_TABLE: 'products',
      CATEGORIES_TABLE: 'categories',
      IS_OFFLINE: 'true'
    },
    iamRoleStatements: [
      {
        'Effect': 'Allow',
        'Action': ['dynamodb:DescribeTable', 'dynamodb:Query', 'dynamodb:Scan', 'dynamodb:GetItem', 'dynamodb:PutItem', 'dynamodb:DeleteItem'],
        'Resource': 'arn:aws:dynamodb:us-east-2:*:table/Products'
      }
    ]
  },
  // import the function via paths
  functions: { createProduct },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    serverlessOffline: {
      httpPort: 3003
    },
    dynamodb: {
      start: {
        port: 5000,
        inMemory: true,
        migrate: true
      },
      stages: ['dev']
    }
  },
  resources: {
    Resources: {
      'ProductsTable': {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'products',
          AttributeDefinitions: [{
            'AttributeType': 'S',
            'AttributeName': 'productId'
          }],
          KeySchema: [{
            'AttributeName': 'productId',
            'KeyType': 'HASH'
          }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          }
        }
      },
      'CategoriesTable': {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'categories',
          AttributeDefinitions: [{
            'AttributeType': 'S',
            'AttributeName': 'categoryId'
          }],
          KeySchema: [{
            'AttributeName': 'categoryId',
            'KeyType': 'HASH'
          }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          }
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
