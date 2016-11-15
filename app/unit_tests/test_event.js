

/*
describe('event.js', function() {
   
	var $scope, $EventCtrl,firebaseObject,firebaseArray;	

	beforeEach(module('teamform-event-app'));
	beforeEach(inject(function($rootScope, $controller, $firebaseObject,$firebaseArray) {
		$scope = $rootScope.$new();
		EventCtrl = $controller('EventCtrl', {$scope: $scope});
		firebaseObject = $firebaseObject;
		firebaseArray = $firebaseArray;
	}));


it('test refPath', function() {
 	eventName = "abc";
 	teamPath = "/event/" + eventName +"/team" ;
    expect(teamPath).toEqual("/event/abc/team");
    //expect($scope.teams).toBeDefined();
  });



var teamname = "abc";
it('test create team',function(teamname)
{
	expect($scope.createteam()).toEqual(true);

	teamname = "";
	expect($scope.createteam()).toEqual(false);

});


var eventname = "abc";
it('test create team',function(eventname,teamname)
{
	expect($scope.viewteam(eventname,teamname)).toEqual("team.html?q=" + eventName +"&tn=" + teamname);
});








});*/