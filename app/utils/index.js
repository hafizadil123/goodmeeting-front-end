/* eslint-disable no-bitwise */
export const doughnutData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Doughnut',
      backgroundColor: [
        ColorAlpha(Colors[0], 0.6),
        ColorAlpha(Colors[1], 0.6),
        ColorAlpha(Colors[3], 0.6),
        ColorAlpha(Colors[5], 0.6),
        ColorAlpha(Colors[2], 0.6),
      ],
      borderColor: ColorAlpha(white, 0),
      borderWidth: 3,
      data: Rdom(5, 50, 500),
    },
  ],
};

export const doughnutOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  title: {
    display: true,
    text: 'Doughnut Chart',
    // fontColor: '#fff'
  },
};

const _ = require('lodash');

export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const white = '#fff';
export const gray900 = '#222b3c';
export const Colors = [
  '#31b1fd',
  '#6610f2',
  '#f86c6b',
  '#dc3545',
  '#fd7e14',
  '#ffc107',
  '#28a745',
  '#20c997',
  '#17a2b8',
];

export const Rdom = (num, start, end) =>
  _.times(num, i => _.random(start, _.random(start, end)));
// HEX TO RGBA
export const ColorAlpha = (color, opacity) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
    c = color.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ',',
    )}, ${opacity})`;
  }
  throw new Error('Bad Hex');
};

export const logout = history => {
  localStorage.removeItem('accessToken');
  history.push('/login');
};
