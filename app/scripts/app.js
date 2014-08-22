'use strict';

angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ionic'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('itemList', {
        url: '/',
        templateUrl: 'views/itemList.html',
        controller: 'itemListCtrl'
      })
      .state('itemDetail', {
        url: '/itemDetail/:item',
        templateUrl: 'views/itemDetail.html',
        controller: 'itemDetailCtrl'
      });

    $urlRouterProvider.otherwise('/');

  });
