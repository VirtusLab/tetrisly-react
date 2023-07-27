import { Loader } from './Loader';
import { ProgressCircle } from './Progress';
import { render } from '../../tests/render';

const getLoader = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    loader: queryByTestId('loader'),
    base: queryByTestId('loader-base'),
    progress: queryByTestId('loader-progress'),
  };
};

describe('Loader', () => {
  it('should render the loader', () => {
    const { loader } = getLoader(<Loader shape="circle" />);
    expect(loader).toBeInTheDocument();
  });

  it('should render correct size (circle small)', () => {
    const { loader } = getLoader(<Loader shape="circle" size="small" />);
    expect(loader).toHaveStyle('width: 20px');
    expect(loader).toHaveStyle('height: 20px');
  });

  it('should render correct size (circle medium)', () => {
    const { loader } = getLoader(<Loader shape="circle" size="medium" />);
    expect(loader).toHaveStyle('width: 32px');
    expect(loader).toHaveStyle('height: 32px');
  });

  it('should render correct size (circle large)', () => {
    const { loader } = getLoader(<Loader shape="circle" size="large" />);
    expect(loader).toHaveStyle('width: 48px');
    expect(loader).toHaveStyle('height: 48px');
  });

  it('should render correct size (bar small)', () => {
    const { loader } = getLoader(<Loader shape="bar" size="small" />);
    expect(loader).toHaveStyle('width: 128px');
    expect(loader).toHaveStyle('height: 4px');
  });

  it('should render correct size (bar medium)', () => {
    const { loader } = getLoader(<Loader shape="bar" size="medium" />);
    expect(loader).toHaveStyle('width: 128px');
    expect(loader).toHaveStyle('height: 6px');
  });

  it('should render correct size (bar large)', () => {
    const { loader } = getLoader(<Loader shape="bar" size="large" />);
    expect(loader).toHaveStyle('width: 128px');
    expect(loader).toHaveStyle('height: 8px');
  });

  it('should animate when progress is undefined', () => {
    const { progress } = getLoader(<Loader shape="bar" size="medium" />);
    expect(progress).toHaveStyle('animation: mrMnx 1.4s infinite linear');
  });

  it('should render correct appearance', () => {
    const { base, progress } = getLoader(<Loader shape="circle" />);
    expect(base).toHaveStyle('stroke: hsla(204,20%,95%,1);');
    expect(progress).toHaveStyle('stroke: hsla(222,66%,51%,1);');
  });

  it('should render correct appearance (greyscale)', () => {
    const { base, progress } = getLoader(
      <Loader shape="circle" appearance="greyscale" />
    );
    expect(base).toHaveStyle('stroke: hsla(204,20%,95%,1); ');
    expect(progress).toHaveStyle('stroke: hsla(210,12%,33%,1);');
  });

  it('should render correct appearance (inverted)', () => {
    const { base, progress } = getLoader(
      <Loader shape="circle" appearance="inverted" />
    );
    expect(base).toHaveStyle('stroke: hsla(0,0%,100%,1);');
    expect(progress).toHaveStyle('stroke: hsla(222,66%,51%,1);');
  });

  it('should render correct appearance (white)', () => {
    const { base, progress } = getLoader(
      <Loader shape="circle" appearance="white" />
    );
    expect(base).toHaveStyle('stroke: hsla(0,0%,100%,1);');
    expect(progress).toHaveStyle('stroke: hsla(0,0%,100%,1);');
  });
});
