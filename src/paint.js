export default ($element, layout) => {
  console.log('paint');
  console.log(layout.enableLables);
  // chart instance
  const chart = layout.anychartLine;
  const {
    qMatrix
  } = layout.qHyperCube.qDataPages[0];
  console.log(qMatrix);

  const measuresArray = layout.qHyperCube.qMeasureInfo; // array with measures
  const dataset = []; // dataset for line chart
  measuresArray.forEach((measure, index) => {
    // filling temporary array with data for dataset
    const dataT = qMatrix.map(element => [element[0].qText, element[index + 1].qNum]);
    dataset.push(dataT);
  });

  // set the data and create series
  const seriesArray = dataset.map(set => chart.line(set));
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
