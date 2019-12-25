export default {
  type: 'items',
  component: 'accordion',
  items: {
    dimensions: {
      uses: 'dimensions',
      min: 1,
      max: 1
    },
    measures: {
      uses: 'measures',
      min: 1,
      max: 2
    },
    appearance: {
      uses: 'settings',
      items: {
        lineColorPicker: {
          label: 'Line color',
          component: 'color-picker',
          ref: 'lineColor',
          type: 'object',
          defaultValue: {
            color: '#6e8cff',
            index: '-1'
          }
        },
        backgroundColor: {
          label: 'Background color',
          component: 'color-picker',
          ref: 'backgroundColor',
          type: 'object',
          defaultValue: {
            color: '#6e8cff',
            index: '-1'
          }
        },
        xAxis: {
          type: 'string',
          label: 'X-Axis title',
          ref: 'xAxis'
        },
        yAxis: {
          type: 'string',
          label: 'Y-Axis title',
          ref: 'yAxis'
        },
        markers: {
          type: 'items',
          label: 'Markers',
          items: {
            markerType: {
              type: 'string',
              component: 'radiobuttons',
              label: 'Marker type',
              ref: 'markerType',
              options: [{
                value: undefined,
                label: 'None'
              },
              {
                value: 'star5',
                label: 'Star'
              },
              {
                value: 'square',
                label: 'Square'
              }]
            },
            markerSize: {
              type: 'number',
              component: 'slider',
              label: 'Marker size',
              ref: 'markerSize',
              min: 1,
              max: 10,
              step: 1,
              defaultValue: 7
            }
          }

        }
      }
    }
  }
};
