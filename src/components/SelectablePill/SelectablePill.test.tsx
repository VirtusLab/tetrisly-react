import { vi } from 'vitest';

import { SelectablePill } from './SelectablePill';
import { SelectablePillState } from './SelectablePillState.type';
import { render, screen, fireEvent } from '../../tests/render';

describe('SelectablePill', () => {
  const states: SelectablePillState[] = ['default', 'disabled'];
  const selected = [false, true];
  const pillPointer = 'selectable-pill';

  it('should render the BooleanPill ', () => {
    render(<SelectablePill text="Value" />);
    const pill = screen.getByTestId(pillPointer);
    expect(pill).toBeInTheDocument();
  });

  it('should be disabled if disabled state is passed', () => {
    render(<SelectablePill text="Value" state="disabled" />);
    const pill = screen.getByTestId(pillPointer);
    expect(pill).toHaveStyle('pointer-events: none');
    expect(pill).toHaveStyle('opacity: 0.5');
  });

  states.forEach((state) => {
    describe(`State: ${state}`, () => {
      it('should render the BooleanPill', () => {
        render(<SelectablePill text="Value" state={state} />);
        const pill = screen.getByTestId(pillPointer);
        expect(pill).toBeInTheDocument();
      });

      it('should render correct text', () => {
        render(<SelectablePill state={state} text="Hello there!" />);
        const pill = screen.getByTestId(pillPointer);
        expect(pill).toHaveTextContent('Hello there!');
      });

      it('should not render prefix if prefix prop is not passed', () => {
        render(<SelectablePill text="Value" state={state} />);
        const pill = screen.getByTestId(pillPointer);
        expect(pill).not.toHaveTextContent('Prefix');
      });

      it('should render prefix if prefix prop is passed', () => {
        render(<SelectablePill text="Value" state={state} prefix="Prefix" />);
        const pill = screen.getByTestId(pillPointer);
        expect(pill).toHaveTextContent('Prefix');
      });

      it('should not render avatar if avatar prop is not passed', () => {
        render(<SelectablePill text="Value" state={state} />);
        const pill = screen.getByTestId(pillPointer);
        const avatar = screen.queryByTestId('selectable-pill-avatar');
        expect(pill).toBeInTheDocument();
        expect(avatar).not.toBeInTheDocument();
      });

      it('should not render icon if icon prop is not passed', () => {
        render(<SelectablePill text="Value" state={state} />);
        const pill = screen.getByTestId(pillPointer);
        const icon = screen.queryByTestId('selectable-pill-icon');
        expect(pill).toBeInTheDocument();
        expect(icon).not.toBeInTheDocument();
      });

      it('should render icon if icon prop is passed', () => {
        render(
          <SelectablePill
            text="Value"
            state={state}
            beforeComponent={{
              icon: '20-accesibility',
            }}
          />,
        );
        const pill = screen.getByTestId(pillPointer);
        const icon = screen.getByTestId('selectable-pill-icon');
        expect(pill).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
      });

      it('should render avatar if avatar prop is passed', () => {
        render(
          <SelectablePill
            text="Value"
            state={state}
            beforeComponent={{
              avatar: { appearance: 'magenta', initials: 'M' },
            }}
          />,
        );
        const pill = screen.getByTestId(pillPointer);
        const avatar = screen.getByTestId('selectable-pill-avatar');
        expect(pill).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
      });

      selected.forEach((isSelected) => {
        describe(`isSelected ${isSelected}`, () => {
          it('should handle onChange properly when clicked', () => {
            const onChangeMock = vi.fn();
            render(
              <SelectablePill
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
              <SelectablePill
                text="Value"
                state={state}
                isSelected={isSelected}
              />,
            );
            const pill = screen.getByTestId(pillPointer);
            expect(pill).toBeInTheDocument();

            if (isSelected) {
              const checkmark = screen.queryByTestId(
                'selectable-pill-selected-icon',
              );
              expect(checkmark).toBeInTheDocument();
            } else {
              const checkmark = screen.queryByTestId(
                'selectable-pill-unselected-icon',
              );
              expect(checkmark).toBeInTheDocument();
            }
          });
        });
      });
    });
  });
});
