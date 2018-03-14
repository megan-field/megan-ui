import React from 'react';
import PropTypes from 'prop-types';

import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents } from '../../../../content/scripts/custom/utilities';

class Tutorial extends React.Component {
  componentDidMount() {
    const options = {
      title: {
        text: 'ECharts entry example',
      },
      tooltip: {},
      legend: {
        data: ['Sales'],
      },
      xAxis: {},
      yAxis: {
        data: ['shirt', 'cardigan', 'chiffon shirt', 'pants', 'heels', 'socks'],
      },
      series: [{
        name: 'Sales',
        type: 'bar',
        stack: 'the amount',
        z: 10,
        data: [5, 20, 36, 10, 10, 20],
      }, {
        type: 'bar',
        stack: 'the amount',
        itemStyle: {
          normal: {
            color: '#000',
          },
        },
        silent: true,
        z: 5,
        barGap: '-100%',
        data: [10, 10, 10, 10, 10, 10],
      }, {
        type: 'bar',
        stack: 'the amount',
        itemStyle: {
          normal: {
            color: '#ddd',
          },
        },
        silent: true,
        barGap: '-100%',
        data: [10, 10, 10, 10, 10, 10],
      }],
    };

    $(() => {
      // draw out the graphs
      renderChartToTarget('graph1', options);
    });
  }

  render() {
    return (
      <div>
        <div
          className="echarts-graph"
          style={{ width: '600px', height: '400px' }}
          id="graph1"
        />
      </div>
    );
  }
}

export default Tutorial;
