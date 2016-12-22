'use strict';

angular.module('cms.components.slider', ['cms.components'])
  .directive('cmsSlider', function () {
    return {
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        code: '@code'
      },
      controller: function (componentService) {
        
        var vm = this;
        
        //all components data is already prefetch, 
        //now filter and get the configuration for this particular component
        vm.slides = componentService.getConfig('slider', this.code);
      },
      restrict: 'E',
      template: '<h1>This is a slider</h1>' +
        '<ul><li ng-repeat="slide in vm.slides.value"><img ng-src="{{ slide.url }}" width="100">{{ slide.title }}</li></ul>'
    }
  });
