import { FragmentOf, readFragment } from '@/graphql';
import { FragmentNodePage } from '@/graphql/fragments/node/node-page';

export default function NodePage({
  entity,
}: {
  entity: FragmentOf<typeof FragmentNodePage>;
}) {
  const { title } = readFragment(FragmentNodePage, entity);
  return <h1>{title}</h1>;
}
