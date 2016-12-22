'use strict';

angular.module('cms.components', [])
  .service('componentService', function ($http) {

    /**
     * Container for all the client's configured components
     * @type {Array}
     */
    var components = [];

    /**
     * Fetch clien'ts components and make them available in the service context
     */
    this.prefetchComponents = function () {

      return $http.get('fake-backend/data.json')
        .then(function (rs) {
          components = rs.data.components;
        });
    };

    /**
     * Get the specified component/code configuration
     * @param {String} type Component type
     * @param {String} code Component code/identifier
     * @return {undefined|componentConfig}
     */
    this.getConfig = function (type, code) {

      var matchedCfg = {};

      if (angular.isUndefined(type) || angular.isUndefined(code)) {
        return matchedCfg;
      }

      angular.forEach(components, function (componentConfig) {

        if (componentConfig.type !== type || componentConfig.code !== code) {
          return;
        }

        matchedCfg = componentConfig;

      });

      return matchedCfg;
    };

  })
  .run(function (componentService) {
    //prefetch cient's components configuration
    componentService.prefetchComponents();
  });    