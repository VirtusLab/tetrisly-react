import { Card } from '../Card';

import { customPropTester } from '@/tests/customPropTester';
import { render, screen } from '@/tests/render';

describe('Card', () => {
  customPropTester(<Card.Content>Content</Card.Content>, {
    containerId: 'card-content',
  });

  it('should render empty card', () => {
    render(<Card.Content>Content</Card.Content>);
    const card = screen.getByTestId('card-content');
    expect(card).toBeInTheDocument();

    const content = screen.getByTestId('card-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Content');
  });
});
