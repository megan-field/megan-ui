import React from 'react';
import PropTypes from 'prop-types';

import data from './sankeyData';
import { drawSankeyChart } from '../../../scripts/custom/echarts/generators';
import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';


class Flow extends React.Component {
  componentDidMount() {
    whenLoaded(() => {
      // draw out the graphs
      renderChartToTarget('graph1', drawSankeyChart(data));
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

export default Flow;
