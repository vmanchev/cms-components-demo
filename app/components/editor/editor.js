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
        vm.content = '';
        
        componentService.getComponent('editor', this.code).then(function(data){
          vm.slides = data;
        });
      },
      restrict: 'E',
      template: '<h1>This is an editor</h1>' + 
        '<textarea ckeditor ng-model="modelName"></textarea>'
    };
  });
