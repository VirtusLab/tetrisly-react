import { RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
declare const customRender: (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export * from '@testing-library/react';
export { customRender as render };
