export const priceType = [
  { value: 'tokens', label: 'Charge by Token' },
  { value: 'times', label: 'Charged by times' }
];

export function ValueFormatter(value) {
  if (value == null) {
    return '';
  }
  if (value === 0) {
    return 'Free';
  }
  return `$${parseFloat(value * 0.002).toFixed(6)} / ￥${parseFloat(value * 0.014).toFixed(6)}`;
}
