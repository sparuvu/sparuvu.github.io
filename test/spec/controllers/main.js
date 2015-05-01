'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sparuvuApp'));

  var createController, $httpBackend, $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    var $controller = $injector.get('$controller');
    createController = function() {
       return $controller('MainCtrl', {
            $scope: $rootScope
        });
    };
  }));

  it('should load the resume from resume.json', function () {
        var testResponse = {
            'name': 'sundeep',
            'fake': 'address'
        };
        createController();
        $httpBackend.expectGET('resume/resume.json').respond(200, testResponse);
        $httpBackend.flush();
        expect($rootScope.resume.name).toBe('sundeep');
        expect($rootScope.resume.fake).toBe('address');
  });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
