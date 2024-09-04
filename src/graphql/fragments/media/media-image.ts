import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentText } from '@/graphql/fragments/field/text';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentImage } from '@/graphql/fragments/field/image';
import { FragmentTermMediaTags } from '@/graphql/fragments/term/term-media-tags';

export const FragmentMediaImage = graphql(
  `
    fragment FragmentMediaImage on MediaImage {
      id
      caption
      changed {
        ...FragmentDateTime
      }
      copyright
      created {
        ...FragmentDateTime
      }
      description {
        ...FragmentText
      }
      langcode {
        ...FragmentLanguage
      }
      mediaImage {
        ...FragmentImage
      }
      name
      path
      status
      tags {
        ...FragmentTermMediaTags
      }
    }
  `,
  [
    FragmentDateTime,
    FragmentText,
    FragmentLanguage,
    FragmentImage,
    FragmentTermMediaTags,
  ],
);
