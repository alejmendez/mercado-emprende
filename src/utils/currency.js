const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
const numberToCurrency = (amount) => {

  return formatter.format(amount);
}

export {
  numberToCurrency,
}
