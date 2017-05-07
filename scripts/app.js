// module(Name of Application, Empty Array(Defines dependencies)).
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.learningNgChange = function() {
    console.log("An input changed!");
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
