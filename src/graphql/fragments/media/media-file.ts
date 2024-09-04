import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentText } from '@/graphql/fragments/field/text';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentTermMediaTags } from '@/graphql/fragments/term/term-media-tags';
import { FragmentFile } from '@/graphql/fragments/field/file';

export const FragmentMediaFile = graphql(
  `
    fragment FragmentMediaFile on MediaFile {
      id
      changed {
        ...FragmentDateTime
      }
      created {
        ...FragmentDateTime
      }
      description {
        ...FragmentText
      }
      langcode {
        ...FragmentLanguage
      }
      mediaFile {
        ...FragmentFile
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
    FragmentTermMediaTags,
    FragmentFile,
  ],
);
