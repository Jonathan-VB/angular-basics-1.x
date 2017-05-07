// module(Name of Application, Empty Array(Defines dependencies)).
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

  $scope.helloConsole = dataService.helloConsole;

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

}) // end controller

// Method chaining
.service('dataService', function() {
  this.helloConsole = function() {
    console.log("This is the hello console service!");
  }
});
