import { Dialog } from './Dialog';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getDialog = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return {
    dialog: getByTestId('dialog'),
  };
};

describe('Dialog', () => {
  it('should render the dialog', () => {
    const { dialog } = getDialog(<Dialog />);
    expect(dialog).toBeInTheDocument();
  });

  customPropTester(<Dialog />, {
    containerId: 'dialog',
    props: {
      // appearance: ['grey', 'blue', 'green', 'red', 'orange'],
      // emphasis: ['high', 'medium', 'low'],
    },
  });
});
