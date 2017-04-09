var ContactAppAdmin = angular.module('ContactAppAdmin', ['firebase']);

ContactAppAdmin.controller('AdminController', function ($scope, $firebaseArray, $firebaseObject) {

    var FBase_URL = "https://contactpage.firebaseio.com/";
    var ref = new Firebase(FBase_URL);
    var AUTH_TOKEN = "XYZ";

    ref.on("value", function (status) {
        if (status.val() === true) {
            $(".loader-widget").fadeIn();
        } else {
            $(".loader-widget").fadeOut();
        }
    });

    // Data as an object
    var obj = $firebaseObject(ref);
    obj.$loaded().then(function () {
        // Iteration over the data
        angular.forEach(obj, function (value, key) {
            console.log(key, value);
        });
        //$scope.messages = obj;
    });

    // Data as an array
    var arr = $firebaseArray(ref);
    $scope.messages = arr;
});

$(function () {
    $('.card').addClass('wider');
});