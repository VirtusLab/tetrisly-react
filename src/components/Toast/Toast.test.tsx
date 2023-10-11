import { vi } from 'vitest';

import { Toast } from './Toast';
import { fireEvent, render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getToast = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('toast');
};

const handleEventMock = vi.fn();

describe('Toast', () => {
  customPropTester(
    <Toast
      text="text"
      intent="informative"
      action={[{ label: 'Label' }, { label: 'Label' }]}
      onCloseClick={handleEventMock}
    />,
    {
      containerId: 'toast',
      props: {
        emphasis: ['low', 'high'],
        intent: ['informative', 'success', 'warning', 'negative'],
      },
      innerElements: {
        _: ['intent', 'emphasis'],
        iconContainer: [['intent', 'emphasis']],
        actionContainer: [],
        middleDot: ['emphasis'],
        closeButton: [],
      },
    },
  );

  beforeEach(() => {
    handleEventMock.mockReset();
  });

  it('should render the toast', () => {
    const toast = getToast(<Toast text="Toast text" />);
    expect(toast).toBeInTheDocument();
  });

  it('should render correct colors (neutral)', () => {
    const toast = getToast(
      <Toast intent="neutral" emphasis="high" text="Toast text" />,
    );
    expect(toast).toHaveStyle('background-color: rgb(39, 46, 53)');
    expect(toast).toHaveStyle('color: rgb(255, 255, 255)');
  });

  it('should render correct colors (informative)', () => {
    const toast = getToast(
      <Toast intent="informative" emphasis="high" text="Toast text" />,
    );
    expect(toast).toHaveStyle('background-color: rgb(48, 98, 212)');
    expect(toast).toHaveStyle('color: rgb(255, 255, 255)');
  });

  it('should render correct colors (success)', () => {
    const toast = getToast(
      <Toast intent="neutral" emphasis="high" text="Toast text" />,
    );
    expect(toast).toHaveStyle('background-color: rgb(39, 46, 53)');
    expect(toast).toHaveStyle('color: rgb(255, 255, 255)');
  });

  it('should render correct colors (warning)', () => {
    const toast = getToast(
      <Toast intent="warning" emphasis="high" text="Toast text" />,
    );
    expect(toast).toHaveStyle('background-color: rgb(245, 150, 56)');
    expect(toast).toHaveStyle('color: rgb(39, 46, 53)');
  });

  it('should render correct colors (negative)', () => {
    const toast = getToast(
      <Toast intent="negative" emphasis="high" text="Toast text" />,
    );
    expect(toast).toHaveStyle('background-color: rgb(197, 52, 52)');
    expect(toast).toHaveStyle('color: rgb(255, 255, 255)');
  });

  it('should render action button', () => {
    const toast = getToast(
      <Toast text="Toast text" action={{ label: 'Label' }} />,
    );
    const button = toast.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('should render both action buttons in case an array is provided', () => {
    const toast = getToast(
      <Toast
        text="Toast text"
        action={[{ label: 'Label' }, { label: 'Label' }]}
      />,
    );
    const buttons = toast.getElementsByTagName('button');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
  });

  it('should emit on click', () => {
    const toast = getToast(
      <Toast
        text="Toast text"
        action={{ label: 'Label', onClick: handleEventMock }}
      />,
    );
    const button = toast.querySelector('button');
    if (button) {
      fireEvent.click(button);
    }
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit on focus', () => {
    const toast = getToast(
      <Toast
        text="Toast text"
        action={{ label: 'Label', onFocus: handleEventMock }}
      />,
    );
    const button = toast.querySelector('button');
    if (button) {
      fireEvent.focus(button);
    }
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit on blur', () => {
    const toast = getToast(
      <Toast
        text="Toast text"
        action={{ label: 'Label', onBlur: handleEventMock }}
      />,
    );
    const button = toast.querySelector('button');
    if (button) {
      fireEvent.blur(button);
    }
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render close button', () => {
    const toast = getToast(
      <Toast text="Toast text" onCloseClick={handleEventMock} />,
    );
    const button = toast.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('should emit on close', () => {
    const toast = getToast(
      <Toast text="Toast text" onCloseClick={handleEventMock} />,
    );
    const button = toast.querySelector('button');
    button?.click();
    expect(handleEventMock).toHaveBeenCalled();
  });
});
