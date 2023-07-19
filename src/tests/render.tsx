import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';

import { TetrislyProvider } from '../tetrisly';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <TetrislyProvider>{children}</TetrislyProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
