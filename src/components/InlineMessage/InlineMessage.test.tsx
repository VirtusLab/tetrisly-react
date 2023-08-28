import { InlineMessage } from './InlineMessage';
import { render } from '../../tests/render';

const getInlineMessage = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    title: queryByTestId('inline-message-title'),
    icon: queryByTestId('inline-message-icon'),
    description: queryByTestId('inline-message-description'),
  };
};

describe('InlineMessage', () => {
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
    expect(title).toHaveStyle('color: rgb(17, 17, 17);');
    expect(icon).toHaveStyle('color: rgb(48, 48, 48);');
    expect(description).toHaveStyle('color: rgb(85, 85, 85);');
  });

  it('should render correct intent color (success)', () => {
    const { title, description, icon } = getInlineMessage(
      <InlineMessage
        title="Title"
        intent="success"
        description="Description"
      />,
    );
    expect(title).toHaveStyle('color: rgb(14, 14, 14);');
    expect(icon).toHaveStyle('color: rgb(29, 29, 29);');
    expect(description).toHaveStyle('color: rgb(85, 85, 85);');
  });

  it('should render correct intent color (warning)', () => {
    const { title, description, icon } = getInlineMessage(
      <InlineMessage
        title="Title"
        intent="warning"
        description="Description"
      />,
    );
    expect(title).toHaveStyle('color: rgb(16, 16, 16);');
    expect(icon).toHaveStyle('color: rgb(56, 56, 56);');
    expect(description).toHaveStyle('color: rgb(85, 85, 85);');
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
    expect(description).toHaveStyle('color: rgb(85, 85, 85);');
  });
});
