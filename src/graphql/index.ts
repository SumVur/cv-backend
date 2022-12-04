import {buildSchema, MiddlewareFn} from "type-graphql";
import {SkillsResolver} from "./skills";

export * from "./skills"

export async function getSchema() {
    return await buildSchema({
        resolvers: [SkillsResolver],
        emitSchemaFile: true,
        globalMiddlewares: [Accessing]
    })
}

export const Accessing: MiddlewareFn<any> = async ({context, info}, next) => {
    const token: string = context.token;
    if (token == process.env.AUTH_TOKEN) {
        return next();
    }
    return null;
};