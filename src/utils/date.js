const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
});
const dateToString = (date) => {
  return formatter.format(date);
}

export {
  dateToString,
}
