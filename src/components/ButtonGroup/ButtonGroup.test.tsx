import { render, screen } from '../../tests/render';

import { ButtonGroup } from '.';

import { customPropTester } from '@/tests/customPropTester';

// TODO

const getButtonGroup = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return {
    buttonGroup: getByTestId('button-group'),
  };
};
describe('ButtonGroup', () => {
  it('should render the ButtonGroup ', () => {
    const { buttonGroup } = getButtonGroup(<ButtonGroup />);
    expect(buttonGroup).toBeInTheDocument();
  });

  it('should render correct number of children', () => {
    const { buttonGroup } = getButtonGroup(
      <ButtonGroup>
        <ButtonGroup.Item label="label" />
        <ButtonGroup.Item label="label" />
        <ButtonGroup.Item label="label" />
        <ButtonGroup.Item label="label" />
        <ButtonGroup.Item label="label" />
      </ButtonGroup>,
    );

    expect(buttonGroup?.children.length).toEqual(5);
  });

  customPropTester(<ButtonGroup />, {
    containerId: 'button-group',
    props: {
      options: ['small', 'medium'],
    },
  });
});
