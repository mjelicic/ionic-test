(function() {
  'use strict';

  angular.module('models', ['firebase'])

    .factory('itemModel', function ($firebase) {

      var ref = new Firebase('https://ionic-demo-ng.firebaseio.com/');
      var sync = $firebase(ref);

      var items = sync.$asArray();

      return {
        getAll: function () {
          return items;
        }
      };

    });

})();