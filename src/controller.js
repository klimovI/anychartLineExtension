export default ['$scope', '$element', ($scope, $element) => {
  console.log('controller');
  // chart container element
  const chartContainer = $element[0].querySelector('#chartContainer');

  // create a chart
  // $scope.layout.anychartLine = window.anychart.line();
  $scope.anychartLine = window.anychart.line();
  // set the container for chart
  // $scope.layout.anychartLine.container(chartContainer);
  $scope.anychartLine.container(chartContainer);
  $scope.dataChanged = true;
}];
