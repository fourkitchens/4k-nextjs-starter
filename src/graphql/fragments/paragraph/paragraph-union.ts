import { graphql } from '@/graphql';
import { FragmentParagraphVideo } from '@/graphql/fragments/paragraph/paragraph-video';
import { FragmentParagraphImage } from '@/graphql/fragments/paragraph/paragraph-image';
import { FragmentParagraphTextWithMedia } from '@/graphql/fragments/paragraph/paragraph-text-with-media';
import { FragmentParagraphText } from '@/graphql/fragments/paragraph/paragraph-text';

export const ParagraphUnion = graphql(
  `
    fragment FragmentParagraphUnion on ParagraphUnion {
      ...FragmentParagraphImage
      ...FragmentParagraphText
      ...FragmentParagraphTextWithMedia
      ...FragmentParagraphVideo
    }
  `,
  [
    FragmentParagraphVideo,
    FragmentParagraphImage,
    FragmentParagraphTextWithMedia,
    FragmentParagraphText,
  ],
);
