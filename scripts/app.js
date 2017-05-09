// module(Name of Application, Empty Array(Defines dependencies)).
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {

  $scope.helloConsole = dataService.helloConsole;

  // Run getTodos Method containing the callback function.
  // The function gets a response param from the .then() method and
  // the reponse is then attached to $scope.todos.
  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };
}) // end controller

// Method chaining
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log("This is the hello console service!");
  };

  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)
  }
});
