// import anychart from './anyChart/anychart-bundle.min';

export default ($element, layout) => {
  // const data = [
  //   ['January', 10000],
  //   ['February', 12000],
  //   ['March', 18000],
  //   ['April', 11000],
  //   ['May', 9000]
  // ];
  const data = [];
  const { qMatrix } = layout.qHyperCube.qDataPages[0];
  qMatrix.forEach(element => {
    data.push([element[0].qText, element[1].qText]);
  });
  console.log(data);
  // create a chart
  // const chart = anychart.line();

  // // create a line series and set the data
  // const series = chart.line(data);

  // // set the container id
  // chart.container('container');

  // // initiate drawing the chart
  // chart.draw();
};
