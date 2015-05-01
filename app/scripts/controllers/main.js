'use strict';

/**
 * @ngdoc function
 * @name sparuvuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sparuvuApp
 */
angular.module('sparuvuApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.scrolly = function() {
    	$('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500);
    };

    $scope.resume = 'sp';
    $http.get('resume/resume.json').
      success(function(data) {
            console.log('Loading Resume !!');
            $scope.resume = data;
      }).error(function() {
          $scope.resume = undefined;
      });

  });
