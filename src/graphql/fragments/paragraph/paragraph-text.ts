import { graphql } from '@/graphql';
import { FragmentDateTime } from '@/graphql/fragments/field/date-time';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentText } from '@/graphql/fragments/field/text';

export const FragmentParagraphText = graphql(
  `
    fragment FragmentParagraphText on ParagraphText {
      id
      created {
        ...FragmentDateTime
      }
      langcode {
        ...FragmentLanguage
      }
      status
      text {
        ...FragmentText
      }
    }
  `,
  [FragmentDateTime, FragmentLanguage, FragmentText],
);
