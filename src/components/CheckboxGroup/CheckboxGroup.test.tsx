import { CheckboxGroup } from './CheckboxGroup';
import { render } from '../../tests/render';

const getCheckboxGroup = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);
  return {
    checkboxGroup: queryByTestId('checkbox-group'),
    checkboxGroupContainer: queryByTestId('checkbox-group-container'),
    helperText: queryByTestId('helper-text'),
  };
};

describe('CheckboxGroup', () => {
  it('should render the checkbox group', () => {
    const { checkboxGroup } = getCheckboxGroup(
      <CheckboxGroup column={1} name="name" />,
    );
    expect(checkboxGroup).toBeInTheDocument();
  });

  it('should render label text', () => {
    const { checkboxGroup } = getCheckboxGroup(
      <CheckboxGroup column={1} name="name" label="Label" />,
    );

    expect(checkboxGroup).toHaveTextContent('Label');
  });

  it('should render helper text if props provided', () => {
    const { checkboxGroup, helperText } = getCheckboxGroup(
      <CheckboxGroup
        column={1}
        name="name"
        label="Label"
        helperText="Helper text"
      />,
    );

    expect(checkboxGroup).toHaveTextContent('Label');
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent('Helper text');
  });

  it('should not render helper text if props not provided', () => {
    const { helperText } = getCheckboxGroup(
      <CheckboxGroup column={1} name="name" label="Label" />,
    );

    expect(helperText).toBeNull();
  });

  it('should render correct number of columns', () => {
    const { checkboxGroupContainer } = getCheckboxGroup(
      <CheckboxGroup column={4} name="name" />,
    );

    expect(checkboxGroupContainer).toHaveStyle(
      'grid-template-columns: repeat(4,1fr)',
    );
  });

  it('should render vertically, if no column provided', () => {
    const { checkboxGroupContainer } = getCheckboxGroup(
      <CheckboxGroup name="name" />,
    );

    expect(checkboxGroupContainer).toHaveStyle(
      'grid-template-columns: repeat(1,1fr)',
    );
  });

  it('should render correct number of children', () => {
    const { checkboxGroupContainer } = getCheckboxGroup(
      <CheckboxGroup name="name">
        <CheckboxGroup.Item label="Label" />
        <CheckboxGroup.Item label="Label" />
        <CheckboxGroup.Item label="Label" />
        <CheckboxGroup.Item label="Label" />
        <CheckboxGroup.Item label="Label" />
        <CheckboxGroup.Item label="Label" />
      </CheckboxGroup>,
    );

    expect(checkboxGroupContainer?.children.length).toEqual(6);
  });

  it('should propagate name prop to children', () => {
    const { checkboxGroupContainer } = getCheckboxGroup(
      <CheckboxGroup name="name">
        <CheckboxGroup.Item label="Label" />
        <CheckboxGroup.Item label="Label" />
      </CheckboxGroup>,
    );

    expect(
      checkboxGroupContainer?.children[0].querySelector('input'),
    ).toHaveAttribute('name', 'name');
    expect(
      checkboxGroupContainer?.children[1].querySelector('input'),
    ).toHaveAttribute('name', 'name');
  });

  it('should propagate custom props', () => {
    const { checkboxGroup } = getCheckboxGroup(
      <CheckboxGroup
        column={1}
        name="name"
        custom={{ backgroundColor: 'background-negative-subtle' }}
      />,
    );

    expect(checkboxGroup).toHaveStyle('background-color: rgb(254, 245, 245)');
  });
});
