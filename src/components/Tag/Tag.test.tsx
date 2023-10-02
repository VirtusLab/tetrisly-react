import { vi } from 'vitest';

import { render, fireEvent } from '../../tests/render';

import { Tag } from '@/components/Tag/Tag.tsx';
import { customPropTester } from '@/tests/customPropTester';

const getTag = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    tag: getByTestId('tag'),
    label: getByTestId('tag-label'),
    avatar: queryByTestId('tag-before-component'),
    closeButton: queryByTestId('tag-icon-button'),
  };
};

describe('Tag', () => {
  const handleEventMock = vi.fn();

  customPropTester(<Tag label="Label" />, {
    containerId: 'tag',
  });

  beforeEach(() => {
    handleEventMock.mockReset();
  });

  it('should render the tag', () => {
    const { tag } = getTag(<Tag label="label" />);
    expect(tag).toBeInTheDocument();
  });

  it('should render the correct label', () => {
    const { tag } = getTag(<Tag label="label" />);
    expect(tag).toHaveTextContent('label');
  });

  it('should render beforeComponent', () => {
    const { avatar } = getTag(
      <Tag
        label="label"
        beforeComponent={{ type: 'Avatar', props: { initials: 'A' } }}
      />,
    );
    expect(avatar).toBeInTheDocument();
  });

  it('should render closeButton', () => {
    const { closeButton } = getTag(
      <Tag label="label" onCloseClick={handleEventMock} />,
    );
    expect(closeButton).toBeInTheDocument();
  });

  it('should emit onClick', () => {
    const { tag } = getTag(<Tag label="label" onClick={handleEventMock} />);
    fireEvent.click(tag);
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should not emit onCloseClick', () => {
    const { closeButton } = getTag(
      <Tag label="label" onCloseClick={handleEventMock} state="disabled" />,
    );
    fireEvent.click(closeButton as Element);
    expect(handleEventMock).not.toHaveBeenCalled();
  });

  it('should render disabled closeButton', () => {
    const { closeButton } = getTag(
      <Tag label="label" state="disabled" onCloseClick={handleEventMock} />,
    );
    expect(closeButton).toBeDisabled();
  });

  it('should render the correct color (disabled)', () => {
    const { tag } = getTag(<Tag label="label" state="disabled" />);
    expect(tag).toHaveStyle('background-color: hsla(204,20%,95%,1);');
  });

  it('should render the right cursor (with onClick)', () => {
    const { tag } = getTag(<Tag label="label" onClick={handleEventMock} />);
    expect(tag).toHaveStyle('cursor: pointer');
  });

  it('should render the right cursor (without onClick)', () => {
    const { tag } = getTag(<Tag label="label" />);
    expect(tag).toHaveStyle('cursor: default');
  });

  it('should render the right cursor (with state disabled)', () => {
    const { tag } = getTag(<Tag label="label" state="disabled" />);
    expect(tag).toHaveStyle('cursor: default');
  });

  it('should not emit onClick', () => {
    const onCloseCLick = vi.fn();
    const onClick = vi.fn();

    const { closeButton } = getTag(
      <Tag label="label" onCloseClick={onCloseCLick} onClick={onClick} />,
    );

    if (closeButton) {
      fireEvent.click(closeButton);
    }
    expect(onCloseCLick).toBeCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });
});
