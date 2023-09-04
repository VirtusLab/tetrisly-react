import { cloneElement, isValidElement } from 'react';

export const applyProps = (Component: React.ReactNode, props: object) => {
  if (isValidElement(Component)) {
    return cloneElement(Component, props);
  }
  throw new Error('Provided Component is not valid');
};
