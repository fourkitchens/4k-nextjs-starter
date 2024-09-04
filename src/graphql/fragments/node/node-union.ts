import { graphql } from '@/graphql';
import { FragmentNodePage } from '@/graphql/fragments/node/node-page';

export const FragmentNodeUnion = graphql(
  `
    fragment FragmentNodeUnion on NodeUnion {
      ...FragmentNodePage
    }
  `,
  [FragmentNodePage],
);
