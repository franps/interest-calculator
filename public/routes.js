'use strict';
console.log("routes.js declared");

angular.module('EventCMS')

.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
    });
    // For any unmatched url, send to /
    // $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('eventList', {
        url: '/',
        templateUrl: 'listview.html',
        controller: 'ListCtrl',
    })
});
