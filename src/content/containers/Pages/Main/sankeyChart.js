import React from 'react';
import PropTypes from 'prop-types';

import data from './sankeyData';
import { renderChartToTarget, redrawCharts } from '../../../../content/scripts/custom/echarts/utilities';
import { fireDebouncedResizeEvents, whenLoaded } from '../../../../content/scripts/custom/utilities';


class Flow extends React.Component {
  componentDidMount() {
    const options = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },

      series: [
        {
          type: 'sankey',
          layout: 'none',
          data: data.nodes,
          links: data.links,

          color: [
            '#30588C',
            '#77C3F2',
            '#FAA805',
          ],


          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#aaa',

            },
          },
          lineStyle: {

            normal: {
              color: 'source',
              curveness: 0.7,
            },
          },
        },
      ],
    };

    whenLoaded(() => {
      // draw out the graphs
      renderChartToTarget('graph1', options);

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
