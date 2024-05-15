// import { HelperText } from './HelperText';
import { Tooltip } from './Tooltip';
import { render } from '../../tests/render';

// import { customPropTester } from '@/tests/customPropTester';

const getTooltip = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    text: queryByTestId('tooltip'),
    icon: queryByTestId('tooltip-arrow'),
    counter: queryByTestId('tooltip-content'),
  };
};

// describe('HelperText', () => {
//   customPropTester(<HelperText text="Hello there" hasBeforeIcon />, {
//     containerId: 'helper-text',
//     props: {
//       intent: ['none', 'success', 'alert'],
//     },
//     innerElements: {
//       iconContainer: [],
//     },
//   });

//   it('should render the helper text', () => {
//     const { text } = getHelperText(<HelperText text="Hello there" />);
//     expect(text).toBeInTheDocument();
//   });

//   it('should render correct text', () => {
//     const { text } = getHelperText(<HelperText text="Hello there" />);
//     expect(text).toHaveTextContent('Hello there');
//   });

//   it('should render correct intent color (none)', () => {
//     const { text, icon, counter } = getHelperText(
//       <HelperText
//         text="Hello there"
//         intent="none"
//         hasBeforeIcon
//         counter={{ current: 0, max: 0 }}
//       />,
//     );
//     expect(text).toHaveStyle('color: rgb(85, 95, 109);');
//     expect(icon).toHaveStyle('color: rgb(85, 95, 109);');
//     expect(counter).toHaveStyle('color: rgb(85, 95, 109);');
//   });

//   it('should render correct intent color (alert)', () => {
//     const { text, icon, counter } = getHelperText(
//       <HelperText
//         text="Hello there"
//         intent="alert"
//         hasBeforeIcon
//         counter={{ current: 0, max: 0 }}
//       />,
//     );
//     expect(text).toHaveStyle('color: rgb(197, 52, 52);');
//     expect(icon).toHaveStyle('color: rgb(197, 52, 52);');
//     expect(counter).toHaveStyle('color: rgb(197, 52, 52);');
//   });

//   it('should render correct intent color (success)', () => {
//     const { text, icon, counter } = getHelperText(
//       <HelperText
//         text="Hello there"
//         intent="success"
//         hasBeforeIcon
//         counter={{ current: 0, max: 0 }}
//       />,
//     );
//     expect(text).toHaveStyle('color: rgb(29, 124, 77);');
//     expect(icon).toHaveStyle('color: rgb(29, 124, 77);');
//     expect(counter).toHaveStyle('color: rgb(29, 124, 77);');
//   });

//   it('should render icon if passed as a prop', () => {
//     const { icon } = getHelperText(
//       <HelperText text="Hello there" hasBeforeIcon />,
//     );
//     expect(icon).toBeInTheDocument();
//   });

//   it('should not render icon if not passed as a prop', () => {
//     const { icon } = getHelperText(<HelperText text="Hello there" />);
//     expect(icon).toBeNull();
//   });

//   it('should render counter if passed as a prop', () => {
//     const { counter } = getHelperText(
//       <HelperText text="Hello there" counter={{ current: 0, max: 0 }} />,
//     );
//     expect(counter).toBeInTheDocument();
//   });

//   it('should not render counter if not passed as a prop', () => {
//     const { counter } = getHelperText(<HelperText text="Hello there" />);
//     expect(counter).toBeNull();
//   });
// });

describe('Tooltip', () => {
  it('should render the helper text', () => {
    const { text } = getTooltip(<Tooltip text="Tooltip" />);
    expect(text).toBeInTheDocument();
  });
});
