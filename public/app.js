var ContactApp = angular.module('ContactApp', ['firebase']);

ContactApp.controller('MessageController', function ($scope, $firebaseArray) {

    var FBase_URL = "https://contactpage.firebaseio.com/";
    var ref = new Firebase(FBase_URL);
    var AUTH_TOKEN = "XYZ";

    // authentication service
    //ref.authWithCustomToken(AUTH_TOKEN, function (error, authData) {
    //    if (error) {
    //        console.log("Authentication Failed!", error);
    //    } else {
    //        console.log("Authenticated successfully with payload:", authData);
    //    }
    //});

    // messages array
    $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function () {
        var Current_Time = new Date().getTime();
        $scope.messages.$add({
            name: $scope.SenderName,
            email: $scope.SenderEmail,
            message: $scope.SenderMessage,
            time: Current_Time
        }).then(function () {
            // Call is done. close the form
            $('.card').addClass('close');
            $('.card .send-button').html('<span>MESSAGE SENT</span>');
        });

    };

});
