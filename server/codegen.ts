import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: '**/schema.graphql',
	generates: {
		'src/schema': defineConfig(),
	},
	hooks: { afterAllFileWrite: 'npx @biomejs/biome check --write' },
};
export default config;
