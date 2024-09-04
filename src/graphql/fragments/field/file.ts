import { graphql } from '@/graphql';

export const FragmentFile = graphql(`
  fragment FragmentFile on File {
    name
    url
    size
    mime
    description
  }
`);
