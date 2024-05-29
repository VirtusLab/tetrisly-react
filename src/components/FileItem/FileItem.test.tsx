import { vi } from 'vitest';

import { FileItem } from './FileItem';
import { mockImageFile, mockTextFile } from './mocks';
import { render, screen, fireEvent } from '../../tests/render';

describe('FileItem', () => {
  it('should render empty file item', () => {
    render(<FileItem file={mockTextFile()} />);
    const fileItem = screen.getByTestId('file-item');
    expect(fileItem).toBeInTheDocument();

    const fileName = screen.getByTestId('file-name');
    expect(fileName).toBeInTheDocument();

    const fileSize = screen.getByTestId('file-size');
    expect(fileSize).toBeInTheDocument();

    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();
  });

  it('should call onReplaceClick after click to Replace button', () => {
    const onReplaceClick = vi.fn();

    render(
      <FileItem
        file={mockTextFile()}
        state="replaceable"
        onReplaceClick={onReplaceClick}
      />,
    );

    const replaceableButton = screen.getByTestId('replaceable-button');
    expect(replaceableButton).toBeInTheDocument();

    fireEvent.click(replaceableButton);
    expect(onReplaceClick).toHaveBeenCalled();
  });

  it('should call onRetryClick after click to Retry button', () => {
    const onRetryClick = vi.fn();

    render(
      <FileItem
        file={mockTextFile()}
        state="alert"
        onRetryClick={onRetryClick}
      />,
    );

    const retryButton = screen.getByTestId('retry-button');
    expect(retryButton).toBeInTheDocument();

    fireEvent.click(retryButton);
    expect(onRetryClick).toHaveBeenCalled();
  });

  it('should call onCloseClick after click to close button', () => {
    const onCloseClick = vi.fn();

    render(
      <FileItem
        file={mockTextFile()}
        state="uploading"
        onCloseClick={onCloseClick}
      />,
    );

    const closeButton = screen.getByTestId('close-icon');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(onCloseClick).toHaveBeenCalled();
  });

  it('should render progress bar in uploading state', () => {
    render(<FileItem file={mockTextFile()} state="uploading" />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
  });

  it('should show uploaded percentage in uploading state', () => {
    render(
      <FileItem
        file={mockTextFile()}
        state="uploading"
        isExtended
        uploadedPercentage={76.25}
      />,
    );
    const uploadedPercentage = screen.getByTestId('uploaded-percentage');
    expect(uploadedPercentage).toBeInTheDocument();
    expect(uploadedPercentage.innerHTML).toEqual('76.25%');
  });

  it('should show alert text in compressed alert state', () => {
    render(
      <FileItem
        file={mockTextFile()}
        state="alert"
        alertText="Short alert text"
      />,
    );
    const alertText = screen.getByTestId('alert-text');
    expect(alertText).toBeInTheDocument();
    expect(alertText.innerHTML).toEqual('Short alert text');
  });

  it('should show alert text in extended alert state', () => {
    render(
      <FileItem
        file={mockTextFile()}
        isExtended
        state="alert"
        alertText="Short alert text"
      />,
    );
    const alertInfo = screen.getByTestId('alert-info');
    expect(alertInfo).toBeInTheDocument();
    expect(alertInfo.innerHTML).toContain('Short alert text');
  });

  it('should show thumbnail file icon', () => {
    render(
      <FileItem
        file={mockTextFile()}
        isExtended
        state="uploaded"
        thumbnail="file"
      />,
    );
    const thumbnailFile = screen.getByTestId('thumbnail-file');
    expect(thumbnailFile).toBeInTheDocument();
  });

  it('should show thumbnail photo image', () => {
    Object.defineProperty(window.URL, 'createObjectURL', { value: () => '' });

    render(
      <FileItem
        file={mockImageFile()}
        isExtended
        state="uploaded"
        thumbnail="photo"
      />,
    );
    const thumbnailPhoto = screen.getByTestId('thumbnail-photo');
    expect(thumbnailPhoto).toBeInTheDocument();
  });
});
