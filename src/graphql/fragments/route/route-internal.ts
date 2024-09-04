import { graphql } from '@/graphql';
import { FragmentNodePage } from '@/graphql/fragments/node/node-page';
import { FragmentLink } from '@/graphql/fragments/field/link';

export const FragmentRouteEntityUnion = graphql(
  `
    fragment FragmentRouteEntityUnion on RouteEntityUnion {
      ...FragmentNodePage
    }
  `,
  [FragmentNodePage],
);

export const FragmentRouteInternal = graphql(
  `
    fragment FragmentRouteInternal on RouteInternal {
      url
      internal
      breadcrumbs {
        ...FragmentLink
      }
      entity {
        ...FragmentRouteEntityUnion
      }
    }
  `,
  [FragmentLink, FragmentRouteEntityUnion],
);
