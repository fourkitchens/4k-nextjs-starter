import { graphql } from '@/graphql';

export const FragmentDateTime = graphql(`
  fragment FragmentDateTime on DateTime {
    timestamp
    timezone
    offset
    time
  }
`);
