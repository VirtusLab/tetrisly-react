import { vi } from 'vitest';

import { Card } from '../Card';

import { customPropTester } from '@/tests/customPropTester';
import { fireEvent, render, screen } from '@/tests/render';

const handleEventMock = vi.fn();

describe('Card.Footer', () => {
  customPropTester(<Card.Footer actions={[]} />, {
    containerId: 'card-footer',
    innerElements: {
      actions: [],
    },
  });

  beforeEach(() => {
    handleEventMock.mockClear();
  });

  it('should render footer', () => {
    render(
      <Card>
        <Card.Footer />
      </Card>,
    );
    const footer = screen.getByTestId('card-footer');
    expect(footer).toBeInTheDocument();
  });

  it('should render footer with action', () => {
    render(
      <Card>
        <Card.Footer
          actions={[
            {
              label: 'Action',
              onClick: handleEventMock,
            },
          ]}
        />
      </Card>,
    );
    const footer = screen.getByTestId('card-footer');
    expect(footer).toBeInTheDocument();

    const actionButton = screen.getByTestId('button');
    expect(actionButton).toBeInTheDocument();

    fireEvent.click(actionButton);
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render footer with two actions', () => {
    render(
      <Card>
        <Card.Footer
          actions={[
            {
              label: 'Action 1',
              onClick: handleEventMock,
            },
            {
              label: 'Action 2',
              onClick: handleEventMock,
            },
          ]}
        />
      </Card>,
    );
    const footer = screen.getByTestId('card-footer');
    expect(footer).toBeInTheDocument();

    const actionButtons = screen.getAllByTestId('button');
    expect(actionButtons).toHaveLength(2);

    actionButtons.forEach(fireEvent.click);

    expect(handleEventMock).toHaveBeenCalledTimes(2);
  });
});
