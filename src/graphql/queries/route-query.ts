import { graphql } from '@/graphql';
import { FragmentRouteUnion } from '@/graphql/fragments/route/route-union';

export const ROUTE_QUERY = graphql(
  `
    query RouteQuery($path: String!) {
      route(path: $path) {
        __typename
        ...FragmentRouteUnion
      }
    }
  `,
  [FragmentRouteUnion],
);
