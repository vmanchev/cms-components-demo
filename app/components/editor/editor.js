'use strict';

angular.module('cms.components.editor', ['cms.components', 'ngCkeditor'])
  .directive('cmsEditor', function () {
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
        vm.editorCfg = componentService.getConfig('editor', this.code);
        
        //pass data from component configuration to the component template
        vm.editorModel = vm.editorCfg.value;
      },
      restrict: 'E',
      template: '<h1>This is an editor</h1>' + 
        '<textarea ckeditor ng-model="vm.editorModel"></textarea>'
    };
  });
