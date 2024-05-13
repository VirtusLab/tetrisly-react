import { formatFileSize, base64ToBlob } from './files';

describe('formatFileSize', () => {
  it('formats file size from number of bytes provided', () => {
    expect(formatFileSize(17)).toBe('17B');
    expect(formatFileSize(1_567)).toBe('1.53KB');
    expect(formatFileSize(1_725_500)).toBe('1.65MB');
    expect(formatFileSize(1_512_476_123)).toBe('1.41GB');
    expect(formatFileSize(2_276_892_423_978)).toBe('2.07TB');
  });
});
