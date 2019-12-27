/**
 * Paint function which is called every time changes in properies panel detected.
 * @param {Object} $element - Qlik native object.
 * @param {Object} layout  - Qlik native object.
 * @description Paint function.
 */
export default function ($element, layout) {
  console.log('paint');
  const scope = this.$scope;

  const chart = scope.anychartLine; // chart instance

  const {
    qMatrix // contains data for the chart
  } = layout.qHyperCube.qDataPages[0];

  // checks if data was changed
  if (scope.qcx == layout.qHyperCube.qSize.qcx) {
    scope.dataChanged = false;
  } else {
    scope.dataChanged = true;
    scope.qcx = layout.qHyperCube.qSize.qcx; // contains last number of columns in data
  }

  // creates series and saves data in the chart, if data for the chart was changed
  if (scope.dataChanged) {
    chart.removeAllSeries(); // removes old series to create new one

    const measuresArray = layout.qHyperCube.qMeasureInfo; // array with measures

    // dataset for line chart
    const fullDataset = qMatrix.map(element => {
      const returnedArray = [element[0].qText];
      const measureData = measuresArray.map((measure, index) => element[index + 1].qNum);
      returnedArray.push(...measureData);
      return returnedArray;
    });

    // set the data for the chart
    const dataSet = window.anychart.data.set(fullDataset);

    // mapping chart data to create series
    const mappings = measuresArray.map((measure, index) => {
      return dataSet.mapAs({ x: 0, value: index + 1 });
    });

    // create series
    const seriesArray = mappings.map(mapping => chart.line(mapping));

    // setting names for series
    seriesArray.forEach((seriesI, index) => seriesI.name(measuresArray[index].qFallbackTitle));
  }

  const series = chart.getSeriesAt(layout.selectedSeries); // selected series to customise
  const seriesArray = []; // contains all series
  for (let i = 0; i < chart.getSeriesCount(); i++) {
    seriesArray.push(chart.getSeriesAt(i));
  }

  // Clear styles
  seriesArray.forEach(element => {
    element.labels(layout.enableLables);
    element.stroke(element.color(), 1, '5 0', 'round');
    element.markers().enabled(false);
    element.markers().type(null);
  });


  // Line color
  if (layout.isSingleColored) {
    seriesArray.forEach(seriesI => seriesI.color(layout.lineColor.color));
  } else {
    seriesArray.forEach(seriesI => {
      seriesI.color(null);
    });
  }

  // Stroke type
  series.stroke(series.color(), 1, layout.strokeType, 'round');

  // Axis titles
  const xAxis = chart.xAxis();
  xAxis.title(layout.xAxis);
  const yAxis = chart.yAxis();
  yAxis.title(layout.yAxis);

  // Legend
  const chartLegend = chart.legend();
  chartLegend.enabled(layout.enableLegend);
  chartLegend.position(layout.legendPosition);

  // Markers
  const markers = series.markers();
  if (layout.markerType) {
    markers.enabled(true);
    markers.size(layout.markerSize);
    markers.type(layout.markerType);
  } else {
    markers.enabled(false);
    markers.type(null);
  }

  // Labels
  series.labels(layout.enableLables);


  // initiate drawing the chart
  chart.draw();
}
