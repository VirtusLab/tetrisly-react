import { Button } from './Button';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getButton = (jsx: JSX.Element) => {
  const { getByRole } = render(jsx);

  return getByRole('button');
};

describe('Button Default', () => {
  customPropTester(<Button />, {
    containerId: 'button',
    props: {
      appearance: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      intent: ['none', 'success', 'destructive'],
      size: ['small', 'medium', 'large'],
    },
    innerElements: {
      _: ['size', ['appearance', 'intent']],
    },
    customMapper: (custom) => ({ default: custom }),
  });

  it('should render the button', () => {
    const button = getButton(<Button label="Hello there" />);
    expect(button).toBeInTheDocument();
  });

  it('should render the button with children', () => {
    const button = getButton(<Button>Hello</Button>);
    expect(button).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const button = getButton(<Button label="Hello there" />);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should render correct text', () => {
    const button = getButton(<Button>Hello there</Button>);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should be disabled if disabled state is passed', () => {
    const button = getButton(<Button label="Hello there" state="disabled" />);
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('pointer-events: none');
  });
});

describe('Button Ghost', () => {
  customPropTester(<Button variant="ghost" />, {
    containerId: 'button',
    props: {
      appearance: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      intent: ['none', 'success', 'destructive'],
      size: ['small', 'medium', 'large'],
    },
    innerElements: {
      _: ['size', ['appearance', 'intent']],
    },
    customMapper: (custom) => ({ ghost: custom }),
  });

  it('should render the button', () => {
    const button = getButton(<Button variant="ghost" label="Hello there" />);
    expect(button).toBeInTheDocument();
  });

  it('should render the button with children', () => {
    const button = getButton(<Button variant="ghost">Hello</Button>);
    expect(button).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const button = getButton(<Button variant="ghost" label="Hello there" />);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should render correct text', () => {
    const button = getButton(<Button variant="ghost">Hello there</Button>);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should be disabled if disabled state is passed', () => {
    const button = getButton(
      <Button variant="ghost" label="Hello there" state="disabled" />,
    );
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('pointer-events: none');
  });
});

describe('Button Bare', () => {
  customPropTester(<Button variant="bare" />, {
    containerId: 'button',
    props: {
      appearance: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      intent: ['none', 'success', 'destructive'],
      size: ['medium', 'large'],
    },
    innerElements: {
      _: ['size', ['appearance', 'intent']],
    },
    customMapper: (custom) => ({ bare: custom }),
  });

  it('should render the button', () => {
    const button = getButton(<Button variant="bare" label="Hello there" />);
    expect(button).toBeInTheDocument();
  });

  it('should render the button with children', () => {
    const button = getButton(<Button variant="bare">Hello</Button>);
    expect(button).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const button = getButton(<Button variant="bare" label="Hello there" />);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should render correct text', () => {
    const button = getButton(<Button variant="bare">Hello there</Button>);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should be disabled if disabled state is passed', () => {
    const button = getButton(
      <Button variant="bare" label="Hello there" state="disabled" />,
    );
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('pointer-events: none');
  });
});
