/**
 * Created by pua on 9/16/2016.
 */
angular.module("iAngelsTeaShop").filter('debug', function() {
    return function(input) {
        if (input === '') return 'empty string';
        return input ? input : ('' + input);
    };
});