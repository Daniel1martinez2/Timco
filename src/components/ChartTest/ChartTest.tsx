import React from 'react'; 
import {Bar} from 'react-chartjs-2'; 
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ChartTest = ({labels, data}: {labels: string[], data: number[]}) => {
  return (
    <Bar
        data={{
          labels: labels,
          datasets: [{
              data: data,
              backgroundColor: '#009688',
              
              borderWidth: 1
          }]
        }}
        height={250}
        // width={600}
        options={{
          indexAxis: 'y',
          responsive: true,
          color: 'white',
          plugins:{
            legend: { display: false, }
          },
          scales: {
            xAxes:{
              ticks:{
                color: '#7F828F',
                font: {
                  family: 'lato'
                }
              },
              grid:{
                color: '#434450'
              },
            },
            yAxes:{
              grid:{
                color: '#434450',
              },
              ticks:{
                color: '#7F828F',
                font: {
                  family: 'lato'
                }
              },
            },
              
          }
          
        }}
      />
  )
}

export default ChartTest
