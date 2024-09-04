import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentText } from '@/graphql/fragments/field/text';
import { FragmentMediaImage } from '@/graphql/fragments/media/media-image';
import { FragmentMediaVideo } from '@/graphql/fragments/media/media-video';

export const FragmentParagraphTextWithMediaMediaUnion = graphql(
  `
    fragment FragmentParagraphTextWithMediaMediaUnion on ParagraphTextWithMediaMediaUnion {
      ...FragmentMediaImage
      ...FragmentMediaVideo
    }
  `,
  [FragmentMediaImage, FragmentMediaVideo],
);

export const FragmentParagraphTextWithMedia = graphql(
  `
    fragment FragmentParagraphTextWithMedia on ParagraphTextWithMedia {
      id
      created {
        ...FragmentDateTime
      }
      langcode {
        ...FragmentLanguage
      }
      media {
        ...FragmentParagraphTextWithMediaMediaUnion
      }
      mediaAlignment
      status
      text {
        ...FragmentText
      }
    }
  `,
  [
    FragmentDateTime,
    FragmentLanguage,
    FragmentParagraphTextWithMediaMediaUnion,
    FragmentText,
  ],
);
