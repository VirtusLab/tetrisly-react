import { Badge } from './Badge';
import { render } from '../../tests/render';

import { silentThrowExpect } from '@/tests/silentThrowExpect';

const getBadge = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);

  return getByTestId('badge');
};

const getBadgeIcon = (jsx: JSX.Element) => {
  const { queryAllByTestId } = render(jsx);

  return queryAllByTestId('badge-icon');
};

describe('Badge', () => {
  it('should render the badge', () => {
    const badge = getBadge(<Badge appearance="blue" label="Label" />);
    expect(badge).toBeInTheDocument();
  });

  it('should render the correct label', () => {
    const badge = getBadge(<Badge appearance="blue" label="Label" />);
    expect(badge).toHaveTextContent('Label');
  });

  it('should render the before icon', () => {
    const icon = getBadgeIcon(
      <Badge appearance="blue" label="Label" beforeIcon="16-minus" />,
    );
    expect(icon[0]).toBeInTheDocument();
  });

  it('should render the icon', () => {
    const icon = getBadgeIcon(<Badge appearance="blue" icon="16-minus" />);
    expect(icon[0]).toBeInTheDocument();
  });

  it('should render the after icon', () => {
    const icon = getBadgeIcon(
      <Badge appearance="blue" label="Label" afterIcon="16-minus" />,
    );
    expect(icon[0]).toBeInTheDocument();
  });

  it('should render both icons', () => {
    const icon = getBadgeIcon(
      <Badge
        appearance="blue"
        label="Label"
        beforeIcon="16-minus"
        afterIcon="16-minus"
      />,
    );
    expect(icon).toHaveLength(2);
  });

  it('should not render the icon if prop isnt provided', () => {
    const icon = getBadgeIcon(<Badge appearance="blue" label="Label" />);
    expect(icon).toHaveLength(0);
  });

  it('should throw an error if wrong config is provided', () => {
    silentThrowExpect(() =>
      // @ts-expect-error testing wrong appearance
      render(<Badge />),
    ).toThrowError();
  });

  it('should propagate custom props', () => {
    const badge = getBadge(
      <Badge
        appearance="blue"
        label="label"
        custom={{ backgroundColor: 'background-negative-subtle' }}
      />,
    );

    expect(badge).toHaveStyle('background-color: rgb(254, 245, 245)');
  });
});
