'use strict';

// Leave out dependencies array to prevent overriding the todoListApp
angular.module('todoListApp')
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
