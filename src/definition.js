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
        MyColorPicker: {
          label: 'Color picker',
          component: 'color-picker',
          ref: 'lineColor',
          type: 'object',
          defaultValue: {
            color: 'ff5866',
            index: '-1'
          }
        },
        description2: {
          type: 'string',
          label: 'Description2',
          ref: 'myNewPropertyy',
          defaultValue: 'This is my description'
        }
      }
    }
  }
};
