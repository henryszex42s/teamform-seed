


describe('team.js', function() {
   
	var $scope, $TeamCtrl,firebaseObject,firebaseArray;	

	beforeEach(module('teamform-team-app'));
	beforeEach(inject(function($rootScope, $controller, $firebaseObject,$firebaseArray) {
		$scope = $rootScope.$new();
		TeamCtrl = $controller('TeamCtrl', {$scope: $scope});
		firebaseObject = $firebaseObject;
		firebaseArray = $firebaseArray;
	}));


 it('test refPath', function() {
 	eventName = "abc";
 	teamName ="team1";
 	refPath = "/event/" + eventName + "/team/" + teamName;
    expect(refPath).toEqual("/event/abc/team/team1");
  });

it('comment',function()
{
	$scope.input.comment = "testing";
	expect($scope.addComment()).toEqual(true);

	$scope.input.comment = "";
	expect($scope.addComment()).toEqual(false);

});




});