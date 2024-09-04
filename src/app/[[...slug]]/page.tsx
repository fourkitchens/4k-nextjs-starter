import NodePage from '@/components/drupal/node/node-page';
import { query } from '@/drupal';
import { ROUTE_QUERY } from '@/graphql/queries/route-query';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string[];
  };
};

// Invalidate the cache every minute.
export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { slug } = params;

  const response = await query(ROUTE_QUERY, {
    path: slug ? `/${slug.join('/')}` : '/',
  });

  const { route } = response;

  if (!route) {
    notFound();
  }
  const { entity } = route;

  switch (entity.__typename) {
    case 'NodePage': {
      return <NodePage entity={entity} />;
    }
    // Add other node types here.
  }
}
