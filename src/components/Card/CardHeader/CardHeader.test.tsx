import { vi } from 'vitest';

import { Card } from '../Card';

import { customPropTester } from '@/tests/customPropTester';
import { fireEvent, render, screen } from '@/tests/render';

const handleEventMock = vi.fn();

describe('Card.Header', () => {
  customPropTester(
    <Card.Header
      title="Title"
      description="Description"
      beforeComponent={{
        avatar: {
          img: {
            src: 'src',
            alt: 'avatar',
          },
          appearance: 'image',
        },
      }}
      actions={[]}
    />,
    {
      containerId: 'card-header',
      innerElements: {
        beforeComponent: [],
        content: [],
        title: [],
        description: [],
        actions: [],
      },
    },
  );

  beforeEach(() => {
    handleEventMock.mockClear();
  });

  it('should render header with only title', () => {
    render(
      <Card>
        <Card.Header title="Title" />
      </Card>,
    );
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();
    const title = screen.getByTestId('card-header-title');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Title');

    expect(screen.queryByTestId('card-description')).not.toBeInTheDocument();

    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });

  it('should render header with title and description', () => {
    render(
      <Card>
        <Card.Header title="Title" description="Description" />
      </Card>,
    );
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();

    const description = screen.getByTestId('card-header-description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('Description');

    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });

  it("should render header with actions and call 'onClick' when clicked", () => {
    render(
      <Card>
        <Card.Header
          title="Title"
          actions={[
            {
              label: 'Action',
              onClick: handleEventMock,
            },
          ]}
        />
      </Card>,
    );
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();

    const actions = screen.getByTestId('card-header-actions');
    expect(actions).toBeInTheDocument();
    const actionButton = screen.getByTestId('button');
    expect(actionButton).toBeInTheDocument();

    fireEvent.click(actionButton);
    expect(handleEventMock).toHaveBeenCalled();
  });

  it("should render header with two actions and call 'onClick' when clicked", () => {
    render(
      <Card>
        <Card.Header
          title="Title"
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
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();

    const actions = screen.getByTestId('card-header-actions');
    expect(actions).toBeInTheDocument();
    const actionButtons = screen.getAllByTestId('button');
    expect(actionButtons).toHaveLength(2);

    actionButtons.forEach(fireEvent.click);

    expect(handleEventMock).toHaveBeenCalledTimes(2);
  });

  it('should render header with beforeComponent as an avatar', () => {
    render(
      <Card>
        <Card.Header
          title="Title"
          beforeComponent={{
            avatar: {
              img: {
                src: 'src',
                alt: 'avatar',
              },
              appearance: 'image',
            },
          }}
        />
        <Card.Content>Content</Card.Content>
      </Card>,
    );
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();

    const beforeComponent = screen.getByTestId('card-header-beforeComponent');
    expect(beforeComponent).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('should render header with beforeComponent as an icon', () => {
    render(
      <Card>
        <Card.Header
          title="Title"
          beforeComponent={{
            icon: {
              name: '16-check',
            },
          }}
        />
        <Card.Content>Content</Card.Content>
      </Card>,
    );
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();

    const beforeComponent = screen.getByTestId('card-header-beforeComponent');
    expect(beforeComponent).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
