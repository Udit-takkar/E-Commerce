const humanize = number =>
  number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default humanize;
