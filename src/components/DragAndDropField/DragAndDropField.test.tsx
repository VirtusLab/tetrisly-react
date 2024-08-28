import { DragAndDropField } from './DragAndDropField';
import { render } from '../../tests/render';

const getDragAndDropField = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('drag-and-drop-field');
};

describe('DragAndDropField', () => {
  it('should render the drag and drop field', () => {
    const dragAndDropField = getDragAndDropField(<DragAndDropField />);
    expect(dragAndDropField).toBeInTheDocument();
  });
  // TODO custom prop tester doesn't pass - find out why
  // customPropTester(<DragAndDropField />, {
  //   containerId: 'drag-and-drop-field',
  //   props: {
  //     extended: ['true', 'false'],
  //     states: ["normal", "hover", "dragover", "focus", "alert", "alertfocus", "disabled"]
  //   },
  // });
});
