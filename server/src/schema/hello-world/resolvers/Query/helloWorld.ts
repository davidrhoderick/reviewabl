import type { QueryResolvers } from './../../../types.generated';
export const helloWorld: NonNullable<QueryResolvers['helloWorld']> = async (_parent, { name }, _ctx) => {
	return `Hello, ${name ?? 'world'}!`;
};
