export default ['$scope', '$element', ($scope, $element) => {
  console.log('controller');
  // chart container element
  const chartContainer = $element[0].querySelector('#chartContainer');

  // create a chart
  $scope.anychartLine = window.anychart.line();

  // set the container for chart
  $scope.anychartLine.container(chartContainer);

  // data changed flag
  $scope.dataChanged = true;
}];
