'use strict';

// Leave out dependencies array to prevent overriding the todoListApp
angular.module('todoListApp')
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

  // Pull puts items at bottom of the list, unshift puts items at the top.
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };
}) // end controller
