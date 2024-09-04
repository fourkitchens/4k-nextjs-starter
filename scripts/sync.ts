import path from 'path';
import * as dotenv from 'dotenv';
import { drupalAuthClient } from 'drupal-auth-client';
import {
  generateSchema,
  generateOutput,
  generateTurbo,
} from '@gql.tada/cli-utils';

(async () => {
  const envPath = path.join(process.cwd(), '.env.local');
  dotenv.config({ path: envPath });

  const baseUrl = `${process.env.DRUPAL_PROTOCOL}://${process.env.DRUPAL_DOMAIN}`;
  const gqlUrl = `${baseUrl}${process.env.DRUPAL_GRAPHQL_ENDPOINT}`;

  const authClient = await drupalAuthClient(baseUrl, 'client_credentials', {
    clientId: process.env.DRUPAL_OAUTH_CLIENT_ID!,
    clientSecret: process.env.DRUPAL_OAUTH_CLIENT_SECRET!,
  });

  console.log('\n🚀 Generating GraphQL Schema');
  await generateSchema({
    input: gqlUrl,
    output: undefined,
    headers: {
      Authorization: `${authClient.token_type} ${authClient.access_token}`,
    },
    tsconfig: undefined,
  });

  console.log('\n🚀 Generating Types');
  await generateOutput({
    output: undefined,
    disablePreprocessing: false,
    tsconfig: undefined,
  });

  console.log('\n🚀 Generating Cache');
  await generateTurbo({
    output: undefined,
    failOnWarn: false,
    tsconfig: undefined,
  });
})();
