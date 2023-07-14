import { render, screen } from '@testing-library/react';

import { tet } from './tetrisly';
import { TetrislyProvider } from './TetrislyProvider';

import { theme } from '@/theme';

describe('check tetrisly provider, and correct styling', () => {
  it('with no theme provided should use default theme', () => {
    render(
      <TetrislyProvider>
        <tet.button color="blue-+1">Click me</tet.button>
      </TetrislyProvider>
    );
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle(`color: ${theme.colors['blue-+1']}`);
  });
  it('with theme provided should use theme', () => {
    const customColor = 'rgb(255, 0, 0)';
    render(
      <TetrislyProvider
        theme={{
          colors: {
            'blue-+1': customColor,
          },
        }}
      >
        <tet.button color="blue-+1" backgroundColor="blue-+2">
          Click me
        </tet.button>
      </TetrislyProvider>
    );
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle(`color: ${customColor}`);
  });
  it('with theme provided should replace default theme when same key is provided', () => {
    const customColor = 'rgb(255, 0, 0)';
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle(`color: ${customColor}`);
  });
  it('with theme provided should replace default theme when same key is provided', () => {
    const customColor = 'rgb(255, 0, 0)';
    render(
      <TetrislyProvider
        theme={{
          colors: {
            'blue-+1': customColor,
          },
        }}
      >
        <tet.button color="blue-+1" backgroundColor="blue-+2">
          Click me
        </tet.button>
      </TetrislyProvider>
    );
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle(`color: ${customColor}`);
    expect(button).toHaveStyle(`background-color: ${theme.colors['blue-+2']}`);
  });
});
