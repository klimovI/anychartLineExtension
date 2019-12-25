export default ($element, layout) => {
  console.log('paint');
  const chart = layout.anychartLine;
  const chartContainer = $element[0].querySelector('#chartContainer');

  // set the container
  chart.container(chartContainer);
  // initiate drawing the chart
  chart.draw();
};
