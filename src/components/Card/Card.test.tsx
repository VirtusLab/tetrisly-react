import { vi } from 'vitest';

import { Card } from './Card';
import { render, screen, fireEvent } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const handleEventMock = vi.fn();

describe('Card', () => {
  beforeEach(() => {
    handleEventMock.mockClear();
  });
  customPropTester(
    <Card
      header={{ title: 'Title' }}
      footer={{
        actions: [],
      }}
    >
      Content
    </Card>,
    {
      containerId: 'card',
      innerElements: {
        header: [],
        content: [],
        footer: [],
      },
    },
  );

  it('should render empty card', () => {
    render(<Card>Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();

    const content = screen.getByTestId('card-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Content');
  });
  it('should render header with only title', () => {
    render(<Card header={{ title: 'Title' }}>Content</Card>);
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
      <Card header={{ title: 'Title', description: 'Description' }}>
        Content
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
      <Card
        header={{
          title: 'Title',
          actions: [
            {
              label: 'Action',
              onClick: handleEventMock,
            },
          ],
        }}
      >
        Content
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
      <Card
        header={{
          title: 'Title',
          actions: [
            {
              label: 'Action 1',
              onClick: handleEventMock,
            },
            {
              label: 'Action 2',
              onClick: handleEventMock,
            },
          ],
        }}
      >
        Content
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
      <Card
        header={{
          title: 'Title',
          beforeComponent: {
            avatar: {
              image: 'image',
            },
          },
        }}
      >
        Content
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
      <Card
        header={{
          title: 'Title',
          beforeComponent: {
            icon: {
              name: '20-voicemail',
            },
          },
        }}
      >
        Content
      </Card>,
    );
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();

    const beforeComponent = screen.getByTestId('card-header-beforeComponent');
    expect(beforeComponent).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(
      <Card
        footer={{
          actions: [],
        }}
      >
        Content
      </Card>,
    );
    const footer = screen.getByTestId('card-footer');
    expect(footer).toBeInTheDocument();
  });

  it('should render footer with action', () => {
    render(
      <Card
        footer={{
          actions: [
            {
              label: 'Action',
              onClick: handleEventMock,
            },
          ],
        }}
      >
        Content
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
      <Card
        footer={{
          actions: [
            {
              label: 'Action 1',
              onClick: handleEventMock,
            },
            {
              label: 'Action 2',
              onClick: handleEventMock,
            },
          ],
        }}
      >
        Content
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
