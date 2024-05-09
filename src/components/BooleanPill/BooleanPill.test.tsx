import { vi } from 'vitest';

import { BooleanPill } from './BooleanPill';
import { BooleanPillState } from './BooleanPillState.type';
import { render, screen, fireEvent } from '../../tests/render';

describe('BooleanPill', () => {
  const states: BooleanPillState[] = ['default', 'disabled'];
  const selected = [false, true];
  const pillPointer = 'boolean-pill';

  it('should render the BooleanPill ', () => {
    render(<BooleanPill text="Value" />);
    const pill = screen.getByTestId(pillPointer);
    expect(pill).toBeInTheDocument();
  });

  it('should be disabled if disabled state is passed', () => {
    render(<BooleanPill text="Value" state="disabled" />);
    const pill = screen.getByTestId(pillPointer);
    expect(pill).toHaveStyle('pointer-events: none');
    expect(pill).toHaveStyle('opacity: 0.5');
  });

  states.forEach((state) => {
    describe(`State: ${state}`, () => {
      it('should render the BooleanPill', () => {
        render(<BooleanPill text="Value" state={state} />);
        const pill = screen.getByTestId(pillPointer);
        expect(pill).toBeInTheDocument();
      });

      it('should render correct text', () => {
        render(<BooleanPill state={state} text="Hello there!" />);
        const pill = screen.getByTestId(pillPointer);
        expect(pill).toHaveTextContent('Hello there!');
      });

      it('should not render avatar if avatar prop is not passed', () => {
        render(<BooleanPill text="Value" state={state} />);
        const pill = screen.getByTestId(pillPointer);
        const checkmark = screen.queryByTestId('boolean-pill-avatar');
        expect(pill).toBeInTheDocument();
        expect(checkmark).not.toBeInTheDocument();
      });

      it('should render avatar if avatar prop is passed', () => {
        render(
          <BooleanPill
            text="Value"
            state={state}
            avatar={{ appearance: 'magenta', initials: 'M' }}
          />,
        );
        const pill = screen.getByTestId(pillPointer);
        const checkmark = screen.getByTestId('boolean-pill-avatar');
        expect(pill).toBeInTheDocument();
        expect(checkmark).toBeInTheDocument();
      });

      selected.forEach((isSelected) => {
        describe(`isSelected ${isSelected}`, () => {
          it('should handle onChange properly when clicked', () => {
            const onChangeMock = vi.fn();
            render(
              <BooleanPill
                text="Value"
                state={state}
                isSelected={isSelected}
                onChange={onChangeMock}
              />,
            );

            const pill = screen.getByTestId(pillPointer);
            expect(pill).toBeInTheDocument();
            fireEvent.click(pill);
            if (state !== 'disabled') {
              expect(onChangeMock).toHaveBeenCalled();
              expect(onChangeMock).toBeCalledWith(!isSelected);
            } else {
              expect(onChangeMock).not.toHaveBeenCalled();
            }
          });

          it('should correctly render the checkmark', () => {
            render(
              <BooleanPill
                text="Value"
                state={state}
                isSelected={isSelected}
              />,
            );
            const pill = screen.getByTestId(pillPointer);
            const checkmark = screen.queryByTestId('boolean-pill-checkmark');
            expect(pill).toBeInTheDocument();

            if (isSelected) {
              expect(checkmark).toBeInTheDocument();
            } else {
              expect(checkmark).not.toBeInTheDocument();
            }
          });
        });
      });
    });
  });
});
