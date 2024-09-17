import { FileIcon } from './FileIcon';

import { customPropTester } from '@/tests/customPropTester';
import { render } from '@/tests/render';

const getFileIcon = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);

  return getByTestId('file-icon');
};

describe('FileIcon', () => {
  customPropTester(<FileIcon iconType="Photoshop" />, {
    containerId: 'file-icon',
    props: {
      size: ['Large', 'Medium'],
    },
  });

  it('should render the file icon', () => {
    const fileIcon = getFileIcon(<FileIcon iconType="Photoshop" />);
    expect(fileIcon).toBeInTheDocument();
  });
});
