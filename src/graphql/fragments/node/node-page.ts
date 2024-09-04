import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentText } from '@/graphql/fragments/field/text';
import { FragmentMediaImage } from '@/graphql/fragments/media/media-image';
import { FragmentParagraphImage } from '@/graphql/fragments/paragraph/paragraph-image';
import { FragmentParagraphText } from '@/graphql/fragments/paragraph/paragraph-text';
import { FragmentParagraphTextWithMedia } from '@/graphql/fragments/paragraph/paragraph-text-with-media';
import { FragmentParagraphVideo } from '@/graphql/fragments/paragraph/paragraph-video';

export const FragmentNodePageContentUnion = graphql(
  `
    fragment FragmentNodePageContentUnion on NodePageContentUnion {
      ...FragmentParagraphImage
      ...FragmentParagraphText
      ...FragmentParagraphTextWithMedia
      ...FragmentParagraphVideo
    }
  `,
  [
    FragmentParagraphImage,
    FragmentParagraphText,
    FragmentParagraphTextWithMedia,
    FragmentParagraphVideo,
  ],
);

export const FragmentNodePage = graphql(
  `
    fragment FragmentNodePage on NodePage {
      __typename
      id
      changed {
        ...FragmentDateTime
      }
      content {
        ...FragmentNodePageContentUnion
      }
      created {
        ...FragmentDateTime
      }
      langcode {
        ...FragmentLanguage
      }
      path
      promote
      publishedAt {
        ...FragmentDateTime
      }
      seoTitle
      status
      sticky
      teaserMedia {
        ...FragmentMediaImage
      }
      teaserText
      text {
        ...FragmentText
      }
      title
    }
  `,
  [
    FragmentDateTime,
    FragmentNodePageContentUnion,
    FragmentLanguage,
    FragmentMediaImage,
    FragmentText,
  ],
);
