/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ answers }) => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: 'Score',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(221,236,243,0.5)',
        borderColor: '#5E93C9',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#4176C0',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 8,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,0,0,1)',
        pointHoverBorderColor: 'rgba(0,0,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: answers
      }
    ]
  };
  return <Line data={data} width={100} height={30} />
}

export default LineChart
