angular.module('todoListApp')
.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true // Removes custom tags (<todos>) from inspector.
  }
});
