// create the module and name it iAngelsTeaShop
// also include ngRoute for all our routing needs
/*global angular */
var iAngelsTeaShop = angular.module('iAngelsTeaShop', ['ngRoute','ui.bootstrap']);

// create the controller and inject Angular's $scope
iAngelsTeaShop.controller('homeController', ['$scope',function ($scope) {
    // "use strict";
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
}]);

iAngelsTeaShop.controller('productsController', ['$scope',function ($scope) {
    // "use strict";
    $scope.message = 'Look! I am an about page.';
}]);

iAngelsTeaShop.controller('cartController',['$scope', function ($scope) {
    // "use strict";
    $scope.message = 'Contact us! JK. This is just a demo.';
}]);