import { graphql } from '@/graphql';

export const FragmentLanguage = graphql(`
  fragment FragmentLanguage on Language {
    id
    name
    direction
  }
`);
