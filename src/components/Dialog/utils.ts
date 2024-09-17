export const checkIfChildrenIsCustomComponent = (
  element: React.ReactElement<any>,
) => {
  const { type } = element;
  const displayName =
    typeof type === 'function' || typeof type === 'object'
      ? (type as React.FunctionComponent).displayName ||
        (type as React.FunctionComponent).name ||
        'Unknown'
      : undefined;
  return !displayName;
};
