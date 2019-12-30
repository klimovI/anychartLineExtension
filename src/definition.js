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
      max: 10
    },
    appearance: {
      uses: 'settings',
      items: {
        colorsAndLegend: {
          type: 'items',
          label: 'Colors and legend',
          items: {
            colorScheme: {
              type: 'boolean',
              component: 'dropdown',
              label: 'Color scheme',
              ref: 'isSingleColored',
              options: [{
                value: false,
                label: 'Multicolored'
              },
              {
                value: true,
                label: 'Single color'
              }],
              defaultValue: false
            },
            lineColor: {
              label: 'Color',
              component: 'color-picker',
              ref: 'lineColor',
              type: 'object',
              defaultValue: {
                color: '#6e8cff',
                index: '-1'
              }
            },
            legend: {
              type: 'items',
              label: 'Legend',
              items: {
                enableLegend: {
                  type: 'boolean',
                  label: 'Enable legend',
                  ref: 'enableLegend',
                  defaultValue: false
                },
                legendPosition: {
                  type: 'string',
                  component: 'dropdown',
                  label: 'Legend position',
                  ref: 'legendPosition',
                  options: [{
                    value: 'top',
                    label: 'Top'
                  },
                  {
                    value: 'bottom',
                    label: 'Bottom'
                  },
                  {
                    value: 'left',
                    label: 'Left'
                  },
                  {
                    value: 'right',
                    label: 'Right'
                  }],
                  defaultValue: 'top'
                }
              }
            }
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
        presentation: {
          type: 'items',
          label: 'Presentation',
          items: {
            markers: {
              type: 'items',
              label: 'Markers',
              items: {
                selectedSeries: {
                  type: 'number',
                  component: 'dropdown',
                  label: 'Select series to modify',
                  ref: 'selectedSeries',
                  options: (scope, qlikClass) => {
                    const { qMeasureInfo } = qlikClass.layout.qHyperCube;
                    return qMeasureInfo.map((item, index) => ({
                      value: index,
                      label: item.qFallbackTitle
                    }));
                  },
                  defaultValue: 0
                },
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
                  },
                  {
                    value: 'circle',
                    label: 'Circle'
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
            },
            labels: {
              type: 'boolean',
              label: 'Enable lables',
              ref: 'enableLables',
              defaultValue: false
            },
            strokeType: {
              type: 'string',
              label: 'Stroke type',
              component: 'dropdown',
              ref: 'strokeType',
              options: [{
                value: '5 0',
                label: 'Solid'
              },
              {
                value: '5 5',
                label: 'Dasded'
              },
              {
                value: '2 2',
                label: 'Dotted'
              }],
              defaultValue: '5 0'
            }
          }
        }
      }
    }
  }
};
