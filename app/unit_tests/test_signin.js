


describe('signin.js', function() {
   
	var $scope, $SigninCtrl,firebaseObject,firebaseArray;	

	beforeEach(module('teamform-signin-app'));
	beforeEach(inject(function($rootScope, $controller, $firebaseObject,$firebaseArray) {
		$scope = $rootScope.$new();
		SigninCtrl = $controller('SigninCtrl', {$scope: $scope});
		firebaseObject = $firebaseObject;
		firebaseArray = $firebaseArray;
	}));


it('login',function()
{
	expect($scope.SignIn()).toEqual(false);

});




});