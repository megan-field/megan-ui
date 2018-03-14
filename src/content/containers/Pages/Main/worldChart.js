import React from 'react';
import PropTypes from 'prop-types';
import mapData from './mapData';
import { drawWorldChart } from '../../../scripts/custom/echarts/generators';

import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';

class World extends React.Component {
  componentDidMount() {
    require('echarts-maps/world.js');

    $(() => {
      // draw out the graphs
      renderChartToTarget('graph1', drawWorldChart(mapData));

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
          style={{ width: '1500px', height: '800px' }}
          id="graph1"
        />
      </div>
    );
  }
}

export default World;
