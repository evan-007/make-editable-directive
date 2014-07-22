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
          button = element.find('button');
          //wtf why 'false' and not false
          if (content.attr('contenteditable') === undefined || content.attr('contenteditable') === 'false' ) {
            content.attr('contenteditable', true);
            content.addClass('edit');
            button.text('Save')
          } else { 
            content.attr('contenteditable', false)
            content.removeClass('edit');
            button.text('Edit')
          }
        }
      }
    }
  }
})