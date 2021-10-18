import path from "path";

import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { buildSchema } from "type-graphql";
import cors, { CorsOptions } from "cors";
import session from "express-session";
import connectRedis from "connect-redis";

import { queryComplexityRule } from "./utils/queryComplexityRule";
import { RegisterResolver } from "./modules/user/register";

//###############   End of imports   ######################
//#########################################################

const schemaSDLPath = path.resolve(
  __dirname,
  "__snapshot__",
  "schema",
  "schema.gql"
);
const resolversModuleDirPath = path.resolve(__dirname, "modules", "**", "*.ts");

const corsOption: CorsOptions = {
  credentials: true,
  origin: ["http://localhost:4000", "https://studio.apollographql.com"],
};

//#########################################################################
//#########################################################################
//#############          (MAIN FUNCTION)             ######################
//#############        -startApolloServer-           ######################
//#########################################################################
//#########################################################################

async function startApolloServer() {
  const schema = await buildSchema({
    resolvers: [RegisterResolver], // Using this emit expected resolvers
    // resolvers: [__dirname + "/modules/**/*.ts"], Using this emit unexpectedly all resolvers and types from generated type-graphql via typegraphql-prisma
    emitSchemaFile: schemaSDLPath,
  });

  const app = express();
  const httpServer = http.createServer(app);
  const apolloServer = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    validationRules: [queryComplexityRule],
  });
  await apolloServer.start();

  //#######################################
  //    MOUNT APOLLO MIDDLEWARE HERE
  //#######################################
  app.use(cors(corsOption));
  // app.use(session);

  //#######################################
  //   XXXX   END OF MIDDLWARE    XXXX
  //#######################################

  apolloServer.applyMiddleware({ app, cors: false });
  await new Promise((resolve) =>
    httpServer.listen({ port: 4000 }, () => resolve)
  );
  console.log(
    `Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
}

startApolloServer();
