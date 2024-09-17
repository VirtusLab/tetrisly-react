import { vi } from 'vitest';

import { Dialog } from './Dialog';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getDialog = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);
  return {
    additionalAction: queryByTestId('dialog-additional-action'),
    closeIcon: queryByTestId('dialog-close-icon'),
    dialog: getByTestId('dialog'),
    dialogTitle: getByTestId('dialog-title'),
    intentIcon: queryByTestId('dialog-intent-icon'),
  };
};

const handleEventMock = vi.fn();

describe('Dialog', () => {
  it('should render the dialog', () => {
    const { dialog } = getDialog(<Dialog />);
    expect(dialog).toBeInTheDocument();
  });

  customPropTester(<Dialog />, {
    containerId: 'dialog',
    props: {
      footer: ['confirmation', 'decision', 'steps'],
      intent: ['destructive', 'warning', 'none'],
      size: ['small', 'medium', 'large'],
    },
  });

  it('should render the intent icon (warning)', () => {
    const { intentIcon } = getDialog(<Dialog intent="warning" />);
    expect(intentIcon).toBeInTheDocument();
  });

  it('should render the intent icon (destructive)', () => {
    const { intentIcon } = getDialog(<Dialog intent="destructive" />);
    expect(intentIcon).toBeInTheDocument();
  });

  it('should not render the intent icon (none)', () => {
    const { intentIcon } = getDialog(<Dialog intent="none" />);
    expect(intentIcon).toBeNull();
  });

  it('should render the close icon', () => {
    const { closeIcon } = getDialog(<Dialog onCloseClick={handleEventMock} />);
    expect(closeIcon).toBeInTheDocument();
  });

  it('should render the close icon', () => {
    const { closeIcon } = getDialog(<Dialog />);
    expect(closeIcon).toBeNull();
  });

  it('should emit on close', () => {
    const { dialog } = getDialog(<Dialog onCloseClick={handleEventMock} />);
    const button = dialog.querySelector('button');
    button?.click();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render both action buttons in case an array is provided', () => {
    const { dialog } = getDialog(
      <Dialog
        onCloseClick={handleEventMock}
        actions={[{ label: 'Label' }, { label: 'Label' }]}
      />,
    );
    const buttons = dialog.getElementsByTagName('button');

    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
  });

  it('should render proper title', () => {
    const { dialogTitle } = getDialog(<Dialog title="dialog title" />);
    expect(dialogTitle).toHaveTextContent('dialog title');
  });
});
