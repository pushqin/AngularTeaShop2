// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'components/home/home.html',
            controller  : 'homeController'
        })

        .when('/products', {
            templateUrl : 'components/products/products.html',
            controller  : 'productsController'
        })

        .when('/cart', {
            templateUrl : 'components/cart/cart.html',
            controller  : 'cartController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('homeController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('productsController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('cartController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});