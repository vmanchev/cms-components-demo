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
        
        componentService.getComponent('slider', this.code).then(function(data){
          vm.slides = data;
        });
      },
      restrict: 'E',
      template: '<h1>This is a slider</h1>' + 
        '<ul><li ng-repeat="slide in vm.slides.items"><img ng-src="{{ slide.url }}" width="100">{{ slide.title }}</li></ul>'
    }
  });
