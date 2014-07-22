angular.module('demo', [])
.directive('makeEditable', function(){
  return {
    restrict: 'E',
    templateUrl: './makeeditable.html',
    transclude: true,
    link: function(scope, element, attrs) {
      scope.content = {
        toggleEdit: function() {
          console.log('clicked')
        }
      }
    }
  }
})