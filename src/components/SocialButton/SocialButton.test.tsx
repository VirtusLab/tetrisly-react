import { vi } from 'vitest';

import { SocialButton } from './SocialButton';
import { platforms } from './SocialButton.props';
import { fireEvent, render } from '../../tests/render';

import { SocialButtonProps } from '.';

import { customPropTester } from '@/tests/customPropTester/customPropTester';

const handleEventMock = vi.fn();

const getSocialButton = (
  props: SocialButtonProps = {
    platform: 'Apple',
    label: 'Sign in with Apple',
  },
) => {
  const { queryByTestId } = render(<SocialButton {...props} />);

  return {
    socialButton: queryByTestId('social-button'),
    queryByTestId,
  };
};

describe('SocialButton', () => {
  it('should render the socialButton', () => {
    const { socialButton } = getSocialButton();
    expect(socialButton).toBeInTheDocument();
  });

  it('should emit onClick', () => {
    const { socialButton } = getSocialButton({
      platform: 'Apple',
      onClick: handleEventMock,
      label: 'Sign in with Apple',
    });

    if (socialButton) {
      fireEvent.click(socialButton);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const { socialButton } = getSocialButton({
      platform: 'Apple',
      onBlur: handleEventMock,
      label: 'Sign in with Apple',
    });

    if (socialButton) {
      fireEvent.blur(socialButton);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { socialButton } = getSocialButton({
      platform: 'Apple',
      onFocus: handleEventMock,
      label: 'Sign in with Apple',
    });

    if (socialButton) {
      fireEvent.focus(socialButton);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render label ', () => {
    const { socialButton } = getSocialButton({
      platform: 'Apple',
      label: 'Get on board with Apple',
    });

    expect(socialButton).toHaveTextContent('Get on board with Apple');
  });

  it("should render loader if state is 'loading'", () => {
    const { queryByTestId } = render(
      <SocialButton
        platform="Apple"
        state="loading"
        label="Sign in with Apple"
      />,
    );

    const loader = queryByTestId('loader');

    expect(loader).toBeInTheDocument();
  });

  it('should render different platform icons depending on passed props', () => {
    platforms.forEach((platform) => {
      const { queryByTestId } = render(
        <SocialButton label={`Sign in with ${platform}`} platform={platform} />,
      );

      const icon = queryByTestId(`${platform.toLowerCase()}-icon`);

      expect(icon).toBeInTheDocument();
    });
  });

  customPropTester(
    <SocialButton platform="Apple" label="Sign In with Apple" />,
    {
      containerId: 'social-button',
      props: {
        appearance: ['primary', 'secondary'],
      },
    },
  );
});
