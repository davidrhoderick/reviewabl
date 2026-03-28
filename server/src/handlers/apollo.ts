import type { Context } from 'hono';
import type { GraphQLServerOptions } from '..';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { startServerAndCreateCloudflareWorkersHandler } from '@as-integrations/cloudflare-workers';

import { resolvers } from '../schema/resolvers.generated';

import { typeDefs } from '../schema/typeDefs.generated';

type ServerContext = {};

const handler = async (context: Context, graphQLServerOptions: GraphQLServerOptions) => {
	const server = new ApolloServer<ServerContext>({
		typeDefs,
		resolvers,
		introspection: true,
		...(graphQLServerOptions.enableSandbox
			? {}
			: {
					plugins: [ApolloServerPluginLandingPageDisabled()],
				}),
	});

	const cfHandler = startServerAndCreateCloudflareWorkersHandler<Env, ServerContext>(server, {
		context: async ({ env, request, ctx }) => {
			return {};
		},
	});

	return cfHandler(context.req.raw, context.env, context.executionCtx);
};

export default handler;
