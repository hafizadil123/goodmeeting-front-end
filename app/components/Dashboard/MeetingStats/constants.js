import { Colors, ColorAlpha, white, gray900, Rdom } from './data';

export const data = (a, b, c) => {
  const doughnutData = {
    labels: ['Good Meeting', 'Bad Meeting', 'No Response'],
    datasets: [
      {
        label: 'Doughnut',
        backgroundColor: [
          ColorAlpha(Colors[0], 0.6),
          ColorAlpha(Colors[1], 0.6),
          ColorAlpha(Colors[3], 0.6),
        ],
        borderColor: ColorAlpha(white, 0),
        borderWidth: 3,
        data: [a, b, c],
      },
    ],
  };
  return doughnutData;
};

export const data1 = answer => {
  const updateArray = answer.map(item => (item.count ? item.count : 0));
  const updateAns = answer.map(item => (item.answer ? item.answer : 0));
  const doughnutData = {
    labels: updateAns,
    datasets: [
      {
        label: 'Doughnut',
        backgroundColor: [
          ColorAlpha(Colors[0], 0.6),
          ColorAlpha(Colors[1], 0.6),
          ColorAlpha(Colors[3], 0.6),
          ColorAlpha(Colors[4], 0.6),
          ColorAlpha(Colors[5], 0.6),
        ],
        borderColor: ColorAlpha(white, 0),
        borderWidth: 3,
        data: updateArray,
      },
    ],
  };

  return doughnutData;
};

export const doughnutOptions = {
  responsive: true,
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 10,
    },
  },
  title: {
    display: false,
    text: '',
    // fontColor: '#fff'
  },
};

export const doughnutOptions1 = {
  responsive: true,
  legend: {
    display: true,
    position: 'left',
    labels: {
      boxWidth: 10,
    },
  },
  title: {
    display: false,
    text: '',
    // fontColor: '#fff'
  },
};
