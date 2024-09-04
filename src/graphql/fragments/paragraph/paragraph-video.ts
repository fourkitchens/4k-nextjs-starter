import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentMediaVideo } from '@/graphql/fragments/media/media-video';

export const FragmentParagraphVideo = graphql(
  `
    fragment FragmentParagraphVideo on ParagraphVideo {
      id
      created {
        ...FragmentDateTime
      }
      langcode {
        ...FragmentLanguage
      }
      status
      video {
        ...FragmentMediaVideo
      }
    }
  `,
  [FragmentDateTime, FragmentLanguage, FragmentMediaVideo],
);
