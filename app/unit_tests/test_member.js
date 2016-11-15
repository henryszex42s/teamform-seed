describe('member.js test', function() {
	var $controller, $rootScope, controller, $scope;

	beforeEach( function() {
		module('teamform-member-app');
		inject(function(_$controller_,_$rootScope_,_$firebaseObject_,_$firebaseArray_) {
			$controller=_$controller_;
			$rootScope=_$rootScope_;
			$firebaseObject = _$firebaseObject_;
			$firebaseArray = _$firebaseArray_;
		});
	});

	describe('Member.js Function tests', function() {
		beforeEach(function() {
			$scope=$rootScope.$new();
			firebaseObject = $firebaseObject;
			firebaseArray = $firebaseArray;
			controller = $controller('MemberCtrl', {$scope: $scope, $firebaseObject: firebaseObject, $firebaseArray: firebaseArray});
		});


	});
});