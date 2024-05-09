export const formatFileSize = (bytes: number): string => {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;
  const gigabyte = megabyte * 1024;
  const terabyte = gigabyte * 1024;

  if (bytes >= terabyte) {
    return `${roundToTwoDecimalPlaces(bytes / terabyte)}TB`;
  }

  if (bytes >= gigabyte) {
    return `${roundToTwoDecimalPlaces(bytes / gigabyte)}GB`;
  }

  if (bytes >= megabyte) {
    return `${roundToTwoDecimalPlaces(bytes / megabyte)}MB`;
  }

  if (bytes >= kilobyte) {
    return `${roundToTwoDecimalPlaces(bytes / kilobyte)}KB`;
  }

  return `${roundToTwoDecimalPlaces(bytes)}B`;
};

const roundTo = (value: number, decimalPlaces: number): number => {
  const power = 10 ** decimalPlaces;
  return Math.round((value + Number.EPSILON) * power) / power;
};

const roundToTwoDecimalPlaces = (value: number): number => roundTo(value, 2);

export const isImage = (file: File): boolean => {
  const [type] = file.type.split('/');
  return type === 'image';
};
