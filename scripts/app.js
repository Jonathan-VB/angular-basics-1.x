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

  // Fire deleteTodo() on the service in the callback.
  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };

  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };
}) // end controller

// Method chaining
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log("This is the hello console service!");
  };

  // Get Todos
  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)
  };

  // Delete Todo
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted.");
    // Database login goes here...
  };

  this.saveTodo = function(todo) {
    console.log("The " + todo.name + " todo has been saved!");
  };
});
