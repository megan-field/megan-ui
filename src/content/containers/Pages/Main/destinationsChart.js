import React from 'react';
import PropTypes from 'prop-types';

import { drawNewBarChart } from '../../../scripts/custom/echarts/generators';
import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';

class Destination extends React.Component {
  componentDidMount() {
    const axisData = { y: ['2011/12', '2012/13', '2013/14', '2014/15', '2015/16'], x: '%' };
    const dataSeries = [
      { name: 'UK Work', data: [64, 66, 68, 68, 67] },
      { name: 'Overseas', data: [4, 4, 4, 4, 4] },
      { name: 'Work', data: [7, 7, 6, 6, 6] },
      { name: 'Further', data: [14, 13, 12, 13, 15] },
      { name: 'Unemployed', data: [7, 6, 6, 5, 5] },
      { name: 'other', data: [4, 4, 5, 4, 4] },
    ];

    whenLoaded(() => {
      // draw out the graphs
      renderChartToTarget('graph1', drawNewBarChart(axisData, dataSeries));
    });
  }

  render() {
    return (
      <div>
        <div
          className="echarts-graph"
          style={{ width: '1000px', height: '400px' }}
          id="graph1"
        />
      </div>
    );
  }
}

export default Destination;
