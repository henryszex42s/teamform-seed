


describe('manage_event.js', function() {
   
	var $scope, $ManageEventCtrl,firebaseObject,firebaseArray;	

	beforeEach(module('teamform-event-app'));
	beforeEach(inject(function($rootScope, $controller, $firebaseObject,$firebaseArray) {
		$scope = $rootScope.$new();
		ManageEventCtrl = $controller('ManageEventCtrl', {$scope: $scope});
		firebaseObject = $firebaseObject;
		firebaseArray = $firebaseArray;
	}));


it('refPath',function()
{
	var eventName = "abc";
	var refPath = "/event/" + eventName + "/param";

	expect($scope.param).toBeDefined();

});

it('refPath',function()
{
	expect($scope.changeTeamSize(5)).toEqual(5);
});



});