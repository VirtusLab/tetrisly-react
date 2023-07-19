import { th } from '@xstyled/system';

import { Button } from './Button';
import { config as styles } from './Button.styles';
import { render } from '../../tests/render';

import { theme } from '@/theme';

const getButton = (jsx: JSX.Element) => {
  const { getByRole } = render(jsx);
  return getByRole('button');
};

describe('Button', () => {
  it('should render the button', () => {
    const button = getButton(<Button label="Hello there" />);
    expect(button).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const button = getButton(<Button label="Hello there" />);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should throw an error if wrong config is provided', () => {
    expect(() =>
      // @ts-expect-error testing wrong appearance
      render(<Button variant="default" appearance="reverseInverted" />)
    ).toThrowError();
    expect(() =>
      render(
        // @ts-expect-error testing wrong dropdown
        <Button
          label="Hello There"
          afterIcon="20-placeholder"
          dropdownIndicator
        />
      )
    ).toThrowError();
  });

  it('should render default button when only label is provided', () => {
    const button = getButton(<Button label="Hello there" />);
    const {
      backgroundColor,
      intent: {
        none: {
          color: { _: color },
        },
      },
    } = styles.default.appearance.secondary;
    expect(button).toHaveStyle(
      `background-color: ${th.color(backgroundColor)({ theme })}`
    );
    expect(button).toHaveStyle(`color: ${th.color(color)({ theme })}`);
  });
});
