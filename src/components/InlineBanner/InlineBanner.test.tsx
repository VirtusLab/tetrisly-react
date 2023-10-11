import { vi } from 'vitest';

import { InlineBanner } from './InlineBanner';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getInlineBanner = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    inlineBanner: getByTestId('inline-banner'),
    iconContainer: queryByTestId('inline-banner-iconContainer'),
    contentContainer: queryByTestId('inline-banner-contentContainer'),
    actionContainer: queryByTestId('inline-banner-actionContainer'),
    description: queryByTestId('inline-banner-description'),
    title: getByTestId('inline-banner-title'),
    closeButton: queryByTestId('inline-banner-closeButton'),
  };
};

const handleEventMock = vi.fn();

describe('InlineBanner', () => {
  customPropTester(
    <InlineBanner
      title="title"
      description="Description"
      action={{
        label: 'Action',
      }}
      onCloseClick={handleEventMock}
    />,
    {
      containerId: 'inline-banner',
      props: {
        intent: ['none', 'informative', 'success', 'warning', 'negative'],
      },
      innerElements: {
        iconContainer: [],
        contentContainer: [],
        actionContainer: [],
        description: [],
        title: [],
        closeButton: [],
      },
    },
  );

  it('should render the inline banner', () => {
    const { inlineBanner } = getInlineBanner(<InlineBanner title="title" />);
    expect(inlineBanner).toBeInTheDocument();
  });

  it('should render the correct title', () => {
    const { title } = getInlineBanner(<InlineBanner title="title" />);
    expect(title).toHaveTextContent('title');
  });

  it('should render the correct description', () => {
    const { description } = getInlineBanner(
      <InlineBanner title="title" description="description" />,
    );
    expect(description).toHaveTextContent('description');
  });

  it('should render action button', () => {
    const { actionContainer } = getInlineBanner(
      <InlineBanner title="title" action={{ label: 'Label' }} />,
    );
    const button = actionContainer?.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('should render both action buttons in case an array is provided', () => {
    const { actionContainer } = getInlineBanner(
      <InlineBanner
        title="title"
        action={[{ label: 'Label' }, { label: 'Label' }]}
      />,
    );
    const buttons = actionContainer?.getElementsByTagName('button');
    expect(buttons?.[0]).toBeInTheDocument();
    expect(buttons?.[1]).toBeInTheDocument();
  });

  it('should emit on click', () => {
    const { actionContainer } = getInlineBanner(
      <InlineBanner
        title="title"
        action={{ label: 'Label', onClick: handleEventMock }}
      />,
    );
    const button = actionContainer?.querySelector('button');
    button?.click();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit on focus', () => {
    const { actionContainer } = getInlineBanner(
      <InlineBanner
        title="title"
        action={{ label: 'Label', onFocus: handleEventMock }}
      />,
    );
    const button = actionContainer?.querySelector('button');
    button?.focus();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit on blur', () => {
    const { actionContainer } = getInlineBanner(
      <InlineBanner
        title="title"
        action={{ label: 'Label', onBlur: handleEventMock }}
      />,
    );
    const button = actionContainer?.querySelector('button');
    button?.blur();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render close button', () => {
    const { closeButton } = getInlineBanner(
      <InlineBanner title="title" onCloseClick={handleEventMock} />,
    );
    expect(closeButton).toBeInTheDocument();
  });

  it('should emit on close', () => {
    const { closeButton } = getInlineBanner(
      <InlineBanner title="title" onCloseClick={handleEventMock} />,
    );
    closeButton?.click();
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render correct intent color (none)', () => {
    const { inlineBanner } = getInlineBanner(
      <InlineBanner title="title" intent="none" />,
    );
    expect(inlineBanner).toHaveStyle('background-color: rgb(245, 247, 249);');
  });

  it('should render correct intent color (informative)', () => {
    const { inlineBanner } = getInlineBanner(
      <InlineBanner title="title" intent="informative" />,
    );
    expect(inlineBanner).toHaveStyle('background-color: rgb(245, 248, 255);');
  });

  it('should render correct intent color (success)', () => {
    const { inlineBanner } = getInlineBanner(
      <InlineBanner title="title" intent="success" />,
    );
    expect(inlineBanner).toHaveStyle('background-color: rgb(244, 251, 247);');
  });

  it('should render correct intent color (warning)', () => {
    const { inlineBanner } = getInlineBanner(
      <InlineBanner title="title" intent="warning" />,
    );
    expect(inlineBanner).toHaveStyle('background-color: rgb(255, 245, 235);');
  });

  it('should render correct intent color (negative)', () => {
    const { inlineBanner } = getInlineBanner(
      <InlineBanner title="title" intent="negative" />,
    );
    expect(inlineBanner).toHaveStyle('background-color: rgb(254, 245, 245);');
  });
});
