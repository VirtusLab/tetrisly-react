import { Header } from '@/components/Header';

export const emphases = ['high', 'medium', 'low'] as const;

export const HeaderDocs = () => (
  <Header
    bottomBar
    type="complex"
    action={[{ label: 'Primary action' }, { label: 'Secondary action' }]}
    description="Description"
    counter={6}
    title="title of a table"
  />
);
