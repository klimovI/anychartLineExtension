export default function ($element, layout) {
  console.log('paint');
  // chart instance
  // const chart = layout.anychartLine;
  const scope = this.$scope;
  const chart = scope.anychartLine;
  console.log(chart.getSeriesCount());
  const {
    qMatrix
  } = layout.qHyperCube.qDataPages[0];
  console.log(layout.qHyperCube.qSize.qcx);
  if (scope.qcx == layout.qHyperCube.qSize.qcx) {
    scope.dataChanged = false;
  } else {
    scope.dataChanged = true;
    scope.qcx = layout.qHyperCube.qSize.qcx;
  }

  if (scope.dataChanged) {
    chart.removeAllSeries();

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
    const mappings = [];
    measuresArray.forEach((measure, index) => {
      mappings.push(dataSet.mapAs({ x: 0, value: index + 1 }));
    });

    // create series
    const seriesArray = mappings.map(mapping => chart.line(mapping));

    // setting names for series
    seriesArray.forEach((seriesI, index) => seriesI.name(measuresArray[index].qFallbackTitle));
  }
  const series = chart.getSeriesAt(0);
  const seriesArray = [];
  for (let i = 0; i < chart.getSeriesCount(); i++) {
    seriesArray.push(chart.getSeriesAt(i));
  }
  // Line color
  if (layout.isSingleColored) {
    seriesArray.forEach(seriesI => seriesI.color(layout.lineColor.color));
    // seriesArray.forEach(seriesI => seriesI.area(layout.lineColor.color));
  }

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
  }

  // Labels
  series.labels(layout.enableLables);


  // initiate drawing the chart
  chart.draw();
}
