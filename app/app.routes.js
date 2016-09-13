// create the module and name it scotchApp
// also include ngRoute for all our routing needs

angular.module('scotchApp', ['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'components/home/home.html',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/products', {
            templateUrl : 'components/products/products.html',
            controller  : 'productsController'
        })

        .when('/cart', {
            templateUrl : 'components/cart/cart.html',
            controller  : 'cartController'
        });
});