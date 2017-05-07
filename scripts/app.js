// module(Name of Application, Empty Array(Defines dependencies)).
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! Thisis the helloWorld controller function in the main controller");
  };

  $scope.todos = [
    {"name": "Clean the house"},
    {"name": "Water the dog"},
    {"name": "Feed the lawn"},
    {"name": "Pay dem bills"},
    {"name": "Run"},
    {"name": "Swim"}
  ];

}); // end controller
