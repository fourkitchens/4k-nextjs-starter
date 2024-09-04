import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentText } from '@/graphql/fragments/field/text';
import { FragmentLanguage } from '@/graphql/fragments/field/language';

export const FragmentTermMediaTags = graphql(
  `
    fragment FragmentTermMediaTags on TermMediaTags {
      id
      changed {
        ...FragmentDateTime
      }
      description {
        ...FragmentText
      }
      langcode {
        ...FragmentLanguage
      }
      name
      path
      status
      weight
    }
  `,
  [FragmentDateTime, FragmentText, FragmentLanguage],
);
