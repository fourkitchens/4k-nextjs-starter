import { graphql } from '@/graphql';

export const FragmentImage = graphql(`
  fragment FragmentImage on Image {
    url
    width
    height
    alt
    title
    size
    mime
  }
`);
