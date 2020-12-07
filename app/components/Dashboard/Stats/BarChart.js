/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ scores, eachMeetings}) => {
  const data = {
    labels: eachMeetings,
    datasets: [
      {
        label: 'Meeting Score',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#1A34CF',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0,0,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 8,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,0,0,1)',
        pointHoverBorderColor: 'rgba(0,0,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: scores
      }
    ]
  };
  return <Bar data={data} width={100} height={30} />
}

export default BarChart;
