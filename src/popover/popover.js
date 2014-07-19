/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )

.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})

.directive( 'popover', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}])

.directive( 'popoverTemplatePopup', [ function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', template: '=', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover-template.html',
    link: function( scope, iElement ) {
      var contentEl = angular.element( iElement[0].querySelector( '.popover-content' ) );
      scope.$watch( 'template', function( template ) {
        if ( !template ) { return; }
        contentEl.children().remove();
        contentEl.append( template );
      });
    }
  };
}])

.directive( 'popoverTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popoverTemplate', 'popover', 'click' );
}]);
