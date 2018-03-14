import React from 'react';
import PropTypes from 'prop-types';

import { drawNewPieChart } from '../../../scripts/custom/echarts/generators';
import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';

class Pie extends React.Component {
  componentDidMount() {
    const label = false;
    const chart = 'pie';

    const data = [
      { name: 'Searching Engine', value: 400, color: '#11293b' },
      { name: 'Direct', value: 335, color: '#235175' },
      { name: 'Email', value: 310, color: '#2f6d9d' },
      { name: 'Alliance Advertisement', value: 274, color: '#3a88c4' },
      { name: 'Video Advertisement', value: 235, color: '#62a0d0' },
    ];


    whenLoaded(() => {
      // draw out the graphs
      renderChartToTarget('graph1', drawNewPieChart(data, label, chart, 'alignment'));

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
          style={{ width: '1000px', height: '700px' }}
          id="graph1"
        />
      </div>
    );
  }
}

export default Pie;
