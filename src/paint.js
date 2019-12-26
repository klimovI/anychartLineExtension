export default ($element, layout) => {
  console.log('paint');
  // chart instance
  const chart = layout.anychartLine;
  const {
    qMatrix
  } = layout.qHyperCube.qDataPages[0];

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

  const series = seriesArray[0];


  // Line color
  if (layout.isSingleColored) {
    seriesArray.forEach(seriesI => seriesI.color(layout.lineColor.color));
    // seriesArray.forEach(seriesI => seriesI.area(layout.lineColor.color));
  }

  // Axis
  const xAxis = chart.xAxis();
  if (layout.xAxis) xAxis.title(layout.xAxis);
  const yAxis = chart.yAxis();
  if (layout.yAxis) yAxis.title(layout.yAxis);

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
  }

  // Labels
  series.labels(layout.enableLables);


  // initiate drawing the chart
  chart.draw();
};
