// Leaving out dependencies array means Angular will
// look for an existing app named 'todoListApp'.
angular.module('todoListApp')
.directive('helloWorld', function() {
  return {
    template: "This is the hello world directive!",
    restrict: "E" // Only use as an element
  }; // end return
}); // end directive
