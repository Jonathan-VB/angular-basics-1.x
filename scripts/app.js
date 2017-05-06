// module(Name of Application, Empty Array(Defines dependencies)).
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! Thisis the helloWorld controller function in the main controller");
  }
}); // end controller
