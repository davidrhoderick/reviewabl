import type { MutationResolvers } from './../../../types.generated';
export const goodbyeWorld: NonNullable<MutationResolvers['goodbyeWorld']> = async (_parent, { name }, _ctx) => {
	return `Goodbye, ${name ?? 'world'}!`;
};
