import { graphql } from '@/graphql';

export const FragmentText = graphql(`
  fragment FragmentText on Text {
    value
    processed
    format
  }
`);
