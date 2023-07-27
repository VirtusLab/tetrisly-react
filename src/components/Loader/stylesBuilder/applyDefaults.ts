import { LoaderProps } from '../Loader.props';
import { LoaderAppearance, LoaderSize } from '../types';

export function applyDefaults({ appearance, size, ...rest }: LoaderProps) {
  return {
    ...rest,
    appearance: (appearance ?? 'primary') as LoaderAppearance,
    size: (size ?? 'medium') as LoaderSize,
  };
}
