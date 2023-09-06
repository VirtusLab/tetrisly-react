import { Badge } from './Badge';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getBadge = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);

  return getByTestId('badge');
};

const getBadgeIcon = (jsx: JSX.Element) => {
  const { queryAllByTestId } = render(jsx);

  return queryAllByTestId('badge-icon');
};

describe('Badge', () => {
  /* 
    TODO: Extends customPropTester of posibility to test 2 level dependency [intent/appearance, emphasis]
   */
  customPropTester(<Badge label="Label" />, {
    containerId: 'badge',
    props: {
      intent: ['neutral', 'informative', 'positive', 'warning', 'negative'],
      appearance: [
        'blue',
        'green',
        'grey',
        'red',
        'orange',
        'raspberry',
        'magenta',
        'purple',
        'grape',
        'violet',
        'cyan',
        'teal',
        'aquamarine',
        'emerald',
        'outline',
      ],
      emphasis: ['high', 'medium', 'low'],
    },
    innerElements: {},
  });

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
});
