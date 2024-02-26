import { Card } from './Card';
import { render, screen } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

describe('Card', () => {
  customPropTester(
    <Card>
      <Card.Content>Content</Card.Content>
    </Card>,
    {
      containerId: 'card',
    },
  );

  it('should render empty card', () => {
    render(
      <Card>
        <Card.Content>Content</Card.Content>
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();

    const content = screen.getByTestId('card-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Content');
  });
});
