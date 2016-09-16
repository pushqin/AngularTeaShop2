// create the module and name it iAngelsTeaShop
// also include ngRoute for all our routing needs
/*global angular */
 var iAngelsTeaShop = angular.module('iAngelsTeaShop', ['ngRoute','ui.bootstrap','ngMaterial']);
//var iAngelsTeaShop = angular.module('iAngelsTeaShop', ['ngRoute','ui.bootstrap']).
// config(function($mdIconProvider) {
//     $mdIconProvider
//         .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
//         .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
//         .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
//         .defaultIconSet('img/icons/sets/core-icons.svg', 24);
// })

// create the controller and inject Angular's $scope
iAngelsTeaShop.controller('homeController', ['$scope',function ($scope) {
    // "use strict";
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
}]);

iAngelsTeaShop.controller('productsController', ['$scope',function ($scope) {
    // "use strict";
    $scope.colors=[ 'Red', 'Orange', 'Yellow',
        'Green', 'Blue', 'Indigo', 'Violet' ];
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
   ;
    
    $scope.people = [
        { name: 'TEa1', img: 'assets/images/teaDefault.jpg', newMessage: true },
        { name: 'TEa2', img: 'assets/images/teaDefault.jpg', newMessage: false },
        { name: 'TEa3', img: 'assets/images/teaDefault.jpg', newMessage: false }
    ];
    
    $scope.goToPerson = function(person, event) {
        console.log("show details")
    };
    
    $scope.navigateTo = function(to, event) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('Navigating')
                .textContent('Imagine being taken to ' + to)
                .ariaLabel('Navigation demo')
                .ok('Neat!')
                .targetEvent(event)
        );
    };
    
    $scope.minus = function(event) {
        console.log("minus")
    };
    
    $scope.plus = function(event) {
        console.log("plus")
    };
}]);

