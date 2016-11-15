


describe('signup.js', function() {
   
	var $scope, $SignupCtrl,firebaseObject,firebaseArray;	

	beforeEach(module('teamform-signup-app'));
	beforeEach(inject(function($rootScope, $controller, $firebaseObject,$firebaseArray) {
		$scope = $rootScope.$new();
		SignupCtrl = $controller('SignupCtrl', {$scope: $scope});
		firebaseObject = $firebaseObject;
		firebaseArray = $firebaseArray;
	}));


it('signup',function()
{
	$email = "abc@abc.com"
    $password ="12345678"
    $name ="abc"
    $invalid = false;
	expect($scope.SignIn()).toEqual(true);

});




});