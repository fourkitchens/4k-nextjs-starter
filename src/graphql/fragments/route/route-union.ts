import { graphql } from '@/graphql';
import { FragmentRouteExternal } from './route-external';
import { FragmentRouteInternal } from './route-internal';

export const FragmentRouteUnion = graphql(
  `
    fragment FragmentRouteUnion on RouteUnion {
      ...FragmentRouteInternal
      ...FragmentRouteExternal
    }
  `,
  [FragmentRouteInternal, FragmentRouteExternal],
);
