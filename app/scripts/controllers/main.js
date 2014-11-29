'use strict';

/**
 * @ngdoc function
 * @name sparuvuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sparuvuApp
 */
angular.module('sparuvuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.scrolly = function() {
    	$('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500);
    };

    $scope.resume = resume;
  });
