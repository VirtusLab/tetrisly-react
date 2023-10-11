import { vi } from 'vitest';

import { AlertBanner } from './AlertBanner';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getAlertBanner = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);

  return getByTestId('alert-banner');
};

const handleEventMock = vi.fn();

describe('AlertBanner', () => {
  customPropTester(
    <AlertBanner
      text="Alert"
      action={{
        label: 'Action',
      }}
      onCloseClick={handleEventMock}
    />,
    {
      containerId: 'alert-banner',
      props: {
        intent: ['none', 'positive', 'warning', 'negative'],
      },
      innerElements: {
        iconContainer: [],
        actionContainer: [],
        closeButton: [],
      },
    },
  );

  it('should render the alert banner', () => {
    const alertBanner = getAlertBanner(<AlertBanner text="Alert" />);
    expect(alertBanner).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const alertBanner = getAlertBanner(<AlertBanner text="Alert" />);
    expect(alertBanner).toHaveTextContent('Alert');
  });

  it('should render correct intent color (none)', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner text="Alert" intent="none" />,
    );
    expect(alertBanner).toHaveStyle('color: rgb(255,255,255);');
    expect(alertBanner).toHaveStyle('background-color: rgb(85, 95, 109);');
  });

  it('should render correct intent color (positive)', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner text="Alert" intent="positive" />,
    );
    expect(alertBanner).toHaveStyle('color: rgb(255,255,255);');
    expect(alertBanner).toHaveStyle('background-color:  rgb(29, 124, 77);');
  });

  it('should render correct intent color (warning)', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner text="Alert" intent="warning" />,
    );
    expect(alertBanner).toHaveStyle('color: rgb(39, 46, 53);');
    expect(alertBanner).toHaveStyle('background-color: rgb(245, 150, 56);');
  });

  it('should render correct intent color (negative)', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner text="Alert" intent="negative" />,
    );
    expect(alertBanner).toHaveStyle('color: rgb(255,255,255);');
    expect(alertBanner).toHaveStyle('background-color: rgb(197,52,52);');
  });

  it('should render action button', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner text="Alert" action={{ label: 'Label' }} />,
    );
    const button = alertBanner.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('should render both action buttons in case an array is provided', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner
        text="Alert"
        action={[{ label: 'Label' }, { label: 'Label' }]}
      />,
    );
    const buttons = alertBanner.getElementsByTagName('button');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
  });

  it('should emit on click', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner
        text="Alert"
        action={{ label: 'Label', onClick: handleEventMock }}
      />,
    );
    const button = alertBanner.querySelector('button');
    button?.click();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit on focus', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner
        text="Alert"
        action={{ label: 'Label', onFocus: handleEventMock }}
      />,
    );
    const button = alertBanner.querySelector('button');
    button?.focus();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit on blur', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner
        text="Alert"
        action={{ label: 'Label', onBlur: handleEventMock }}
      />,
    );
    const button = alertBanner.querySelector('button');
    button?.blur();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render close button', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner text="Toast text" onCloseClick={handleEventMock} />,
    );
    const button = alertBanner.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('should emit on close', () => {
    const alertBanner = getAlertBanner(
      <AlertBanner text="Toast text" onCloseClick={handleEventMock} />,
    );
    const button = alertBanner.querySelector('button');
    button?.click();
    expect(handleEventMock).toHaveBeenCalled();
  });
});
