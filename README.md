# Ekreative - AWS | Node.js | Typescript

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Locally

In order to test the lambda functions locally, run the following command:

- `sls dynamodb start --migrate` This is going to start DynamoDB locally in port 5000
- `npm start` Start the server

### Available API's (running locally)

![Screenshot from 2023-02-07 23-54-41](https://user-images.githubusercontent.com/6866119/217417125-742a5848-bcb5-4011-8cc7-a8682301ca21.png)


## Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `database` - containing dynamodb configuration
- `libs` - containing shared code base between your lambdas
- `functions` - containing code base and configuration for your lambda functions
- `models` - containing model definitions to use across the system

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

## Deploy to AWS

- `sls deploy` This is going to deploy your entire service via CloudFormation
