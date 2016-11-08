$(document).ready(function(){



    $("#btn_admin").click(function(){
    	var val = $('#input_text').val();
    	if ( val !== '' ) {
    		var url = "admin.html?q=" + val;
			var event_name = $('#input_text').val();
    		window.location.href= url ;
    		return false;
    	}
    });

    $("#btn_leader").click(function(){
    	var val = $('#input_text').val();
    	if ( val !== '' ) {
    		var url = "team.html?q=" + val;
			
    		window.location.href= url ;
    		return false;
    	}
    });

    $("#btn_member").click(function(){
    	var val = $('#input_text').val();
    	if ( val !== '' ) {
    		var url = "member.html?q=" + val;
    		window.location.href= url ;
    		return false;
    	}
    });


});



angular.module('teamform-login-app', ['firebase'])
.controller('LoginCtrl', ['$scope', '$firebaseObject', '$firebaseArray', "$firebaseAuth", function($scope, $firebaseObject, $firebaseArray,$firebaseAuth) {
         
    // Call Firebase initialization code defined in site.js
    initalizeFirebase();
    $scope.loginwithgoogle = function(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
     // The signed-in user info.
    var user = result.user;
    console.log("Logged in as:", result.uid);
     // ...
    }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
     var email = error.email;
     // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.error("Authentication failed:", error);
    // ...
    });
 };

}]);




