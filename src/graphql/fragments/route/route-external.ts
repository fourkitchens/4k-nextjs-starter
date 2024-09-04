import { graphql } from '@/graphql';

export const FragmentRouteExternal = graphql(`
  fragment FragmentRouteExternal on RouteExternal {
    url
    internal
  }
`);
