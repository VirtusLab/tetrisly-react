import { RadioButtonGroup } from './RadioButtonGroup';
import { render } from '../../tests/render';

const getRadioButtonGroup = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);
  return {
    radioButtonGroup: queryByTestId('radio-button-group'),
    radioButtonGroupContainer: queryByTestId('radio-button-group-container'),
    helperText: queryByTestId('helper-text'),
  };
};

describe('RadioButtonGroup', () => {
  it('should render the radio button group', () => {
    const { radioButtonGroup } = getRadioButtonGroup(
      <RadioButtonGroup column={1} name="name" />
    );
    expect(radioButtonGroup).toBeInTheDocument();
  });

  it('should render label text', () => {
    const { radioButtonGroup } = getRadioButtonGroup(
      <RadioButtonGroup column={1} name="name" label="Label" />
    );

    expect(radioButtonGroup).toHaveTextContent('Label');
  });

  it('should render helper text if props provided', () => {
    const { radioButtonGroup, helperText } = getRadioButtonGroup(
      <RadioButtonGroup
        column={1}
        name="name"
        label="Label"
        helperText="Helper text"
      />
    );

    expect(radioButtonGroup).toHaveTextContent('Label');
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent('Helper text');
  });

  it('should not render helper text if props not provided', () => {
    const { helperText } = getRadioButtonGroup(
      <RadioButtonGroup column={1} name="name" label="Label" />
    );

    expect(helperText).toBeNull();
  });

  it('should render correct number of columns', () => {
    const { radioButtonGroupContainer } = getRadioButtonGroup(
      <RadioButtonGroup column={4} name="name" />
    );

    expect(radioButtonGroupContainer).toHaveStyle(
      'grid-template-columns: repeat(4,1fr)'
    );
  });

  it('should render vertically, if no column provided', () => {
    const { radioButtonGroupContainer } = getRadioButtonGroup(
      <RadioButtonGroup name="name" />
    );

    expect(radioButtonGroupContainer).toHaveStyle(
      'grid-template-columns: repeat(1,1fr)'
    );
  });

  it('should render correct number of children', () => {
    const { radioButtonGroupContainer } = getRadioButtonGroup(
      <RadioButtonGroup name="name">
        <RadioButtonGroup.Item label="Label" />
        <RadioButtonGroup.Item label="Label" />
        <RadioButtonGroup.Item label="Label" />
        <RadioButtonGroup.Item label="Label" />
        <RadioButtonGroup.Item label="Label" />
        <RadioButtonGroup.Item label="Label" />
      </RadioButtonGroup>
    );

    expect(radioButtonGroupContainer?.children.length).toEqual(6);
  });

  it('should propagate name prop to children', () => {
    const { radioButtonGroupContainer } = getRadioButtonGroup(
      <RadioButtonGroup name="name">
        <RadioButtonGroup.Item label="Label" />
        <RadioButtonGroup.Item label="Label" />
      </RadioButtonGroup>
    );

    expect(
      radioButtonGroupContainer?.children[0].querySelector('input')
    ).toHaveAttribute('name', 'name');
    expect(
      radioButtonGroupContainer?.children[1].querySelector('input')
    ).toHaveAttribute('name', 'name');
  });

  it('should propagate custom props', () => {
    const { radioButtonGroup } = getRadioButtonGroup(
      <RadioButtonGroup
        column={1}
        name="name"
        custom={{ backgroundColor: 'background-negative-subtle' }}
      />
    );

    expect(radioButtonGroup).toHaveStyle(
      'background-color: rgb(254, 245, 245)'
    );
  });
});
