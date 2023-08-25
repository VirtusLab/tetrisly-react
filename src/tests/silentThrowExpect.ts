/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest';

const silentThrow =
  <T extends Function>(throwFn: T) =>
  (): T => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = throwFn();

    const consoleError: any = console.error;
    if (consoleError.mockRestore !== undefined) {
      consoleError.mockRestore();
    }

    return result;
  };

export const silentThrowExpect = <T extends Function = Function>(actual: T) =>
  expect(silentThrow(actual));
