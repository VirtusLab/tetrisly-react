import { Label } from './Label';
import { render } from '../../tests/render';

const getLabel = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    label: queryByTestId('label'),
    optional: queryByTestId('label-optional'),
    tooltip: queryByTestId('label-tooltip'),
  };
};

describe('Label', () => {
  it('should render the label', () => {
    const { label } = getLabel(<Label label="Hello there" />);
    expect(label).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const { label } = getLabel(<Label label="Hello there" />);
    expect(label).toHaveTextContent('Hello there');
  });

  it('should render optional if a prop passed', () => {
    const { optional } = getLabel(<Label label="Hello there" optional />);
    expect(optional).toBeInTheDocument();
  });

  it('should not render optional if a prop not passed', () => {
    const { optional } = getLabel(<Label label="Hello there" />);
    expect(optional).toBeNull();
  });

  it('should render tooltip if a prop passed', () => {
    const { tooltip } = getLabel(<Label label="Hello there" tooltip />);
    expect(tooltip).toBeInTheDocument();
  });

  it('should not render tooltip if a prop not passed', () => {
    const { tooltip } = getLabel(<Label label="Hello there" />);
    expect(tooltip).toBeNull();
  });

  it('should render correct colors', () => {
    const { label, optional, tooltip } = getLabel(
      <Label label="Hello there" optional tooltip />
    );
    expect(label).toHaveStyle('color: rgb(39, 39, 39)');
    expect(optional).toHaveStyle('color: rgb(126, 126, 126);');
    expect(tooltip).toHaveStyle('color: rgb(85, 85, 85)');
  });
});
