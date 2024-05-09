import { vi } from 'vitest';

import { NewItemButton } from './NewItemButton';
import { NewItemButtonState } from './NewItemButtonState.type';
import { render, screen, fireEvent } from '../../tests/render';

describe('NewItemButton', () => {
  const states: NewItemButtonState[] = ['normal', 'alert', 'disabled'];

  it('should render the NewItemButton ', () => {
    render(<NewItemButton />);
    const button = screen.getByTestId('new-item-button');
    expect(button).toBeInTheDocument();
  });

  it('should be disabled if disabled state is passed', () => {
    render(<NewItemButton state="disabled" />);
    const button = screen.getByTestId('new-item-button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('pointer-events: none');
    expect(button).toHaveStyle('opacity: 0.5');
  });

  states.forEach((state) => {
    describe(`State: ${state}`, () => {
      it('should render the NewItemButton', () => {
        render(<NewItemButton state={state} />);
        const button = screen.getByTestId('new-item-button');
        expect(button).toBeInTheDocument();
      });

      it('should render correct text', () => {
        render(<NewItemButton state={state} text="Hello there!" />);
        const button = screen.getByTestId('new-item-button');
        expect(button).toHaveTextContent('Hello there!');
      });

      it('should handle onClick properly when clicked', () => {
        const onClickMock = vi.fn();
        render(<NewItemButton state={state} onClick={onClickMock} />);

        const button = screen.getByTestId('new-item-button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        if (state !== 'disabled') {
          expect(onClickMock).toHaveBeenCalled();
        } else {
          expect(onClickMock).not.toHaveBeenCalled();
        }
      });
    });
  });
});
