import { isKeyOf } from './isKeyOf';
import { warnInDevelopment } from './warnInDevelopment';

export const fallbackKey = <T extends object>(
  object: T,
  key: string,
  fallBackKey: keyof T,
  warningMessage?: string,
) => {
  if (isKeyOf(object, key)) {
    return object[key];
  }

  warnInDevelopment(warningMessage);
  return object[fallBackKey];
};
