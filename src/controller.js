export default ['$scope', $scope => {
  console.log('controller');
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
  // set the data
  $scope.layout.anychartLine.line(data);
}];
