import { Counter } from './Counter';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getCounter = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('counter');
};

describe('Counter', () => {
  customPropTester(<Counter number={24} />, {
    containerId: 'counter',
    props: {
      emphasis: ['high', 'low'],
    },
  });

  it('should render the counter', () => {
    const counter = getCounter(<Counter number={24} />);
    expect(counter).toBeInTheDocument();
  });

  it('should render the correct number', () => {
    const counter = getCounter(<Counter number={24} />);
    expect(counter).toHaveTextContent('24');
  });

  it('should render correct color (appearance default, emphasis high)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="default" emphasis="high" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(255, 255, 255);');
  });

  it('should render correct color (appearance red, emphasis high)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="red" emphasis="high" />,
    );
    expect(counter).toHaveStyle('color: rgb(255, 255, 255);');
    expect(counter).toHaveStyle('background-color: rgb(197,52,52);');
  });

  it('should render correct color (appearance grey, emphasis high)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="grey" emphasis="high" />,
    );
    expect(counter).toHaveStyle('color: rgb(255, 255, 255);');
    expect(counter).toHaveStyle('background-color: rgb(85, 95, 109);');
  });

  it('should render correct color (appearance blue, emphasis high)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="blue" emphasis="high" />,
    );
    expect(counter).toHaveStyle('color: rgb(255, 255, 255);');
    expect(counter).toHaveStyle('background-color: rgb(48, 98, 212);');
  });

  it('should render correct color (appearance green, emphasis high)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="green" emphasis="high" />,
    );
    expect(counter).toHaveStyle('color: rgb(255, 255, 255);');
    expect(counter).toHaveStyle('background-color: rgb(29, 124, 77);');
  });

  it('should render correct color (appearance orange, emphasis high)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="orange" emphasis="high" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(245, 150, 56);');
  });

  it('should render correct color (appearance default, emphasis low)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="default" emphasis="low" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(255, 255, 255);');
  });

  it('should render correct color (appearance red, emphasis low)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="red" emphasis="low" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(254, 230, 230);');
  });

  it('should render correct color (appearance grey, emphasis low)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="grey" emphasis="low" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(234, 237, 240);');
  });

  it('should render correct color (appearance blue, emphasis low)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="blue" emphasis="low" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(229, 238, 255);');
  });

  it('should render correct color (appearance green, emphasis low)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="green" emphasis="low" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(216, 248, 231);');
  });

  it('should render correct color (appearance orange, emphasis low)', () => {
    const counter = getCounter(
      <Counter number={24} appearance="orange" emphasis="low" />,
    );
    expect(counter).toHaveStyle('color: rgb(39, 46, 53);');
    expect(counter).toHaveStyle('background-color: rgb(255, 232, 209);');
  });
});
