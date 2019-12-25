export default ($element, layout) => {
  console.log('paint');
  console.log(layout.myColor);
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
  chart.line(data);

  // initiate drawing the chart
  chart.draw();
};
