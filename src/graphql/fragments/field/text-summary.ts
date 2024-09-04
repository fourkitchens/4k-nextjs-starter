import { graphql } from '@/graphql';

export const FragmentTextSummary = graphql(`
  fragment FragmentTextSummary on TextSummary {
    value
    processed
    format
    summary
  }
`);
