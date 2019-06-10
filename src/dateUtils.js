/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';

export const unixTimeToDate = unixTime =>
  format(new Date(unixTime), 'D MMM YYYY').toUpperCase();
