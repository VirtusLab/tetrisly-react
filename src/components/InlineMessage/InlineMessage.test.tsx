import { InlineMessage } from './InlineMessage';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester/customPropTester';

const getInlineMessage = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    title: queryByTestId('inline-message-title'),
    icon: queryByTestId('inline-message-icon'),
    description: queryByTestId('inline-message-description'),
  };
};

describe('InlineMessage', () => {
  customPropTester(<InlineMessage title="Title" description="Description" />, {
    containerId: 'inline-message',
    props: {
      intent: ['informative', 'success', 'warning', 'negative'],
    },
    innerElements: {
      title: ['intent'],
      iconContainer: ['intent'],
      description: [],
    },
  });

  it('should render the inline message', () => {
    const { title, description } = getInlineMessage(
      <InlineMessage title="Title" />,
    );
    expect(title).toHaveTextContent('Title');
    expect(description).not.toBeInTheDocument();
  });

  it('should render correct description', () => {
    const { title, description } = getInlineMessage(
      <InlineMessage title="Title" description="Description" />,
    );
    expect(title).toHaveTextContent('Title');
    expect(description).toHaveTextContent('Description');
  });

  it('should render correct intent color (informative)', () => {
    const { title, description, icon } = getInlineMessage(
      <InlineMessage title="Title" description="Description" />,
    );
    expect(title).toHaveStyle('color: rgb(17, 57, 151);');
    expect(icon).toHaveStyle('color: rgb(48, 98, 212);');
    expect(description).toHaveStyle('color: rgb(85, 95, 109);');
  });

  it('should render correct intent color (success)', () => {
    const { title, description, icon } = getInlineMessage(
      <InlineMessage
        title="Title"
        intent="success"
        description="Description"
      />,
    );
    expect(title).toHaveStyle('color: rgb(14, 78, 48);');
    expect(icon).toHaveStyle('color: rgb(29, 124, 77);');
    expect(description).toHaveStyle('color: rgb(85, 95, 109);');
  });

  it('should render correct intent color (warning)', () => {
    const { title, description, icon } = getInlineMessage(
      <InlineMessage
        title="Title"
        intent="warning"
        description="Description"
      />,
    );
    expect(title).toHaveStyle('color: rgb(122, 69, 16);');
    expect(icon).toHaveStyle('color: rgb(245, 150, 56);');
    expect(description).toHaveStyle('color: rgb(85, 95, 109);');
  });

  it('should render correct intent color (negative)', () => {
    const { title, description, icon } = getInlineMessage(
      <InlineMessage
        title="Title"
        intent="negative"
        description="Description"
      />,
    );
    expect(title).toHaveStyle('color: rgb(111, 32, 32);');
    expect(icon).toHaveStyle('color: rgb(197, 52, 52);');
    expect(description).toHaveStyle('color: rgb(85, 95, 109);');
  });
});
