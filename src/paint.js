export default ($element, layout) => {
  console.log('paint');
  // chart instance
  const chart = layout.anychartLine;
  const {
    qMatrix
  } = layout.qHyperCube.qDataPages[0];
  console.log(layout.qHyperCube);

  const measuresArray = layout.qHyperCube.qMeasureInfo; // array with measures
  const dataset = []; // dataset for line chart
  measuresArray.forEach((measure, index) => {
    const dataT = []; // temporary array for series in dataset
    // filling temporary array with data
    qMatrix.forEach(element => {
      dataT.push([element[0].qText, element[index + 1].qNum]);
    });
    dataset.push(dataT);
  });

  // set the data and create series
  const seriesArray = [];
  dataset.forEach(set => seriesArray.push(chart.line(set)));

  const series = seriesArray[0];
  // series.stroke(layout.lineColor.color);

  // Axis
  const xAxis = chart.xAxis();
  if (layout.xAxis) xAxis.title(layout.xAxis);
  const yAxis = chart.yAxis();
  if (layout.yAxis) yAxis.title(layout.yAxis);

  // Legend
  chart.legend(layout.enableLegend);

  // Markers
  const markers = series.markers();
  if (layout.markerType) {
    markers.enabled(true);
    markers.size(layout.markerSize);
    markers.type(layout.markerType);
  }


  // initiate drawing the chart
  chart.draw();
};
