/* This file was automatically generated. DO NOT UPDATE MANUALLY. */

import { goodbyeWorld as Mutation_goodbyeWorld } from "./goodbye-world/resolvers/Mutation/goodbyeWorld";
import { helloWorld as Query_helloWorld } from "./hello-world/resolvers/Query/helloWorld";
import type { Resolvers } from "./types.generated";
export const resolvers: Resolvers = {
	Query: { helloWorld: Query_helloWorld },
	Mutation: { goodbyeWorld: Mutation_goodbyeWorld },
};
