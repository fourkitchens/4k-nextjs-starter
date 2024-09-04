import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentMediaImage } from '@/graphql/fragments/media/media-image';
import { FragmentLanguage } from '@/graphql/fragments/field/language';

export const FragmentParagraphImage = graphql(
  `
    fragment FragmentParagraphImage on ParagraphImage {
      id
      created {
        ...FragmentDateTime
      }
      image {
        ...FragmentMediaImage
      }
      langcode {
        ...FragmentLanguage
      }
      status
    }
  `,
  [FragmentDateTime, FragmentMediaImage, FragmentLanguage],
);
