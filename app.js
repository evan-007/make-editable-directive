angular.module('demo', [])
.directive('makeEditable', function(){
  return {
    restrict: 'E',
    templateUrl: './makeeditable.html',
    transclude: true,
    scope: true,
    link: function(scope, element, attrs) {
      scope.content = {
        toggleEdit: function() {
          //trying to figureout jquery lite
          content = element.find('p');
          console.log(element.find('p').attr('contenteditable'));
          if (content.attr('contenteditable') == undefined) {
            content.attr('contenteditable', true)
          } else { content.attr('contenteditable', false)}
        }
      }
    }
  }
})