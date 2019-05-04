/* eslint-disable import/prefer-default-export */

export const unixTimeToDate = unixTime =>
  new Intl.DateTimeFormat('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(new Date(unixTime));
