import { vi } from 'vitest';

import { SocialButton } from './SocialButton';
import { fireEvent, render } from '../../tests/render';

import { SocialButtonProps } from '.';

const handleEventMock = vi.fn();

const getSocialButton = (props: SocialButtonProps = { platform: 'Apple' }) => {
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
    });

    if (socialButton) {
      fireEvent.focus(socialButton);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render default text if none is provided', () => {
    const { socialButton } = getSocialButton();

    expect(socialButton).toHaveTextContent('Sign in with Apple');
  });

  it('should render content if passed', () => {
    const { socialButton } = getSocialButton({
      platform: 'Apple',
      content: 'Get on board with',
    });

    expect(socialButton).toHaveTextContent('Get on board with Apple');
  });
});
