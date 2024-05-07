import { vi } from 'vitest';

import { CornerDialog } from './CornerDialog';
import { render, screen, fireEvent } from '../../tests/render';

describe('CornerDialog', () => {
  it('should render empty corner dialog', () => {
    render(<CornerDialog intent="none" title="Title" content="Content" />);
    const cornerDialog = screen.getByTestId('corner-dialog');
    expect(cornerDialog).toBeInTheDocument();

    const header = screen.getByTestId('corner-dialog-header');
    expect(header).toBeInTheDocument();

    const headerTitle = screen.getByTestId('corner-dialog-header-title');
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toHaveTextContent('Title');

    const content = screen.getByTestId('corner-dialog-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Content');
  });

  it('should render warning corner dialog', () => {
    render(<CornerDialog intent="warning" title="Title" content="Content" />);
    const warningIcon = screen.getByTestId('warning-icon');
    expect(warningIcon).toBeInTheDocument();
  });

  it('should render negative corner dialog', () => {
    render(<CornerDialog intent="negative" title="Title" content="Content" />);
    const negativeIcon = screen.getByTestId('negative-icon');
    expect(negativeIcon).toBeInTheDocument();
  });

  it('should render close icon when onCloseClick handler is provided', () => {
    render(
      <CornerDialog
        intent="none"
        title="Title"
        content="Content"
        onCloseClick={() => {}}
      />,
    );
    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();
  });

  it('should render footer if at least one action is provided', () => {
    render(
      <CornerDialog
        intent="none"
        title="Title"
        content="Content"
        actions={[{ label: 'Action' }]}
      />,
    );
    const footer = screen.getByTestId('corner-dialog-footer');
    expect(footer).toBeInTheDocument();
  });

  it('should render footer with 2 actions', async () => {
    render(
      <CornerDialog
        intent="none"
        title="Title"
        content="Content"
        actions={[{ label: 'First action' }, { label: 'Second action' }]}
      />,
    );

    const firstActionButton = await screen.findByText('First action');
    expect(firstActionButton).toBeInTheDocument();

    const secondActionButton = await screen.findByText('Second action');
    expect(secondActionButton).toBeInTheDocument();
  });

  it('should call onCloseClick after click to close icon', () => {
    const onCloseClickMock = vi.fn();

    render(
      <CornerDialog
        intent="none"
        title="Title"
        content="Content"
        onCloseClick={onCloseClickMock}
      />,
    );

    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();
    fireEvent.click(closeIcon);
    expect(onCloseClickMock).toHaveBeenCalled();
  });
});
