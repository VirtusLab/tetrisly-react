import type { Action, ActionProp } from '@/types';

export const useAction = (
  action: ActionProp | undefined,
): [Action | undefined, Action | undefined] =>
  Array.isArray(action) ? action : [action, undefined];
