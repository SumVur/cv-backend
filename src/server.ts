import "reflect-metadata"
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import {json} from 'body-parser';
import cors from 'cors';
import {buildSchema} from "type-graphql";
import {SkillsResolver} from "./graphql";

interface MyContext {
    token?: String;
}

async function startApolloServer() {
    const schema = await buildSchema({
        resolvers: [SkillsResolver],
        emitSchemaFile: true,
    })

    const PORT = process.env.PORT || 4000;

    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer<MyContext>({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    });

    await server.start();

    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        json(),
        expressMiddleware(server, {
            context: async ({req}) => ({token: req.headers.token}),
        }),
    );

    await new Promise<void>((resolve) => httpServer.listen({port: PORT}, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

startApolloServer()