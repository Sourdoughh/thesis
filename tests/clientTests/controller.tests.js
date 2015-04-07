describe("Unit Testing Controllers", function () {
  beforeEach(module('starter'))
  beforeEach(module('starter.factories'))
  beforeEach(module('starter.controllers'))

  var $scope;
  var $controller;
  var GoalBuilder;
  var $log;
  var $state;

  beforeEach(inject(function($rootScope, _$controller_, _GoalBuilder_, _$log_, _$state_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    GoalBuilder = _GoalBuilder_;
    $state = _$state_;
    spyOn($state, 'go');
  }));


  describe('GOAL DETAIL CONTROLLER', function(){
    it('Should update deets', function() {
      $scope = {};
      var controller = $controller('GoalDetailCtrl', { $scope: $scope } );

      GoalBuilder.goalClick('Step Goal');
      expect(GoalBuilder.goal.goalType).toBe('Step Goal');

      expect(typeof $scope.updateDeets).toBe('function');
    });

    it('Should have a return times', function(){
      $scope = {};
      var controller = $controller('GoalDetailCtrl', { $scope: $scope } );

      GoalBuilder.goalClick('Step Goal');
      console.log($scope.times)
      expect(typeof $scope.times).toBe('object');
    })
  })

});

