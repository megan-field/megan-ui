import React from 'react';
import PropTypes from 'prop-types';

import { drawLineChart } from '../../../scripts/custom/echarts/generators';
import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';

class Line extends React.Component {
  componentDidMount() {
    const data = { age: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], plotted: [3, 5, 4, 8, 10, 7, 1, 3, 5, 6, 2, 4, 6, 9, 5, 2, 4, 8, 5, 1] };
    const label = ['xAxis', 'yAxis'];

    whenLoaded(() => {
      // draw out the graphs
      renderChartToTarget('graph1', drawLineChart(data, label));

      // listen for resize events
      fireDebouncedResizeEvents();

      // then listen for the events here
      $(document).on('debouncedResizeEvent', () => {
        // and redraw the charts
        redrawCharts();
      });
    });
  }

  render() {
    return (
      <div>
        <div
          className="echarts-graph"
          style={{ width: '1000px', height: '500px' }}
          id="graph1"
        />
      </div>
    );
  }
}

export default Line;
