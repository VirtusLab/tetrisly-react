import { Header } from './Header';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getHeader = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    actionContainer: queryByTestId('header-action-container'),
    bottomBar: queryByTestId('header-bottom-bar'),
    counter: queryByTestId('header-counter'),
    description: queryByTestId('header-description'),
    header: getByTestId('header'),
    search: queryByTestId('header-search'),
    title: getByTestId('header-title'),
  };
};

describe('Header', () => {
  customPropTester(<Header type="complex" title="" />, {
    containerId: 'header',
    props: {},
    innerElements: {},
  });

  it('should render the header', () => {
    const { header } = getHeader(<Header type="complex" title="" />);
    expect(header).toBeInTheDocument();
  });

  it('should render the correct title', () => {
    const { title } = getHeader(<Header title="Title" />);
    expect(title).toHaveTextContent('Title');
  });

  it('should render the correct title', () => {
    const { title } = getHeader(<Header title="Title" />);
    expect(title).toHaveTextContent('Title');
  });

  it('should render the correct description', () => {
    const { description } = getHeader(
      <Header description="Description" title="" />,
    );
    expect(description).toHaveTextContent('Description');
  });

  it('should not render the description', () => {
    const { description } = getHeader(<Header title="" />);
    expect(description).toBeNull();
  });

  it('should render the counter', () => {
    const { counter } = getHeader(<Header counter={0} title="" />);
    expect(counter).toBeInTheDocument();
  });

  it('should render the bottom bar', () => {
    const { bottomBar } = getHeader(<Header bottomBar title="" />);
    expect(bottomBar).toBeInTheDocument();
  });

  it('should not render the bottom bar', () => {
    const { bottomBar } = getHeader(<Header title="" />);
    expect(bottomBar).toBeNull();
  });

  it('should render the search', () => {
    const { search } = getHeader(<Header bottomBar title="" />);
    expect(search).toBeInTheDocument();
  });

  it('should render the action container', () => {
    const { actionContainer } = getHeader(
      <Header action={[{ label: 'Label' }, { label: 'Label' }]} title="" />,
    );
    expect(actionContainer).toBeInTheDocument();
  });
});
