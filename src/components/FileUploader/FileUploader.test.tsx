import { FileUploader } from './FileUploader';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getFileUploader = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return {
    fileUploader: getByTestId('file-uploader'),
  };
};

describe('FileUploader', () => {
  it('should render the file uploader', () => {
    const { fileUploader } = getFileUploader(<FileUploader />);
    expect(fileUploader).toBeInTheDocument();
  });

  customPropTester(<FileUploader />, {
    containerId: 'file-uploader',
    props: {
      // appearance: ['red', 'green', 'blue'],
      // hasStroke: [],
    },
  });
});
