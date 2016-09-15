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
    $scope.callRestService= function(removeFilter) {
        
        if(removeFilter){
            
        }
        //TODO: show all result if removeFilter is true
        $http({method: 'GET', url: '/someUrl'}).
        success(function(data, status, headers, config) {
            $scope.results.push(data);  //retrieve results and add to existing results
        })
    }
}]);

iAngelsTeaShop.controller('cartController',['$scope', function ($scope) {
    // "use strict";
    $scope.message = 'Contact us! JK. This is just a demo.';
}]);

