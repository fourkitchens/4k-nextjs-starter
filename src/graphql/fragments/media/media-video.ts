import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentText } from '@/graphql/fragments/field/text';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentTermMediaTags } from '@/graphql/fragments/term/term-media-tags';
import { FragmentLink } from '@/graphql/fragments/field/link';

export const FragmentMediaVideo = graphql(
  `
    fragment FragmentMediaVideo on MediaVideo {
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
      mediaOembedVideo
      name
      path
      status
      tags {
        ...FragmentTermMediaTags
      }
      transcript {
        ...FragmentLink
      }
    }
  `,
  [
    FragmentDateTime,
    FragmentText,
    FragmentLanguage,
    FragmentTermMediaTags,
    FragmentLink,
  ],
);
