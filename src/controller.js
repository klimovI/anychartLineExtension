export default ['$scope', '$element', ($scope, $element) => {
  console.log('controller');
  // chart container element
  const chartContainer = $element[0].querySelector('#chartContainer');
  const {
    qMatrix
  } = $scope.layout.qHyperCube.qDataPages[0];

  // data for line chart
  const data = [];
  qMatrix.forEach(element => {
    data.push([element[0].qText, element[1].qNum]);
  });
  // create a chart
  $scope.layout.anychartLine = window.anychart.line();
  const chart = $scope.layout.anychartLine;
  // set the data
  chart.line(data);
  // set the container for chart
  chart.container(chartContainer);
}];
