(function () {
    'use strict';

    angular
        .module('MyApp')
        .config(['$routeProvider', config]);


    function config($routeProvider) {
        $routeProvider
            .when('/blog', {
                templateUrl: './blog/blog.html',
                controller: 'BlogController',
                controllerAs: 'vm',
                title: 'Blog'
            })
    }

})();
