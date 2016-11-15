/*describe("IndexCtrl", function()
{
		var $scope,IndexCtrl;
		beforeEach(module('teamform-index-app'));
		beforeEach(inject(function($rootScope,$controller, $firebaseObject_, $firebaseArray_,$window_){
			$scope = $rootScope.$new();
			$firebaseArray = $firebaseArray_;
			$firebaseObject = $firebaseObject_;
			$window = $window_;
			IndexCtrl = $controller('IndexCtrl',{$scope : $scope, $firebaseObject: $firebaseObject_, $firebaseArray: $firebaseArray_, $window: $window_});
		}));



		it('if event name is exist', function() {
			expect($scope.viewevent("ABC")).toEqual(true);
			expect($scope.viewevent('null')).toEqual(false);
		});




		it('logout', function() {
			expect($scope.logout()).toEqual(false);
		});

});*/


describe('index.js', function() {
   
	var $scope, $IndexCtrl,firebaseObject,firebaseArray;	

	beforeEach(module('teamform-index-app'));
	beforeEach(inject(function($rootScope, $controller, $firebaseObject,$firebaseArray) {
		$scope = $rootScope.$new();
		$IndexCtrl = $controller('IndexCtrl', {$scope: $scope});
		firebaseObject = $firebaseObject;
		firebaseArray = $firebaseArray;
	}));

 it('should exist', function() {
    expect($scope).toBeDefined();
  });






	it("test viewevent", function() {
		expect($scope.viewevent("abc")).toEqual(true);
		expect($scope.viewevent("")).toEqual(false);
	});


});