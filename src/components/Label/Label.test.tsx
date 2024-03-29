import { Label } from './Label';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getLabel = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    label: queryByTestId('label'),
    optional: queryByTestId('label-optional'),
    action: queryByTestId('label-action'),
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
    const { optional } = getLabel(
      <Label label="Hello there" optional="optional" />,
    );
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

  it('should render action if a prop passed', () => {
    const { action } = getLabel(
      <Label label="Hello there" action={{ label: 'Action' }} />,
    );
    expect(action).toBeInTheDocument();
  });

  it('should not render action if a prop not passed', () => {
    const { action } = getLabel(<Label label="Hello there" />);
    expect(action).toBeNull();
  });

  it('should render correct colors', () => {
    const { label, optional, tooltip } = getLabel(
      <Label label="Hello there" optional="optional" tooltip />,
    );
    expect(label).toHaveStyle('color: rgb(39, 46, 53)');
    expect(optional).toHaveStyle('color: rgb(126, 140, 154)');
    expect(tooltip).toHaveStyle('color: rgb(85, 95, 109)');
  });

  customPropTester(
    <Label
      label="Hello there"
      optional="optional"
      tooltip
      action={{ label: 'Action' }}
    />,
    {
      containerId: 'label',
      innerElements: {
        optional: [],
        tooltip: [],
        action: [],
      },
    },
  );
});
