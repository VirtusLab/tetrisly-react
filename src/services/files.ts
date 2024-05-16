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

export const base64ToBlob = (value: string): Blob => {
  const [prefix, payload] = value.split(',');
  const [data, format] = prefix.split(';');
  const [, type] = data.split(':');

  if (
    payload === undefined ||
    type === undefined ||
    format?.toLowerCase() !== 'base64'
  ) {
    throw new Error('Expected valid base64 encoded string');
  }

  const decodedPayload = atob(payload);
  const buffer = new Uint8Array(payload.length);

  for (let i = 0; i < decodedPayload.length; i += 1) {
    buffer[i] = decodedPayload.charCodeAt(i);
  }

  return new Blob([buffer], { type });
};
