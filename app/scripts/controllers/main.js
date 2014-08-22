'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope) {

    $scope.items = ['test', 'test2'];
    
  	$scope.selected = function(item) {
    	alert('Share Item: ' + item);
  	};
  });
