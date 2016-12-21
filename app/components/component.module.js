'use strict';

angular.module('cms.components', [])
  .service('componentService', function ($http) {
    this.getComponent = function (type, code) {
      return $http.get('fake-backend/' + type + '-' + code + '.json')
        .then(function (rs) {
          return rs.data;
        });
    };
  });