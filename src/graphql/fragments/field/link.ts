import { graphql } from '@/graphql';

export const FragmentLink = graphql(`
  fragment FragmentLink on Link {
    title
    url
    internal
  }
`);
