import { graphql } from '@/graphql';
import { FragmentLanguage } from '@/graphql/fragments/field/language';
import { FragmentRouteUnion } from '@/graphql/fragments/route/route-union';

export const FragmentMenuItemAttributes = graphql(`
  fragment FragmentMenuItemAttributes on MenuItemAttributes {
    class
  }
`);

export const FragmentMenuItem = graphql(
  `
    fragment FragmentMenuItem on MenuItem {
      id
      title
      description
      url
      langcode {
        ...FragmentLanguage
      }
      internal
      expanded
      attributes {
        ...FragmentMenuItemAttributes
      }
      children {
        id
        title
        description
        url
        internal
      }
      route {
        ...FragmentRouteUnion
      }
    }
  `,
  [FragmentLanguage, FragmentRouteUnion, FragmentMenuItemAttributes],
);

export const FragmentMenu = graphql(
  `
    fragment FragmentMenu on Menu {
      id
      items {
        ...FragmentMenuItem
      }
      name
    }
  `,
  [FragmentMenuItem],
);

export const FragmentMenuUnion = graphql(
  `
    fragment FragmentMenuUnion on MenuUnion {
      ...FragmentMenu
    }
  `,
  [FragmentMenu],
);
