export default ($element, layout) => {
  console.log('paint');
  console.log(layout.markerType);
  // chart instance
  const chart = layout.anychartLine;
  const {
    qMatrix
  } = layout.qHyperCube.qDataPages[0];

  // data for line chart
  const data = [];
  qMatrix.forEach(element => {
    data.push([element[0].qText, element[1].qNum]);
  });

  // set the data
  const series = chart.line(data);
  series.stroke(layout.lineColor.color);

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
