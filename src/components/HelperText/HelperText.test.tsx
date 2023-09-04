import { HelperText } from './HelperText';
import { render } from '../../tests/render';

import { silentThrowExpect } from '@/tests/silentThrowExpect';

const getHelperText = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    text: queryByTestId('helper-text'),
    icon: queryByTestId('helper-text-icon'),
    counter: queryByTestId('helper-text-counter'),
  };
};

describe('HelperText', () => {
  it('should render the helper text', () => {
    const { text } = getHelperText(<HelperText text="Hello there" />);
    expect(text).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const { text } = getHelperText(<HelperText text="Hello there" />);
    expect(text).toHaveTextContent('Hello there');
  });

  it('should render correct intent color (none)', () => {
    const { text, icon, counter } = getHelperText(
      <HelperText
        text="Hello there"
        intent="none"
        beforeIcon
        counter={{ current: 0, max: 0 }}
      />,
    );
    expect(text).toHaveStyle('color: rgb(85, 85, 85);');
    expect(icon).toHaveStyle('color: rgb(85, 85, 85);');
    expect(counter).toHaveStyle('color: rgb(85, 85, 85);');
  });

  it('should render correct intent color (alert)', () => {
    const { text, icon, counter } = getHelperText(
      <HelperText
        text="Hello there"
        intent="alert"
        beforeIcon
        counter={{ current: 0, max: 0 }}
      />,
    );
    expect(text).toHaveStyle('color: rgb(197, 52, 52);');
    expect(icon).toHaveStyle('color: rgb(197, 52, 52);');
    expect(counter).toHaveStyle('color: rgb(197, 52, 52);');
  });

  it('should render correct intent color (success)', () => {
    const { text, icon, counter } = getHelperText(
      <HelperText
        text="Hello there"
        intent="success"
        beforeIcon
        counter={{ current: 0, max: 0 }}
      />,
    );
    expect(text).toHaveStyle('color: rgb(29, 29, 29);');
    expect(icon).toHaveStyle('color: rgb(29, 29, 29);');
    expect(counter).toHaveStyle('color: rgb(29, 29, 29);');
  });

  it('should render icon if passed as a prop', () => {
    const { icon } = getHelperText(
      <HelperText text="Hello there" beforeIcon />,
    );
    expect(icon).toBeInTheDocument();
  });

  it('should not render icon if not passed as a prop', () => {
    const { icon } = getHelperText(<HelperText text="Hello there" />);
    expect(icon).toBeNull();
  });

  it('should render counter if passed as a prop', () => {
    const { counter } = getHelperText(
      <HelperText text="Hello there" counter={{ current: 0, max: 0 }} />,
    );
    expect(counter).toBeInTheDocument();
  });

  it('should not render counter if not passed as a prop', () => {
    const { counter } = getHelperText(<HelperText text="Hello there" />);
    expect(counter).toBeNull();
  });

  it('should throw an error if wrong config is provided', () => {
    silentThrowExpect(() =>
      // @ts-expect-error testing wrong appearance
      render(<HelperText intent="default" />),
    ).toThrowError();
  });
});
