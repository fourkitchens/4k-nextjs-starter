import { graphql } from '@/graphql';
import { FragmentFile } from '@/graphql/fragments/field/file';
import { FragmentMediaImage } from '@/graphql/fragments/media/media-image';
import { FragmentMediaVideo } from '@/graphql/fragments/media/media-video';

export const FragmentMediaUnion = graphql(
  `
    fragment FragmentMediaUnion on MediaUnion {
      ...FragmentMediaFile
      ...FragmentMediaImage
      ...FragmentMediaVideo
    }
  `,
  [FragmentFile, FragmentMediaImage, FragmentMediaVideo],
);
