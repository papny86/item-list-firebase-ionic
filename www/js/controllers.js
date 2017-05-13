angular.module('starter.controllers', [])

.factory("Messages", function($firebaseArray) {
    var itemsRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/messages");
    return $firebaseArray(itemsRef);
})

.controller("MessagesCtrl", function($scope, Messages) {
    $scope.items = Messages;
    $scope.addItem = function() {
        var message = prompt("What do you need to buy?");
        if (message) {
            $scope.items.$add({
                "messages": message,
                "email": 'papny86@gmail.com',
                "doctor_id": 1,
                "user_id": 23,
                "name": 'Linaldo Myrtil'
            });
        }
    };
});