export function truncateAddress(
  address: string,
  options: { startLen?: 10 | 12 | 15; endLen?: 0 | 2 | 8 } = {}
): string {
  if (typeof address !== 'string' || address.length === 0) {
    return '';
  }

  const { startLen = 5, endLen = 5 } = options;

  if (startLen + endLen >= address.length) {
    return address;
  }

  return `${address.substring(0, startLen)}...${address.substring(address.length - endLen)}`;
}
