import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

const openapi = createOpenAPI({
  input: ['./openapi.yaml'],
});

await generateFiles({
  input: openapi,
  output: './content/docs/api-reference',
  includeDescription: true,
});
