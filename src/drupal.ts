import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { drupalAuthClient } from 'drupal-auth-client';
import { GraphQLClient } from 'graphql-request';

export async function query(
  document: TypedDocumentNode<{ [key: string]: any }, any>,
  variables?: Record<string, string | number | {} | undefined | null>,
) {
  const baseUrl = `${process.env.DRUPAL_PROTOCOL}://${process.env.DRUPAL_DOMAIN}`;
  const graphqlUrl = `${baseUrl}${process.env.DRUPAL_GRAPHQL_ENDPOINT}`;

  const fetcher = function (url: string, options: RequestInit) {
    const revalidate = parseInt(
      process.env.DRUPAL_OAUTH_TOKEN_EXPIRE_TIME || '0',
    );
    return fetch(url, {
      ...options,
      next: {
        revalidate,
      },
    });
  };

  const authClient = await drupalAuthClient(
    baseUrl,
    'client_credentials',
    {
      clientId: process.env.DRUPAL_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.DRUPAL_OAUTH_CLIENT_SECRET as string,
    },
    {
      fetcher,
    },
  );

  const client = new GraphQLClient(graphqlUrl, {
    headers: {
      Authorization: `${authClient.token_type} ${authClient.access_token}`,
    },
    method: 'POST',
  });

  const response = await client.request({
    document,
    variables,
  });

  return response;
}
