import * as components from '../../index';

const allComponents = Array.from(Object.values(components));
const allComponentsProps = await Promise.all(
  allComponents.map(
    (component) => import(`../${component}.props.ts/${component}Props`),
  ),
);

export { allComponents, allComponentsProps };
