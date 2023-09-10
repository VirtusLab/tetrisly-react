export type Options = {
  containerId: string;
  props?: Record<string, string[]>;
  innerElements?: Record<string, (string | [string, string])[]>;
};
