import { Avatar } from './Avatar';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getAvatar = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);

  return getByTestId('avatar');
};

const getImage = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return queryByTestId('avatar-image');
};

describe('Avatar', () => {
  customPropTester(
    <Avatar
      img={{ src: 'https://thispersondoesnotexist.com/' }}
      appearance="image"
    />,
    {
      containerId: 'avatar',
      props: {
        appearance: [
          'blue',
          'green',
          'grey',
          'red',
          'orange',
          'raspberry',
          'magenta',
          'purple',
          'grape',
          'violet',
          'cyan',
          'teal',
          'aquamarine',
          'emerald',
          'image',
        ],
      },
      innerElements: {
        image: [],
      },
    },
  );

  it('should render the avatar', () => {
    const avatar = getAvatar(<Avatar initials="M" />);
    expect(avatar).toBeInTheDocument();
  });

  it('should render the correct initials', () => {
    const avatar = getAvatar(<Avatar initials="M" />);
    expect(avatar).toHaveTextContent('M');
  });

  it('should render the image', () => {
    const image = getImage(
      <Avatar
        img={{ src: 'https://thispersondoesnotexist.com/' }}
        appearance="image"
      />,
    );
    expect(image).toBeInTheDocument();
  });

  it('should not render the image if initials are provided', () => {
    const image = getImage(<Avatar initials="M" />);
    expect(image).toBeNull();
  });
});
