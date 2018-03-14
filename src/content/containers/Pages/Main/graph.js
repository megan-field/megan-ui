import React from 'react';
import PropTypes from 'prop-types';

import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents } from '../../../../content/scripts/custom/utilities';

class Page extends React.Component {
  componentDidMount() {
    // this defines the graph content
    const options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: [82088, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      }],
    };

    // Wait for page to load (so the bootstrap plugins etc. are loaded)
    $(() => {
      // draw out the graphs
      renderChartToTarget('graph1', options);

      // listen for resize events
      // fireDebouncedResizeEvents();

      // then listen for the events here
      /* $(document).on('debouncedResizeEvent', () => {
        // and redraw the charts
        redrawCharts();
      }); */
    });
  }

  render() {
    return (
      <div>
        <div
          className="echarts-graph"
          style={{ width: '100%', height: '300px' }}
          id="graph1"
        />
      </div>
    );
  }
}

export default Page;
