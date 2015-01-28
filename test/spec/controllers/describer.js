'use strict';

describe('Controller: DescriberCtrl', function () {

  // load the controller's module
  beforeEach(module('aiStateGeneratorApp'));

  var DescriberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DescriberCtrl = $controller('DescriberCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
