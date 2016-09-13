// create the module and name it scotchApp
// also include ngRoute for all our routing needs

angular.module('scotchApp')
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'app/components/home/home.html',
                controller  : 'homeController'
            })

            .when('/products', {
                templateUrl : 'app/components/products/products.html',
                controller  : 'productsController'
            })

            .when('/cart', {
                templateUrl : 'app/components/cart/cart.html',
                controller  : 'cartController'
            });
    }]);

